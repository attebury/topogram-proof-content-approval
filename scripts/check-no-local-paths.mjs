import { execFileSync } from "node:child_process";
import fs from "node:fs";

const checks = [
  {
    label: "macOS home path",
    regex: new RegExp("/" + "Users" + "/[A-Za-z0-9._-]+/", "g"),
  },
  {
    label: "Linux home path",
    regex: new RegExp("/" + "home" + "/[A-Za-z0-9._-]+/", "g"),
  },
  {
    label: "Windows user path",
    regex: new RegExp("[A-Za-z]:" + "\\\\" + "Users" + "\\\\" + "[^\\\\/]+[\\\\/]", "g"),
  },
  {
    label: "macOS temp path",
    regex: new RegExp("/" + "private" + "/" + "tmp" + "/[^\\s]+", "g"),
  },
  {
    label: "macOS var temp path",
    regex: new RegExp("/" + "var" + "/" + "folders" + "/[^\\s]+", "g"),
  },
];

const files = execFileSync("git", ["ls-files"], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);
const failures = [];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const buffer = fs.readFileSync(file);
  if (buffer.includes(0)) continue;
  const text = buffer.toString("utf8");
  for (const check of checks) {
    const matches = [...text.matchAll(check.regex)];
    for (const match of matches) {
      const line = text.slice(0, match.index).split("\n").length;
      failures.push({ file, line, label: check.label, match: match[0] });
    }
  }
}

if (failures.length > 0) {
  console.error("Local absolute paths found in tracked files:");
  for (const failure of failures.slice(0, 50)) {
    console.error(`- ${failure.file}:${failure.line} [${failure.label}] ${failure.match}`);
  }
  if (failures.length > 50) {
    console.error(`...and ${failures.length - 50} more`);
  }
  process.exit(1);
}

console.log("No local absolute paths found in tracked files.");
