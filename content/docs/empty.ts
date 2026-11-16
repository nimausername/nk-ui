/**
 * Empty component docs — markdown for Copy Page / AI.
 */

export const emptyDocsTitle = "Empty"

export const emptyDocsDescription =
  "Composable empty state for zero-data screens — media, title, description, and actions. Use when a list, table, or panel has nothing to show yet."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const emptyDocsUpdatedAt = "2026-11-16"

export const emptyDocsMarkdown = `# Empty

${emptyDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/empty
\`\`\`

## Composition model

- \`Empty\` — centered shell (\`border\` draws a dashed outline)
- \`EmptyHeader\` — media + title + description cluster
- \`EmptyMedia\` — icon tile (\`variant="icon"\`) or bare illustration
- \`EmptyTitle\` / \`EmptyDescription\` — heading and supporting copy
- \`EmptyContent\` — actions, search, or extra controls

## Usage

\`\`\`tsx
import { FolderOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create your first project to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" size="sm">
          Create project
        </Button>
      </EmptyContent>
    </Empty>
  )
}
\`\`\`

## Notes

- Display composition only — pair with your data layer to decide when to render.
- Prefer open-source artwork in \`EmptyMedia\`: [unDraw](https://undraw.co/license) SVGs and a [Lottie Simple License](https://lottiefiles.com/page/license/) empty-state animation ship under \`/illustrations\` (see \`LICENSE.md\`). Play Lottie with \`@lottiefiles/dotlottie-react\`; honor \`prefers-reduced-motion\`.
- For command-palette no-matches, prefer [\`CommandEmpty\`](/docs/components/command).
- For table bodies, keep the header and place \`Empty\` in a full-width cell (see [\`Table\`](/docs/components/table)).
- Live previews (basic, outline, no results, in Card, icon media, animated) are on the docs page.
`
