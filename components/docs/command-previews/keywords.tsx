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
 * Extra filter terms via CommandItem keywords.
 */
const CommandKeywordsPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Keywords</h2>
      <p className="text-sm text-muted-foreground">
        Extra filter terms via{" "}
        <code className="rounded bg-muted px-1 text-xs">keywords</code> — try
        typing{" "}
        <code className="rounded bg-muted px-1 text-xs">preferences</code>.
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

export function CommandKeywords() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open keywords demo
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Try “preferences”..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Settings">
            <CommandItem
              keywords={["preferences", "config", "options"]}
              onSelect={() => setOpen(false)}
            >
              Settings
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Profile</CommandItem>
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
                ? "باز کردن نمونه کلیدواژه"
                : "Open keywords demo"
            }
          >
            <CommandInput
              placeholder={
                direction === "rtl"
                  ? "«preferences» را امتحان کنید..."
                  : "Try “preferences”..."
              }
            />
            <CommandList>
              <CommandEmpty>
                {direction === "rtl" ? "نتیجه‌ای پیدا نشد." : "No results found."}
              </CommandEmpty>
              <CommandGroup
                heading={direction === "rtl" ? "تنظیمات" : "Settings"}
              >
                <CommandItem
                  keywords={["preferences", "config", "options"]}
                  onSelect={() => setOpen(false)}
                >
                  {direction === "rtl" ? "تنظیمات" : "Settings"}
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "پروفایل" : "Profile"}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandKeywordsPreview }
