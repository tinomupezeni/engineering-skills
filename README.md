# Engineering Skills

[![Validate engineering skills](https://github.com/tinomupezeni/engineering-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/tinomupezeni/engineering-skills/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Production-grade engineering controls for AI coding agents.

AI agents can write code quickly, but they still need help defining scope,
checking contracts, validating deployments, protecting data, and proving that
the user journey actually works. This repository provides portable `SKILL.md`
instructions for Claude, Codex, Cursor, Copilot, and other agents that support
the convention.

## Why use this?

Without explicit controls, an agent may:

- change more files than the task requires;
- declare success without running the right verification;
- break an API, migration, or client contract;
- treat a healthy process as proof that a business workflow succeeded.

These skills turn those failure modes into repeatable checks.

## Install in one command

Install the default router:

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill engineering-baseline
```

Install a focused skill:

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill contract-integrity
npx skills add https://github.com/tinomupezeni/engineering-skills --skill deployment-truth
npx skills add https://github.com/tinomupezeni/engineering-skills --skill security-boundaries
```

Install a bundle:

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill production-engineering-pack
```

After installation, ask your agent to apply the skill to a task. The baseline
router classifies the work, selects specialist controls, and requires evidence
matched to the failure mode.

## Choose the right control

| Skill | Use it when you need to... |
| --- | --- |
| `engineering-baseline` | classify work, bound scope, and define proof |
| `task-contract` | turn an ambiguous request into an executable contract |
| `agent-delegation` | hand work to another agent with explicit evidence |
| `contract-integrity` | keep routes, schemas, clients, fixtures, and tests aligned |
| `database-change-safety` | rehearse migrations and protect existing data |
| `deployment-truth` | verify the exact artifact and real user path |
| `configuration-parity` | reject missing, empty, placeholder, or drifting config |
| `issue-to-production` | connect defect discovery to regression and release proof |
| `distributed-consistency` | reason about retries, consumers, deletion, and reconciliation |
| `observability-correctness` | prove business outcomes, not only process uptime |
| `security-boundaries` | verify identity, authorization, tenant scope, and replay controls |
| `ai-behavioral-correctness` | validate routing, fallback, retrieval, and tool-using agents |

Bundles combine related controls:

- `agent-engineering-pack` — bounded tasks, safe delegation, and contracts
- `production-engineering-pack` — release, data, configuration, security, and
  observability controls
- `ai-systems-engineering-pack` — semantic correctness, state, telemetry, and
  security for AI systems

## See it in practice

The [`examples/`](examples/) directory contains small, reusable scenarios:

- [Prevent an unsafe migration](examples/unsafe-migration.md)
- [Verify a deployment beyond HTTP 200](examples/deployment-verification.md)
- [Keep an API change compatible](examples/api-contract-change.md)

Each example shows the failure mode, the skill to install, and the evidence an
agent should produce.

## Skill model

`engineering-baseline` is the default router. Specialist skills contain
focused controls and are intentionally smaller than the source guides. The
public pack contains portable skills, bundles, generic maintenance tooling, and
an adapter template only.

This repository is a generated-and-curated distribution, not the canonical
engineering knowledge store. The canonical source is
[`tinomupezeni/SOFTWARE-ENGINEER`](https://github.com/tinomupezeni/SOFTWARE-ENGINEER/tree/main/Principal_Engineer/engineering-guides).

Project-specific commands, environment facts, and agent-instruction snippets
belong in the target project or a separately scoped integration repository.

## Validate locally

```bash
npm install
npm run validate
npm run source:check
```

`source:check` reports whether the distribution should be reviewed against a
newer canonical guide commit. It does not overwrite curated skill content.

## Contributing

New skills should address a repeatable engineering failure mode, state the
evidence required for completion, and remain portable across projects. Start
with [CONTRIBUTING.md](CONTRIBUTING.md), review the
[roadmap](ROADMAP.md), and open an issue before a large addition.

## License

MIT. See [LICENSE](LICENSE).
