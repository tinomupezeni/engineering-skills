---
name: ai-behavioral-correctness
description: Verifies semantic and behavioral correctness of LLM, retrieval, routing, memory, fallback, and tool-using agent systems.
---

# AI Behavioral Correctness

Declare each feature's capability contract: required model/provider tier,
structured-output schema, retrieval minimums, grounding behavior, latency and
cost budget, and acceptable fallback behavior.

Log requested versus served model and fallback reason. Measure retrieval hits,
grounding, tool target and arguments, routing, memory persistence, and
multi-turn continuity. Validate output domain invariants, not only JSON shape
or HTTP status.

Run a small golden-transcript suite on deploy or schedule. A successful 200
with malformed, ungrounded, degraded, or misrouted content is a failure.
