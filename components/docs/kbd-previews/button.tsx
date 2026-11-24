"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

/**
 * Shortcut hint on a button.
 */
const KbdButtonPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Button</h2>
      <p className="text-sm text-muted-foreground">
        Place the chord after the label. It stays muted on the filled button.
      </p>
      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdButton() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" variant="outline">
        Search
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Button type="button">
        Save
        <Kbd className="bg-primary-foreground/15 text-primary-foreground">
          ⌘S
        </Kbd>
      </Button>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-wrap items-center gap-2">
            <Button type="button" variant="outline">
              {direction === "rtl" ? "جستجو" : "Search"}
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </Button>
            <Button type="button">
              {direction === "rtl" ? "ذخیره" : "Save"}
              <Kbd className="bg-primary-foreground/15 text-primary-foreground">
                ⌘S
              </Kbd>
            </Button>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { KbdButtonPreview }
