"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const sides = ["top", "right", "bottom", "left"] as const

/**
 * Placement sides — Content `side` for top / right / bottom / left.
 */
const HoverCardPositionsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Positions</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">side</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">HoverCardContent</code>.
      </p>
      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardPositions() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger render={<Button variant="outline" size="sm" />}>
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side} className="w-56">
            <HoverCardHeader>
              <HoverCardTitle className="capitalize">{side}</HoverCardTitle>
              <HoverCardDescription>
                Opens toward the {side}.
              </HoverCardDescription>
            </HoverCardHeader>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-wrap gap-2">
            {sides.map((side) => (
              <HoverCard key={side}>
                <HoverCardTrigger
                  delay={200}
                  closeDelay={100}
                  render={
                    <Button type="button" variant="outline" size="sm" />
                  }
                >
                  {side}
                </HoverCardTrigger>
                <HoverCardContent side={side} className="w-56">
                  <HoverCardHeader>
                    <HoverCardTitle className="capitalize">{side}</HoverCardTitle>
                    <HoverCardDescription>
                      {direction === "rtl"
                        ? `به سمت ${side} باز می‌شود.`
                        : `Opens toward the ${side}.`}
                    </HoverCardDescription>
                  </HoverCardHeader>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardPositionsPreview }
