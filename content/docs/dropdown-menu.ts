/**
 * Dropdown Menu component docs — markdown for Copy Page / AI.
 */

export const dropdownMenuDocsTitle = "Dropdown Menu"

export const dropdownMenuDocsDescription =
  "Composable action menu on Base UI Menu. Items, links, groups, checkboxes, radios, separators, shortcuts, inset rows, and nested submenus — with default and destructive tones."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const dropdownMenuDocsUpdatedAt = "2026-11-02"

export const dropdownMenuDocsMarkdown = `# Dropdown Menu

${dropdownMenuDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/dropdown-menu
\`\`\`

## Composition model

- \`DropdownMenu\` — root
- \`DropdownMenuTrigger\` — compose with Button via \`render={<Button />}\`
- \`DropdownMenuContent\` — portaled surface (\`align\`, \`side\`, \`sideOffset\`)
- \`DropdownMenuItem\` / \`DropdownMenuLinkItem\` — optional \`variant="destructive"\`, \`inset\`, \`disabled\`
- \`DropdownMenuGroup\` / \`DropdownMenuLabel\` — Label must sit inside Group
- \`DropdownMenuCheckboxItem\` / \`DropdownMenuRadioGroup\` / \`DropdownMenuRadioItem\`
- \`DropdownMenuSeparator\` / \`DropdownMenuShortcut\`
- \`DropdownMenuSub\` / \`DropdownMenuSubTrigger\` / \`DropdownMenuSubContent\`

## Usage

\`\`\`tsx
import { User, CreditCard, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
\`\`\`

## Variants & patterns

| Pattern | How |
| --- | --- |
| Default item | \`DropdownMenuItem\` |
| Destructive | \`variant="destructive"\` |
| Disabled | \`disabled\` |
| Icons | Leading Lucide icons as children |
| Shortcuts | \`DropdownMenuShortcut\` |
| Checkboxes | \`DropdownMenuCheckboxItem\` |
| Radios | \`DropdownMenuRadioGroup\` + \`DropdownMenuRadioItem\` |
| Links | \`DropdownMenuLinkItem\` (\`<a>\`, optional \`closeOnClick\`) |
| Inset | \`inset\` on Label / Item / LinkItem |
| Submenu | \`DropdownMenuSub\` + SubTrigger + SubContent |
| Align | \`align="start" \\| "center" \\| "end"\` on Content |

## Notes

- Built on Base UI (\`@base-ui/react/menu\`).
- \`DropdownMenuLabel\` requires a parent \`DropdownMenuGroup\`.
- Submenus open on \`inline-end\` with an 8px gap and never fall back above/below the trigger.
- Chevrons use \`rtl:rotate-180\`; indicators and shortcuts use logical \`end\` / \`ms-auto\`.
- Live previews (basic, icons, shortcuts, destructive, checkboxes, radios, submenu, links, align, complex) are on the docs page.
`
