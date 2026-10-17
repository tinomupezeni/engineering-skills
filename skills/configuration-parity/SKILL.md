---
name: configuration-parity
description: Validates runtime configuration across environments and rejects missing, empty, placeholder, inconsistent, or unsafe values.
---

# Configuration Parity

Classify each value as missing, empty, malformed, placeholder, inconsistent,
or environment-incompatible. Parse required values through a typed schema and
fail startup or release validation before traffic when invalid.

Treat feature-specific provider keys, callback URLs, signing keys, storage
buckets, and model tiers as explicit invariants. Reject production bundles
containing localhost, loopback, staging-only hosts, or embedded secrets.

Compare non-secret configuration manifests between staging and production.
Verify that the runtime process received intended values. Compare secret
digests only; never transmit or log raw secrets.
