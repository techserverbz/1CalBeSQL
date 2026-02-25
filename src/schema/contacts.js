import { text, varchar, boolean, timestamp, json, mysqlTable } from "drizzle-orm/mysql-core";

export const contacts = mysqlTable("contacts", {
  id: varchar("id", { length: 24 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow(),
  name: text("name"),
  phone: varchar("phone", { length: 64 }),
  isDisabled: boolean("is_disabled").default(false),
  email: varchar("email", { length: 256 }),
  type: varchar("type", { length: 64 }),
  description: text("description"),
  user: varchar("user", { length: 24 }),
  files: json("files").$type("{ date?: string; current?: string; prevlinks?: string[] }"),
  gst: varchar("gst", { length: 64 }),
  pan: varchar("pan", { length: 64 }),
});
