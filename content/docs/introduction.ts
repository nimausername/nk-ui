/**
 * Introduction docs content. Markdown is the AI / Copy Page source of truth;
 * the React page mirrors these sections.
 */

export const introductionTitle = "Introduction"

export const introductionDescription =
  "nk is a set of accessible Base UI components and a shadcn-compatible code distribution platform. Install source into your project, own the files, and theme with black/white CSS variables — including LTR and RTL."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const introductionUpdatedAt = "2026-11-01"

/**
 * Raw markdown for clipboard + `/docs.md`.
 */
export const introductionMarkdown = `# Introduction

${introductionDescription}

**This is not an opaque component package. It is how you build your own kit.**

You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.

That works until you need to customize a component to fit your product, support a layout direction the kit ignored, or pull in something the package never shipped. You end up wrapping library code, fighting styles, or mixing APIs that do not compose.

nk is built to avoid that. It follows these principles:

- **Open Code** — The styled layer lives in your repo. You can read and change it.
- **Composition** — Components share a predictable, composable interface.
- **Distribution** — A flat registry schema and the shadcn CLI install source into your project.
- **Calm Defaults** — Black/white CSS variables, light and dark, ready out of the box.
- **RTL First-class** — Logical CSS so Persian and Arabic layouts work without fighting the kit.
- **AI-Ready** — Open source files and markdown docs LLMs can read, explain, and extend.

## Open Code

nk hands you the actual component code via \`npx shadcn@latest add @nk/...\`. You own the files after install.

- **Full transparency** — You see how each piece is built on Base UI.
- **Easy customization** — Change variants, structure, or tokens without wrapping a black box.
- **AI integration** — LLMs can read the same files your app imports.

In a typical library, changing button behavior means overrides and wrappers. With nk, you edit the button in \`components/ui\`.

Behavior and accessibility stay on Base UI. When \`@base-ui/react\` ships fixes, you get them by updating that dependency. The styled top layer stays yours.

## Composition

Every nk component aims for a shared, composable interface — small parts you assemble instead of one mega-component with dozens of layout flags.

Breadcrumb is the model: \`List\`, \`Item\`, \`Link\`, \`Page\`, \`Separator\`. Icons, chevrons, and ellipsis come from composition in your app, not a new API for every layout.

A shared interface is predictable for your team and for LLMs. You are not learning a different pattern for every new component.

## Distribution

nk is also a code distribution system. It uses the shadcn registry schema and CLI:

- **Schema** — Flat JSON that lists files, npm dependencies, and registry dependencies.
- **CLI** — \`npx shadcn@latest add @nk/<name>\` copies source into your project.

Add the \`@nk\` registry once in \`components.json\`. Every component afterward uses the same install path. See [Installation](/docs/installation).

## Calm Defaults

nk ships black/white semantic CSS variables and product-oriented defaults:

- **Good out of the box** — Clean light and dark without a redesign pass.
- **Unified system** — Components share tokens so the UI stays consistent.
- **Easy to retheme** — Override CSS variables; keep structure and behavior.

## RTL First-class

Direction is a first-class concern, not a docs-only demo.

- Prefer logical properties and Tailwind logical utilities (\`ms\` / \`me\` / \`ps\` / \`pe\` / \`start\` / \`end\`) over physical \`left\` / \`right\`.
- Use \`gap\` for icon and control spacing so rows mirror correctly under \`dir="rtl"\`.
- Docs include an LTR/RTL toggle so you can verify compositions live.

Full translation infrastructure is out of scope for v1 — layout direction is the promise.

## AI-Ready

Open code, a consistent composition model, and markdown docs make nk workable with AI tools.

- Copy this page as markdown, or open it in ChatGPT / Claude with the docs URL in context.
- View the raw page at [\`/docs.md\`](/docs.md).
- Installed source under \`components/ui\` is what models should edit — the same files you ship.

An AI that learns your Breadcrumb or Button patterns can suggest variants or new components that fit the rest of the kit.
`

/**
 * In-page TOC anchors for the Introduction article.
 */
export const introductionToc = [
  { id: "open-code", title: "Open Code" },
  { id: "composition", title: "Composition" },
  { id: "distribution", title: "Distribution" },
  { id: "calm-defaults", title: "Calm Defaults" },
  { id: "rtl-first-class", title: "RTL First-class" },
  { id: "ai-ready", title: "AI-Ready" },
] as const
