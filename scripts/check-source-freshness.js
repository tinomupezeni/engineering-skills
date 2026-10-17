#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const map = fs.readFileSync(path.join(root, "manifests", "source-map.yaml"), "utf8");
const repository = map.match(/^canonical_repository:\s*(.+)$/m)?.[1]?.trim();
const generated = map.match(/^generated_from_commit:\s*(.+)$/m)?.[1]?.trim();

if (!repository || !generated) {
  console.error("source-map.yaml must define canonical_repository and generated_from_commit.");
  process.exit(1);
}

const [owner, repo] = repository.split("/");
const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=Principal_Engineer/engineering-guides&per_page=1`;

async function main() {
  const response = await fetch(url, {
    headers: { accept: "application/vnd.github+json", "user-agent": "engineering-skills-source-check" },
  });
  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status} for ${repository}`);
  }
  const commits = await response.json();
  const latest = commits[0]?.sha;
  if (!latest) throw new Error("No source commit was returned.");
  if (latest === generated || latest.startsWith(generated) || generated.startsWith(latest)) {
    console.log(`Skill source is current at ${latest}.`);
    return;
  }
  console.error(`Skill source is stale: generated_from_commit=${generated}, latest=${latest}.`);
  console.error("Review guide changes, update skills deliberately, then update manifests/source-map.yaml.");
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
