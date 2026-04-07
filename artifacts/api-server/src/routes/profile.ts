import { Router, type IRouter } from "express";
import { db, profileTable } from "@workspace/db";
import { UpdateProfileBody } from "@workspace/api-zod";

const router: IRouter = Router();

const MAX_CARB_RATIO = 200;
const MIN_CARB_RATIO = 1;
const MAX_CORRECTION_FACTOR = 500;
const MIN_CORRECTION_FACTOR = 1;
const MAX_TARGET_BG = 300;
const MIN_TARGET_BG = 60;

router.get("/profile", async (req, res): Promise<void> => {
  const profiles = await db.select().from(profileTable).limit(1);

  if (profiles.length === 0) {
    const [created] = await db
      .insert(profileTable)
      .values({ carbRatio: "10", correctionFactor: "50", targetBg: "100" })
      .returning();
    res.json({
      id: created.id,
      carbRatio: parseFloat(created.carbRatio),
      correctionFactor: parseFloat(created.correctionFactor),
      targetBg: parseFloat(created.targetBg),
      updatedAt: created.updatedAt,
    });
    return;
  }

  const profile = profiles[0];
  res.json({
    id: profile.id,
    carbRatio: parseFloat(profile.carbRatio),
    correctionFactor: parseFloat(profile.correctionFactor),
    targetBg: parseFloat(profile.targetBg),
    updatedAt: profile.updatedAt,
  });
});

router.put("/profile", async (req, res): Promise<void> => {
  const parsed = UpdateProfileBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { carbRatio, correctionFactor, targetBg } = parsed.data;

  if (carbRatio < MIN_CARB_RATIO || carbRatio > MAX_CARB_RATIO) {
    res.status(400).json({ error: `Carb ratio must be between ${MIN_CARB_RATIO} and ${MAX_CARB_RATIO}` });
    return;
  }
  if (correctionFactor < MIN_CORRECTION_FACTOR || correctionFactor > MAX_CORRECTION_FACTOR) {
    res.status(400).json({ error: `Correction factor must be between ${MIN_CORRECTION_FACTOR} and ${MAX_CORRECTION_FACTOR}` });
    return;
  }
  if (targetBg < MIN_TARGET_BG || targetBg > MAX_TARGET_BG) {
    res.status(400).json({ error: `Target blood glucose must be between ${MIN_TARGET_BG} and ${MAX_TARGET_BG} mg/dL` });
    return;
  }

  const profiles = await db.select().from(profileTable).limit(1);

  let profile;
  if (profiles.length === 0) {
    const [created] = await db
      .insert(profileTable)
      .values({
        carbRatio: carbRatio.toString(),
        correctionFactor: correctionFactor.toString(),
        targetBg: targetBg.toString(),
      })
      .returning();
    profile = created;
  } else {
    const [updated] = await db
      .update(profileTable)
      .set({
        carbRatio: carbRatio.toString(),
        correctionFactor: correctionFactor.toString(),
        targetBg: targetBg.toString(),
      })
      .returning();
    profile = updated;
  }

  res.json({
    id: profile.id,
    carbRatio: parseFloat(profile.carbRatio),
    correctionFactor: parseFloat(profile.correctionFactor),
    targetBg: parseFloat(profile.targetBg),
    updatedAt: profile.updatedAt,
  });
});

export default router;
