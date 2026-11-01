"use client"

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the scroll area root.
 */
type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root>

/**
 * Groups viewport, content, and scrollbars.
 * Put surface styles (border, radius) here; put `scroll-fade` on the viewport.
 */
const ScrollArea = ({ className, ...props }: ScrollAreaProps) => {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative min-h-0", className)}
      {...props}
    />
  )
}

/**
 * Props for the scrollable viewport.
 */
type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaPrimitive.Viewport>

/**
 * The overflow scroller. Apply `scroll-fade*` classes here when using @nk/scroll-fade.
 */
const ScrollAreaViewport = ({ className, ...props }: ScrollAreaViewportProps) => {
  return (
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      className={cn(
        "h-full max-h-full min-h-0 w-full overscroll-contain rounded-[inherit] outline-none focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the content wrapper inside the viewport.
 */
type ScrollAreaContentProps = ComponentProps<typeof ScrollAreaPrimitive.Content>

/**
 * Content wrapper inside the viewport.
 */
const ScrollAreaContent = ({ className, ...props }: ScrollAreaContentProps) => {
  return (
    <ScrollAreaPrimitive.Content
      data-slot="scroll-area-content"
      className={cn(className)}
      {...props}
    />
  )
}

/**
 * Props for a scrollbar track.
 */
type ScrollAreaScrollbarProps = ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>

/**
 * Custom scrollbar track (vertical by default).
 */
const ScrollAreaScrollbar = ({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaScrollbarProps) => {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "m-px flex touch-none p-0 opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none data-hovering:pointer-events-auto data-hovering:opacity-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0",
        orientation === "vertical" && "w-2.5 justify-center",
        orientation === "horizontal" && "h-2.5 flex-col justify-center",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the scrollbar thumb.
 */
type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaPrimitive.Thumb>

/**
 * Draggable scrollbar thumb.
 */
const ScrollAreaThumb = ({ className, ...props }: ScrollAreaThumbProps) => {
  return (
    <ScrollAreaPrimitive.Thumb
      data-slot="scroll-area-thumb"
      className={cn(
        "relative flex-1 rounded-full bg-border before:absolute before:top-1/2 before:left-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the corner filler when both axes scroll.
 */
type ScrollAreaCornerProps = ComponentProps<typeof ScrollAreaPrimitive.Corner>

/**
 * Corner filler when vertical and horizontal scrollbars are both visible.
 */
const ScrollAreaCorner = ({ className, ...props }: ScrollAreaCornerProps) => {
  return (
    <ScrollAreaPrimitive.Corner
      data-slot="scroll-area-corner"
      className={cn(className)}
      {...props}
    />
  )
}

export {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
}
export type {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
}
