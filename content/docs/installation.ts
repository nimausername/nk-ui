/**
 * Installation hub content. Markdown is the AI / Copy Page source of truth.
 */

export const installationTitle = "Installation"

export const installationDescription =
  "How to add the @nk registry and install components with the shadcn CLI. Pick the guide that matches your framework."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const installationUpdatedAt = "2026-11-01"

export const installationMarkdown = `# Installation

${installationDescription}

nk ships as source via the shadcn CLI. You add the \`@nk\` registry once; every component after that uses the same install pattern.

## Choose your framework

- [Next.js](/docs/installation/next) — App Router + Tailwind. Recommended.
- [Vite](/docs/installation/vite) — Vite + React + Tailwind.
- [Manual](/docs/installation/manual) — Existing React app with Tailwind.

Each framework guide covers new projects, existing projects, installing components, and the shared \`@nk\` registry entry in \`components.json\`.
`
