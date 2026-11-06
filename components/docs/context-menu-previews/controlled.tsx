"use client"

import { useState } from "react"
import { MousePointerClick } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Controlled open — parent owns open state; also openable from a button.
 */
const ContextMenuControlledPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Controlled</h2>
      <p className="text-sm text-muted-foreground">
        Drive{" "}
        <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
        <code className="rounded bg-muted px-1 text-xs">onOpenChange</code> when
        you need the menu from a secondary control as well.
      </p>
      <ComponentPreview
        code={`import { useState } from "react"
import { MousePointerClick } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <Button type="button" variant="outline" onClick={() => setOpen(true)}>
          Open menu
        </Button>
        <span className="text-xs text-muted-foreground tabular-nums">
          {open ? "Open" : "Closed"}
        </span>
      </div>
      <ContextMenu open={open} onOpenChange={setOpen}>
        <ContextMenuTrigger className="group flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/80 bg-muted/35 px-6 text-center shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--color-foreground)_6%,transparent)] outline-none transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border hover:bg-muted/55 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-popup-open:border-foreground/25 data-popup-open:bg-muted/70 data-popup-open:shadow-sm">
          <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-muted-foreground shadow-sm transition-colors duration-200 group-hover:text-foreground group-data-popup-open:border-foreground/20 group-data-popup-open:text-foreground">
            <MousePointerClick className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            Right click here
          </span>
          <span className="text-xs text-muted-foreground text-pretty">
            Or use the button above — same controlled menu
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex w-full max-w-sm flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(true)
                }}
              >
                {direction === "rtl" ? "باز کردن منو" : "Open menu"}
              </Button>
              <span className="text-xs text-muted-foreground tabular-nums">
                {open
                  ? direction === "rtl"
                    ? "باز"
                    : "Open"
                  : direction === "rtl"
                    ? "بسته"
                    : "Closed"}
              </span>
            </div>
            <ContextMenu open={open} onOpenChange={setOpen}>
              <ContextMenuTrigger className="group flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/80 bg-muted/35 px-6 text-center shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--color-foreground)_6%,transparent)] outline-none transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border hover:bg-muted/55 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-popup-open:border-foreground/25 data-popup-open:bg-muted/70 data-popup-open:shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-muted-foreground shadow-sm transition-colors duration-200 group-hover:text-foreground group-data-popup-open:border-foreground/20 group-data-popup-open:text-foreground">
                  <MousePointerClick className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium tracking-tight text-foreground">
                  {direction === "rtl"
                    ? "اینجا راست‌کلیک کنید"
                    : "Right click here"}
                </span>
                <span className="text-xs text-muted-foreground text-pretty">
                  {direction === "rtl"
                    ? "یا از دکمه بالا استفاده کنید — همان منوی کنترل‌شده"
                    : "Or use the button above — same controlled menu"}
                </span>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48" dir={direction}>
                <ContextMenuItem>
                  {direction === "rtl" ? "باز کردن" : "Open"}
                </ContextMenuItem>
                <ContextMenuItem>
                  {direction === "rtl" ? "تغییر نام" : "Rename"}
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  {direction === "rtl" ? "حذف" : "Delete"}
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuControlledPreview }
