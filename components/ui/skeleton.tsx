import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the loading placeholder block.
 */
type SkeletonProps = ComponentProps<"div">

/**
 * Pulse placeholder for loading UI. Size and shape via `className`.
 */
const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
export type { SkeletonProps }
