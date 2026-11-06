"use client"

import { Info } from "lucide-react"

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

/**
 * Icon trigger — compact affordance for inline help.
 */
const HoverCardIconPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Icon trigger</h2>
      <p className="text-sm text-muted-foreground">
        Pair an icon Button with richer help content than a Tooltip.
      </p>
      <ComponentPreview
        code={`import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardIcon() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>Billing cycle</span>
      <HoverCard>
        <HoverCardTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="About billing cycle"
            />
          }
        >
          <Info />
        </HoverCardTrigger>
        <HoverCardContent className="w-64" side="top">
          <HoverCardHeader>
            <HoverCardTitle>Billing cycle</HoverCardTitle>
            <HoverCardDescription>
              Charges renew on the same calendar day each month. Proration
              applies when you change plans mid-cycle.
            </HoverCardDescription>
          </HoverCardHeader>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex items-center gap-2 text-sm" dir={direction}>
            <span>
              {direction === "rtl" ? "دوره صورتحساب" : "Billing cycle"}
            </span>
            <HoverCard>
              <HoverCardTrigger
                delay={200}
                closeDelay={100}
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label={
                      direction === "rtl"
                        ? "درباره دوره صورتحساب"
                        : "About billing cycle"
                    }
                  />
                }
              >
                <Info aria-hidden="true" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64" side="top">
                <HoverCardHeader>
                  <HoverCardTitle>
                    {direction === "rtl" ? "دوره صورتحساب" : "Billing cycle"}
                  </HoverCardTitle>
                  <HoverCardDescription>
                    {direction === "rtl"
                      ? "هزینه هر ماه در همان روز تقویمی تمدید می‌شود. با تغییر پلن در میانه دوره، تناسب زمانی اعمال می‌شود."
                      : "Charges renew on the same calendar day each month. Proration applies when you change plans mid-cycle."}
                  </HoverCardDescription>
                </HoverCardHeader>
              </HoverCardContent>
            </HoverCard>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardIconPreview }
