/**
 * Progress component docs — markdown for Copy Page / AI.
 */

export const progressDocsTitle = "Progress"

export const progressDocsDescription =
  "Task completion bar on Base UI — label, value text, track sizes, custom max, and indeterminate."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const progressDocsUpdatedAt = "2026-11-04"

export const progressDocsMarkdown = `# Progress

${progressDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/progress
\`\`\`

## Usage

\`\`\`tsx
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

export function Example() {
  return (
    <Progress value={40}>
      <div className="flex justify-between gap-2">
        <ProgressLabel>Upload</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Parts: \`Progress\` / \`ProgressLabel\` / \`ProgressValue\` / \`ProgressTrack\` / \`ProgressIndicator\`.
- Pass \`value={null}\` for indeterminate; \`value={100}\` marks complete.
- Customize scale with \`min\` / \`max\`. Track thickness via \`className\` on \`ProgressTrack\`.
- For button download progress, see [\`Progress Button\`](/docs/composites/progress-button).
- Live previews are on the docs page.
`
