"use client"

import { useState } from "react"

import {
  scrollableCommands,
  TriggeredPalette,
} from "@/components/docs/command-previews/shared"
import { ComponentPreview } from "@/components/docs/component-preview"
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

/**
 * Long lists that scroll inside CommandList while the input stays pinned.
 */
const CommandScrollablePreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Scrollable</h2>
      <p className="text-sm text-muted-foreground">
        Long lists scroll inside{" "}
        <code className="rounded bg-muted px-1 text-xs">CommandList</code> while
        the input stays pinned.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const groups = [
  { group: "Navigation", items: ["Home", "Projects", "Inbox"] },
  { group: "Actions", items: ["New file", "Upload", "Share", "Archive"] },
  { group: "Account", items: ["Profile", "Billing", "Team", "Security"] },
  { group: "Tools", items: ["Calculator", "Theme", "Shortcuts", "API keys"] },
]

export function CommandScrollable() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open scrollable
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search commands..." />
        <CommandList className="max-h-72">
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((section) => (
            <CommandGroup key={section.group} heading={section.group}>
              {section.items.map((item) => (
                <CommandItem key={item} onSelect={() => setOpen(false)}>
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}`}
      >
        {(direction) => (
          <TriggeredPalette
            open={open}
            onOpenChange={setOpen}
            direction={direction}
            triggerLabel={
              direction === "rtl" ? "باز کردن فهرست بلند" : "Open scrollable"
            }
          >
            <CommandInput
              placeholder={
                direction === "rtl" ? "جستجوی دستورها..." : "Search commands..."
              }
            />
            <CommandList className="max-h-72">
              <CommandEmpty>
                {direction === "rtl" ? "نتیجه‌ای پیدا نشد." : "No results found."}
              </CommandEmpty>
              {scrollableCommands.map((section) => (
                <CommandGroup key={section.group} heading={section.group}>
                  {section.items.map((item) => (
                    <CommandItem key={item} onSelect={() => setOpen(false)}>
                      {item}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandScrollablePreview }
