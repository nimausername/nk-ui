"use client"

import { Bold, Italic } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Toggle } from "@/components/ui/toggle"

/**
 * Toggle docs examples — basic and outline.
 */
const TogglePreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleBasic() {
  return (
    <Toggle aria-label="Bold">
      <Bold />
    </Toggle>
  )
}`}
        >
          <Toggle aria-label="Bold">
            <Bold />
          </Toggle>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Outline</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Italic" defaultPressed>
      <Italic />
    </Toggle>
  )
}`}
        >
          <Toggle variant="outline" aria-label="Italic" defaultPressed>
            <Italic />
          </Toggle>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { TogglePreviews }
