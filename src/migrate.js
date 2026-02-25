import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import path from "path";
import mysql from "mysql2/promise";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const pool = mysql.createPool(connectionString);
const db = drizzle(pool);

await migrate(db, {
  migrationsFolder: path.join(__dirname, "..", "drizzle"),
});

await pool.end();
console.log("Migrations applied.");
