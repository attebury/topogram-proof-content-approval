# Content Approval Proof

This repository demonstrates Topogram with branch and tag checkpoints.

The proof uses Topogram SDLC so human and agent work is auditable. SDLC is not
required to use Topogram; smaller projects can omit `--with-sdlc` and use
`topogram check`, `topogram emit`, `topogram generate`, and
`topogram extract`/`topogram adopt` directly.

## Checkpoints

| Step | Branch | Tag | Purpose |
| --- | --- | --- | --- |
| 01 | `step/01-generated-baseline` | `proof-01-generated-baseline` | Copy `web-api-db`, enable SDLC, generate the app, and verify the generated output. |
| 02 | `step/02-content-approval-domain` | `proof-02-content-approval-domain` | Replace the starter greeting model with content approval domain records and regenerate. |
| 03 | `step/03-review-workflow-ui` | `proof-03-review-workflow-ui` | Add review workflow screens, widgets, behavior, and UI contract evidence. |
| 04 | `step/04-generated-db-migration` | `proof-04-generated-db-migration` | Prove generated-owned DB lifecycle and migration bundle output. |
| 05 | `step/05-graduate-maintained` | `proof-05-graduate-maintained` | Switch the app output to maintained ownership and prove generation no longer overwrites it. |
| 06 | `step/06-maintained-feature` | `proof-06-maintained-feature` | Add a maintained feature from Topogram query packets without regenerating over maintained code. |
| 07 | `step/07-maintained-db-migration` | `proof-07-maintained-db-migration` | Emit maintained DB migration proposals and apply/adapt them manually in the maintained app. |

Each step keeps focused machine-readable artifacts under `proof/artifacts/`.
