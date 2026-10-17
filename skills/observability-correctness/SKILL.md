---
name: observability-correctness
description: Ensures telemetry proves business outcomes and detects silent degradation, not only process uptime and HTTP errors.
---

# Observability Correctness

For critical asynchronous and distributed workflows, link request, worker task,
entity ID, actor/tenant scope, and final outcome. Instrument queue age, retries,
dead letters, task completion, provider outcome, and business-state changes.

Alert on stuck pending records, dropped events, repeated retries, unexpected
empty results, configuration drift, version drift, and degraded-but-successful
behavior. Keep metrics bounded; put high-cardinality identifiers in logs and
traces.

Test health checks, proxies, log parsers, and metric exporters independently.
A broken observer produces an unverified state, never a default healthy result.
