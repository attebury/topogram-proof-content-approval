# Step 05: Graduate To Maintained

## What This Proves

The proof app can graduate from generated-owned output to maintained ownership.
After this step, `topogram generate` is intentionally not the app update path:
Topogram refuses to overwrite the maintained `app/` directory, while
`topogram emit` and query packets remain available for contracts and guidance.

## Commands

```bash
topogram sdlc start task_graduated_maintained_output . --actor actor_operator --write --json
topogram check . --json
topogram agent brief . --json
topogram query slice ./topo --task task_graduated_maintained_output --json
npm run verify
topogram generate
topogram sdlc complete task_graduated_maintained_output . --verification verification_graduated_maintained_output --actor actor_operator --write
topogram sdlc prep commit . --json
```

## Evidence

- `proof/artifacts/step-05-check.json`
- `proof/artifacts/step-05-agent-brief.json`
- `proof/artifacts/step-05-task-slice.json`
- `proof/artifacts/step-05-generate-refusal.txt`
- `proof/artifacts/step-05-sdlc-start-task-graduated-maintained-output.json`
- `proof/artifacts/step-05-sdlc-complete-task-graduated-maintained-output.json`
- `proof/artifacts/step-05-sdlc-prep-commit.json`

## Next Step

Add a maintained feature by editing app source directly with Topogram packets as
guidance, without regenerating over maintained app output.
