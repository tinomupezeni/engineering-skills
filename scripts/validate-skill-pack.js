#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const packManifest = fs.readFileSync(path.join(root, "manifests", "pack.yaml"), "utf8");
const skillDirs = [
  ...fs.readdirSync(path.join(root, "skills")).map((name) => ({
    directory: path.join(root, "skills", name),
    label: `skills/${name}`,
  })),
  ...fs.readdirSync(path.join(root, "bundles")).map((name) => ({
    directory: path.join(root, "bundles", name),
    label: `bundles/${name}`,
  })),
];

const errors = [];
const skillNames = new Set();
for (const entry of skillDirs) {
  const skillPath = path.join(entry.directory, "SKILL.md");
  if (!fs.existsSync(skillPath)) {
    errors.push(`Missing SKILL.md: ${entry.label}`);
    continue;
  }
  const content = fs.readFileSync(skillPath, "utf8");
  if (!content.startsWith("---\n") || !content.includes("\nname:")) {
    errors.push(`Missing frontmatter name: ${entry.label}`);
  }
  if (!content.includes("\ndescription:")) {
    errors.push(`Missing frontmatter description: ${entry.label}`);
  }
  const name = content.match(/\nname:\s*([^\s]+)/)?.[1];
  if (!name) {
    errors.push(`Missing skill name: ${entry.label}`);
  } else if (skillNames.has(name)) {
    errors.push(`Duplicate skill name: ${name}`);
  } else {
    skillNames.add(name);
  }
}

const manifestNames = [...packManifest.matchAll(/^\s+- ([a-z0-9-]+)$/gm)].map((match) => match[1]);
for (const name of manifestNames) {
  if (!skillNames.has(name)) {
    errors.push(`Pack manifest references missing skill: ${name}`);
  }
}

const adapterRequiredKeys = ["version", "project", "repository", "stack", "commands:", "deployment:", "known_baseline_failures:"];
const adapterRoot = path.join(root, "adapters");
for (const entry of fs.readdirSync(adapterRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const adapterPath = path.join(adapterRoot, entry.name, "ADAPTER.yaml");
  if (!fs.existsSync(adapterPath)) {
    errors.push(`Missing adapter manifest: adapters/${entry.name}/ADAPTER.yaml`);
    continue;
  }
  const adapter = fs.readFileSync(adapterPath, "utf8");
  for (const key of adapterRequiredKeys) {
    if (!adapter.includes(`\n${key}`) && !adapter.startsWith(`${key}`)) {
      errors.push(`Adapter adapters/${entry.name} is missing ${key}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${skillDirs.length} skill surfaces.`);
