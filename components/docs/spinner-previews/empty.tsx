"use client"

import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import { spinnerCopy } from "@/components/docs/spinner-previews/shared"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

/**
 * Loading empty state.
 */
const SpinnerEmptyPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Empty</h2>
      <p className="text-sm text-muted-foreground">
        Use the icon tile on{" "}
        <Link
          href="/docs/components/empty"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Empty
        </Link>{" "}
        while the first fetch is still running.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerEmpty() {
  return (
    <Empty className="border border-border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Loading projects</EmptyTitle>
        <EmptyDescription>
          Fetching the latest list. This usually takes a moment.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}`}
      >
        {(direction) => (
          <Empty className="w-full max-w-md border border-border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Spinner />
              </EmptyMedia>
              <EmptyTitle>
                {spinnerCopy(
                  direction,
                  "Loading projects",
                  "در حال بارگذاری پروژه‌ها"
                )}
              </EmptyTitle>
              <EmptyDescription>
                {spinnerCopy(
                  direction,
                  "Fetching the latest list. This usually takes a moment.",
                  "در حال دریافت فهرست. این کار کمی زمان می‌برد."
                )}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button type="button" variant="outline" size="sm">
                {spinnerCopy(direction, "Cancel", "لغو")}
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerEmptyPreview }
