"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Basic context menu — groups, labels, separators, destructive action.
 */
const ContextMenuBasicPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Basic</h2>
      <p className="text-sm text-muted-foreground">
        Right click (or long press) the surface. Groups, labels, separators, and
        a destructive action.
      </p>
      <ComponentPreview
        code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuBasic() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuItem>Rename</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
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
            <ContextMenuContent className="w-48" dir={direction}>
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "فایل" : "File"}
                </ContextMenuLabel>
                <ContextMenuItem>
                  {direction === "rtl" ? "باز کردن" : "Open"}
                </ContextMenuItem>
                <ContextMenuItem>
                  {direction === "rtl" ? "تغییر نام" : "Rename"}
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                {direction === "rtl" ? "حذف" : "Delete"}
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuBasicPreview }
