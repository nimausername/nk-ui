/**
 * Context Menu component docs — markdown for Copy Page / AI.
 */

export const contextMenuDocsTitle = "Context Menu"

export const contextMenuDocsDescription =
  "Pointer menu on Base UI — right click or long press. Items, groups, checkboxes, radios, shortcuts, and nested submenus."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const contextMenuDocsUpdatedAt = "2026-11-06"

export const contextMenuDocsMarkdown = `# Context Menu

${contextMenuDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/context-menu
\`\`\`

## Composition model

- \`ContextMenu\` — root
- \`ContextMenuTrigger\` — surface that opens on right click / long press
- \`ContextMenuContent\` — portaled surface (positions at the pointer by default)
- \`ContextMenuItem\` / \`ContextMenuLinkItem\` — optional \`variant="destructive"\`, \`inset\`, \`disabled\`
- \`ContextMenuGroup\` / \`ContextMenuLabel\` — Label must sit inside Group
- \`ContextMenuCheckboxItem\` / \`ContextMenuRadioGroup\` / \`ContextMenuRadioItem\`
- \`ContextMenuSeparator\` / \`ContextMenuShortcut\`
- \`ContextMenuSub\` / \`ContextMenuSubTrigger\` / \`ContextMenuSubContent\`

## Usage

\`\`\`tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/context-menu\`).
- Sibling to [Dropdown Menu](/docs/components/dropdown-menu) — same item API, pointer activation instead of a click trigger.
- Themes with nk black/white CSS variables (light/dark), including \`popover\`.
- Submenu chevrons use logical \`ms-auto\` and flip in RTL.
- Prefer pairing with a visible [Dropdown Menu](/docs/components/dropdown-menu) when the same actions need a primary control.
- Live previews (Actions / Selection / Nested / Patterns tabs, RTL) are on the docs page.
`
