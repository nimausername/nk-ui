"use client"

import type { ReactNode, RefCallback } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"
import { useScrollFadeDirection } from "@/hooks/use-scroll-fade-direction"
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

type ItemListProps = {
  readonly items: readonly string[]
}

/**
 * Shared muted list rows for vertical demos.
 */
const ItemList = ({ items }: ItemListProps) => {
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

type TagRowProps = {
  readonly tags: readonly string[]
}

/**
 * Shared horizontal tag chips.
 */
const TagRow = ({ tags }: TagRowProps) => {
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
 * Preview chrome: fixed size so flex parents cannot grow with content.
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

type VerticalFadeProps = {
  readonly fadeClassName: string
  readonly items?: readonly string[]
  readonly itemCount?: number
  readonly heightClassName?: string
  readonly scrollerRef?: RefCallback<HTMLDivElement> | null
}

/**
 * Plain overflow scroller — scroll-fade is a CSS effect on this element.
 */
const VerticalFade = ({
  fadeClassName,
  items = DEMO_ITEMS,
  itemCount = 12,
  heightClassName = "h-72",
  scrollerRef = null,
}: VerticalFadeProps) => {
  const rows = items.slice(0, itemCount)

  return (
    <PreviewFrame>
      <div
        ref={scrollerRef ?? undefined}
        className={cn(
          "min-h-0 overflow-y-auto scrollbar-none",
          heightClassName,
          fadeClassName
        )}
      >
        <ItemList items={rows} />
      </div>
    </PreviewFrame>
  )
}

type HorizontalFadeProps = {
  readonly fadeClassName: string
  readonly tags: readonly string[]
  readonly scrollerRef?: RefCallback<HTMLDivElement> | null
}

/**
 * Plain horizontal overflow scroller with scroll-fade-x.
 */
const HorizontalFade = ({
  fadeClassName,
  tags,
  scrollerRef = null,
}: HorizontalFadeProps) => {
  return (
    <PreviewFrame>
      <div
        ref={scrollerRef ?? undefined}
        className={cn(
          "min-w-0 overflow-x-auto scrollbar-none",
          fadeClassName
        )}
      >
        <TagRow tags={tags} />
      </div>
    </PreviewFrame>
  )
}

/**
 * Smart direction on a plain overflow scroller.
 */
const SmartDirectionPreview = ({
  items,
}: {
  readonly items: readonly string[]
}) => {
  const ref = useScrollFadeDirection<HTMLDivElement>({ axis: "y" })

  return (
    <VerticalFade
      fadeClassName="scroll-fade scroll-fade-smart"
      items={items}
      scrollerRef={ref}
    />
  )
}

/**
 * Published Scroll Area + scroll-fade on the viewport.
 */
const ScrollAreaWithFadePreview = ({
  items,
}: {
  readonly items: readonly string[]
}) => {
  return (
    <PreviewFrame className="h-72">
      <ScrollArea className="h-full">
        <ScrollAreaViewport className="scroll-fade h-full">
          <ScrollAreaContent>
            <ItemList items={items} />
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </PreviewFrame>
  )
}

/**
 * Scroll Fade docs — CSS effect demos first; Scroll Area is a separate component.
 */
const ScrollFadePreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Effect vs component</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Scroll Fade</strong>{" "}
            is a CSS utility (effect). Add{" "}
            <code className="rounded bg-muted px-1 text-xs">scroll-fade</code> to
            any element that already scrolls (
            <code className="rounded bg-muted px-1 text-xs">overflow-*-auto</code>
            ).
          </li>
          <li>
            <strong className="font-medium text-foreground">Scroll Area</strong>{" "}
            (
            <code className="rounded bg-muted px-1 text-xs">@nk/scroll-area</code>
            ) is the component for custom scrollbars. Put the fade class on its{" "}
            <code className="rounded bg-muted px-1 text-xs">Viewport</code>.
          </li>
          <li>
            Optional{" "}
            <code className="rounded bg-muted px-1 text-xs">scroll-fade-smart</code>{" "}
            +{" "}
            <code className="rounded bg-muted px-1 text-xs">
              useScrollFadeDirection
            </code>{" "}
            fades the exit edge while scrolling; idle returns to position mode.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <p className="text-sm text-muted-foreground">
          Position-aware vertical fade on a plain overflow container. Scroll the
          list to see edges soften and sharpen.
        </p>
        <ComponentPreview
          code={`export function ScrollFadeDemo() {
  return (
    <div className="h-72 scroll-fade scrollbar-none overflow-y-auto rounded-2xl border">
      {/* items */}
    </div>
  )
}`}
        >
          {(direction) => (
            <VerticalFade
              fadeClassName="scroll-fade"
              items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">No overflow</h2>
        <p className="text-sm text-muted-foreground">
          When content fits, no fade is shown — safe to apply on any list.
        </p>
        <ComponentPreview
          code={`<div className="scroll-fade overflow-y-auto">
  {/* three short items */}
</div>`}
        >
          {(direction) => (
            <VerticalFade
              fadeClassName="scroll-fade"
              items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
              itemCount={3}
              heightClassName="h-auto"
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Horizontal</h2>
        <p className="text-sm text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1 text-xs">scroll-fade-x</code>.
          Start/end follow reading direction — try RTL.
        </p>
        <ComponentPreview
          code={`<div className="scroll-fade-x scrollbar-none overflow-x-auto">
  {/* tags */}
</div>`}
        >
          {(direction) => (
            <HorizontalFade
              fadeClassName="scroll-fade-x"
              tags={direction === "rtl" ? DEMO_TAGS_FA : DEMO_TAGS}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Edge fades</h2>
        <p className="text-sm text-muted-foreground">
          Single-edge utilities track one side only.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <ComponentPreview
            title="scroll-fade-t"
            code={`<div className="h-36 scroll-fade-t overflow-y-auto" />`}
          >
            {(direction) => (
              <VerticalFade
                fadeClassName="scroll-fade-t"
                items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
                heightClassName="h-36"
              />
            )}
          </ComponentPreview>
          <ComponentPreview
            title="scroll-fade-b"
            code={`<div className="h-36 scroll-fade-b overflow-y-auto" />`}
          >
            {(direction) => (
              <VerticalFade
                fadeClassName="scroll-fade-b"
                items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
                heightClassName="h-36"
              />
            )}
          </ComponentPreview>
          <ComponentPreview
            title="scroll-fade-s"
            code={`<div className="scroll-fade-s overflow-x-auto" />`}
          >
            {(direction) => (
              <HorizontalFade
                fadeClassName="scroll-fade-s"
                tags={direction === "rtl" ? DEMO_TAGS_FA : DEMO_TAGS}
              />
            )}
          </ComponentPreview>
          <ComponentPreview
            title="scroll-fade-e"
            code={`<div className="scroll-fade-e overflow-x-auto" />`}
          >
            {(direction) => (
              <HorizontalFade
                fadeClassName="scroll-fade-e"
                tags={direction === "rtl" ? DEMO_TAGS_FA : DEMO_TAGS}
              />
            )}
          </ComponentPreview>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Fade size</h2>
        <p className="text-sm text-muted-foreground">
          Spacing-scale sizes (same idea as{" "}
          <code className="rounded bg-muted px-1 text-xs">scroll-mt-*</code>).
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <ComponentPreview
            title="scroll-fade-4"
            showDirectionToggle={false}
            code={`<div className="h-48 scroll-fade scroll-fade-4 overflow-y-auto" />`}
          >
            <VerticalFade
              fadeClassName="scroll-fade scroll-fade-4"
              heightClassName="h-48"
              itemCount={8}
            />
          </ComponentPreview>
          <ComponentPreview
            title="scroll-fade-24"
            showDirectionToggle={false}
            code={`<div className="h-48 scroll-fade scroll-fade-24 overflow-y-auto" />`}
          >
            <VerticalFade
              fadeClassName="scroll-fade scroll-fade-24"
              heightClassName="h-48"
              itemCount={8}
            />
          </ComponentPreview>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Smart direction</h2>
        <p className="text-sm text-muted-foreground">
          While scrolling down, the top fades; while scrolling up, the bottom
          fades. After idle, position-aware fades return.
        </p>
        <ComponentPreview
          code={`"use client"

import { useScrollFadeDirection } from "@/hooks/use-scroll-fade-direction"

export function ScrollFadeSmart() {
  const ref = useScrollFadeDirection({ axis: "y" })

  return (
    <div
      ref={ref}
      className="h-72 scroll-fade scroll-fade-smart scrollbar-none overflow-y-auto"
    >
      {/* items */}
    </div>
  )
}`}
        >
          {(direction) => (
            <SmartDirectionPreview
              items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disable</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">scroll-fade-none</code>{" "}
          removes the mask (useful with responsive prefixes).
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <ComponentPreview
            title="scroll-fade"
            showDirectionToggle={false}
            code={`<div className="h-48 scroll-fade overflow-y-auto" />`}
          >
            <VerticalFade
              fadeClassName="scroll-fade"
              heightClassName="h-48"
              itemCount={8}
            />
          </ComponentPreview>
          <ComponentPreview
            title="scroll-fade-none"
            showDirectionToggle={false}
            code={`<div className="h-48 scroll-fade scroll-fade-none overflow-y-auto" />`}
          >
            <VerticalFade
              fadeClassName="scroll-fade scroll-fade-none"
              heightClassName="h-48"
              itemCount={8}
            />
          </ComponentPreview>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Scroll Area</h2>
        <p className="text-sm text-muted-foreground">
          Scroll Area is the component; scroll-fade stays a class on the
          viewport. See{" "}
          <a
            href="/docs/components/scroll-area"
            className="underline underline-offset-4"
          >
            Scroll Area
          </a>
          .
        </p>
        <ComponentPreview
          code={`import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"

export function ScrollAreaWithFade() {
  return (
    <ScrollArea className="h-72 overflow-hidden rounded-2xl border">
      <ScrollAreaViewport className="scroll-fade h-full">
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
            <ScrollAreaWithFadePreview
              items={direction === "rtl" ? DEMO_ITEMS_FA : DEMO_ITEMS}
            />
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ScrollFadePreviews }
