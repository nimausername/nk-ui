"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type ReleaseTagVariant = "success" | "destructive" | "secondary" | "outline"

type Release = {
  readonly version: string
  readonly date: string
  readonly tag: string
  readonly tagVariant: ReleaseTagVariant
  readonly description: string
}

const releases: readonly Release[] = [
  {
    version: "v3.2.0",
    date: "Feb 5, 2026",
    tag: "Latest",
    tagVariant: "success",
    description:
      "Added real-time collaboration cursors, improved markdown editor performance, and fixed PDF export layout issues.",
  },
  {
    version: "v3.1.4",
    date: "Jan 22, 2026",
    tag: "Patch",
    tagVariant: "destructive",
    description:
      "Resolved a memory leak in the dashboard widgets and patched a security vulnerability in file uploads.",
  },
  {
    version: "v3.1.0",
    date: "Jan 10, 2026",
    tag: "Minor",
    tagVariant: "secondary",
    description:
      "Introduced API rate limiting dashboard, added webhook retry configuration, and new audit log filters.",
  },
  {
    version: "v3.0.0",
    date: "Dec 15, 2025",
    tag: "Major",
    tagVariant: "outline",
    description:
      "Complete UI redesign with the new component library, edge runtime, and multi-tenant workspace support.",
  },
]

/**
 * Paginated release notes — step through changelog entries inside the card.
 */
const HoverCardReleaseNotesPreview = () => {
  const [current, setCurrent] = useState(0)
  const release = releases[current] ?? releases[0]
  const isFirst = current === 0
  const isLast = current === releases.length - 1

  const handlePrev = () => {
    if (isFirst) {
      return
    }
    setCurrent((value) => value - 1)
  }

  const handleNext = () => {
    if (isLast) {
      return
    }
    setCurrent((value) => value + 1)
  }

  if (!release) {
    return null
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Release notes</h2>
      <p className="text-sm text-muted-foreground">
        A dashed &quot;What&apos;s new&quot; link opens paginated entries with
        dots and previous / next controls.
      </p>
      <ComponentPreview
        code={`"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const releases = [
  {
    version: "v3.2.0",
    date: "Feb 5, 2026",
    tag: "Latest",
    tagVariant: "success" as const,
    description:
      "Added real-time collaboration cursors, improved markdown editor performance, and fixed PDF export layout issues.",
  },
  {
    version: "v3.1.4",
    date: "Jan 22, 2026",
    tag: "Patch",
    tagVariant: "destructive" as const,
    description:
      "Resolved a memory leak in the dashboard widgets and patched a security vulnerability in file uploads.",
  },
  {
    version: "v3.1.0",
    date: "Jan 10, 2026",
    tag: "Minor",
    tagVariant: "secondary" as const,
    description:
      "Introduced API rate limiting dashboard, added webhook retry configuration, and new audit log filters.",
  },
  {
    version: "v3.0.0",
    date: "Dec 15, 2025",
    tag: "Major",
    tagVariant: "outline" as const,
    description:
      "Complete UI redesign with the new component library, edge runtime, and multi-tenant workspace support.",
  },
]

export function HoverCardReleaseNotes() {
  const [current, setCurrent] = useState(0)
  const release = releases[current]
  const isFirst = current === 0
  const isLast = current === releases.length - 1

  return (
    <HoverCard>
      <HoverCardTrigger
        delay={100}
        closeDelay={200}
        className="cursor-default text-sm font-medium text-foreground underline decoration-dashed decoration-1 underline-offset-4"
      >
        What's new?
      </HoverCardTrigger>
      <HoverCardContent className="w-72 space-y-2 px-3 pt-3 pb-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{release.version}</span>
            <Badge variant={release.tagVariant} size="sm">
              {release.tag}
            </Badge>
          </div>
          <span className="text-xs text-muted-foreground">{release.date}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {release.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {releases.map((item, index) => (
              <span
                key={item.version}
                className={
                  index === current
                    ? "size-1.5 rounded-full bg-foreground"
                    : "size-1.5 rounded-full bg-muted-foreground/30"
                }
              />
            ))}
          </div>
          <div className="flex gap-0.5">
            <Button
              type="button"
              aria-label="Previous release"
              className="size-6"
              disabled={isFirst}
              onClick={() => setCurrent((value) => value - 1)}
              size="icon-sm"
              variant="ghost"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
            </Button>
            <Button
              type="button"
              aria-label="Next release"
              className="size-6"
              disabled={isLast}
              onClick={() => setCurrent((value) => value + 1)}
              size="icon-sm"
              variant="ghost"
            >
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
      >
        {(direction) => (
          <HoverCard>
            <HoverCardTrigger
              delay={100}
              closeDelay={200}
              className="cursor-default text-sm font-medium text-foreground underline decoration-dashed decoration-1 underline-offset-4"
            >
              {direction === "rtl" ? "چه خبر؟" : "What's new?"}
            </HoverCardTrigger>
            <HoverCardContent className="w-72 space-y-2 px-3 pt-3 pb-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{release.version}</span>
                  <Badge variant={release.tagVariant} size="sm">
                    {release.tag}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {release.date}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {release.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-hidden="true">
                  {releases.map((item, index) => (
                    <span
                      key={item.version}
                      className={
                        index === current
                          ? "size-1.5 rounded-full bg-foreground"
                          : "size-1.5 rounded-full bg-muted-foreground/30"
                      }
                    />
                  ))}
                </div>
                <div className="flex gap-0.5">
                  <Button
                    type="button"
                    aria-label={
                      direction === "rtl"
                        ? "نسخه قبلی"
                        : "Previous release"
                    }
                    className="size-6"
                    disabled={isFirst}
                    onClick={handlePrev}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <ArrowLeft className="size-3.5" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    aria-label={
                      direction === "rtl" ? "نسخه بعدی" : "Next release"
                    }
                    className="size-6"
                    disabled={isLast}
                    onClick={handleNext}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardReleaseNotesPreview }
