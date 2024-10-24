import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

expand(config());

const connectionString = process.env.DB_URL as string;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
