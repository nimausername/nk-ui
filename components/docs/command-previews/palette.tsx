"use client"

import { useEffect, useState } from "react"

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
 * App-wide command palette opened via button or ⌘K / Ctrl+K.
 */
const CommandPalettePreview = () => {
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
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Command palette</h2>
      <p className="text-sm text-muted-foreground">
        Opens on demand. Press{" "}
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
          ⌘K
        </kbd>{" "}
        /{" "}
        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
          Ctrl+K
        </kbd>{" "}
        or use the button.
      </p>
      <ComponentPreview
        code={`"use client"

import { useEffect, useState } from "react"

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
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => setOpen(false)}>Calendar</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Search Emoji
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => setOpen(false)}>Profile</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Billing</CommandItem>
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
                ? "باز کردن پالت دستور"
                : "Open command palette"
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
                heading={direction === "rtl" ? "پیشنهادها" : "Suggestions"}
              >
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "تقویم" : "Calendar"}
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "جستجوی ایموجی" : "Search Emoji"}
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "ماشین‌حساب" : "Calculator"}
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup
                heading={direction === "rtl" ? "تنظیمات" : "Settings"}
              >
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "پروفایل" : "Profile"}
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  {direction === "rtl" ? "صورتحساب" : "Billing"}
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

export { CommandPalettePreview }
