"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

/**
 * Drive the highlighted row with value / onValueChange.
 */
const CommandControlledPreview = () => {
  const [value, setValue] = useState("calendar")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Controlled selection</h2>
      <p className="text-sm text-muted-foreground">
        Drive the highlighted row with{" "}
        <code className="rounded bg-muted px-1 text-xs">value</code> /{" "}
        <code className="rounded bg-muted px-1 text-xs">onValueChange</code>.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function CommandControlled() {
  const [value, setValue] = useState("calendar")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button type="button" size="sm" variant="outline" onClick={() => setValue("calendar")}>
          Highlight Calendar
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={() => setValue("settings")}>
          Highlight Settings
        </Button>
      </div>
      <Command value={value} onValueChange={setValue} className="rounded-lg border border-border">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">Calendar</CommandItem>
            <CommandItem value="emoji">Search Emoji</CommandItem>
            <CommandItem value="settings">Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex w-full max-w-md flex-col gap-3" dir={direction}>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setValue("calendar")}
              >
                {direction === "rtl" ? "هایلایت تقویم" : "Highlight Calendar"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setValue("settings")}
              >
                {direction === "rtl"
                  ? "هایلایت تنظیمات"
                  : "Highlight Settings"}
              </Button>
            </div>
            <Command
              value={value}
              onValueChange={setValue}
              className="rounded-lg border border-border"
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
                  {direction === "rtl"
                    ? "نتیجه‌ای پیدا نشد."
                    : "No results found."}
                </CommandEmpty>
                <CommandGroup
                  heading={direction === "rtl" ? "پیشنهادها" : "Suggestions"}
                >
                  <CommandItem value="calendar">
                    {direction === "rtl" ? "تقویم" : "Calendar"}
                  </CommandItem>
                  <CommandItem value="emoji">
                    {direction === "rtl" ? "جستجوی ایموجی" : "Search Emoji"}
                  </CommandItem>
                  <CommandItem value="settings">
                    {direction === "rtl" ? "تنظیمات" : "Settings"}
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

export { CommandControlledPreview }
