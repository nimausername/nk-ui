/**
 * Button Group component docs — markdown for Copy Page / AI.
 */

export const buttonGroupDocsTitle = "Button Group"

export const buttonGroupDocsDescription =
  "Join buttons and fields into one control — rows, stacks, labels, and separators, with logical corners for RTL."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const buttonGroupDocsUpdatedAt = "2026-11-24"

export const buttonGroupDocsMarkdown = `# Button Group

${buttonGroupDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/button-group
\`\`\`

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function Example() {
  return (
    <ButtonGroup>
      <Button type="button" variant="outline">
        Copy
      </Button>
      <Button type="button" variant="outline">
        Paste
      </Button>
    </ButtonGroup>
  )
}
\`\`\`

## Notes

- \`ButtonGroup\` is a \`role="group"\` wrapper. Pass \`orientation="vertical"\` to stack children.
- Horizontal joins use logical \`rounded-s\` / \`rounded-e\` and \`border-s\`, so the shared edge follows writing direction.
- \`ButtonGroupText\` is a muted label. \`asChild\` renders your element instead of a div.
- \`ButtonGroupSeparator\` sits between controls. It is vertical in a row and \`orientation="horizontal"\` in a stack.
- Nest a \`ButtonGroup\` inside another to keep a gap between clusters.
- Pair with Button, Input, Select, or Dropdown Menu. The group does not own those components.
- Live previews (sizes, icons, split actions, fields) are on the docs page.
`
