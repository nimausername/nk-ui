/**
 * Button component docs — markdown for Copy Page / AI.
 */

export const buttonDocsTitle = "Button"

export const buttonDocsDescription =
  "Base UI behavior with nk black/white styles. Core Button covers variants, sizes, and loading. Related: Progress Button for download progress."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const buttonDocsUpdatedAt = "2026-11-01"

export const buttonDocsMarkdown = `# Button

${buttonDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/button
\`\`\`

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Continue</Button>
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Themes with nk black/white CSS variables (light/dark).
- Live previews (variants, sizes, loading, RTL) are on the docs page.
- For download progress, see [\`Progress Button\`](/docs/composites/progress-button) under Composites (\`@nk/progress-button\`).
`
