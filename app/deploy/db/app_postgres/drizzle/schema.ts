import { boolean, doublePrecision, index, integer, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const content_submissionsTable = pgTable("content_submissions", {
  id: uuid("id").notNull().primaryKey(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  status: text("status").notNull(),
  author_name: text("author_name").notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" }).notNull(),
  submitted_at: timestamp("submitted_at", { withTimezone: true, mode: "string" }).notNull(),
  reviewed_at: timestamp("reviewed_at", { withTimezone: true, mode: "string" }),
  reviewer_note: text("reviewer_note"),
}, (table) => ({
  content_submissions_status_idx: index("content_submissions_status_idx").on(table.status),
  content_submissions_submitted_at_idx: index("content_submissions_submitted_at_idx").on(table.submitted_at),
}));
