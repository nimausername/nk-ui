"use client"

import { FilePlus, FolderOpen, Mail } from "lucide-react"
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
 * Secondary muted description under each command label.
 */
const CommandDescriptionsPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With descriptions</h2>
      <p className="text-sm text-muted-foreground">
        Secondary muted text under the label for richer rows.
      </p>
      <ComponentPreview
        code={`"use client"

import { FilePlus, FolderOpen, Mail } from "lucide-react"
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

export function CommandDescriptions() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open descriptions
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              value="new-file"
              keywords={["create", "document"]}
              onSelect={() => setOpen(false)}
            >
              <FilePlus />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span>New file</span>
                <span className="text-xs text-muted-foreground">
                  Create a blank document
                </span>
              </div>
            </CommandItem>
            <CommandItem value="open-folder" onSelect={() => setOpen(false)}>
              <FolderOpen />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span>Open folder</span>
                <span className="text-xs text-muted-foreground">
                  Browse your workspace
                </span>
              </div>
            </CommandItem>
            <CommandItem value="invite" onSelect={() => setOpen(false)}>
              <Mail />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span>Invite teammate</span>
                <span className="text-xs text-muted-foreground">
                  Send an email invite
                </span>
              </div>
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
              direction === "rtl" ? "باز کردن با توضیح" : "Open descriptions"
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
                heading={direction === "rtl" ? "اقدامات" : "Actions"}
              >
                <CommandItem
                  value="new-file"
                  keywords={["create", "document"]}
                  onSelect={() => setOpen(false)}
                >
                  <FilePlus aria-hidden="true" />
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span>
                      {direction === "rtl" ? "فایل جدید" : "New file"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {direction === "rtl"
                        ? "یک سند خالی بسازید"
                        : "Create a blank document"}
                    </span>
                  </div>
                </CommandItem>
                <CommandItem
                  value="open-folder"
                  onSelect={() => setOpen(false)}
                >
                  <FolderOpen aria-hidden="true" />
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span>
                      {direction === "rtl" ? "باز کردن پوشه" : "Open folder"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {direction === "rtl"
                        ? "فضای کاری را مرور کنید"
                        : "Browse your workspace"}
                    </span>
                  </div>
                </CommandItem>
                <CommandItem value="invite" onSelect={() => setOpen(false)}>
                  <Mail aria-hidden="true" />
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span>
                      {direction === "rtl"
                        ? "دعوت هم‌تیمی"
                        : "Invite teammate"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {direction === "rtl"
                        ? "دعوت‌نامه ایمیلی بفرستید"
                        : "Send an email invite"}
                    </span>
                  </div>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </TriggeredPalette>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandDescriptionsPreview }
