"use client"

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

/**
 * Toggle Group docs examples — single, multiple, outline, sizes, disabled, controlled.
 */
const ToggleGroupPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">ToggleGroup</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">value</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">multiple</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">variant</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">size</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">disabled</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">ToggleGroupItem</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">value</code> (inherits
            group variant/size)
          </li>
        </ul>
      </section>

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
          code={`import { Bold, Italic, Underline } from "lucide-react"
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
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline />
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
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Bold, Italic } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupSizes() {
  return (
    <div className="flex flex-col gap-3">
      <ToggleGroup size="sm" variant="outline" defaultValue={["bold"]} aria-label="Small">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="lg" variant="outline" defaultValue={["bold"]} aria-label="Large">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-3">
            <ToggleGroup
              size="sm"
              variant="outline"
              defaultValue={["bold"]}
              aria-label="Small"
            >
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic />
              </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup
              size="lg"
              variant="outline"
              defaultValue={["bold"]}
              aria-label="Large"
            >
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { AlignLeft, AlignRight } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <ToggleGroup disabled defaultValue={["left"]} variant="outline" aria-label="All disabled">
        <ToggleGroupItem value="left" aria-label="Left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={["left"]} variant="outline" aria-label="Item disabled">
        <ToggleGroupItem value="left" aria-label="Left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right" disabled>
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-3">
            <ToggleGroup
              disabled
              defaultValue={["left"]}
              variant="outline"
              aria-label="All disabled"
            >
              <ToggleGroupItem value="left" aria-label="Left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right">
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup
              defaultValue={["left"]}
              variant="outline"
              aria-label="Item disabled"
            >
              <ToggleGroupItem value="left" aria-label="Left">
                <AlignLeft />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right" disabled>
                <AlignRight />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupControlled() {
  const [value, setValue] = useState<string[]>(["center"])

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Selected: {value.join(", ") || "none"}</p>
      <ToggleGroup
        value={value}
        onValueChange={setValue}
        variant="outline"
        aria-label="Align controlled"
      >
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
    </div>
  )
}`}
        >
          {(direction) => <ToggleGroupControlledPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With text</h2>
        <ComponentPreview
          className="w-full"
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupWithText() {
  return (
    <ToggleGroup variant="outline" defaultValue={["day"]} aria-label="Range">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        >
          {(direction) => (
            <ToggleGroup
              variant="outline"
              defaultValue={["day"]}
              aria-label={direction === "rtl" ? "بازه" : "Range"}
            >
              <ToggleGroupItem value="day">
                {direction === "rtl" ? "روز" : "Day"}
              </ToggleGroupItem>
              <ToggleGroupItem value="week">
                {direction === "rtl" ? "هفته" : "Week"}
              </ToggleGroupItem>
              <ToggleGroupItem value="month">
                {direction === "rtl" ? "ماه" : "Month"}
              </ToggleGroupItem>
            </ToggleGroup>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

type PreviewDirection = "ltr" | "rtl"

const ToggleGroupControlledPreview = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [value, setValue] = useState<string[]>(["center"])

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        {direction === "rtl" ? "انتخاب‌شده: " : "Selected: "}
        {value.join(", ") || (direction === "rtl" ? "هیچ" : "none")}
      </p>
      <ToggleGroup
        value={value}
        onValueChange={(next) => setValue(next)}
        variant="outline"
        aria-label="Align controlled"
      >
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
    </div>
  )
}

export { ToggleGroupPreviews }
