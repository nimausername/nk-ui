/**
 * Badge component docs — markdown for Copy Page / AI.
 */

export const badgeDocsTitle = "Badge"

export const badgeDocsDescription =
  "Compact status and count labels — default, secondary, soft, outline, and destructive."

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

- Variants: \`default\`, \`secondary\`, \`soft\`, \`outline\`, \`destructive\`.
- Use \`asChild\` to render as a link.
- Live previews (variants, icons, RTL) are on the docs page.
`
