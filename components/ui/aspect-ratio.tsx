import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for AspectRatio — native CSS `aspect-ratio` with optional ratio.
 */
type AspectRatioProps = ComponentProps<"div"> & {
  /**
   * Width divided by height. Defaults to `1` (square).
   * Common values: `16 / 9`, `4 / 3`, `1`, `9 / 16`.
   */
  readonly ratio?: number
}

/**
 * Locks a box to a fixed aspect ratio. Put media as an absolute child that fills.
 */
const AspectRatio = ({
  ratio = 1,
  className,
  style,
  ...props
}: AspectRatioProps) => {
  return (
    <div
      data-slot="aspect-ratio"
      style={{ aspectRatio: ratio, ...style }}
      className={cn("relative w-full", className)}
      {...props}
    />
  )
}

export { AspectRatio }
export type { AspectRatioProps }
