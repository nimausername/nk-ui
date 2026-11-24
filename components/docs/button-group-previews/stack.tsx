"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

/**
 * A vertical stack of the same joined buttons.
 */
const ButtonGroupStackPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Stack</h2>
      <p className="text-sm text-muted-foreground">
        Same joined buttons, set in a column. Use this for a short list of related actions.
      </p>
      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupStack() {
  return (
    <ButtonGroup orientation="vertical" className="w-36" aria-label="Message">
      <Button type="button" variant="outline" className="w-full">
        Reply
      </Button>
      <Button type="button" variant="outline" className="w-full">
        Forward
      </Button>
      <Button type="button" variant="outline" className="w-full">
        Delete
      </Button>
    </ButtonGroup>
  )
}`}
      >
        {(direction) => (
          <ButtonGroup
            orientation="vertical"
            className="w-36"
            aria-label={direction === "rtl" ? "پیام" : "Message"}
          >
            <Button type="button" variant="outline" className="w-full">
              {direction === "rtl" ? "پاسخ" : "Reply"}
            </Button>
            <Button type="button" variant="outline" className="w-full">
              {direction === "rtl" ? "هدایت" : "Forward"}
            </Button>
            <Button type="button" variant="outline" className="w-full">
              {direction === "rtl" ? "حذف" : "Delete"}
            </Button>
          </ButtonGroup>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ButtonGroupStackPreview }
