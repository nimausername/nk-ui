/**
 * Spinner component docs — markdown for Copy Page / AI.
 */

export const spinnerDocsTitle = "Spinner"

export const spinnerDocsDescription =
  "Indeterminate loading mark. Size and color come from className — use it beside copy, inside buttons, and in async lists."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const spinnerDocsUpdatedAt = "2026-11-24"

export const spinnerDocsMarkdown = `# Spinner

${spinnerDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/spinner
\`\`\`

## Usage

\`\`\`tsx
import { Spinner } from "@/components/ui/spinner"

export function Example() {
  return <Spinner />
}
\`\`\`

## Notes

- Built on Lucide. \`icon\` picks the glyph: \`loader\`, \`loader-2\` (default), \`circle\`, \`pinwheel\`, \`dashed\`, \`refresh\`. Default size is \`size-4\`; color follows \`currentColor\`.
- Announces “Loading” (\`role="status"\`). Pass \`aria-label\` for a more specific name, or \`aria-hidden\` when adjacent text already explains the wait.
- [\`Button\`](/docs/components/button) \`loading\` keeps its own icon so the button install stays self-contained. Compose \`Spinner\` when you need the mark outside a button.
- [\`Command\`](/docs/components/command) loading rows use \`Spinner\` inside \`CommandLoading\`.
- For layout placeholders while content shape is known, use [\`Skeleton\`](/docs/components/skeleton).
- Live previews (icons, sizes, colors, inline, buttons, badges, input, empty, overlays, centered) are on the docs page.
`
