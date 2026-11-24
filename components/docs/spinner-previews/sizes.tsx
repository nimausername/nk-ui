"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Spinner } from "@/components/ui/spinner"

/**
 * Size scale via className.
 */
const SpinnerSizesPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Sizes</h2>
      <p className="text-sm text-muted-foreground">
        Default is{" "}
        <code className="rounded bg-muted px-1 text-xs">size-4</code>. Override
        with a Tailwind size class.
      </p>
      <ComponentPreview
        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerSizes() {
  return (
    <div className="flex items-center gap-6 text-foreground">
      <Spinner className="size-3" aria-label="Small" />
      <Spinner aria-label="Default" />
      <Spinner className="size-6" aria-label="Large" />
      <Spinner className="size-8" aria-label="Extra large" />
    </div>
  )
}`}
      >
        {() => (
          <div className="flex items-center gap-6 text-foreground">
            <Spinner className="size-3" aria-label="Small" />
            <Spinner aria-label="Default" />
            <Spinner className="size-6" aria-label="Large" />
            <Spinner className="size-8" aria-label="Extra large" />
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerSizesPreview }
