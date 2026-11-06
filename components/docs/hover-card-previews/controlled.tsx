"use client"

import { useState } from "react"

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
 * Controlled open — parent owns open state.
 */
const HoverCardControlledPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Controlled</h2>
      <p className="text-sm text-muted-foreground">
        Drive{" "}
        <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
        <code className="rounded bg-muted px-1 text-xs">onOpenChange</code> when
        you need the card from a secondary control.
      </p>
      <ComponentPreview
        code={`import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-start gap-3">
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Show card
      </Button>
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger
          delay={0}
          closeDelay={100}
          render={<Button variant="link" className="h-auto p-0" />}
        >
          @nk
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <HoverCardHeader>
            <HoverCardTitle>@nk</HoverCardTitle>
            <HoverCardDescription>
              Controlled hover cards stay open until you dismiss them.
            </HoverCardDescription>
          </HoverCardHeader>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(true)
                }}
              >
                {direction === "rtl" ? "نمایش کارت" : "Show card"}
              </Button>
              <span className="text-xs text-muted-foreground tabular-nums">
                {open
                  ? direction === "rtl"
                    ? "باز"
                    : "Open"
                  : direction === "rtl"
                    ? "بسته"
                    : "Closed"}
              </span>
            </div>
            <HoverCard open={open} onOpenChange={setOpen}>
              <HoverCardTrigger
                delay={0}
                closeDelay={100}
                render={
                  <Button type="button" variant="link" className="h-auto p-0" />
                }
              >
                @nk
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <HoverCardHeader>
                  <HoverCardTitle>@nk</HoverCardTitle>
                  <HoverCardDescription>
                    {direction === "rtl"
                      ? "کارت‌های کنترل‌شده تا زمان بستن باز می‌مانند."
                      : "Controlled hover cards stay open until you dismiss them."}
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

export { HoverCardControlledPreview }
