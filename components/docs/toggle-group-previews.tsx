"use client"

import { AlignCenter, AlignLeft, AlignRight, Bold, Italic } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

/**
 * Toggle Group docs examples — single and multiple.
 */
const ToggleGroupPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Single</h2>
        <ComponentPreview
          className="w-full"
          code={`import { AlignCenter, AlignLeft, AlignRight } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupSingle() {
  return (
    <ToggleGroup defaultValue={["left"]} variant="outline" aria-label="Align">
      <ToggleGroupItem value="left" aria-label="Left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        >
          <ToggleGroup defaultValue={["left"]} variant="outline" aria-label="Align">
            <ToggleGroupItem value="left" aria-label="Left">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Multiple</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Bold, Italic } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple defaultValue={["bold"]} aria-label="Style">
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        >
          <ToggleGroup multiple defaultValue={["bold"]} aria-label="Style">
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ToggleGroupPreviews }
