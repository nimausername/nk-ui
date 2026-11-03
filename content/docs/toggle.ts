/**
 * Toggle component docs — markdown for Copy Page / AI.
 */

export const toggleDocsTitle = "Toggle"

export const toggleDocsDescription =
  "Two-state press button on Base UI — default and outline variants."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const toggleDocsUpdatedAt = "2026-11-04"

export const toggleDocsMarkdown = `# Toggle

${toggleDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/toggle
\`\`\`

## Usage

\`\`\`tsx
import { Toggle } from "@/components/ui/toggle"

export function Example() {
  return <Toggle aria-label="Bold">B</Toggle>
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- For grouped toggles, see [\`Toggle Group\`](/docs/components/toggle-group).
- Live previews are on the docs page.
`
