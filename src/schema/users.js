import { text, varchar, boolean, timestamp, json, mysqlTable, mysqlEnum } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 24 }).primaryKey(),
  actualCreatedAt: timestamp("actual_created_at").defaultNow(),
  name: text("name"),
  username: text("username"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: mysqlEnum("role", ["user", "admin", "client"]).notNull(),
  paths: json("paths"),
  status: varchar("status", { length: 64 }).default("active"),
  isDisabled: boolean("is_disabled").default(false),
  phoneCountryCode: varchar("phone_country_code", { length: 16 }),
  phoneNumber: varchar("phone_number", { length: 32 }).notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
});
