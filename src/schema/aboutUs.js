import { text, varchar, boolean, timestamp, int, mysqlTable } from "drizzle-orm/mysql-core";

export const aboutUs = mysqlTable("about_us", {
  id: varchar("id", { length: 24 }).primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  brief: text("brief").notNull(),
  description: text("description").notNull(),
  level: int("level").notNull(),
  photoUrl: text("photo_url"),
  createdAt: timestamp("created_at").defaultNow(),
  isDisabled: boolean("is_disabled").default(false),
});
