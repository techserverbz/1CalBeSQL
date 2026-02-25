import { varchar, timestamp, mysqlTable } from "drizzle-orm/mysql-core";

export const pdfDownloadLogs = mysqlTable("pdf_download_logs", {
  id: varchar("id", { length: 24 }).primaryKey(),
  user: varchar("user", { length: 24 }).notNull(),
  fetchId: varchar("fetch_id", { length: 256 }).notNull(),
  downloadedAt: timestamp("downloaded_at").defaultNow().notNull(),
});
