"use client"

import { Bold, Italic, Underline } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Toggle } from "@/components/ui/toggle"

/**
 * Toggle docs examples — variants, sizes, icons, text, disabled, controlled pressed.
 */
const TogglePreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Toggle</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">variant</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">size</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">pressed</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">defaultPressed</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">disabled</code>
          </li>
          <li>
            For grouped toggles, see{" "}
            <a
              href="/docs/components/toggle-group"
              className="underline underline-offset-4"
            >
              Toggle Group
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toggle aria-label="Bold default">
        <Bold />
      </Toggle>
      <Toggle variant="outline" aria-label="Bold outline" defaultPressed>
        <Bold />
      </Toggle>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap gap-2">
            <Toggle aria-label="Bold default">
              <Bold />
            </Toggle>
            <Toggle variant="outline" aria-label="Bold outline" defaultPressed>
              <Bold />
            </Toggle>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" aria-label="Italic small">
        <Italic />
      </Toggle>
      <Toggle aria-label="Italic default">
        <Italic />
      </Toggle>
      <Toggle size="lg" aria-label="Italic large">
        <Italic />
      </Toggle>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Toggle size="sm" aria-label="Italic small">
              <Italic />
            </Toggle>
            <Toggle aria-label="Italic default">
              <Italic />
            </Toggle>
            <Toggle size="lg" aria-label="Italic large">
              <Italic />
            </Toggle>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With text</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Underline } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleWithText() {
  return (
    <Toggle variant="outline" aria-label="Underline">
      <Underline />
      Underline
    </Toggle>
  )
}`}
        >
          {(direction) => (
            <Toggle variant="outline" aria-label="Underline">
              <Underline />
              {direction === "rtl" ? "زیرخط" : "Underline"}
            </Toggle>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap gap-2">
      <Toggle disabled aria-label="Bold disabled">
        <Bold />
      </Toggle>
      <Toggle disabled defaultPressed aria-label="Bold disabled pressed">
        <Bold />
      </Toggle>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap gap-2">
            <Toggle disabled aria-label="Bold disabled">
              <Bold />
            </Toggle>
            <Toggle disabled defaultPressed aria-label="Bold disabled pressed">
              <Bold />
            </Toggle>
          </div>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { TogglePreviews }
