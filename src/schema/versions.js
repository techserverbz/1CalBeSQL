import { text, varchar, timestamp, json, mysqlTable } from "drizzle-orm/mysql-core";

export const versions = mysqlTable("versions", {
  id: varchar("id", { length: 24 }).primaryKey(),
  pages: json("pages").$type("object[]").default([]),
  masterinput: json("masterinput").$type("object[]").default([]),
  masterinputfromother: json("masterinputfromother").$type("object[]").default([]),
  importedInputSections: json("imported_input_sections").$type("object[]").default([]),
  pagesfromother: json("pagesfromother").$type("object[]").default([]),
  inputsections: json("inputsections").$type("object[]").default([]),
  dashboards: json("dashboards").$type("object[]").default([]),
  name: text("name"),
  subject: varchar("subject", { length: 512 }).default("No Subject"),
  scheme: text("scheme"),
  rulebook: text("rulebook"),
  description: text("description"),
  templateId: varchar("template_id", { length: 24 }),
  date: timestamp("date").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  versionof: varchar("versionof", { length: 24 }),
});
