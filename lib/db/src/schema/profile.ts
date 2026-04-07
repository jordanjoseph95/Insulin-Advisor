import { pgTable, serial, numeric, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const profileTable = pgTable("profile", {
  id: serial("id").primaryKey(),
  carbRatio: numeric("carb_ratio", { precision: 6, scale: 2 }).notNull().default("10"),
  correctionFactor: numeric("correction_factor", { precision: 6, scale: 2 }).notNull().default("50"),
  targetBg: numeric("target_bg", { precision: 6, scale: 2 }).notNull().default("100"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertProfileSchema = createInsertSchema(profileTable).omit({ id: true, updatedAt: true });
export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type Profile = typeof profileTable.$inferSelect;
