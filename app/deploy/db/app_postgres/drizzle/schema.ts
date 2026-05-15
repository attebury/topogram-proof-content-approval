import { boolean, doublePrecision, index, integer, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const greetingsTable = pgTable("greetings", {
  id: uuid("id").notNull().primaryKey(),
  message: text("message").notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" }).notNull(),
}, (table) => ({
  greetings_created_at_idx: index("greetings_created_at_idx").on(table.created_at),
}));
