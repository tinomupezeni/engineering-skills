#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const mapPath = path.join(root, "manifests", "source-map.yaml");
const map = fs.readFileSync(mapPath, "utf8");
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
    headers: { accept: "application/vnd.github+json", "user-agent": "engineering-skills-source-report" },
  });
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}.`);
  const latest = (await response.json())[0]?.sha;
  if (!latest) throw new Error("No source commit was returned.");
  const current = latest === generated || latest.startsWith(generated) || generated.startsWith(latest);
  console.log(JSON.stringify({
    canonical_repository: repository,
    generated_from_commit: generated,
    latest_source_commit: latest,
    current,
    action: current ? "none" : "review-and-update",
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
