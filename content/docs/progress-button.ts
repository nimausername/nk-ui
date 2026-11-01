/**
 * Progress Button component docs — markdown for Copy Page / AI.
 */

export const progressButtonDocsTitle = "Progress Button"

export const progressButtonDocsDescription =
  "Controlled download progress on top of Button. Width stays stable when the label swaps — including custom and RTL copy. Listed under Composites as a composed piece."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const progressButtonDocsUpdatedAt = "2026-11-01"

export const progressButtonDocsMarkdown = `# Progress Button

${progressButtonDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/progress-button
\`\`\`

This pulls \`@nk/button\` (and utils) as registry dependencies.

## Usage

\`\`\`tsx
import { ProgressButton } from "@/components/ui/progress-button"

export function Example() {
  return (
    <ProgressButton
      type="button"
      progress={64}
      progressLabel="Downloading"
      completeLabel="Download ready"
      onClick={() => {
        // Fires only when progress is 100
      }}
    />
  )
}
\`\`\`

## Notes

- Pass \`progress\` from 0–100. Below 100 the button is disabled; at 100 it becomes clickable.
- Both labels stay mounted (one invisible) so size does not jump when the text changes.
- Idle / “start download” is composition: use \`Button\` until your job starts, then render \`ProgressButton\`.
- Built on \`@nk/button\`. Themes with the same nk black/white CSS variables.
- Lives in the [Composites](/docs/composites) catalog (composed pieces), not the core Components list.
`
