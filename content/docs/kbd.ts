/**
 * Kbd component docs — markdown for Copy Page / AI.
 */

export const kbdDocsTitle = "Kbd"

export const kbdDocsDescription =
  "Keyboard keycaps for shortcuts. Use one Kbd per key, and KbdGroup for a chord."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const kbdDocsUpdatedAt = "2026-11-24"

export const kbdDocsMarkdown = `# Kbd

${kbdDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/kbd
\`\`\`

## Usage

\`\`\`tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function Example() {
  return (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  )
}
\`\`\`

## Notes

- \`Kbd\` is one key. \`KbdGroup\` is the chord.
- Inside a tooltip, the keycap switches to a lighter fill so it stays readable on the inverted surface.
- Put a group inside [\`CommandShortcut\`](/docs/components/command) for palette hints. Menu shortcuts (\`DropdownMenuShortcut\`, \`MenubarShortcut\`, \`ContextMenuShortcut\`) accept the same children.
- Live previews (keys, group, icon, button, tooltip, command) are on the docs page.
`
