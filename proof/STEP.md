# Step 07: Maintained DB Migration

## What This Proves

The proof app can use Topogram to propose a database migration while the app
source remains maintained-owned. This step adds `review_due_at` to the
Topogram DB contract, emits migration artifacts, then manually adapts the
maintained Prisma, SQL, Drizzle, and service type files.

## Commands

```bash
topogram sdlc start task_maintained_db_review_due_at . --actor actor_operator --write --json
topogram check . --json
topogram emit db-schema-snapshot ./topo --projection proj_db_postgres --json
topogram emit db-migration-plan ./topo --projection proj_db_postgres --from-snapshot proof/artifacts/step-07-before-db-schema-snapshot.json --json
topogram emit sql-migration ./topo --projection proj_db_postgres --from-snapshot proof/artifacts/step-07-before-db-schema-snapshot.json --json
topogram agent brief . --json
topogram query slice ./topo --task task_maintained_db_review_due_at --json
topogram query single-agent-plan ./topo --mode maintained-app-edit --task task_maintained_db_review_due_at --json
npm run verify
topogram generate
topogram sdlc complete task_maintained_db_review_due_at . --verification verification_maintained_db_review_due_at --actor actor_operator --write
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/step-07-before-db-schema-snapshot.json`
- `proof/artifacts/step-07-after-db-schema-snapshot.json`
- `proof/artifacts/step-07-db-migration-plan.json`
- `proof/artifacts/step-07-sql-migration.json`
- `proof/artifacts/step-07-check.json`
- `proof/artifacts/step-07-agent-brief.json`
- `proof/artifacts/step-07-task-slice.json`
- `proof/artifacts/step-07-single-agent-plan.json`
- `proof/artifacts/step-07-npm-verify.txt`
- `proof/artifacts/step-07-generate-refusal.txt`
- `proof/artifacts/step-07-sdlc-start-task-maintained-db-review-due-at.json`
- `proof/artifacts/step-07-sdlc-complete-task-maintained-db-review-due-at.json`
- `proof/artifacts/step-07-sdlc-check.txt`
- `proof/artifacts/step-07-sdlc-prep-commit.json`

## Result

Topogram migration artifacts remain guidance for the maintained app. The
maintained DB and service files are changed directly, and generation continues
to refuse overwriting the maintained `app/` output.
