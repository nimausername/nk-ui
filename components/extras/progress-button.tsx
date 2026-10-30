"use client"

import { Download, Loader2 } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProgressButtonProps = Omit<
  ButtonProps,
  "children" | "loading" | "loadingLabel" | "disabled"
> & {
  /** Progress from 0–100. At 100 the complete label is shown. */
  readonly progress: number
  /** Label shown while uploading (before the percentage). */
  readonly uploadingLabel?: string
  /** Label shown when progress reaches 100. */
  readonly completeLabel?: string
  /** Percent mark after the number (`%` or `٪`). */
  readonly percentMark?: string
}

/**
 * Button with an inset progress fill and stable width while the label updates.
 *
 * Lives in `components/extras` (Button-family candidate). Documented on the
 * Button docs page; promote to `components/ui` + `@nk/progress-button` when ready.
 */
const ProgressButton = ({
  progress,
  uploadingLabel = "Uploading",
  completeLabel = "Download ready",
  percentMark = "%",
  className,
  variant = "outline",
  ...props
}: ProgressButtonProps) => {
  const clamped = Math.min(100, Math.max(0, progress))
  const isComplete = clamped >= 100

  return (
    <Button
      variant={variant}
      className={cn("relative min-w-44 justify-center overflow-hidden", className)}
      disabled={!isComplete}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-label={
        isComplete ? completeLabel : `${uploadingLabel} ${clamped}${percentMark}`
      }
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 start-0 bg-foreground/10 transition-[width] duration-300"
        style={{ width: `${clamped}%` }}
      />
      <span className="relative inline-grid grid-cols-1 grid-rows-1 place-items-center">
        <span
          className={cn(
            "col-start-1 row-start-1 inline-flex items-center gap-2",
            isComplete ? "invisible" : "visible"
          )}
          aria-hidden={isComplete}
        >
          <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden="true" />
          <span className="inline-flex items-center gap-1">
            {uploadingLabel}
            <span className="inline-block w-[3ch] text-end tabular-nums">{clamped}</span>
            {percentMark}
          </span>
        </span>
        <span
          className={cn(
            "col-start-1 row-start-1 inline-flex items-center gap-2",
            isComplete ? "visible" : "invisible"
          )}
          aria-hidden={!isComplete}
        >
          <Download className="size-4 shrink-0" aria-hidden="true" />
          {completeLabel}
        </span>
      </span>
    </Button>
  )
}

export { ProgressButton }
export type { ProgressButtonProps }
