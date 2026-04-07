import { pgTable, serial, numeric, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const calculationsTable = pgTable("calculations", {
  id: serial("id").primaryKey(),
  carbs: numeric("carbs", { precision: 8, scale: 2 }).notNull(),
  currentBg: numeric("current_bg", { precision: 8, scale: 2 }).notNull(),
  carbDose: numeric("carb_dose", { precision: 8, scale: 2 }).notNull(),
  correctionDose: numeric("correction_dose", { precision: 8, scale: 2 }).notNull(),
  totalDose: numeric("total_dose", { precision: 8, scale: 2 }).notNull(),
  carbRatio: numeric("carb_ratio", { precision: 6, scale: 2 }).notNull(),
  correctionFactor: numeric("correction_factor", { precision: 6, scale: 2 }).notNull(),
  targetBg: numeric("target_bg", { precision: 6, scale: 2 }).notNull(),
  isCapped: boolean("is_capped").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertCalculationSchema = createInsertSchema(calculationsTable).omit({ id: true, createdAt: true });
export type InsertCalculation = z.infer<typeof insertCalculationSchema>;
export type Calculation = typeof calculationsTable.$inferSelect;
