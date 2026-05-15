CREATE TABLE IF NOT EXISTS "greetings" (
  "id" UUID NOT NULL,
  "message" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL,
  PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "greetings_created_at_idx" ON "greetings" ("created_at");
