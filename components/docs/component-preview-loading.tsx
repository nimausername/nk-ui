import type { ComponentProps } from "react"

import { NkMark } from "@/components/site/nk-mark"
import { cn } from "@/lib/utils"

type ComponentPreviewLoadingProps = Omit<ComponentProps<"div">, "children">

/**
 * Shared SSR / hydration placeholder for docs `ComponentPreview` stages.
 * One brand mark with a soft pulse — enough signal without competing with the live example.
 */
const ComponentPreviewLoading = ({
  className,
  ...props
}: ComponentPreviewLoadingProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading preview"
      data-slot="component-preview-loading"
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-2",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="rounded-sm motion-safe:animate-pulse"
      >
        <NkMark size="md" />
      </span>
      <p className="text-xs text-muted-foreground">Loading…</p>
    </div>
  )
}

export { ComponentPreviewLoading }
export type { ComponentPreviewLoadingProps }
