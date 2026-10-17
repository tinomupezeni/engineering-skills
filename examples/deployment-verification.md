# Verify a deployment beyond HTTP 200

**Failure mode:** a deployment is called successful because the process is
healthy, while the real user journey is broken or the wrong artifact is live.

**Install:**

```bash
npx skills add https://github.com/tinomupezeni/engineering-skills --skill deployment-truth
```

**Ask the agent to:** identify the exact commit or image digest, verify
dependencies and migrations, then exercise the critical user path.

**Evidence to expect:**

- deployed artifact identity and target environment;
- migration and readiness results;
- a smoke test for the real user journey;
- rollback evidence or a tested recovery path.
