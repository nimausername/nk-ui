/**
 * Input Group component docs — markdown for Copy Page / AI.
 */

export const inputGroupDocsTitle = "Input Group"

export const inputGroupDocsDescription =
  "Put a prefix, suffix, icon, or button inside the field border."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const inputGroupDocsUpdatedAt = "2026-11-24"

export const inputGroupDocsMarkdown = `# Input Group

${inputGroupDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/input-group
\`\`\`

## Usage

\`\`\`tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput aria-label="Website" placeholder="example.com" />
    </InputGroup>
  )
}
\`\`\`

## Notes

- \`InputGroup\` draws the border and the focus ring. \`InputGroupInput\` and \`InputGroupTextarea\` stay borderless inside it.
- \`InputGroupAddon\` defaults to the start. Use \`align="inline-end"\` for a suffix, or \`block-start\` / \`block-end\` for a row above or below a textarea.
- Padding is logical (\`ps\` / \`pe\`), so the addon stays on the correct side in RTL.
- Clicking the addon focuses the field. Clicks on a button or link stay on that control.
- \`InputGroupButton\` is a small button for the addon. \`InputGroupText\` is static text.
- Failed and approved rings follow \`aria-invalid\`, \`data-invalid\`, and \`data-valid\` on the control.
- Live previews (prefix, icon, button, shortcut, note) are on the docs page.
`
