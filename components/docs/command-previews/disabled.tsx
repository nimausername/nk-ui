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
} from "@/components/ui/command"

/**
 * Disabled CommandItem rows stay visible but cannot be selected.
 */
const CommandDisabledPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Disabled items</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">disabled</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">CommandItem</code> — rows
        stay visible but cannot be selected.
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

export function CommandDisabled() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open disabled demo
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Workspace">
            <CommandItem onSelect={() => setOpen(false)}>Open</CommandItem>
            <CommandItem disabled>Invite (coming soon)</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Settings</CommandItem>
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
                ? "باز کردن نمونه غیرفعال"
                : "Open disabled demo"
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
                heading={direction === "rtl" ? "فضای کاری" : "Workspace"}
              >
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "باز کردن" : "Open"}
                </CommandItem>
                <CommandItem disabled>
                  {direction === "rtl"
                    ? "دعوت (به‌زودی)"
                    : "Invite (coming soon)"}
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "تنظیمات" : "Settings"}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandDisabledPreview }
