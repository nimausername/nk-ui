"use client"

import { Moon, Sun } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
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

/**
 * Embedded command list without a dialog shell.
 */
const CommandInlinePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Inline</h2>
      <p className="text-sm text-muted-foreground">
        Embed the list without a dialog — useful in sidebars or dense tools.
      </p>
      <ComponentPreview
        code={`import { Moon, Sun } from "lucide-react"

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

export function CommandInline() {
  return (
    <Command className="rounded-lg border border-border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Sun />
            Light theme
          </CommandItem>
          <CommandItem>
            <Moon />
            Dark theme
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>Billing</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`}
      >
        {(direction) => (
          <div className="w-full max-w-md" dir={direction}>
            <Command className="rounded-lg border border-border">
              <CommandInput
                placeholder={
                  direction === "rtl"
                    ? "یک دستور تایپ کنید یا جستجو کنید..."
                    : "Type a command or search..."
                }
              />
              <CommandList>
                <CommandEmpty>
                  {direction === "rtl"
                    ? "نتیجه‌ای پیدا نشد."
                    : "No results found."}
                </CommandEmpty>
                <CommandGroup
                  heading={direction === "rtl" ? "پیشنهادها" : "Suggestions"}
                >
                  <CommandItem>
                    <Sun aria-hidden="true" />
                    {direction === "rtl" ? "تم روشن" : "Light theme"}
                  </CommandItem>
                  <CommandItem>
                    <Moon aria-hidden="true" />
                    {direction === "rtl" ? "تم تاریک" : "Dark theme"}
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup
                  heading={direction === "rtl" ? "تنظیمات" : "Settings"}
                >
                  <CommandItem>
                    {direction === "rtl" ? "پروفایل" : "Profile"}
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandInlinePreview }
