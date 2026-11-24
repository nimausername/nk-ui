"use client"

import { GripVertical } from "lucide-react"
import type { ComponentProps } from "react"
import { Group, Panel, Separator } from "react-resizable-panels"

import { cn } from "@/lib/utils"

/**
 * Props for a set of panels that share one axis.
 */
type ResizablePanelGroupProps = ComponentProps<typeof Group>

/**
 * A row or column of panels divided by drag handles.
 *
 * Horizontal groups follow the writing direction, so the first panel stays at the start in RTL.
 */
const ResizablePanelGroup = ({
  className,
  orientation = "horizontal",
  ...props
}: ResizablePanelGroupProps) => {
  return (
    <Group
      orientation={orientation}
      data-slot="resizable-panel-group"
      data-orientation={orientation}
      className={cn("h-full w-full", className)}
      {...props}
    />
  )
}

/**
 * Props for one pane inside a group.
 */
type ResizablePanelProps = ComponentProps<typeof Panel>

/**
 * One pane. Size props accept percentages as strings, such as `"50%"`.
 */
const ResizablePanel = ({ className, ...props }: ResizablePanelProps) => {
  return (
    <Panel
      data-slot="resizable-panel"
      className={cn("min-h-0 min-w-0", className)}
      {...props}
    />
  )
}

/**
 * Props for the drag handle between panes.
 */
type ResizableHandleProps = ComponentProps<typeof Separator> & {
  /** Show a grip so the divider is easier to find. */
  readonly withHandle?: boolean
}

/**
 * The divider between panes. Keyboard focus uses the same ring as other nk controls.
 */
const ResizableHandle = ({
  className,
  withHandle = false,
  ...props
}: ResizableHandleProps) => {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        "relative flex items-center justify-center bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "aria-[orientation=vertical]:w-px aria-[orientation=vertical]:after:absolute aria-[orientation=vertical]:after:inset-y-0 aria-[orientation=vertical]:after:start-1/2 aria-[orientation=vertical]:after:w-1 aria-[orientation=vertical]:after:-translate-x-1/2",
        "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:absolute aria-[orientation=horizontal]:after:inset-x-0 aria-[orientation=horizontal]:after:top-1/2 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:-translate-y-1/2",
        "aria-[orientation=horizontal]:[&>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle ? (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border bg-background">
          <GripVertical className="size-2.5" aria-hidden="true" />
        </div>
      ) : null}
    </Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
export type { ResizableHandleProps, ResizablePanelGroupProps, ResizablePanelProps }
