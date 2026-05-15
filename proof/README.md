# Content Approval Proof

This repository demonstrates Topogram with branch and tag checkpoints. The
story starts with a generated app, then graduates the app to maintained
ownership while keeping Topogram useful for contracts, agent packets, and DB
migration guidance.

The proof uses Topogram SDLC so human and agent work is auditable. SDLC is not
required to use Topogram; smaller projects can omit `--with-sdlc` and use
`topogram check`, `topogram emit`, `topogram generate`, and
`topogram extract`/`topogram adopt` directly.

## How To Inspect A Checkpoint

```bash
git fetch --tags
git checkout proof-04-generated-db-migration
cat proof/STEP.md
npm install
npm run check
npm run verify
```

Generated-owned checkpoints use `npm run generate`. Maintained-owned
checkpoints use `topogram emit`, `topogram query ...`, and direct app
verification; they keep generation-refusal artifacts under `proof/artifacts/`.

## Agent View

Agents should start with the current step note, then read only focused packets:

- `proof/STEP.md`: human summary, command loop, and expected result.
- `proof/artifacts/*agent-brief.json`: read order and edit boundaries.
- `proof/artifacts/*task-slice.json`: focused task/spec context.
- `proof/artifacts/*single-agent-plan.json`: maintained-app edit plan.
- `proof/artifacts/*ui-surface-contract.json` and widget reports: UI contract
  evidence.
- DB snapshots, migration plans, and SQL migration files: migration evidence.

## Public Proof Checks

- `npm run proof:check-paths` fails if tracked files expose local home, temp,
  CI workspace, or Windows user paths.
- `npm run proof:audit` checks the current `@topogram/cli` pin, expected
  proof tags, and `proof/artifacts/path-hygiene-audit.json`.
- GitHub shows the same proof through the [Proof Verification workflow](https://github.com/attebury/topogram-proof-content-approval/actions/workflows/proof-verification.yml).

## Checkpoints

| Step | Branch / Tag | Run | Agent Artifact To Inspect | Change From Previous |
| --- | --- | --- | --- | --- |
| 01 generated baseline | `step/01-generated-baseline` / `proof-01-generated-baseline` | `npm run check && npm run generate && npm run verify` | `proof/artifacts/agent-brief.json` | Copies `web-api-db`, enables SDLC, generates the app, and proves generated output compiles. |
| 02 content approval domain | `step/02-content-approval-domain` / `proof-02-content-approval-domain` | `npm run check && npm run generate && npm run verify` | `proof/artifacts/step-02-task-slice.json` | Replaces the starter greeting model with content approval domain records and regenerates. |
| 03 review workflow UI | `step/03-review-workflow-ui` / `proof-03-review-workflow-ui` | `topogram emit ui-surface-contract ./topo --json`; `npm run generate && npm run verify` | `proof/artifacts/step-03-ui-surface-contract.json`, `step-03-widget-conformance-report.json` | Adds review workflow screens, widgets, behavior, and UI contract evidence. |
| 04 generated DB migration | `step/04-generated-db-migration` / `proof-04-generated-db-migration` | `topogram emit db-migration-plan ./topo --json`; `npm run generate && npm run verify` | `proof/artifacts/step-04-db-migration-plan.json`, `step-04-sql-migration.json` | Proves generated-owned DB lifecycle and migration bundle output. |
| 05 graduate maintained | `step/05-graduate-maintained` / `proof-05-graduate-maintained` | `npm run verify`; inspect `proof/artifacts/step-05-generate-refusal.txt` | `proof/artifacts/step-05-agent-brief.json` | Marks `app/` maintained and proves generation refuses to overwrite it. |
| 06 maintained feature | `step/06-maintained-feature` / `proof-06-maintained-feature` | `npm run verify`; inspect `proof/artifacts/step-06-generate-refusal.txt` | `proof/artifacts/step-06-single-agent-plan.json`, `step-06-task-slice.json` | Adds bulk review behavior from Topogram packets without regenerating maintained app code. |
| 07 maintained DB migration | `step/07-maintained-db-migration` / `proof-07-maintained-db-migration` | `npm run verify`; inspect migration artifacts | `proof/artifacts/step-07-db-migration-plan.json`, `step-07-single-agent-plan.json` | Emits maintained DB migration proposals and manually adapts maintained app DB files. |

## Artifact Rules

- Commit focused proof artifacts under `proof/artifacts/`.
- Do not commit noisy raw logs.
- Use portable paths in committed JSON and reports.
- Generated output can be regenerated only before the maintained graduation
  step. After graduation, `topogram generate` should refuse to overwrite
  `app/`.
