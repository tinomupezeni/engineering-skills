#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
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
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${skillDirs.length} skill surfaces.`);
