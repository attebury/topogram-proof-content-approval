# Agent Guide

Start here before editing this Topogram project.

## First Read

1. `AGENTS.md`
2. `README.md`
3. `topogram.project.json`
4. `topogram.sdlc-policy.json`, if this project has adopted SDLC enforcement
5. `topogram.template-policy.json`
6. `topogram.generator-policy.json`
7. `.topogram-template-trust.json`
8. `implementation/`
9. Focused `topogram query ...` output

Machine-readable source:

```bash
topogram agent brief --json
```

Local shortcut:

```bash
npm run agent:brief
```

Reference: https://github.com/attebury/topogram/blob/main/docs/agent-first-run.md

## First Commands

```bash
npm run agent:brief
npm run doctor
npm run source:status
npm run template:explain
npm run generator:policy:check
topogram sdlc policy explain --json
topogram query sdlc-available ./topo --json
topogram sdlc explain <task-or-bug-id> --json
topogram sdlc start <task-id> --actor <actor> --json
topogram query sdlc-proof-gaps ./topo --task <task-id> --json
npm run trust:status
npm run check
npm run query:list
npm run query:show -- widget-behavior
```

## Edit Rules

- Edit `topo/**` and `topogram.project.json` first.
- If `topogram.sdlc-policy.json` exists, protected changes need an SDLC item, a `topo/sdlc/**` SDLC record update, or an allowed exemption.
- Adopted SDLC records default to `topo/sdlc/**`; custom folders can still validate, but agents should look there first.
- Status, history, archives, trust hashes, provenance, generated sentinels, and release/rollout state are command-owned. Use Topogram commands instead of hand-editing those sidecars.
- Plans are optional support records. Agents may edit plan text directly, but should use `topogram sdlc plan step ... --write` for step status changes.
- Review policy files before editing `topogram.template-policy.json` or `topogram.generator-policy.json`.
- Do not make lasting edits under generated-owned `app/**`; use `npm run generate` to replace generated output.
- If an output is changed to maintained ownership, agents may edit that app code directly after reading focused query packets.

## UI And Widgets

- `ui_contract` owns screens, regions, widget bindings, behavior, visibility, and semantic design tokens.
- Web/iOS/Android surfaces realize the shared UI contract; they do not own widget placement.
- Use `topogram widget check --json`, `topogram widget behavior --json`, and focused `topogram query ...` packets after UI edits.

## Template And Trust

- Local edits to template-derived Topogram files are project-owned.
- Use `npm run source:status` and `npm run template:update:recommend` before applying template updates.
- This project has executable `implementation/` code. `topogram copy` did not execute it. Do not refresh trust until the implementation has been reviewed.

## Extract And Adopt

- If `.topogram-extract.json` exists, agents should run `topogram extract check . --json`, `topogram extract plan . --json`, `topogram adopt --list . --json`, `topogram extract status . --json`, and `topogram extract history . --verify --json`.
- Extract JSON payloads expose `workspaceRoot`; prefer it as the canonical project-owned workspace path.
- Extracted Topogram files are project-owned after adoption; source hashes record trusted source evidence at the time of extraction.

## Verification Gates

```bash
npm run check
npm run generate
npm run verify
```
