import { text, varchar, timestamp, json, mysqlTable } from "drizzle-orm/mysql-core";

export const bills = mysqlTable("bills", {
  id: varchar("id", { length: 24 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow(),
  form: json("form"),
  user: varchar("user", { length: 24 }),
  name: varchar("name", { length: 256 }),
  client: varchar("client", { length: 24 }),
});
