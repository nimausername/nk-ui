# Architecture

nk is a **shadcn-compatible component registry** plus a Next.js docs site in one repository.
The folder layout separates what consumers install from what only the website uses.

## Folder map

```text
app/                    Next.js routes (marketing + docs pages only)
components/
  ui/                   PUBLISHED — installable @nk registry components
  shared/               SITE-WIDE — reusable across docs, marketing, app shell
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
| `components/ui/*` | Yes (once listed in `registry.json`) | Keep Base UI + tokens + logical CSS. No docs imports. |
| `components/shared/*` | Never | Site-wide reusable UI (e.g. CodeCommand). Not registry. |
| `components/docs/*` | Never | Previews, docs chrome, and site forks of composites (e.g. `docs-rail-sidebar`). |
| `components/site/*` | Never | App shell for this website. |
| `config/*` | Never | Docs/site configuration. |
| `lib/utils.ts` | Yes (as `@nk/utils`) | Keep dependency-free of site code. |

## Composition over variant explosion

Prefer **composable parts** (like Breadcrumb: `List` / `Item` / `Link` / `Page` / `Separator`)
over one component with dozens of `variant` flags for every layout.

- Icons, slash vs chevron, ellipsis menus = **composition in the consumer**
- Shared look = tokens + small primitive pieces in `components/ui`
- Docs show several compositions; new “kinds” usually need no API change

## Adding a registry component

1. Implement in `components/ui/<name>.tsx` (split variants into a non-client file if needed).
2. Register the item in root `registry.json` (`dependencies`, `registryDependencies`, `files`).
3. Add a docs entry in `config/docs.ts` → `componentItems` (primitives) or `compositeItems` (composed pieces).
4. Add `app/docs/components/<name>/page.tsx` or `app/docs/composites/<name>/page.tsx`, plus optional previews.
5. Run `pnpm registry:build` and verify `public/r/<name>.json`.

## Docs catalogs

| Catalog | Config | Route | Use for |
|---------|--------|-------|---------|
| Components | `componentItems` | `/docs/components` | Primitives (`Button`, `Breadcrumb`, …) |
| Composites | `compositeItems` | `/docs/composites` | Composed multi-part UI still installed via `@nk/...` |

## Site forks of composites

When the docs site needs a composite for chrome (e.g. Rail Sidebar), keep a
**copy** under `components/docs/` and wire the site to that fork. The
publishable source stays in `components/ui` + the Composites docs/preview.

Do not import `@/components/ui/<composite>` from docs chrome if the site must
be free to diverge. Previews on the Composites docs page should still demo the
`components/ui` version.

## Import boundaries

- `components/ui` and `lib/utils` must not import from `components/docs`, `components/site`, `components/shared`, or `config`.
- `components/shared` may import `components/ui`, `lib`, and `hooks` — not docs-only chrome.
- `components/docs` may import `components/ui` and `components/shared` (previews may import ui; chrome forks should not depend on staying in sync).
- `components/site` may import `components/ui`, `components/shared`, and `config`.
- `app/` may import any layer.

## Scale path

Stay on a single Next.js app until packaging pain appears. If the repo grows large:

1. `apps/docs` — this site
2. `packages/ui` — source mirrored or moved from `components/ui`
3. Keep the public install path `@/components/ui` for consumers

Do not introduce a monorepo until `ui` + registry workflows need isolation.
