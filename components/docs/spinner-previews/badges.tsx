"use client"

import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import { spinnerCopy } from "@/components/docs/spinner-previews/shared"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

/**
 * Status badges led by a spinner.
 */
const SpinnerBadgesPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Badges</h2>
      <p className="text-sm text-muted-foreground">
        Drop a spinner into{" "}
        <Link
          href="/docs/components/badge"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Badge
        </Link>
        . The badge sizes the icon.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <Spinner aria-hidden="true" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner aria-hidden="true" />
        Queued
      </Badge>
      <Badge variant="outline">
        <Spinner aria-hidden="true" />
        Pending
      </Badge>
      <Badge variant="destructive">
        <Spinner aria-hidden="true" />
        Failing
      </Badge>
      <Badge variant="success">
        <Spinner aria-hidden="true" />
        Live
      </Badge>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-wrap items-center gap-2">
            <Badge>
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Syncing", "همگام‌سازی")}
            </Badge>
            <Badge variant="secondary">
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Queued", "در صف")}
            </Badge>
            <Badge variant="outline">
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Pending", "در انتظار")}
            </Badge>
            <Badge variant="destructive">
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Failing", "ناموفق")}
            </Badge>
            <Badge variant="success">
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Live", "زنده")}
            </Badge>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerBadgesPreview }
