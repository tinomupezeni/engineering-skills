# Contributing

Thanks for helping make AI-assisted engineering safer and more reliable.

## What makes a good contribution?

A contribution should solve a repeatable engineering problem rather than
encode one project's private workflow. Good additions:

- define a clear failure mode and the boundary it protects;
- state what evidence proves the control worked;
- use portable language and repository-agnostic examples;
- fit the existing `SKILL.md` format and naming conventions;
- include or update a focused example when the behavior is not obvious.

Project-specific commands, credentials, deployment details, and private
architecture belong in an adapter or the target project, not in this public
pack.

## Development workflow

1. Search existing skills and the [roadmap](ROADMAP.md) before starting.
2. Open an issue for a substantial new skill or bundle.
3. Make the smallest coherent change.
4. Run:

   ```bash
   npm run validate
   npm run source:check
   ```

5. Explain the behavior, evidence model, and validation results in the pull
   request.

## Skill checklist

Before opening a pull request, confirm that each changed skill has:

- YAML frontmatter with `name` and `description`;
- a precise scope and explicit non-goals;
- actionable controls rather than generic advice;
- a verification or evidence requirement;
- no secrets, project-specific paths, or unsupported tool assumptions.

## Pull requests

Keep pull requests focused. Include the motivation, affected files, validation
commands, and any follow-up work that is intentionally deferred. Maintainers
may ask for an example or a narrower scope before merging.

## Code of conduct

Be respectful, specific, and constructive. Report security concerns privately
to the repository owner rather than opening a public issue with exploit
details.
