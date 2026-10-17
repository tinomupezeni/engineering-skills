---
name: database-change-safety
description: Safely plans and verifies schema changes, migrations, dirty-data cleanup, and cross-database preconditions.
---

# Database Change Safety

Define data preconditions for uniqueness, nullability, referential integrity,
enum validity, and normalized identifiers. Provide a read-only preflight that
exits non-zero on failure. Run it independently in every target environment;
staging data does not prove production readiness.

Run cleanup in dry-run mode, record affected rows, make it idempotent, rerun
the preflight, then apply the migration. Verify the applied revision and
post-migration invariants. Use expand/contract for incompatible changes and
analyze locking and rollback boundaries.

Never suppress migration failures or silently skip rows that cannot be
represented or reconciled.
