# Topogram Proof: Content Approval

[![Proof Verification](https://github.com/attebury/topogram-proof-content-approval/actions/workflows/proof-verification.yml/badge.svg)](https://github.com/attebury/topogram-proof-content-approval/actions/workflows/proof-verification.yml)

This repository demonstrates a generated Topogram app becoming a maintained app
without losing contract guidance. It uses a realistic Content Approval domain
and public branch/tag checkpoints so humans and agents can inspect every step.

This proof uses Topogram SDLC to make work auditable. SDLC is not required to use
Topogram; it is included here so the proof shows how tasks, acceptance criteria,
queries, artifacts, and verification fit together.

## How To Read This Proof

Start with the checkpoint map in [proof/README.md](proof/README.md), then check
out the tag for the step you want to inspect.

```bash
git fetch --tags
git checkout proof-03-review-workflow-ui
cat proof/STEP.md
npm install
npm run check
npm run verify
```

Use `proof/artifacts/` to inspect the machine-readable proof for each step:
agent briefs, focused query packets, emitted contracts, widget reports,
migration proposals, generation refusal output, and verification output.

## Current Main State

`main` is the completed proof state, equivalent to Step 07 plus reader guidance.
The app output is maintained-owned. Topogram is still used for `check`, `emit`,
query packets, SDLC proof, and migration proposals, but `topogram generate` is
expected to refuse overwriting the maintained app.

## Public Verification

The `Proof Verification` workflow runs on `main`, proof tags, step branches, pull requests, and manual dispatch. It installs dependencies, runs `npm run proof:check-paths`, runs `npm run proof:audit`, and then runs `npm run verify`.

## Verification

```bash
npm install
npm run check
npm run verify
```

For generated-owned checkpoints, run `npm run generate` before `npm run verify`.
For maintained-owned checkpoints, inspect the generation-refusal artifacts
instead of regenerating over `app/`.
