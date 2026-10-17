---
name: contract-integrity
description: Detects and prevents drift between backend routes, schemas, serializers, clients, fixtures, migrations, and test harnesses.
---

# Contract Integrity

Verify both directions:

1. Every backend route and response schema is consumed by the intended clients.
2. Every client call resolves to a real route with the expected method, URL,
   headers, payload, and response shape.

Compare OpenAPI or equivalent schemas, serializers, frontend/mobile types,
fixtures, migrations, and worker/event payloads. Add a regression or contract
test that fails before the fix. A status-code-only test is insufficient when
content, persistence, identity, or reachability matters.

Maintain a versioned baseline of accepted pre-existing failures. New failures
must fail CI. Do not delete tests, weaken assertions, or replace real
integration behavior with broad mocks merely to make the suite pass.
