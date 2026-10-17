---
name: security-boundaries
description: Reviews identity, authorization, tenant scope, service trust, webhooks, signatures, replay protection, and negative security behavior.
---

# Security Boundaries

For every protected operation document and test actor identity, tenant or
institution scope, resource ownership, authorization decision, downstream
propagation, audit event, and denial behavior.

Include negative tests for altered resource IDs, tenant IDs, roles, signatures,
timestamps, and device bindings. Deny before sensitive lookup or mutation.
Preserve authorization context through queues, webhooks, and service calls.

For payment or state-changing webhooks, verify the signature before parsing or
mutating, isolate secrets per trust domain, enforce provider idempotency keys,
protect against replay, retry delivery, and alert on stuck pending state.
