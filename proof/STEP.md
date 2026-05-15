# Step 04: Generated DB Migration

## What This Proves

The proof app can change a database contract while app and DB output are still
generated-owned. Topogram emits before/after snapshots, a migration plan, SQL
migration output, regenerates lifecycle bundles, and the generated compile gate
still passes.

## Commands

```bash
topogram emit db-schema-snapshot ./topo --projection proj_db_postgres --json
topogram sdlc start task_generated_db_migration . --actor actor_operator --write --json
topogram check . --json
topogram emit db-schema-snapshot ./topo --projection proj_db_postgres --json
topogram emit db-migration-plan ./topo --projection proj_db_postgres --from-snapshot proof/artifacts/step-04-before-db-schema-snapshot.json --json
topogram emit sql-migration ./topo --projection proj_db_postgres --from-snapshot proof/artifacts/step-04-before-db-schema-snapshot.json --json
topogram generate .
npm run verify
topogram sdlc complete task_generated_db_migration . --verification verification_generated_db_migration --actor actor_operator --write
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/step-04-before-db-schema-snapshot.json`
- `proof/artifacts/step-04-after-db-schema-snapshot.json`
- `proof/artifacts/step-04-db-migration-plan.json`
- `proof/artifacts/step-04-sql-migration.json`
- `proof/artifacts/step-04-check.json`
- `proof/artifacts/step-04-sdlc-start-task-generated-db-migration.json`
- `proof/artifacts/step-04-sdlc-complete-task-generated-db-migration.json`
- `proof/artifacts/step-04-sdlc-prep-commit.json`

## Next Step

Graduate the generated app to maintained ownership and prove generation refuses
to overwrite maintained output.
