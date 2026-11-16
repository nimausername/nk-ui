/**
 * Command component docs — markdown for Copy Page / AI.
 */

export const commandDocsTitle = "Command"

export const commandDocsDescription =
  "Filterable command menu on cmdk — Dialog palettes, inline lists, Popover pickers, groups, shortcuts, keywords, loading, and empty states."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const commandDocsUpdatedAt = "2026-11-16"

export const commandDocsMarkdown = `# Command

${commandDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/command
\`\`\`

Pulls \`cmdk\`, Lucide, and registry deps \`@nk/dialog\` (and its Button chain). Popover demos also need \`@nk/popover\`.

## Composition model

- \`Command\` — cmdk root (\`value\` / \`onValueChange\` / \`shouldFilter\` / \`filter\` / \`loop\`)
- \`CommandDialog\` — Dialog palette shell (\`open\` / \`onOpenChange\`, sr-only title)
- \`CommandInput\` — search field with leading icon
- \`CommandList\` — scrollable results
- \`CommandEmpty\` — no-match message
- \`CommandLoading\` — async progress row
- \`CommandGroup\` — section with optional \`heading\`
- \`CommandItem\` — selectable row (\`onSelect\`, \`keywords\`, \`disabled\`, \`value\`)
- \`CommandSeparator\` — divider between groups
- \`CommandShortcut\` — trailing keyboard hint (logical \`ms-auto\`)

## Patterns

| Pattern | When to use |
| --- | --- |
| Command palette | App-wide actions via Dialog + ⌘K |
| Shortcuts | Show accelerator hints on rows |
| Groups and icons | Sectioned action menus |
| Scrollable | Long catalogs; list scrolls, input stays |
| Disabled items | Visible but non-selectable rows |
| Keywords | Match aliases beyond the label |
| Empty | No filter matches |
| Loading | Async search with \`shouldFilter={false}\` |
| Controlled selection | Drive highlight with \`value\` |
| In Popover | Searchable picker (or use Combobox) |
| Descriptions | Secondary muted line under the label |
| Destructive | Danger actions with destructive tokens |
| Inline | Embedded list without a dialog |

## Usage

\`\`\`tsx
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function Example() {
  return (
    <Command className="rounded-lg border border-border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Calendar
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>Search Emoji</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
\`\`\`

## Command palette (Dialog)

\`\`\`tsx
"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setOpen(false)}>New file</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
\`\`\`

## Notes

- Built on [cmdk](https://github.com/dip/cmdk); \`CommandDialog\` uses nk Dialog (Base UI).
- Prefer logical spacing (\`ms-auto\` on shortcuts) so RTL layouts mirror correctly.
- Pass \`keywords\` on \`CommandItem\` when the visible label is not enough for filtering.
- Selection styles use \`data-[selected=true]:\` because cmdk sets \`data-selected="false"\` on idle rows.
- Empty states stay light: compose an icon (e.g. Lucide \`SearchX\`) and one line of copy inside \`CommandEmpty\`.
- For form value pickers, prefer [@nk/combobox](/docs/components/combobox); Popover + Command is the free composition path.
`
