---
name: agent-delegation
description: Delegates engineering work with explicit scope, verification, standards, and evidence requirements.
---

# Agent Delegation

Every handoff contains exactly three core artifacts:

- **Directive:** the precise change and boundaries;
- **Verification script:** an exact command against the relevant environment;
- **Standard reference:** the rule that makes a solution acceptable.

Include current branch/commit, files and services in scope, evidence collected,
commands passed and failed, assumptions, risks, and next verification.

Agents must not declare target-environment work complete from local tests.
Security-, concurrency-, failure-, and deployment-sensitive changes require a
reverse-engineering audit through the security, concurrency/performance, or
failure-injection lens.

Collapse complex remote logic into a version-controlled script on one side of
a shell boundary. Do not pass multi-layer quoting, semicolons, or language
syntax as an escaped command string.
