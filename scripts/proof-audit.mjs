import { execFileSync } from "node:child_process";
import fs from "node:fs";

const expectedCliVersion = "0.3.91";
const expectedTags = [
  "proof-01-generated-baseline",
  "proof-02-content-approval-domain",
  "proof-03-review-workflow-ui",
  "proof-04-generated-db-migration",
  "proof-05-graduate-maintained",
  "proof-06-maintained-feature",
  "proof-07-maintained-db-migration"
];
const failures = [];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

const packageJson = readJson("package.json");
const packageLock = readJson("package-lock.json");
const packageCliVersion = packageJson.devDependencies?.["@topogram/cli"];
const lockCliVersion = packageLock.packages?.["node_modules/@topogram/cli"]?.version;
if (packageCliVersion !== expectedCliVersion) {
  failures.push(`package.json pins @topogram/cli to ${packageCliVersion || "<missing>"}, expected ${expectedCliVersion}.`);
}
if (lockCliVersion !== expectedCliVersion) {
  failures.push(`package-lock.json resolves @topogram/cli to ${lockCliVersion || "<missing>"}, expected ${expectedCliVersion}.`);
}

const missingTags = [];
for (const tag of expectedTags) {
  try {
    git(["rev-parse", "--verify", `refs/tags/${tag}`]);
  } catch {
    missingTags.push(tag);
  }
}
if (missingTags.length > 0) {
  failures.push(`Missing expected proof tags: ${missingTags.join(", ")}`);
}

const auditPath = "proof/artifacts/path-hygiene-audit.json";
if (!fs.existsSync(auditPath)) {
  failures.push(`Missing ${auditPath}.`);
} else {
  const audit = readJson(auditPath);
  if (audit.type !== "proof_path_hygiene_audit") {
    failures.push(`${auditPath} has unexpected type ${audit.type || "<missing>"}.`);
  }
  if (audit.repository !== "topogram-proof-content-approval") {
    failures.push(`${auditPath} repository is ${audit.repository || "<missing>"}, expected topogram-proof-content-approval.`);
  }
  if (audit.topogramCliVersion !== expectedCliVersion) {
    failures.push(`${auditPath} records CLI ${audit.topogramCliVersion || "<missing>"}, expected ${expectedCliVersion}.`);
  }
  const failedChecks = (audit.checks || []).filter((check) => check.status !== "passed");
  if (failedChecks.length > 0) {
    failures.push(`${auditPath} contains failed checks: ${failedChecks.map((check) => check.id).join(", ")}`);
  }
}

if (failures.length > 0) {
  console.error("Proof audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  repository: "topogram-proof-content-approval",
  topogramCliVersion: expectedCliVersion,
  tagsChecked: expectedTags.length,
  pathHygieneAudit: auditPath
}, null, 2));
