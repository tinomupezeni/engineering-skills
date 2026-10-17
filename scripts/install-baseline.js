#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const project = process.argv[2];
if (!project) {
  console.error("Usage: node scripts/install-baseline.js /path/to/project");
  process.exit(1);
}

const root = path.resolve(project);
const candidates = ["AGENTS.md", "CLAUDE.md"];
const target = candidates.map((name) => path.join(root, name)).find((file) => fs.existsSync(file));
if (!target) {
  console.error(`No AGENTS.md or CLAUDE.md found in ${root}. Create one deliberately; no file was changed.`);
  process.exit(1);
}

const marker = "## Engineering Skills Baseline";
const current = fs.readFileSync(target, "utf8");
if (current.includes(marker)) {
  console.log(`Engineering skills baseline already present in ${target}.`);
  process.exit(0);
}

const snippet = [
  marker,
  "",
  "Use the portable engineering controls from",
  "`https://github.com/tinomupezeni/engineering-skills`. Apply",
  "`engineering-baseline` to every task and load the specialist skill matching the",
  "boundary being changed.",
  "",
  "Before editing, state scope, affected components, dependencies, exact",
  "validation commands, and target environment. Do not claim target-environment",
  "work from local tests. Match the strongest evidence to the changed boundary.",
  "",
].join("\n");

fs.writeFileSync(target, `${current.trimEnd()}\n\n${snippet}`, "utf8");
console.log(`Installed engineering skills baseline in ${target}.`);
