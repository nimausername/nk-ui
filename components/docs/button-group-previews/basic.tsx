"use client"

import { Bold, Italic, Underline } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

/**
 * Joined outline buttons, icon buttons, and sizes.
 */
const ButtonGroupBasicPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Row</h2>
      <p className="text-sm text-muted-foreground">
        Direct children share one edge. Corners follow the writing direction.
      </p>
      <ComponentPreview
        code={`import { Bold, Italic, Underline } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupRow() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button type="button" variant="outline">
          Copy
        </Button>
        <Button type="button" variant="outline">
          Paste
        </Button>
        <Button type="button" variant="outline">
          Cut
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="button" variant="outline" size="icon" aria-label="Bold">
          <Bold />
        </Button>
        <Button type="button" variant="outline" size="icon" aria-label="Italic">
          <Italic />
        </Button>
        <Button type="button" variant="outline" size="icon" aria-label="Underline">
          <Underline />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="button" variant="outline" size="sm">
          Day
        </Button>
        <Button type="button" variant="outline" size="sm">
          Week
        </Button>
        <Button type="button" variant="outline" size="sm">
          Month
        </Button>
      </ButtonGroup>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-start gap-4">
            <ButtonGroup>
              <Button type="button" variant="outline">
                {direction === "rtl" ? "رونوشت" : "Copy"}
              </Button>
              <Button type="button" variant="outline">
                {direction === "rtl" ? "جای‌گذاری" : "Paste"}
              </Button>
              <Button type="button" variant="outline">
                {direction === "rtl" ? "برش" : "Cut"}
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={direction === "rtl" ? "ضخیم" : "Bold"}
              >
                <Bold />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={direction === "rtl" ? "کج" : "Italic"}
              >
                <Italic />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={direction === "rtl" ? "زیرخط" : "Underline"}
              >
                <Underline />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button type="button" variant="outline" size="sm">
                {direction === "rtl" ? "روز" : "Day"}
              </Button>
              <Button type="button" variant="outline" size="sm">
                {direction === "rtl" ? "هفته" : "Week"}
              </Button>
              <Button type="button" variant="outline" size="sm">
                {direction === "rtl" ? "ماه" : "Month"}
              </Button>
            </ButtonGroup>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ButtonGroupBasicPreview }
