# Keep an API change compatible

**Failure mode:** a backend route or schema changes successfully, but clients,
fixtures, serializers, or tests still implement the old contract.

**Install:**

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill contract-integrity
```

**Ask the agent to:** trace the producer and every consumer in both directions,
then verify the changed contract with focused tests or a faithful contract
check.

**Evidence to expect:**

- the affected route/schema/serializer and client list;
- compatibility behavior for existing consumers;
- producer-to-consumer and consumer-to-producer verification;
- focused test output with the exact command used.
