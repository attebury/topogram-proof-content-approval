# Step 03: Review Workflow UI

## What This Proves

The proof app can add reusable semantic UI widgets and behavior evidence while
the app remains generated-owned. Topogram validates widget placement, behavior
realization, surface contracts, and regenerated SvelteKit + Hono + Postgres
output.

## Commands

```bash
topogram sdlc start task_review_workflow_ui . --actor actor_operator --write --json
topogram check . --json
topogram agent brief . --json
topogram query slice ./topo --task task_review_workflow_ui --json
topogram emit ui-surface-contract ./topo --projection proj_web_surface --json
topogram emit ui-widget-contract ./topo --json
topogram emit widget-conformance-report ./topo --projection proj_web_surface --json
topogram widget behavior ./topo --projection proj_web_surface --json
topogram generate .
npm run verify
topogram sdlc complete task_review_workflow_ui . --verification verification_review_workflow_ui --actor actor_operator --write
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/step-03-check.json`
- `proof/artifacts/step-03-agent-brief.json`
- `proof/artifacts/step-03-task-slice.json`
- `proof/artifacts/step-03-ui-surface-contract.json`
- `proof/artifacts/step-03-ui-widget-contract.json`
- `proof/artifacts/step-03-widget-conformance-report.json`
- `proof/artifacts/step-03-widget-behavior-report.json`
- `proof/artifacts/step-03-sdlc-start-task-review-workflow-ui.json`
- `proof/artifacts/step-03-sdlc-complete-task-review-workflow-ui.json`
- `proof/artifacts/step-03-sdlc-prep-commit.json`

## Next Step

Add a generated-owned DB lifecycle change and capture migration artifacts.
