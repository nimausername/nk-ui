/**
 * Toggle Group component docs — markdown for Copy Page / AI.
 */

export const toggleGroupDocsTitle = "Toggle Group"

export const toggleGroupDocsDescription =
  "Shared pressed state for toggles — single or multiple selection on Base UI."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const toggleGroupDocsUpdatedAt = "2026-11-04"

export const toggleGroupDocsMarkdown = `# Toggle Group

${toggleGroupDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/toggle-group
\`\`\`

## Usage

\`\`\`tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function Example() {
  return (
    <ToggleGroup defaultValue={["left"]} aria-label="Align">
      <ToggleGroupItem value="left" aria-label="Left">
        L
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right">
        R
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Installs \`@nk/toggle\` for shared variants.
- Set \`multiple\` for multi-select. Live previews are on the docs page.
`
