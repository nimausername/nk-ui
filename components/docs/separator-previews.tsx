"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Separator } from "@/components/ui/separator"

/**
 * Separator docs examples — horizontal, vertical, labeled.
 */
const SeparatorPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Horizontal</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorHorizontal() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <p className="text-sm">Above</p>
      <Separator />
      <p className="text-sm">Below</p>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="w-full max-w-sm space-y-3">
              <p className="text-sm">{direction === "rtl" ? "بالا" : "Above"}</p>
              <Separator />
              <p className="text-sm">{direction === "rtl" ? "پایین" : "Below"}</p>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Vertical</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorVertical() {
  return (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex h-8 items-center gap-3">
              <span className="text-sm">{direction === "rtl" ? "چپ" : "Left"}</span>
              <Separator orientation="vertical" />
              <span className="text-sm">{direction === "rtl" ? "راست" : "Right"}</span>
            </div>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SeparatorPreviews }
