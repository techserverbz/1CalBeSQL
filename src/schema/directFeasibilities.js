import { text, varchar, timestamp, json, boolean, mysqlTable } from "drizzle-orm/mysql-core";

export const directFeasibilities = mysqlTable("direct_feasibilities", {
  id: varchar("id", { length: 24 }).primaryKey(),
  templateId: varchar("template_id", { length: 24 }).notNull(),
  pages: json("pages").$type("object[]").default([]),
  masterinput: json("masterinput").$type("object[]").default([]),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow(),
  lastModifiedAt: timestamp("last_modified_at"),
  inputsections: json("inputsections").$type("object[]").default([]),
  newPages: json("new_pages").default({}),
  newMasterinput: json("new_masterinput").default({}),
  newInputsections: json("new_inputsections").default({}),
  userid: varchar("userid", { length: 24 }),
  collaborators: json("collaborators").$type("string[]").default([]),
  isDisabled: boolean("is_disabled").default(false),
  fixedparameterset: boolean("fixedparameterset").default(false),
});
