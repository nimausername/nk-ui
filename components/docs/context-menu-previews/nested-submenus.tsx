"use client"

import { File, Folder, Share2 } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Multi-level nested submenus — a submenu that itself contains a submenu.
 */
const ContextMenuNestedSubmenusPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nested submenus</h2>
      <p className="text-sm text-muted-foreground">
        Nest{" "}
        <code className="rounded bg-muted px-1 text-xs">ContextMenuSub</code>{" "}
        inside another SubContent for multi-level menus.
      </p>
      <ComponentPreview
        code={`import { File, Folder, Share2 } from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuNestedSubmenus() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem>
            <File />
            Open
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2 />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuItem>Copy link</ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <Folder />
                  Move to…
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-40">
                  <ContextMenuItem>Projects</ContextMenuItem>
                  <ContextMenuItem>Archive</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>New folder…</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
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
                  <File />
                  {direction === "rtl" ? "باز کردن" : "Open"}
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Share2 />
                    {direction === "rtl" ? "اشتراک‌گذاری" : "Share"}
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-44">
                    <ContextMenuItem>
                      {direction === "rtl" ? "کپی لینک" : "Copy link"}
                    </ContextMenuItem>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger>
                        <Folder />
                        {direction === "rtl" ? "انتقال به…" : "Move to…"}
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-40">
                        <ContextMenuItem>
                          {direction === "rtl" ? "پروژه‌ها" : "Projects"}
                        </ContextMenuItem>
                        <ContextMenuItem>
                          {direction === "rtl" ? "بایگانی" : "Archive"}
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>
                          {direction === "rtl" ? "پوشه جدید…" : "New folder…"}
                        </ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuNestedSubmenusPreview }
