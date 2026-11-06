"use client"

import {
  ClipboardPaste,
  Copy,
  Scissors,
  Trash2,
} from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Icons + shortcuts — leading Lucide icons and trailing key hints.
 */
const ContextMenuShortcutsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Icons and shortcuts</h2>
      <p className="text-sm text-muted-foreground">
        Leading Lucide icons as children; trailing hints via{" "}
        <code className="rounded bg-muted px-1 text-xs">ContextMenuShortcut</code>
        .
      </p>
      <ComponentPreview
        code={`import { ClipboardPaste, Copy, Scissors, Trash2 } from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuShortcuts() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>Edit</ContextMenuLabel>
          <ContextMenuItem>
            <Scissors />
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPaste />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 />
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
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
                  {direction === "rtl" ? "ویرایش" : "Edit"}
                </ContextMenuLabel>
                <ContextMenuItem>
                  <Scissors />
                  {direction === "rtl" ? "برش" : "Cut"}
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy />
                  {direction === "rtl" ? "کپی" : "Copy"}
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <ClipboardPaste />
                  {direction === "rtl" ? "جای‌گذاری" : "Paste"}
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <Trash2 />
                {direction === "rtl" ? "حذف" : "Delete"}
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuShortcutsPreview }
