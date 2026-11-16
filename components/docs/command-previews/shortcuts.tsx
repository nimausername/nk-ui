"use client"

import { useState } from "react"

import { TriggeredPalette } from "@/components/docs/command-previews/shared"
import { ComponentPreview } from "@/components/docs/component-preview"
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"

/**
 * Trailing keyboard hints with logical end alignment.
 */
const CommandShortcutsPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Shortcuts</h2>
      <p className="text-sm text-muted-foreground">
        Trailing keyboard hints with logical end alignment (
        <code className="rounded bg-muted px-1 text-xs">CommandShortcut</code>
        ).
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
  CommandShortcut,
} from "@/components/ui/command"

export function CommandShortcuts() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open with shortcuts
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setOpen(false)}>
              New file
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Open
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Settings
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
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
              direction === "rtl"
                ? "باز کردن با میانبرها"
                : "Open with shortcuts"
            }
          >
            <CommandInput
              placeholder={
                direction === "rtl"
                  ? "یک دستور تایپ کنید یا جستجو کنید..."
                  : "Type a command or search..."
              }
            />
            <CommandList>
              <CommandEmpty>
                {direction === "rtl" ? "نتیجه‌ای پیدا نشد." : "No results found."}
              </CommandEmpty>
              <CommandGroup
                heading={direction === "rtl" ? "اقدامات" : "Actions"}
              >
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "فایل جدید" : "New file"}
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "باز کردن" : "Open"}
                  <CommandShortcut>⌘O</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "تنظیمات" : "Settings"}
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandShortcutsPreview }
