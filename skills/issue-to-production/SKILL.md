---
name: issue-to-production
description: Runs the closed loop from defect discovery through root cause, regression proof, staging, production verification, and recurrence prevention.
---

# Issue to Verified Production

Follow:

`Discover -> Triage -> Root-cause audit -> Implement -> Regression proof -> Staging -> Promote -> Production verify -> Close -> Prevent`

Inspect source, runtime, history, and sibling patterns. Separate observer
failures from application failures. Never suppress release-critical failures.

Closure has four states: symptom mitigated, root cause fixed, prevention
implemented, and prevention verified. `Resolved` requires the last state unless
an owned workaround has an expiry. Every confirmed defect needs a prevention
item with an owner, validation command, and status.

When a failure class appears twice, add a guard or checklist. At three
occurrences, make it a CI or release gate. Record artifact identity, migration
result, regression proof, staging result, target-environment result, and
remaining prevention work.
