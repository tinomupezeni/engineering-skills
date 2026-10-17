---
name: deployment-truth
description: Verifies that the exact intended artifact, database state, dependencies, and user path are healthy before and after promotion.
---

# Deployment Truth

Before promotion, record source commit, image tag/digest, environment, and
configuration fingerprint. Release-critical commands must fail on error:
never suppress migrations, image selection, health checks, smoke tests, or
identity checks with `|| true` or broad catches.

Verify Compose service names and target containers. Confirm applied migration
revision, exact running artifact identity, liveness, dependency readiness,
worker state, storage, and required external services.

Run a read-only meaningful smoke journey, check frontend asset integrity and
forbidden localhost/staging values, and scan deployment-window errors. If the
observer or health script is broken, the release is unverified. Promote only
the artifact that passed staging; do not rebuild a different checkout.
