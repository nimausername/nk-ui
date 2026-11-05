"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type PreviewDirection = "ltr" | "rtl"

/**
 * Live “show more” demo — first paragraph stays visible; the rest folds.
 */
const CollapsibleShowMoreDemo = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [open, setOpen] = useState(false)
  const isRtl = direction === "rtl"

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-md gap-1"
    >
      <p className="text-sm text-foreground">
        {isRtl
          ? "nk یک سامانه طراحی روی Base UI است. اجزا را نصب کنید و با توکن‌های خود تم بسازید."
          : "nk is a design system built on Base UI. Install the parts you need and theme them with your tokens."}
      </p>
      <CollapsiblePanel>
        {isRtl
          ? "هر جزء یک قرارداد واضح دارد: ریشه وضعیت را نگه می‌دارد، تریگر باز و بسته می‌کند، و پنل ارتفاع را با انیمیشن نشان می‌دهد. برای چند بخش هماهنگ از Accordion استفاده کنید."
          : "Each part has a clear contract: the root owns open state, the trigger toggles, and the panel animates height. Reach for Accordion when several sections must coordinate."}
      </CollapsiblePanel>
      <CollapsibleTrigger
        render={<Button type="button" variant="link" className="h-auto p-0" />}
      >
        {isRtl
          ? open
            ? "نمایش کمتر"
            : "نمایش بیشتر"
          : open
            ? "Show less"
            : "Show more"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}

/**
 * Truncated copy that expands — common for bios, replies, and long notes.
 */
const CollapsibleShowMorePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Show more</h2>
      <p className="text-sm text-muted-foreground">
        Keep a short lead visible. Fold the rest, flip the label with controlled{" "}
        <code className="rounded bg-muted px-1 text-xs">open</code>, and keep the
        default chevron (down when closed, up when open).
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleShowMore() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-md gap-1">
      <p className="text-sm text-foreground">
        nk is a design system built on Base UI. Install the parts you need and
        theme them with your tokens.
      </p>
      <CollapsiblePanel>
        Each part has a clear contract: the root owns open state, the trigger
        toggles, and the panel animates height. Reach for Accordion when several
        sections must coordinate.
      </CollapsiblePanel>
      <CollapsibleTrigger
        render={<Button type="button" variant="link" className="h-auto p-0" />}
      >
        {open ? "Show less" : "Show more"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}`}
      >
        {(direction) => <CollapsibleShowMoreDemo direction={direction} />}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleShowMorePreview }
