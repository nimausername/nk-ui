"use client"

import { useState } from "react"

import { CommandEmptyIllustration } from "@/components/docs/command-previews/empty-illustration"
import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

/**
 * CommandEmpty when the filter matches nothing — icon + short copy.
 */
const CommandEmptyPreview = () => {
  const [search, setSearch] = useState("zzzz")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Empty</h2>
      <p className="text-sm text-muted-foreground">
        <code className="rounded bg-muted px-1 text-xs">CommandEmpty</code>{" "}
        when nothing matches. Keep it light — an icon and one line of copy.
        Clear the search to see items again.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"
import { SearchX } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function CommandEmptyDemo() {
  const [search, setSearch] = useState("zzzz")

  return (
    <Command className="rounded-lg border border-border">
      <CommandInput
        value={search}
        onValueChange={setSearch}
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty className="flex flex-col items-center justify-center gap-2 py-10">
          <SearchX
            aria-hidden
            strokeWidth={1.5}
            className="size-10 text-muted-foreground"
          />
          <p className="text-sm text-muted-foreground">No results found.</p>
        </CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Settings</CommandItem>
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
                value={search}
                onValueChange={setSearch}
                placeholder={
                  direction === "rtl"
                    ? "یک دستور تایپ کنید یا جستجو کنید..."
                    : "Type a command or search..."
                }
              />
              <CommandList>
                <CommandEmpty className="flex flex-col items-center justify-center gap-2 py-10">
                  <CommandEmptyIllustration />
                  <p className="text-sm text-muted-foreground">
                    {direction === "rtl"
                      ? "نتیجه‌ای پیدا نشد."
                      : "No results found."}
                  </p>
                </CommandEmpty>
                <CommandGroup
                  heading={direction === "rtl" ? "پیشنهادها" : "Suggestions"}
                >
                  <CommandItem>
                    {direction === "rtl" ? "تقویم" : "Calendar"}
                  </CommandItem>
                  <CommandItem>
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

export { CommandEmptyPreview }
