"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Spinner, type SpinnerIcon } from "@/components/ui/spinner"

const icons = [
  "loader",
  "loader-2",
  "circle",
  "pinwheel",
  "dashed",
  "refresh",
] as const satisfies readonly SpinnerIcon[]

/**
 * Lucide loader glyphs. Each one spins with the same component.
 */
const SpinnerIconsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Icons</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">icon</code>. Default is{" "}
        <code className="rounded bg-muted px-1 text-xs">loader-2</code>.
      </p>
      <ComponentPreview
        code={`import { Spinner } from "@/components/ui/spinner"

const icons = ["loader", "loader-2", "circle", "pinwheel", "dashed", "refresh"] as const

export function SpinnerIcons() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-foreground">
      {icons.map((icon) => (
        <div key={icon} className="flex flex-col items-center gap-2">
          <Spinner icon={icon} aria-label={icon} />
          <span className="text-xs text-muted-foreground">{icon}</span>
        </div>
      ))}
    </div>
  )
}`}
      >
        {() => (
          <div className="flex flex-wrap items-center gap-6 text-foreground">
            {icons.map((icon) => (
              <div key={icon} className="flex flex-col items-center gap-2">
                <Spinner icon={icon} aria-label={icon} />
                <span className="text-xs text-muted-foreground">{icon}</span>
              </div>
            ))}
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerIconsPreview }
