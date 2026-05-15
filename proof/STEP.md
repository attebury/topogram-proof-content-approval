# Step 01: Generated Baseline

## What This Proves

A project copied from the package-backed `web-api-db` template can validate,
generate a SvelteKit + Hono + Postgres app bundle, and pass the generated app
compile gate. The checkpoint also shows how SDLC can make proof work auditable.

## Commands

```bash
topogram check . --json
topogram sdlc start task_generated_baseline . --actor actor_operator --write --json
topogram agent brief . --json
topogram query list --json
topogram generate .
npm run verify
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/check.json`
- `proof/artifacts/agent-brief.json`
- `proof/artifacts/query-list.json`
- `proof/artifacts/sdlc-start-task-generated-baseline.json`
- `proof/artifacts/sdlc-prep-commit.json`

## Next Step

Replace the neutral greeting starter with the Content Approval domain while the
app remains generated-owned.
