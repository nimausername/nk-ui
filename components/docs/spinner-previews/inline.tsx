"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Spinner } from "@/components/ui/spinner"

import { spinnerCopy } from "@/components/docs/spinner-previews/shared"

/**
 * Spinner beside visible status copy.
 */
const SpinnerInlinePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Inline</h2>
      <p className="text-sm text-muted-foreground">
        Hide the icon from assistive tech when the words already name the wait.
      </p>
      <ComponentPreview
        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerInline() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p className="flex items-center gap-2 text-muted-foreground">
        <Spinner aria-hidden="true" className="size-3.5" />
        Saving changes…
      </p>
      <p className="flex items-center gap-2 text-success">
        <Spinner aria-hidden="true" className="size-3.5" />
        Connecting…
      </p>
      <p className="flex items-center gap-2 text-destructive">
        <Spinner aria-hidden="true" className="size-3.5" />
        Retrying…
      </p>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col gap-2 text-sm">
            <p className="flex items-center gap-2 text-muted-foreground">
              <Spinner aria-hidden="true" className="size-3.5" />
              {spinnerCopy(direction, "Saving changes…", "در حال ذخیره…")}
            </p>
            <p className="flex items-center gap-2 text-success">
              <Spinner aria-hidden="true" className="size-3.5" />
              {spinnerCopy(direction, "Connecting…", "در حال اتصال…")}
            </p>
            <p className="flex items-center gap-2 text-destructive">
              <Spinner aria-hidden="true" className="size-3.5" />
              {spinnerCopy(direction, "Retrying…", "تلاش دوباره…")}
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerInlinePreview }
