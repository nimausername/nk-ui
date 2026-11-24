"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { spinnerCopy } from "@/components/docs/spinner-previews/shared"
import { Spinner } from "@/components/ui/spinner"

/**
 * Centered page-style loading panel.
 */
const SpinnerCenteredPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Centered</h2>
      <p className="text-sm text-muted-foreground">
        A quiet panel for a first load — large spinner, title, and a muted hint.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerCentered() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl border border-border px-6 py-10 text-center">
      <Spinner className="size-8 text-muted-foreground" />
      <div className="space-y-1">
        <p className="text-sm font-medium">Setting things up</p>
        <p className="text-sm text-muted-foreground">
          This page will be ready in a moment.
        </p>
      </div>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl border border-border px-6 py-10 text-center">
            <Spinner className="size-8 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">
                {spinnerCopy(direction, "Setting things up", "در حال آماده‌سازی")}
              </p>
              <p className="text-sm text-muted-foreground">
                {spinnerCopy(
                  direction,
                  "This page will be ready in a moment.",
                  "این صفحه لحظه‌ای دیگر آماده است."
                )}
              </p>
            </div>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerCenteredPreview }
