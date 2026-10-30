# Contributing to nk

Thanks for helping. nk is a shadcn-compatible registry of Base UI components.

## Requirements

- Node.js 20+
- pnpm 12+ (`packageManager` is pinned in `package.json`)

## Setup

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm lint
pnpm typecheck
pnpm registry:build
pnpm build
```

## Where code belongs

Read [ARCHITECTURE.md](./ARCHITECTURE.md) before opening a PR.

- Installable components → `components/ui` + `registry.json`
- Reusable but unpublished → `components/extras`
- Docs demos / docs chrome → `components/docs`
- Site shell → `components/site`
- Docs nav catalog → `config/docs.ts`

`components/ui` and `lib/utils.ts` must not import docs or site code.

## Adding a component

1. Build it in `components/ui`.
2. Register it in `registry.json`.
3. Add it to `config/docs.ts` → `componentItems`.
4. Add a docs page under `app/docs/components/<name>/`.
5. Run `pnpm registry:build`.
6. Open a PR with lint, typecheck, and build green.

## Pull requests

- Keep PRs focused (one component or one concern).
- Prefer conventional commits: `feat:`, `fix:`, `docs:`, `chore:`.
- Do not commit secrets, `.env` files, or `node_modules`.

## Code of conduct

Participation is governed by [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
