import { compositeItems } from "@/config/docs"

/**
 * Composites index docs — markdown for Copy Page / AI.
 */

export const compositesDocsTitle = "Composites"

export const compositesDocsDescription =
  "Composed pieces built from several primitives — still installable via @nk, listed separately from the core Components catalog."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const compositesDocsUpdatedAt = "2026-11-02"

const compositeListMarkdown = compositeItems
  .map((item) => {
    const description = item.description ? ` — ${item.description}` : ""
    return `- [${item.title}](${item.href})${description}`
  })
  .join("\n")

export const compositesDocsMarkdown = `# Composites

${compositesDocsDescription}

## Catalog

${compositeListMarkdown}

## Registry

Composites use the same \`@nk\` registry and install pattern as Components — see [Installation](/docs/installation).
`
