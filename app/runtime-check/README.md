# Content Approval Runtime Check Bundle

This bundle gives you richer staged runtime verification for the generated stack.

Use it when you want more than a quick smoke test. It goes beyond the lightweight smoke bundle by checking environment readiness, API health, DB-backed seeded data, and deeper API behavior.

## Stages

- `environment`: required env, web readiness, API health, API readiness, and seeded content submission lookup
- `api`: core content submission create, get, list, approve, and request-changes paths

## Usage

1. Copy `.env.example` to `.env` if needed
2. Run `bash ./scripts/check.sh`
3. Inspect `state/runtime-check-report.json`

## Notes

- Mutating checks create, approve, and request changes on a runtime-check content submission.
- Later stages are skipped if environment readiness fails.
- The generated server exposes both /health and /ready.
- Use the smoke bundle for a faster minimal confidence check.
- Use this runtime-check bundle for staged verification and JSON reporting.

## Canonical Verification

- Sources: `ver_runtime_flow`, `ver_runtime_smoke`, `verification_content_approval_domain`, `verification_generated_baseline`, `verification_review_workflow_ui`
- Scenarios: submit content runtime, get created submission runtime, list submissions runtime, approve submission runtime, request changes runtime, submit content smoke, get submission smoke, list submissions smoke, topogram check generate verify, topogram check widget reports generate verify
