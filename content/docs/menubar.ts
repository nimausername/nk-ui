/**
 * Menubar component docs — markdown for Copy Page / AI.
 */

export const menubarDocsTitle = "Menubar"

export const menubarDocsDescription =
  "A persistent application menu bar on Base UI Menubar + nk Dropdown Menu — workspace actions, toggles, radios, nested flyouts, and registry-studio patterns."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const menubarDocsUpdatedAt = "2026-11-06"

export const menubarDocsMarkdown = `# Menubar

${menubarDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/menubar
\`\`\`

Pulls in \`@nk/dropdown-menu\` automatically.

## Composition model

Use the following composition to build a \`Menubar\` (aligned with shadcn / Base UI):

\`\`\`text
Menubar
├── MenubarMenu
│   ├── MenubarTrigger
│   └── MenubarContent
│       ├── MenubarGroup
│       │   ├── MenubarLabel
│       │   ├── MenubarItem
│       │   └── MenubarLinkItem
│       ├── MenubarSeparator
│       ├── MenubarCheckboxItem
│       ├── MenubarRadioGroup
│       │   └── MenubarRadioItem
│       └── MenubarSub
│           ├── MenubarSubTrigger
│           └── MenubarSubContent
└── MenubarMenu
    ├── MenubarTrigger
    └── MenubarContent
\`\`\`

## Usage

\`\`\`tsx
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Project</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New canvas <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Duplicate</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Rename…</MenubarItem>
            <MenubarItem>Archive</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
\`\`\`

## Notes

- Shell metrics follow shadcn base-nova (\`h-8\`, \`p-[3px]\`, compact triggers); popup surfaces reuse nk [Dropdown Menu](/docs/components/dropdown-menu).
- Built on Base UI (\`@base-ui/react/menubar\`). Hovering another trigger while a menu is open switches menus.
- Prefer \`MenubarLinkItem\` for in-menu navigation; \`variant="destructive"\` for dangerous rows.
- Root props: \`orientation\` (horizontal / vertical), \`disabled\`, \`modal\` (default true), \`loopFocus\` (default true), and per-menu \`open\` / \`onOpenChange\`.
- Live previews (Preview / Selection / Nested / Patterns / Advanced, RTL) are on the docs page — including an nk registry-studio pattern.
`
