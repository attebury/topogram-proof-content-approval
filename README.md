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

This branch is `step/06-maintained-feature`. The app is maintained-owned, and
bulk review behavior was added by editing app code directly while using
Topogram widget and agent packets as guidance.

## Workflow

```bash
npm install
npm run check
npm run verify
```

Use `topogram emit <target>` and `topogram query ...` to inspect contracts,
reports, and focused work packets. Do not run `topogram generate` against this
maintained app output.
