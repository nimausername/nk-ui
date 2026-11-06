"use client"

import { format, formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"

/**
 * Live timestamp — relative time in a sentence, exact times in the card.
 */
const HoverCardTimestampPreview = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  const referenceTime = new Date(now.getTime() - 1000 * 60 * 120)
  const relative = formatDistanceToNow(referenceTime, { addSuffix: true })
  const timeZoneLabel =
    Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.split("/")
      .pop()
      ?.replaceAll("_", " ") ?? "Local"

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Live timestamp</h2>
      <p className="text-sm text-muted-foreground">
        Dashed relative time in a sentence — the card shows the deploy stamp and
        a live local clock.
      </p>
      <ComponentPreview
        code={`"use client"

import { format, formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"

export function HoverCardTimestamp() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const referenceTime = new Date(now.getTime() - 1000 * 60 * 120)
  const relative = formatDistanceToNow(referenceTime, { addSuffix: true })
  const timeZoneLabel =
    Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.split("/")
      .pop()
      ?.replaceAll("_", " ") ?? "Local"

  return (
    <p className="text-sm text-muted-foreground">
      Last deployed{" "}
      <HoverCard>
        <HoverCardTrigger
          delay={100}
          closeDelay={100}
          className="cursor-default text-foreground underline decoration-dashed decoration-1 underline-offset-4"
        >
          {relative}
        </HoverCardTrigger>
        <HoverCardContent className="w-78 p-0">
          <p className="px-3 py-1.5 font-medium text-foreground">{relative}</p>
          <Separator />
          <div className="px-3 py-2 text-sm">
            <table>
              <tbody>
                <tr>
                  <td className="pr-4 pb-1.5">
                    <Badge variant="outline" size="sm">
                      Deployed
                    </Badge>
                  </td>
                  <td className="pr-6 pb-1.5 tabular-nums">
                    {format(referenceTime, "MMM d, yyyy")}
                  </td>
                  <td className="pb-1.5 text-muted-foreground tabular-nums">
                    {format(referenceTime, "hh:mm:ss a")}
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">
                    <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium">
                      {timeZoneLabel}
                    </span>
                  </td>
                  <td className="pr-6 tabular-nums">
                    {format(now, "MMM d, yyyy")}
                  </td>
                  <td className="w-28 text-muted-foreground tabular-nums">
                    {format(now, "hh:mm:ss a")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      by CI/CD pipeline.
    </p>
  )
}`}
      >
        {(direction) => (
          <p className="max-w-lg text-sm text-muted-foreground" dir={direction}>
            {direction === "rtl" ? "آخرین استقرار " : "Last deployed "}
            <HoverCard>
              <HoverCardTrigger
                delay={100}
                closeDelay={100}
                className="cursor-default text-foreground underline decoration-dashed decoration-1 underline-offset-4"
              >
                {relative}
              </HoverCardTrigger>
              <HoverCardContent className="w-78 p-0">
                <p className="px-3 py-1.5 font-medium text-foreground">
                  {relative}
                </p>
                <Separator />
                <div className="px-3 py-2 text-sm">
                  <table>
                    <tbody>
                      <tr>
                        <td className="pr-4 pb-1.5">
                          <Badge variant="outline" size="sm">
                            {direction === "rtl" ? "استقرار" : "Deployed"}
                          </Badge>
                        </td>
                        <td className="pr-6 pb-1.5 tabular-nums">
                          {format(referenceTime, "MMM d, yyyy")}
                        </td>
                        <td className="pb-1.5 text-muted-foreground tabular-nums">
                          {format(referenceTime, "hh:mm:ss a")}
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-4">
                          <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium">
                            {timeZoneLabel}
                          </span>
                        </td>
                        <td className="pr-6 tabular-nums">
                          {format(now, "MMM d, yyyy")}
                        </td>
                        <td className="w-28 text-muted-foreground tabular-nums">
                          {format(now, "hh:mm:ss a")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </HoverCardContent>
            </HoverCard>
            {direction === "rtl" ? " توسط پایپ‌لاین CI/CD." : " by CI/CD pipeline."}
          </p>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardTimestampPreview }
