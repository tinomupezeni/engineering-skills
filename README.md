# Engineering Skills

Portable agent skills distilled from the SOFTWARE-ENGINEER engineering-guide
library. The skills are designed for Claude, Codex, Cursor, Copilot, and other
agents that support the `SKILL.md` convention.

This repository is a generated-and-curated distribution, not the canonical
engineering knowledge store. The canonical source is:

`tinomupezeni/SOFTWARE-ENGINEER/Principal_Engineer/engineering-guides/`

## Install

Install the default baseline:

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill engineering-baseline
```

Install the production bundle or a specialist skill:

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill production-engineering-pack
npx skills add https://github.com/tinomupezeni/engineering-skills --skill deployment-truth
```

## Skill model

`engineering-baseline` is the default router. It classifies the work, selects
specialist skills, and defines the evidence required before completion. The
specialist skills contain focused controls; they are intentionally smaller than
the source guides.

Project adapters provide commands and environment facts without making the
portable skills project-specific. Adapters are opt-in and must not contain
secrets.

## Source synchronization

`manifests/source-map.yaml` records the source guide files and the skill
surfaces derived from them. Updates to the canonical guide library should be
reviewed against this map before changing the distribution repository.

## Repository layout

```text
skills/       Portable installable skills
bundles/      Installable collections of related skills
adapters/     Project-specific command and environment mappings
scripts/      Validation and maintenance tooling
manifests/    Source mapping and pack metadata
references/   Shared checklists and evidence schemas
```
