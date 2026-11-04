/**
 * Badge component docs — markdown for Copy Page / AI.
 */

export const badgeDocsTitle = "Badge"

export const badgeDocsDescription =
  "Compact status and count labels — variants, sizes, icons, and asChild links."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const badgeDocsUpdatedAt = "2026-11-04"

export const badgeDocsMarkdown = `# Badge

${badgeDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/badge
\`\`\`

## Usage

\`\`\`tsx
import { Badge } from "@/components/ui/badge"

export function Example() {
  return <Badge>New</Badge>
}
\`\`\`

## Notes

- Variants: \`default\`, \`secondary\`, \`soft\`, \`outline\`, \`destructive\`, \`success\`.
- Sizes: \`sm\`, \`default\`, \`lg\`.
- Use \`asChild\` to render as a link.
- Pill shape via \`className="rounded-full"\`.
- Live previews (variants, sizes, icons, counts, RTL) are on the docs page.
`
