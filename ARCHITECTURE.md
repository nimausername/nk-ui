# Architecture

nk is a **shadcn-compatible component registry** plus a Next.js docs site in one repository.
The folder layout separates what consumers install from what only the website uses.

## Folder map

```text
app/                    Next.js routes (marketing + docs pages only)
components/
  ui/                   PUBLISHED — installable @nk registry components
  extras/               CANDIDATES — reusable, not in registry yet
  docs/                 INTERNAL — docs chrome, previews, demo wiring
  site/                 INTERNAL — header, providers, marketing shell
config/                 Site config (docs nav catalog, future site settings)
lib/                    Shared utilities (utils may be published via registry)
public/r/               Built registry JSON (generated; do not hand-edit)
registry.json           Registry source of truth for `pnpm registry:build`
```

## Publishing rules

| Location | Shipped via `npx shadcn add @nk/...`? | Notes |
|----------|--------------------------------------|--------|
| `components/ui/*` | Yes | Keep Base UI + tokens + logical CSS. No docs imports. |
| `components/extras/*` | Not yet | Promote into `ui/` + `registry.json` when ready. |
| `components/docs/*` | Never | Previews, sidebars for documentation only. |
| `components/site/*` | Never | App shell for this website. |
| `config/*` | Never | Docs/site configuration. |
| `lib/utils.ts` | Yes (as `@nk/utils`) | Keep dependency-free of site code. |

## Adding a registry component

1. Implement in `components/ui/<name>.tsx` (split variants into a non-client file if needed).
2. Register the item in root `registry.json` (`dependencies`, `registryDependencies`, `files`).
3. Add a docs entry in `config/docs.ts` → `componentItems`.
4. Add `app/docs/components/<name>/page.tsx` and optional `components/docs/<name>-previews.tsx`.
5. Run `pnpm registry:build` and verify `public/r/<name>.json`.

## Promoting an extra to the registry

1. Move (or copy) from `components/extras/` → `components/ui/`.
2. Remove docs-only assumptions (no `usePathname` coupling unless intentional).
3. Add `registry.json` item + docs page as above.
4. Prefer `@nk/<name>` in `registryDependencies` for other nk items.

## Import boundaries

- `components/ui` and `lib/utils` must not import from `components/docs`, `components/site`, or `config`.
- `components/docs` may import `components/ui` and `components/extras`.
- `components/site` may import `components/ui` and `config`.
- `app/` may import any layer.

## Scale path

Stay on a single Next.js app until packaging pain appears. If the repo grows large:

1. `apps/docs` — this site
2. `packages/ui` — source mirrored or moved from `components/ui`
3. Keep the public install path `@/components/ui` for consumers

Do not introduce a monorepo until `ui` + registry workflows need isolation.
