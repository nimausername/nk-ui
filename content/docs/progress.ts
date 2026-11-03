/**
 * Progress component docs — markdown for Copy Page / AI.
 */

export const progressDocsTitle = "Progress"

export const progressDocsDescription =
  "Task completion bar on Base UI — label, value text, track, and indicator."

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
- Pass \`value={null}\` for an indeterminate state.
- For button download progress, see [\`Progress Button\`](/docs/composites/progress-button).
`
