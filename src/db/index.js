import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as model from "../schema/index.js";

let _db = null;

function getDb() {
  if (!_db) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }
    const pool = mysql.createPool(connectionString);
    _db = drizzle(pool, { schema: model, mode: "default" });
  }
  return _db;
}

// Lazy init so we don't connect at cold start (avoids serverless crash)
export const db = new Proxy(
  {},
  {
    get(_target, prop) {
      return getDb()[prop];
    },
  }
);

export { model };
