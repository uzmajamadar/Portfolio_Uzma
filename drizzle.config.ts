import { config } from "dotenv";
config();

export default {
  schema: "./src/shared/schema.ts", // adjust path
  out: "./drizzle",
  dialect: "postgresql", // or "sqlite", "mysql" etc.
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
