import { text, varchar, timestamp, json, mysqlTable } from "drizzle-orm/mysql-core";

export const fileTemplates = mysqlTable("file_templates", {
  id: varchar("id", { length: 24 }).primaryKey(),
  name: varchar("name", { length: 256 }),
  type: varchar("type", { length: 64 }),
  html: text("html"),
  inputValues: json("input_values"),
  date: timestamp("date").defaultNow(),
});
