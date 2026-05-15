# Step 02: Content Approval Domain

## What This Proves

The proof app can move beyond the neutral starter by changing the Topogram
source to a content approval domain while the app remains generated-owned. The
generated SvelteKit + Hono + Postgres output is regenerated from the updated
contracts and still passes the compile gate.

## Commands

```bash
topogram sdlc start task_content_approval_domain . --actor actor_operator --write --json
topogram check . --json
topogram agent brief . --json
topogram query slice ./topo --task task_content_approval_domain --json
topogram generate .
npm run verify
topogram sdlc complete task_content_approval_domain . --verification verification_content_approval_domain --actor actor_operator --write
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/step-02-check.json`
- `proof/artifacts/step-02-agent-brief.json`
- `proof/artifacts/step-02-task-slice.json`
- `proof/artifacts/step-02-sdlc-start-task-content-approval-domain.json`
- `proof/artifacts/step-02-sdlc-complete-task-content-approval-domain.json`
- `proof/artifacts/step-02-sdlc-prep-commit.json`

## Next Step

Add review workflow screens, widgets, behavior, and UI contract evidence while
the app remains generated-owned.
