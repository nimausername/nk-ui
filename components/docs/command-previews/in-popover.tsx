"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

import {
  frameworks,
  frameworksRtl,
} from "@/components/docs/command-previews/shared"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

/**
 * Popover + Command searchable picker (combobox-style composition).
 */
const CommandInPopoverPreview = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">In Popover</h2>
      <p className="text-sm text-muted-foreground">
        Compose Popover + Command for a searchable picker (combobox-style). For
        a dedicated select API, prefer{" "}
        <code className="rounded bg-muted px-1 text-xs">Combobox</code>.
      </p>
      <ComponentPreview
        code={`"use client"

import { Check, ChevronsUpDown } from "lucide-react"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vite", label: "Vite" },
]

export function CommandInPopover() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-56 justify-between"
          />
        }
      >
        {frameworks.find((item) => item.value === value)?.label ??
          "Select framework..."}
        <ChevronsUpDown className="opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(next) => {
                    setValue(next === value ? "" : next)
                    setOpen(false)
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ms-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}`}
      >
        {(direction) => {
          const selectedLabel = frameworks.find((item) => item.value === value)
          return (
            <div dir={direction}>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-56 justify-between"
                    />
                  }
                >
                  {selectedLabel
                    ? direction === "rtl"
                      ? frameworksRtl[selectedLabel.value]
                      : selectedLabel.label
                    : direction === "rtl"
                      ? "انتخاب فریم‌ورک..."
                      : "Select framework..."}
                  <ChevronsUpDown className="opacity-50" aria-hidden="true" />
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0" align="start">
                  <Command>
                    <CommandInput
                      placeholder={
                        direction === "rtl"
                          ? "جستجوی فریم‌ورک..."
                          : "Search framework..."
                      }
                    />
                    <CommandList>
                      <CommandEmpty>
                        {direction === "rtl"
                          ? "فریم‌ورکی پیدا نشد."
                          : "No framework found."}
                      </CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((item) => (
                          <CommandItem
                            key={item.value}
                            value={item.value}
                            keywords={[item.label]}
                            onSelect={(next) => {
                              setValue(next === value ? "" : next)
                              setOpen(false)
                            }}
                          >
                            {direction === "rtl"
                              ? frameworksRtl[item.value]
                              : item.label}
                            <Check
                              aria-hidden="true"
                              className={cn(
                                "ms-auto",
                                value === item.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { CommandInPopoverPreview }
