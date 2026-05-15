CREATE TABLE IF NOT EXISTS "content_submissions" (
  "id" UUID NOT NULL,
  "title" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "author_name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL,
  "submitted_at" TIMESTAMPTZ NOT NULL,
  "reviewed_at" TIMESTAMPTZ,
  "reviewer_note" TEXT,
  PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "content_submissions_status_idx" ON "content_submissions" ("status");

CREATE INDEX IF NOT EXISTS "content_submissions_submitted_at_idx" ON "content_submissions" ("submitted_at");
