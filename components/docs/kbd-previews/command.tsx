"use client"

import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

/**
 * Keycaps inside a command row shortcut slot.
 */
const KbdCommandPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Command</h2>
      <p className="text-sm text-muted-foreground">
        Put the chord in{" "}
        <code className="rounded bg-muted px-1 text-xs">CommandShortcut</code>{" "}
        so it stays at the logical end. See{" "}
        <Link
          href="/docs/components/command"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Command
        </Link>
        .
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdCommand() {
  return (
    <Command className="rounded-lg border border-border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Actions">
          <CommandItem>
            New file
            <CommandShortcut>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>N</Kbd>
              </KbdGroup>
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            Settings
            <CommandShortcut>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>,</Kbd>
              </KbdGroup>
            </CommandShortcut>
          </CommandItem>
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
                <CommandGroup
                  heading={direction === "rtl" ? "اقدامات" : "Actions"}
                >
                  <CommandItem>
                    {direction === "rtl" ? "فایل جدید" : "New file"}
                    <CommandShortcut>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <Kbd>N</Kbd>
                      </KbdGroup>
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    {direction === "rtl" ? "تنظیمات" : "Settings"}
                    <CommandShortcut>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <Kbd>,</Kbd>
                      </KbdGroup>
                    </CommandShortcut>
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

export { KbdCommandPreview }
