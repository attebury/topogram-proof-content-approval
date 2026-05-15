# Starter Runtime Check Bundle

This bundle gives you richer staged runtime verification for the generated stack.

Use it when you want more than a quick smoke test. It goes beyond the lightweight smoke bundle by checking environment readiness, API health, DB-backed seeded data, and deeper API behavior.

## Stages

- `environment`: required env, web readiness, API health, API readiness, and seeded greeting lookup
- `api`: core greeting create, get, list, and update paths

## Usage

1. Copy `.env.example` to `.env` if needed
2. Run `bash ./scripts/check.sh`
3. Inspect `state/runtime-check-report.json`

## Notes

- Mutating checks create and update a runtime-check greeting.
- Later stages are skipped if environment readiness fails.
- The generated server exposes both `/health` and `/ready`.
- Use the smoke bundle for a faster minimal confidence check.
- Use this runtime-check bundle for staged verification and JSON reporting.

## Canonical Verification

- Sources: `ver_runtime_flow`, `verification_generated_baseline`
- Scenarios: create greeting runtime, get created greeting runtime, list greetings runtime, update greeting runtime, topogram check generate verify
