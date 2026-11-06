"use client"

import { MoreVertical } from "lucide-react"
import type { ReactNode } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type SharedActionsProps = {
  readonly direction: "ltr" | "rtl"
  readonly Item: (props: {
    readonly children: ReactNode
    readonly variant?: "default" | "destructive"
  }) => ReactNode
  readonly Separator: () => ReactNode
}

/**
 * Shared file actions rendered by both Context Menu and Dropdown Menu.
 */
const SharedFileActions = ({
  direction,
  Item,
  Separator,
}: SharedActionsProps) => {
  return (
    <>
      <Item>{direction === "rtl" ? "پیش‌نمایش" : "Preview"}</Item>
      <Item>{direction === "rtl" ? "دانلود" : "Download"}</Item>
      <Item>{direction === "rtl" ? "کپی لینک" : "Copy link"}</Item>
      <Item>{direction === "rtl" ? "تغییر نام" : "Rename"}</Item>
      <Separator />
      <Item variant="destructive">
        {direction === "rtl" ? "حذف" : "Delete"}
      </Item>
    </>
  )
}

/**
 * With Dropdown Menu — visible overflow button plus the same actions on right click.
 */
const ContextMenuWithDropdownPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With Dropdown Menu</h2>
      <p className="text-sm text-muted-foreground">
        Context menus should supplement a primary control. Reuse the same actions
        in a visible Dropdown Menu overflow button.
      </p>
      <ComponentPreview
        code={`import { MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function SharedActions({
  Item,
  Separator,
}: {
  Item: typeof ContextMenuItem
  Separator: typeof ContextMenuSeparator
}) {
  return (
    <>
      <Item>Preview</Item>
      <Item>Download</Item>
      <Item>Copy link</Item>
      <Item>Rename</Item>
      <Separator />
      <Item variant="destructive">Delete</Item>
    </>
  )
}

export function ContextMenuWithDropdown() {
  return (
    <div className="relative w-full max-w-xs">
      <ContextMenu>
        <ContextMenuTrigger className="block rounded-xl text-start outline-none">
          <Card className="gap-0 overflow-hidden py-0">
            <div className="aspect-video w-full bg-muted" />
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-sm">Station Hofplein</CardTitle>
              <CardDescription>JPG · 2.4 MB</CardDescription>
            </CardHeader>
          </Card>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <SharedActions
            Item={ContextMenuItem}
            Separator={ContextMenuSeparator}
          />
        </ContextMenuContent>
      </ContextMenu>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="absolute top-2 end-2"
              aria-label="Image actions"
            />
          }
        >
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <SharedActions
            Item={DropdownMenuItem}
            Separator={DropdownMenuSeparator}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="relative w-full max-w-xs">
            <ContextMenu>
              <ContextMenuTrigger className="block rounded-xl text-start outline-none">
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
                      {direction === "rtl"
                        ? "JPG · ۲٫۴ مگابایت"
                        : "JPG · 2.4 MB"}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48" dir={direction}>
                <SharedFileActions
                  direction={direction}
                  Item={({ children, variant }) => (
                    <ContextMenuItem variant={variant}>
                      {children}
                    </ContextMenuItem>
                  )}
                  Separator={() => <ContextMenuSeparator />}
                />
              </ContextMenuContent>
            </ContextMenu>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="absolute top-2 end-2"
                    aria-label={
                      direction === "rtl" ? "اقدامات تصویر" : "Image actions"
                    }
                  />
                }
              >
                <MoreVertical aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48" dir={direction}>
                <SharedFileActions
                  direction={direction}
                  Item={({ children, variant }) => (
                    <DropdownMenuItem variant={variant}>
                      {children}
                    </DropdownMenuItem>
                  )}
                  Separator={() => <DropdownMenuSeparator />}
                />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuWithDropdownPreview }
