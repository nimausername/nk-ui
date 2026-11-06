"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Checkbox items — toggleable rows inside the context menu.
 */
const ContextMenuCheckboxesPreview = () => {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showUrls, setShowUrls] = useState(false)
  const [showPerson, setShowPerson] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Checkboxes</h2>
      <p className="text-sm text-muted-foreground">
        Use{" "}
        <code className="rounded bg-muted px-1 text-xs">
          ContextMenuCheckboxItem
        </code>{" "}
        for independent toggles.
      </p>
      <ComponentPreview
        code={`import { useState } from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuCheckboxes() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showUrls, setShowUrls] = useState(false)
  const [showPerson, setShowPerson] = useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>Appearance</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showUrls}
            onCheckedChange={setShowUrls}
          >
            Show Full URLs
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showPerson}
          onCheckedChange={setShowPerson}
        >
          Show Person
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
      >
        {(direction) => (
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              {direction === "rtl" ? "اینجا راست‌کلیک کنید" : "Right click here"}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52" dir={direction}>
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "ظاهر" : "Appearance"}
                </ContextMenuLabel>
                <ContextMenuCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  {direction === "rtl"
                    ? "نمایش نوار نشانک‌ها"
                    : "Show Bookmarks Bar"}
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showUrls}
                  onCheckedChange={setShowUrls}
                >
                  {direction === "rtl"
                    ? "نمایش آدرس کامل"
                    : "Show Full URLs"}
                </ContextMenuCheckboxItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={showPerson}
                onCheckedChange={setShowPerson}
              >
                {direction === "rtl" ? "نمایش شخص" : "Show Person"}
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuCheckboxesPreview }
