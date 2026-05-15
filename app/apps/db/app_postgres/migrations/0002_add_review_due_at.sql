ALTER TABLE "content_submissions"
  ADD COLUMN IF NOT EXISTS "review_due_at" TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS "content_submissions_review_due_at_idx"
  ON "content_submissions" ("review_due_at");
