# Prevent an unsafe migration

**Failure mode:** an agent adds a non-null column or uniqueness constraint
without proving that existing rows satisfy the new invariant.

**Install:**

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill database-change-safety
```

**Ask the agent to:** inspect the current data, define preconditions, rehearse
the migration against a representative copy, and provide a rollback path.

**Evidence to expect:**

- a query or script showing the target data preflight;
- a successful isolated migration rehearsal;
- verification of constraints after migration;
- an explicit rollback or expand/contract strategy.
