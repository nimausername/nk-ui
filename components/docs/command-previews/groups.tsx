"use client"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
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
  CommandShortcut,
} from "@/components/ui/command"

/**
 * Icons, separators, and multiple headed groups.
 */
const CommandGroupsPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Groups and icons</h2>
      <p className="text-sm text-muted-foreground">
        Icons, separators, and multiple headed groups.
      </p>
      <ComponentPreview
        code={`"use client"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
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
  CommandShortcut,
} from "@/components/ui/command"

export function CommandGroups() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open groups
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => setOpen(false)}>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => setOpen(false)}>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
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
              direction === "rtl" ? "باز کردن گروه‌ها" : "Open groups"
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
                  <Calendar aria-hidden="true" />
                  <span>{direction === "rtl" ? "تقویم" : "Calendar"}</span>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Smile aria-hidden="true" />
                  <span>
                    {direction === "rtl" ? "جستجوی ایموجی" : "Search Emoji"}
                  </span>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Calculator aria-hidden="true" />
                  <span>
                    {direction === "rtl" ? "ماشین‌حساب" : "Calculator"}
                  </span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup
                heading={direction === "rtl" ? "تنظیمات" : "Settings"}
              >
                <CommandItem onSelect={() => setOpen(false)}>
                  <User aria-hidden="true" />
                  <span>{direction === "rtl" ? "پروفایل" : "Profile"}</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <CreditCard aria-hidden="true" />
                  <span>{direction === "rtl" ? "صورتحساب" : "Billing"}</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <Settings aria-hidden="true" />
                  <span>{direction === "rtl" ? "تنظیمات" : "Settings"}</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandGroupsPreview }
