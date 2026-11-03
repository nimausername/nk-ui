/**
 * Separator component docs — markdown for Copy Page / AI.
 */

export const separatorDocsTitle = "Separator"

export const separatorDocsDescription =
  "Accessible divider on Base UI — horizontal or vertical between content."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const separatorDocsUpdatedAt = "2026-11-04"

export const separatorDocsMarkdown = `# Separator

${separatorDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/separator
\`\`\`

## Usage

\`\`\`tsx
import { Separator } from "@/components/ui/separator"

export function Example() {
  return <Separator />
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Use \`orientation="vertical"\` inside flex rows (give the parent a height).
- Live previews are on the docs page.
`
