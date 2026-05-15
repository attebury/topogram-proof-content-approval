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

This branch is `step/02-content-approval-domain`. It replaces the neutral
starter greeting model with a content approval domain while keeping the app
output generated-owned.

## Template

- Template: `@topogram/starter-web-api-db@0.1.14`
- Source: `package`
- Source spec: `@topogram/starter-web-api-db@0.1.14`
- Executable implementation: `yes`

## Workflow

```bash
npm install
npm run check
npm run generate
npm run verify
```

Agent-oriented proof commands:

```bash
npm run explain
npm run agent:brief
npm run doctor
npm run source:status
npm run template:explain
npm run check
npm run template:policy:check
npm run generator:policy:status
npm run generator:policy:check
npm run template:policy:explain
npm run trust:status
```

Edit the workspace folder `topo/` and `topogram.project.json`, then regenerate with `npm run generate`.
Generated app code is written to `app/`.
Use `topogram emit <target>` to inspect contracts, reports, snapshots, and other artifacts without regenerating the app.
Agents should start with `AGENTS.md` and `npm run agent:brief`. The direct `topogram agent brief --json` command is the canonical machine-readable first-run guidance.

This template copied `implementation/` code. `topogram copy` did not execute it; review `implementation/`, `topogram.template-policy.json`, and `.topogram-template-trust.json` before regenerating after edits.
