/**
 * Alert component docs — markdown for Copy Page / AI.
 */

export const alertDocsTitle = "Alert"

export const alertDocsDescription =
  "Inline callout for status messages — title, description, action, and optional icon."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const alertDocsUpdatedAt = "2026-11-04"

export const alertDocsMarkdown = `# Alert

${alertDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/alert
\`\`\`

## Usage

\`\`\`tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function Example() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Something changed in your workspace.</AlertDescription>
    </Alert>
  )
}
\`\`\`

## Notes

- Parts: \`Alert\` / \`AlertTitle\` / \`AlertDescription\` / \`AlertAction\`.
- Variants: \`default\`, \`soft\`, \`destructive\`, \`success\`.
- Place a Lucide (or other) icon as the first child for the leading icon column.
- Compose buttons inside \`AlertAction\`.
- This is an inline callout — not a modal Alert Dialog.
- Live previews (variants, actions, long copy, RTL) are on the docs page.
`
