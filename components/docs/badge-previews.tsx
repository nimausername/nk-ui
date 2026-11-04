"use client"

import { Check, X } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"

/**
 * Badge docs examples — variants, sizes, icons, counts, asChild.
 */
const BadgePreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Badge</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">variant</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">size</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">asChild</code>
          </li>
          <li>
            Icons / pill / counts: compose with children or{" "}
            <code className="rounded bg-muted px-1 text-xs">className</code>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <Badge>{direction === "rtl" ? "پیش‌فرض" : "Default"}</Badge>
              <Badge variant="secondary">
                {direction === "rtl" ? "ثانویه" : "Secondary"}
              </Badge>
              <Badge variant="soft">{direction === "rtl" ? "ملایم" : "Soft"}</Badge>
              <Badge variant="outline">
                {direction === "rtl" ? "حاشیه‌دار" : "Outline"}
              </Badge>
              <Badge variant="destructive">
                {direction === "rtl" ? "مخرب" : "Destructive"}
              </Badge>
              <Badge variant="success">
                {direction === "rtl" ? "موفق" : "Success"}
              </Badge>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge>Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap items-center gap-2">
              <Badge size="sm">{direction === "rtl" ? "کوچک" : "Small"}</Badge>
              <Badge>{direction === "rtl" ? "پیش‌فرض" : "Default"}</Badge>
              <Badge size="lg">{direction === "rtl" ? "بزرگ" : "Large"}</Badge>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With icon</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <Check />
        Verified
      </Badge>
      <Badge variant="destructive">
        <X />
        Failed
      </Badge>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Check />
                {direction === "rtl" ? "تأییدشده" : "Verified"}
              </Badge>
              <Badge variant="destructive">
                <X />
                {direction === "rtl" ? "ناموفق" : "Failed"}
              </Badge>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Counts &amp; pill</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeCounts() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="rounded-full tabular-nums">12</Badge>
      <Badge variant="outline" className="rounded-full tabular-nums">
        99+
      </Badge>
      <span className="inline-flex items-center gap-2 text-sm">
        Inbox
        <Badge variant="destructive" className="rounded-full tabular-nums">
          3
        </Badge>
      </span>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="rounded-full tabular-nums">12</Badge>
              <Badge variant="outline" className="rounded-full tabular-nums">
                99+
              </Badge>
              <span className="inline-flex items-center gap-2 text-sm">
                {direction === "rtl" ? "صندوق ورودی" : "Inbox"}
                <Badge variant="destructive" className="rounded-full tabular-nums">
                  3
                </Badge>
              </span>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">As child link</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeAsChild() {
  return (
    <Badge asChild variant="outline">
      <a href="#docs">Docs</a>
    </Badge>
  )
}`}
        >
          {(direction) => (
            <Badge asChild variant="outline">
              <a href="#docs">{direction === "rtl" ? "اسناد" : "Docs"}</a>
            </Badge>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { BadgePreviews }
