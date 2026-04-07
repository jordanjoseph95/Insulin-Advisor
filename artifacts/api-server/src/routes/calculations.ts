import { Router, type IRouter } from "express";
import { desc, count, avg, gte } from "drizzle-orm";
import { db, profileTable, calculationsTable } from "@workspace/db";
import { CalculateDoseBody, ListCalculationsQueryParams } from "@workspace/api-zod";

const router: IRouter = Router();

const MAX_DOSE = 30;
const MAX_CARBS = 500;
const MAX_BG = 33;
const MIN_BG = 1;

router.post("/calculate", async (req, res): Promise<void> => {
  const parsed = CalculateDoseBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { carbs, currentBg } = parsed.data;

  if (carbs < 0 || carbs > MAX_CARBS) {
    res.status(400).json({ error: `Carbs must be between 0 and ${MAX_CARBS} grams` });
    return;
  }
  if (currentBg < MIN_BG || currentBg > MAX_BG) {
    res.status(400).json({ error: `Blood glucose must be between ${MIN_BG} and ${MAX_BG} mg/dL` });
    return;
  }

  const profiles = await db.select().from(profileTable).limit(1);
  let profile;
  if (profiles.length === 0) {
    const [created] = await db
      .insert(profileTable)
      .values({ carbRatio: "10", correctionFactor: "2.5", targetBg: "5.5" })
      .returning();
    profile = created;
  } else {
    profile = profiles[0];
  }

  const carbRatio = parseFloat(profile.carbRatio);
  const correctionFactor = parseFloat(profile.correctionFactor);
  const targetBg = parseFloat(profile.targetBg);

  const carbDose = carbs / carbRatio;
  const correctionDose = (currentBg - targetBg) / correctionFactor;
  const rawTotal = carbDose + correctionDose;
  const clampedTotal = Math.max(0, rawTotal);
  const isCapped = clampedTotal > MAX_DOSE;
  const totalDose = Math.min(clampedTotal, MAX_DOSE);

  const roundedCarbDose = Math.round(carbDose * 10) / 10;
  const roundedCorrectionDose = Math.round(correctionDose * 10) / 10;
  const roundedTotal = Math.round(totalDose * 10) / 10;

  const [saved] = await db
    .insert(calculationsTable)
    .values({
      carbs: carbs.toString(),
      currentBg: currentBg.toString(),
      carbDose: roundedCarbDose.toString(),
      correctionDose: roundedCorrectionDose.toString(),
      totalDose: roundedTotal.toString(),
      carbRatio: carbRatio.toString(),
      correctionFactor: correctionFactor.toString(),
      targetBg: targetBg.toString(),
      isCapped,
    })
    .returning();

  req.log.info({ id: saved.id, totalDose: roundedTotal }, "Dose calculated and saved");

  res.json({
    carbDose: roundedCarbDose,
    correctionDose: roundedCorrectionDose,
    totalDose: roundedTotal,
    isCapped,
    carbs,
    currentBg,
    carbRatio,
    correctionFactor,
    targetBg,
  });
});

router.get("/calculations", async (req, res): Promise<void> => {
  const parsed = ListCalculationsQueryParams.safeParse(req.query);
  const limit = parsed.success && parsed.data.limit != null ? parsed.data.limit : 20;

  const records = await db
    .select()
    .from(calculationsTable)
    .orderBy(desc(calculationsTable.createdAt))
    .limit(limit);

  res.json(
    records.map((r) => ({
      id: r.id,
      carbs: parseFloat(r.carbs),
      currentBg: parseFloat(r.currentBg),
      carbDose: parseFloat(r.carbDose),
      correctionDose: parseFloat(r.correctionDose),
      totalDose: parseFloat(r.totalDose),
      carbRatio: parseFloat(r.carbRatio),
      correctionFactor: parseFloat(r.correctionFactor),
      targetBg: parseFloat(r.targetBg),
      isCapped: r.isCapped,
      createdAt: r.createdAt,
    })),
  );
});

router.get("/calculations/summary", async (req, res): Promise<void> => {
  const [totals] = await db
    .select({
      totalCalculations: count(),
      averageTotalDose: avg(calculationsTable.totalDose),
      averageCarbs: avg(calculationsTable.carbs),
      averageCurrentBg: avg(calculationsTable.currentBg),
    })
    .from(calculationsTable);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [recent] = await db
    .select({ recentCalculationsCount: count() })
    .from(calculationsTable)
    .where(gte(calculationsTable.createdAt, sevenDaysAgo));

  res.json({
    totalCalculations: totals.totalCalculations,
    averageTotalDose: totals.averageTotalDose != null ? parseFloat(totals.averageTotalDose) : null,
    averageCarbs: totals.averageCarbs != null ? parseFloat(totals.averageCarbs) : null,
    averageCurrentBg: totals.averageCurrentBg != null ? parseFloat(totals.averageCurrentBg) : null,
    recentCalculationsCount: recent.recentCalculationsCount,
  });
});

export default router;
