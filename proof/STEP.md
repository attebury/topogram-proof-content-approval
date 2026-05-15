# Step 06: Maintained Feature

## What This Proves

The proof app can add a maintained UI feature from Topogram packets without
regenerating over maintained app code. This step adds bulk review selection to
the maintained SvelteKit queue page and updates the widget behavior contract as
guidance.

## Commands

```bash
topogram sdlc start task_maintained_bulk_review . --actor actor_operator --write --json
topogram check . --json
topogram agent brief . --json
topogram query slice ./topo --task task_maintained_bulk_review --json
topogram query single-agent-plan ./topo --mode implementation --task task_maintained_bulk_review --json
topogram widget behavior ./topo --projection proj_web_surface --widget widget_submission_queue --json
npm run verify
topogram generate
topogram sdlc complete task_maintained_bulk_review . --verification verification_maintained_bulk_review --actor actor_operator --write
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/step-06-check.json`
- `proof/artifacts/step-06-agent-brief.json`
- `proof/artifacts/step-06-task-slice.json`
- `proof/artifacts/step-06-single-agent-plan.json`
- `proof/artifacts/step-06-widget-behavior-report.json`
- `proof/artifacts/step-06-generate-refusal.txt`
- `proof/artifacts/step-06-sdlc-start-task-maintained-bulk-review.json`
- `proof/artifacts/step-06-sdlc-complete-task-maintained-bulk-review.json`
- `proof/artifacts/step-06-sdlc-prep-commit.json`

## Next Step

Add a maintained DB migration proposal and manually adapt maintained app code.
