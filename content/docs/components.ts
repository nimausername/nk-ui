import { componentItems } from "@/config/docs"

/**
 * Components index docs — markdown for Copy Page / AI.
 */

export const componentsDocsTitle = "Components"

export const componentsDocsDescription =
  "Core installable primitives. Open a component for API notes, previews, and its shadcn add command. Composed multi-part pieces live under Composites."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const componentsDocsUpdatedAt = "2026-11-01"

const componentListMarkdown = componentItems
  .map((item) => {
    const description = item.description ? ` — ${item.description}` : ""
    return `- [${item.title}](${item.href})${description}`
  })
  .join("\n")

export const componentsDocsMarkdown = `# Components

${componentsDocsDescription}

## Catalog

${componentListMarkdown}

## Registry

New primitives are added here as they ship. For composed pieces built on several components, see [Composites](/docs/composites). Registry setup stays the same — see [Installation](/docs/installation).
`
