import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

// 🧱 Drizzle Table (Database Schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// 🧩 Zod Schema (Validation)
export const userSchema = z.object({
  username: z.string().min(3, "Username too short"),
  password: z.string().min(6, "Password too short"),
});

// ✅ You can infer TS types from Zod if needed
export type UserInput = z.infer<typeof userSchema>;

// ✅ Export the User type from the table
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
