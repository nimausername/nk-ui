"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Spinner } from "@/components/ui/spinner"

/**
 * Bare default spinner.
 */
const SpinnerDefaultPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Default</h2>
      <p className="text-sm text-muted-foreground">
        Announces “Loading”. Color follows the parent.
      </p>
      <ComponentPreview
        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerDefault() {
  return <Spinner />
}`}
      >
        {() => <Spinner />}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerDefaultPreview }
