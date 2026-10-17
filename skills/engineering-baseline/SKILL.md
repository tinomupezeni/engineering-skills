---
name: engineering-baseline
description: Default engineering control for agent work. Classifies the task, selects specialist skills, bounds scope, and requires evidence before completion.
---

# Engineering Baseline

Use this skill for every engineering task unless a project explicitly replaces
it with a stricter local standard.

## Before changing files

Classify the work as one or more of: task definition, bug, API contract,
database/data, deployment, configuration, security, observability,
distributed consistency, mobile/device, or AI behavior. Activate the matching
specialist skill from this repository.

State the project, environment, affected components, in-scope paths,
out-of-scope paths, acceptance criteria, validation commands, and required
target environment. If the task crosses database, backend, frontend, worker,
external integration, or deployment boundaries, split it into dependent work
units or document the dependency graph.

## Completion contract

Do not claim completion from compilation, a local unit test, or an agent
summary alone. The evidence must match the failure mode:

- code logic: focused regression test;
- API/client change: bidirectional contract proof;
- migration/data change: isolated rehearsal and target-data preflight;
- deployment: exact artifact identity, migration result, readiness, and smoke journey;
- external integration: real provider or faithful contract proof;
- UI/mobile: real user journey or device proof;
- security: negative authorization and boundary tests.

If a required proof cannot run, report the work as unverified and name the
blocker. Never convert missing evidence into a success-shaped fallback.

## Routing

Use `task-contract` for underspecified work, `agent-delegation` for handoffs,
`issue-to-production` for defects, `contract-integrity` for producer/consumer
changes, `deployment-truth` for releases, `database-change-safety` for schema
or data changes, `configuration-parity` for environment values,
`distributed-consistency` for replicated state, `observability-correctness`
for runtime visibility, `security-boundaries` for identity or trust, and
`ai-behavioral-correctness` for LLM or agent systems.
