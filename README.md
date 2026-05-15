# Topogram Proof: Content Approval

This repository demonstrates Topogram with a realistic Content Approval domain.
It uses branch and tag checkpoints so a developer can inspect each step of the
workflow.

This proof uses Topogram SDLC to make human and agent work auditable. SDLC is
not required to use Topogram; for smaller projects, omit `--with-sdlc` and use
`topogram check`, `topogram emit`, `topogram generate`, and
`topogram extract`/`topogram adopt` directly.

See [`proof/README.md`](proof/README.md) for the checkpoint map.

## Current Step

This branch is `step/04-generated-db-migration`. It adds generated-owned DB
contract fields for priority and reviewer assignment, captures migration
artifacts, regenerates output, and verifies the generated app.

## Workflow

```bash
npm install
npm run check
npm run generate
npm run verify
```

Use `topogram emit <target>` to inspect DB snapshots, migration plans,
contracts, and reports without regenerating the app.
