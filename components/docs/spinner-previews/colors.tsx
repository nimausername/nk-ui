"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Spinner } from "@/components/ui/spinner"

/**
 * Semantic color tokens.
 */
const SpinnerColorsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Colors</h2>
      <p className="text-sm text-muted-foreground">
        Tint with text tokens. The icon uses{" "}
        <code className="rounded bg-muted px-1 text-xs">currentColor</code>.
      </p>
      <ComponentPreview
        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerColors() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="text-foreground" aria-label="Foreground" />
      <Spinner className="text-muted-foreground" aria-label="Muted" />
      <Spinner className="text-primary" aria-label="Primary" />
      <Spinner className="text-destructive" aria-label="Destructive" />
      <Spinner className="text-success" aria-label="Success" />
    </div>
  )
}`}
      >
        {() => (
          <div className="flex items-center gap-6">
            <Spinner className="text-foreground" aria-label="Foreground" />
            <Spinner className="text-muted-foreground" aria-label="Muted" />
            <Spinner className="text-primary" aria-label="Primary" />
            <Spinner className="text-destructive" aria-label="Destructive" />
            <Spinner className="text-success" aria-label="Success" />
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerColorsPreview }
