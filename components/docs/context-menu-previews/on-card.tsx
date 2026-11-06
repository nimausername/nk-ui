"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Media / card surface — wrap a Card trigger for file-style right-click actions.
 */
const ContextMenuOnCardPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">On a card</h2>
      <p className="text-sm text-muted-foreground">
        Wrap a Card (or media block) in{" "}
        <code className="rounded bg-muted px-1 text-xs">ContextMenuTrigger</code>{" "}
        for file-style actions.
      </p>
      <ComponentPreview
        code={`import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuOnCard() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="block w-full max-w-xs rounded-xl text-start outline-none">
        <Card className="gap-0 overflow-hidden py-0">
          <div
            className="aspect-video w-full bg-muted"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=512&h=288)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Station Hofplein"
          />
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm">Station Hofplein</CardTitle>
            <CardDescription>JPG · 2.4 MB</CardDescription>
          </CardHeader>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Preview</ContextMenuItem>
        <ContextMenuItem>Download</ContextMenuItem>
        <ContextMenuItem>Copy link</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
      >
        {(direction) => (
          <ContextMenu>
            <ContextMenuTrigger className="block w-full max-w-xs rounded-xl text-start outline-none">
              <Card className="gap-0 overflow-hidden py-0">
                <div
                  className="aspect-video w-full bg-muted"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=512&h=288)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  role="img"
                  aria-label="Station Hofplein"
                />
                <CardHeader className="px-4 py-3">
                  <CardTitle className="text-sm">Station Hofplein</CardTitle>
                  <CardDescription>
                    {direction === "rtl" ? "JPG · ۲٫۴ مگابایت" : "JPG · 2.4 MB"}
                  </CardDescription>
                </CardHeader>
              </Card>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48" dir={direction}>
              <ContextMenuItem>
                {direction === "rtl" ? "پیش‌نمایش" : "Preview"}
              </ContextMenuItem>
              <ContextMenuItem>
                {direction === "rtl" ? "دانلود" : "Download"}
              </ContextMenuItem>
              <ContextMenuItem>
                {direction === "rtl" ? "کپی لینک" : "Copy link"}
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
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuOnCardPreview }
