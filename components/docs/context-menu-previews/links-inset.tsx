"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuLinkItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Links & inset — LinkItem anchors and inset rows under a label.
 */
const ContextMenuLinksInsetPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Links and inset</h2>
      <p className="text-sm text-muted-foreground">
        <code className="rounded bg-muted px-1 text-xs">ContextMenuLinkItem</code>{" "}
        renders an anchor.{" "}
        <code className="rounded bg-muted px-1 text-xs">inset</code> aligns rows
        under a label without a leading icon.
      </p>
      <ComponentPreview
        code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuLinkItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuLinks() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel inset>Go to</ContextMenuLabel>
          <ContextMenuLinkItem href="#docs" inset closeOnClick>
            Documentation
          </ContextMenuLinkItem>
          <ContextMenuLinkItem href="#api" inset closeOnClick>
            API
          </ContextMenuLinkItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Support</ContextMenuItem>
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
                <ContextMenuLabel inset>
                  {direction === "rtl" ? "برو به" : "Go to"}
                </ContextMenuLabel>
                <ContextMenuLinkItem href="#docs" inset closeOnClick>
                  {direction === "rtl" ? "مستندات" : "Documentation"}
                </ContextMenuLinkItem>
                <ContextMenuLinkItem href="#api" inset closeOnClick>
                  {direction === "rtl" ? "رابط برنامه‌نویسی" : "API"}
                </ContextMenuLinkItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuItem inset>
                {direction === "rtl" ? "پشتیبانی" : "Support"}
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuLinksInsetPreview }
