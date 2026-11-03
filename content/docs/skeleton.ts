/**
 * Skeleton component docs — markdown for Copy Page / AI.
 */

export const skeletonDocsTitle = "Skeleton"

export const skeletonDocsDescription =
  "Pulse placeholder for loading UI — size and shape via className."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const skeletonDocsUpdatedAt = "2026-11-04"

export const skeletonDocsMarkdown = `# Skeleton

${skeletonDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/skeleton
\`\`\`

## Usage

\`\`\`tsx
import { Skeleton } from "@/components/ui/skeleton"

export function Example() {
  return <Skeleton className="h-4 w-32" />
}
\`\`\`

## Notes

- Themes with nk muted tokens (light/dark).
- Compose multiple Skeletons for card / list placeholders.
- Live previews are on the docs page.
`
