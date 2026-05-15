const message = `
Topogram app workflow

1. Edit:
   topo/
   topogram.project.json

2. Start with project guidance:
   npm run agent:brief

3. Validate:
   npm run doctor
   npm run source:status
   npm run template:explain
   npm run check

4. Regenerate:
   npm run generate

5. Verify generated app:
   npm run verify

6. Run locally:
   npm run bootstrap
   npm run dev

7. Probe the running app from another terminal:
   npm run app:probe

Or run self-contained local runtime verification:
   npm run app:runtime

Useful inspection:
   npm run agent:brief
   npm run check:json
   topogram emit ui-widget-contract ./topo --json
   topogram emit widget-conformance-report ./topo --json
   npm run doctor
   npm run source:status
   npm run source:status:remote
   npm run template:explain
   npm run template:status
   npm run template:detach:dry-run
   npm run template:policy:check
   npm run template:policy:explain
   npm run generator:policy:status
   npm run generator:policy:check
   npm run generator:policy:explain
   npm run template:update:status
   npm run template:update:recommend
   npm run template:update:plan
   npm run template:update:check
   npm run template:update:apply
   npm run trust:status
   npm run trust:diff
`;

console.log(message.trimEnd());
