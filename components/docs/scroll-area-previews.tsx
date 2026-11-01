"use client"

import type { ReactNode } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const DEMO_ITEMS = [
  "Inbox triage",
  "Design review",
  "API contract",
  "QA pass",
  "Launch notes",
  "Metrics follow-up",
  "Incident wrap-up",
  "Roadmap sync",
  "Partner brief",
  "Docs polish",
  "Release checklist",
  "Retro notes",
] as const

const DEMO_ITEMS_FA = [
  "مرتب‌سازی صندوق",
  "بازبینی طراحی",
  "قرارداد API",
  "گذر QA",
  "یادداشت انتشار",
  "پیگیری شاخص‌ها",
  "جمع‌بندی حادثه",
  "هم‌ترازی نقشه راه",
  "خلاصه شریک",
  "پرداخت اسناد",
  "چک‌لیست انتشار",
  "یادداشت گذشته‌نگر",
] as const

const DEMO_TAGS = [
  "Design",
  "Engineering",
  "Marketing",
  "Product",
  "Research",
  "Sales",
  "Support",
  "Operations",
  "Finance",
  "Legal",
] as const

const DEMO_TAGS_FA = [
  "طراحی",
  "مهندسی",
  "بازاریابی",
  "محصول",
  "تحقیق",
  "فروش",
  "پشتیبانی",
  "عملیات",
  "مالی",
  "حقوقی",
] as const

/**
 * Shared muted list rows.
 */
const ItemList = ({ items }: { readonly items: readonly string[] }) => {
  return (
    <div className="flex flex-col gap-1.5 p-1.5">
      {items.map((item) => (
        <div key={item} className="rounded-lg bg-muted px-3 py-2.5 text-sm">
          {item}
        </div>
      ))}
    </div>
  )
}

/**
 * Shared horizontal tags.
 */
const TagRow = ({ tags }: { readonly tags: readonly string[] }) => {
  return (
    <div className="flex w-max gap-1.5 p-1.5">
      {tags.map((tag) => (
        <div
          key={tag}
          className="shrink-0 rounded-lg bg-muted px-3 py-2.5 text-sm"
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

type FrameProps = {
  readonly children: ReactNode
  readonly className?: string
}

/**
 * Fixed preview chrome so flex parents cannot grow with content.
 */
const PreviewFrame = ({ children, className }: FrameProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-xs shrink-0 overflow-hidden rounded-2xl border",
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Scroll Area docs examples.
 */
const ScrollAreaPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1 text-xs">ScrollArea</code> —
            root (height, border, radius)
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">ScrollAreaViewport</code>{" "}
            — real scroller; optional{" "}
            <code className="rounded bg-muted px-1 text-xs">scroll-fade</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">ScrollAreaContent</code>{" "}
            — content wrapper
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">ScrollAreaScrollbar</code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1 text-xs">ScrollAreaThumb</code>{" "}
            — custom scrollbar
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Vertical</h2>
        <p className="text-sm text-muted-foreground">
          Give the root a fixed height so the viewport can overflow. Hover or
          scroll to reveal the thumb.
        </p>
        <ComponentPreview
          code={`import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"

export function ScrollAreaVertical() {
  return (
    <ScrollArea className="h-72 w-full max-w-xs rounded-2xl border">
      <ScrollAreaViewport className="h-full">
        <ScrollAreaContent>{/* items */}</ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  )
}`}
        >
          {(direction) => (
            <PreviewFrame className="h-72">
              <ScrollArea className="h-full">
                <ScrollAreaViewport className="h-full">
                  <ScrollAreaContent>
                    <ItemList
                      items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
                    />
                  </ScrollAreaContent>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar>
                  <ScrollAreaThumb />
                </ScrollAreaScrollbar>
              </ScrollArea>
            </PreviewFrame>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Horizontal</h2>
        <p className="text-sm text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1 text-xs">
            orientation=&quot;horizontal&quot;
          </code>{" "}
          on the scrollbar.
        </p>
        <ComponentPreview
          code={`<ScrollArea className="w-full max-w-xs rounded-2xl border">
  <ScrollAreaViewport className="w-full">
    <ScrollAreaContent>{/* tags */}</ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="horizontal">
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
</ScrollArea>`}
        >
          {(direction) => (
            <PreviewFrame>
              <ScrollArea>
                <ScrollAreaViewport className="w-full">
                  <ScrollAreaContent>
                    <TagRow
                      tags={direction === "rtl" ? DEMO_TAGS_FA : DEMO_TAGS}
                    />
                  </ScrollAreaContent>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar orientation="horizontal">
                  <ScrollAreaThumb />
                </ScrollAreaScrollbar>
              </ScrollArea>
            </PreviewFrame>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Scroll Fade</h2>
        <p className="text-sm text-muted-foreground">
          Scroll Fade is a CSS effect (
          <code className="rounded bg-muted px-1 text-xs">@nk/scroll-fade</code>
          ). Put it on the viewport.
        </p>
        <ComponentPreview
          code={`<ScrollArea className="h-72 w-full max-w-xs rounded-2xl border">
  <ScrollAreaViewport className="scroll-fade h-full">
    <ScrollAreaContent>{/* items */}</ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar>
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
</ScrollArea>`}
        >
          {(direction) => (
            <PreviewFrame className="h-72">
              <ScrollArea className="h-full">
                <ScrollAreaViewport className="scroll-fade h-full">
                  <ScrollAreaContent>
                    <ItemList
                      items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
                    />
                  </ScrollAreaContent>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar>
                  <ScrollAreaThumb />
                </ScrollAreaScrollbar>
              </ScrollArea>
            </PreviewFrame>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ScrollAreaPreviews }
