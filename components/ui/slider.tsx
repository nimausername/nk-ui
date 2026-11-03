"use client"

import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

/**
 * Props for the slider root (`value`, `defaultValue`, `min`, `max`, …).
 */
type SliderProps = SliderPrimitive.Root.Props

/**
 * Groups label / value / control. Compose Thumb inside Control → Track → Indicator.
 */
const Slider = ({ className, ...props }: SliderProps) => {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none flex-col gap-2 select-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the slider label.
 */
type SliderLabelProps = SliderPrimitive.Label.Props

/**
 * Accessible name for the slider.
 */
const SliderLabel = ({ className, ...props }: SliderLabelProps) => {
  return (
    <SliderPrimitive.Label
      data-slot="slider-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

/**
 * Props for the formatted value text.
 */
type SliderValueProps = SliderPrimitive.Value.Props

/**
 * Formatted value beside the label.
 */
const SliderValue = ({ className, ...props }: SliderValueProps) => {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn("text-sm text-muted-foreground tabular-nums", className)}
      {...props}
    />
  )
}

/**
 * Props for the interactive control region.
 */
type SliderControlProps = SliderPrimitive.Control.Props

/**
 * Hit area that contains track, indicator, and thumbs.
 */
const SliderControl = ({ className, ...props }: SliderControlProps) => {
  return (
    <SliderPrimitive.Control
      data-slot="slider-control"
      className={cn("flex w-full items-center", className)}
      {...props}
    />
  )
}

/**
 * Props for the slider track.
 */
type SliderTrackProps = SliderPrimitive.Track.Props

/**
 * Full track behind the indicator.
 */
const SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      className={cn(
        "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the filled range indicator.
 */
type SliderIndicatorProps = SliderPrimitive.Indicator.Props

/**
 * Filled portion of the track between min and the thumb(s).
 */
const SliderIndicator = ({ className, ...props }: SliderIndicatorProps) => {
  return (
    <SliderPrimitive.Indicator
      data-slot="slider-indicator"
      className={cn("absolute h-full bg-primary", className)}
      {...props}
    />
  )
}

/**
 * Props for a slider thumb.
 */
type SliderThumbProps = SliderPrimitive.Thumb.Props

/**
 * Draggable thumb. Add one for single value, two for a range.
 */
const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      className={cn(
        "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring transition-[color,box-shadow] outline-none",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export {
  Slider,
  SliderLabel,
  SliderValue,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
}
export type {
  SliderProps,
  SliderLabelProps,
  SliderValueProps,
  SliderControlProps,
  SliderTrackProps,
  SliderIndicatorProps,
  SliderThumbProps,
}
