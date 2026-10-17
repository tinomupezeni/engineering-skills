---
name: task-contract
description: Turns an ambiguous engineering request into a bounded, testable task contract for humans or coding agents.
---

# Task Contract

Write a compact contract before implementation:

1. Objective and observed problem.
2. Environment and affected components.
3. In scope and out of scope paths.
4. Dependencies and task order.
5. Functional and non-functional acceptance criteria.
6. Security, performance, documentation, and rollback constraints.
7. Exact validation commands and required evidence.
8. Definition of Done and target environment.

Use observable Given/When/Then criteria. Name the strongest proof required:
unit, integration/contract, migration rehearsal, staging smoke test,
real-device test, or external-provider verification.

Split work when it changes independently deployable database, API, client,
worker, external integration, or deployment contracts. Do not hide a
cross-boundary initiative inside a vague single task.
