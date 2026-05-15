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

This branch is `step/05-graduate-maintained`. The generated app has graduated
to maintained ownership. Topogram contracts and query packets guide future work,
but `topogram generate` must not overwrite `app/`.

## Workflow

```bash
npm install
npm run check
npm run verify
```

Use `topogram emit <target>` to inspect contracts, reports, snapshots, and
plans. Edit maintained app code directly after reviewing focused Topogram
packets.
