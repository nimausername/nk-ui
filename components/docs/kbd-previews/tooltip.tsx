"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/**
 * Shortcut inside a tooltip.
 */
const KbdTooltipPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Tooltip</h2>
      <p className="text-sm text-muted-foreground">
        On an inverted tooltip the keycap lightens automatically.
      </p>
      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function KbdTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button type="button" variant="outline" />}>
          Save
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2">
          Save changes
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
      >
        {(direction) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "ذخیره" : "Save"}
              </TooltipTrigger>
              <TooltipContent className="flex items-center gap-2">
                {direction === "rtl" ? "ذخیره تغییرات" : "Save changes"}
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>S</Kbd>
                </KbdGroup>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </ComponentPreview>
    </section>
  )
}

export { KbdTooltipPreview }
