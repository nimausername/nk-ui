"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { cn } from "@/lib/utils"

/**
 * Props for the progress root (`value`, `max`, …).
 */
type ProgressProps = ProgressPrimitive.Root.Props

/**
 * Groups label / track / value. Pass `value={null}` for indeterminate.
 */
const Progress = ({ className, ...props }: ProgressProps) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  )
}

/**
 * Props for the progress label.
 */
type ProgressLabelProps = ProgressPrimitive.Label.Props

/**
 * Accessible name for the progress bar.
 */
const ProgressLabel = ({ className, ...props }: ProgressLabelProps) => {
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

/**
 * Props for the formatted value text.
 */
type ProgressValueProps = ProgressPrimitive.Value.Props

/**
 * Formatted percentage / value beside the label.
 */
const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      className={cn("text-sm text-muted-foreground tabular-nums", className)}
      {...props}
    />
  )
}

/**
 * Props for the progress track.
 */
type ProgressTrackProps = ProgressPrimitive.Track.Props

/**
 * Track that contains the indicator.
 */
const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the filled indicator.
 */
type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props

/**
 * Filled portion of the track. Width is set by Base UI from `value`.
 */
const ProgressIndicator = ({ className, ...props }: ProgressIndicatorProps) => {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "h-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        "data-indeterminate:w-1/3 data-indeterminate:animate-pulse",
        className
      )}
      {...props}
    />
  )
}

export {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressTrack,
  ProgressIndicator,
}
export type {
  ProgressProps,
  ProgressLabelProps,
  ProgressValueProps,
  ProgressTrackProps,
  ProgressIndicatorProps,
}
