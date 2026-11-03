"use client"

import { Check } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"

/**
 * Badge docs examples — variants and icon composition.
 */
const BadgePreviews = () => {
  return (
    <div className="space-y-10">
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
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With icon</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BadgeWithIcon() {
  return (
    <Badge variant="secondary">
      <Check />
      Verified
    </Badge>
  )
}`}
        >
          {(direction) => (
            <Badge variant="secondary">
              <Check />
              {direction === "rtl" ? "تأییدشده" : "Verified"}
            </Badge>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { BadgePreviews }
