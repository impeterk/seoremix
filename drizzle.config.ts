import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { defineConfig } from "drizzle-kit";

expand(config());

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schemas/*",
  out: "./app/db/migrations",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
