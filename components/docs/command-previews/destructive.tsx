"use client"

import { LogOut, Trash2 } from "lucide-react"
import { useState } from "react"

import { TriggeredPalette } from "@/components/docs/command-previews/shared"
import { ComponentPreview } from "@/components/docs/component-preview"
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

/**
 * Danger-zone action styled with destructive tokens.
 */
const CommandDestructivePreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Destructive</h2>
      <p className="text-sm text-muted-foreground">
        Style a dangerous action with destructive text tokens.
      </p>
      <ComponentPreview
        code={`"use client"

import { LogOut, Trash2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandDestructive() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open destructive
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Account">
            <CommandItem onSelect={() => setOpen(false)}>
              <LogOut />
              Log out
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Danger zone">
            <CommandItem
              className="text-destructive data-[selected=true]:bg-destructive/10 data-[selected=true]:text-destructive"
              onSelect={() => setOpen(false)}
            >
              <Trash2 />
              Delete project
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
              direction === "rtl" ? "باز کردن مخرب" : "Open destructive"
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
              <CommandGroup heading={direction === "rtl" ? "حساب" : "Account"}>
                <CommandItem onSelect={() => setOpen(false)}>
                  <LogOut aria-hidden="true" />
                  {direction === "rtl" ? "خروج" : "Log out"}
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup
                heading={direction === "rtl" ? "منطقه خطر" : "Danger zone"}
              >
                <CommandItem
                  className="text-destructive data-[selected=true]:bg-destructive/10 data-[selected=true]:text-destructive"
                  onSelect={() => setOpen(false)}
                >
                  <Trash2 aria-hidden="true" />
                  {direction === "rtl" ? "حذف پروژه" : "Delete project"}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandDestructivePreview }
