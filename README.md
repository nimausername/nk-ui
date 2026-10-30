# nk

[![CI](https://github.com/nimausername/nk-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/nimausername/nk-ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](./LICENSE)

Base UI components you own — black/white product styling, light/dark, and real LTR/RTL.

- **Docs (planned):** [ui.nimakhabbazi.com](https://ui.nimakhabbazi.com)
- **Install:** shadcn-compatible registry `@nk/...`
- **Status:** pre-release (`0.x`) — `utils`, `button`, and `breadcrumb` shipped

## Stack

- Next.js (docs + registry host)
- Base UI
- Tailwind CSS + CSS variables
- [shadcn CLI](https://ui.shadcn.com) distribution (copy source into your app)

## Repository layout

| Path | Purpose |
|------|---------|
| `components/ui` | Installable design-system components (`@nk/...`) |
| `components/extras` | Reusable pieces not published yet (e.g. hook sidebar, ProgressButton) |
| `components/docs` | Docs-only UI (previews, View Code panel, docs sidebar shell) |
| `components/site` | Site shell (header, theme providers) |
| `config` | Docs/site configuration |
| `lib` | Shared helpers (`utils` is registry-published) |
| `registry.json` → `public/r` | Registry build output |

See [ARCHITECTURE.md](./ARCHITECTURE.md) for publishing rules and import boundaries.

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm registry:build   # refresh public/r/*.json
pnpm lint
pnpm typecheck
pnpm build
```

## Install (once the registry is served)

Add to `components.json`:

```json
{
  "registries": {
    "@nk": "https://ui.nimakhabbazi.com/r/{name}.json"
  }
}
```

Local docs app:

```json
{
  "registries": {
    "@nk": "http://localhost:3000/r/{name}.json"
  }
}
```

Then:

```bash
npx shadcn@latest add @nk/button
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
Security reports: [SECURITY.md](./SECURITY.md).

## License

MIT © Nima Khabbazi
