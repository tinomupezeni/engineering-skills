---
name: distributed-consistency
description: Governs replicated entities, async consumers, retries, deletion propagation, dead letters, and reconciliation across service boundaries.
---

# Distributed Consistency

For each replicated entity define producer, consumer, identifier, field
compatibility, deletion/archive semantics, retry policy, dead-letter handling,
and reconciliation owner. Use owning-service IDs, not human-readable names.

Consumers must accept every legitimate producer value or reject it through an
explicit logged and alertable path. Retryable operations require idempotency
keys and visible outcomes: accepted, already applied, retried, rejected, or
dead-lettered.

Reconcile identifiers and important state, not only row counts. Audit all
downstream copies when adding a delete, archive, or unpublish path to one
sibling. Verify migration cleanup preconditions independently per environment.
