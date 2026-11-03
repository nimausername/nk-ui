"use client"

import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the popover root (open state / handlers).
 */
type PopoverProps = PopoverPrimitive.Root.Props

/**
 * Groups trigger + content. Does not render its own DOM node.
 */
const Popover = ({ ...props }: PopoverProps) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * Props for the element that opens the popover.
 */
type PopoverTriggerProps = PopoverPrimitive.Trigger.Props

/**
 * Opens the popover. Compose with nk Button via `render={<Button />}`.
 */
const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * Props for a control that closes the popover.
 */
type PopoverCloseProps = PopoverPrimitive.Close.Props

/**
 * Closes the popover. Compose with nk Button via `render={<Button />}`.
 */
const PopoverClose = ({ ...props }: PopoverCloseProps) => {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}

type PopoverContentProps = PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    /** Renders a caret arrow toward the trigger. Defaults to false. */
    readonly showArrow?: boolean
  }

/**
 * Portaled popover surface. Pass `side` / `align` for placement.
 */
const PopoverContent = ({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset,
  showArrow = false,
  children,
  ...props
}: PopoverContentProps) => {
  /** Arrow needs a bit more gap so the clipped caret can sit on the edge. */
  const resolvedSideOffset = sideOffset ?? (showArrow ? 8 : 4)

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={resolvedSideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "relative z-50 flex w-72 origin-(--transform-origin) flex-col gap-2.5 rounded-lg border border-border bg-popover p-3 text-sm text-popover-foreground shadow-md outline-hidden duration-100",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {showArrow ? (
            <PopoverPrimitive.Arrow
              data-slot="popover-arrow"
              className={cn(
                "z-50 flex",
                // Clipped half-square → triangle (Base UI recommended pattern)
                "relative block h-1.5 w-3 overflow-clip",
                "data-[side=bottom]:top-[-6px]",
                "data-[side=top]:bottom-[-6px] data-[side=top]:rotate-180",
                "data-[side=left]:right-[-9px] data-[side=left]:rotate-90",
                "data-[side=right]:left-[-9px] data-[side=right]:-rotate-90",
                "data-[side=inline-start]:right-[-9px] data-[side=inline-start]:rotate-90",
                "data-[side=inline-end]:left-[-9px] data-[side=inline-end]:-rotate-90",
                "before:absolute before:bottom-0 before:left-1/2 before:box-border before:content-['']",
                "before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))]",
                "before:border before:border-border before:bg-popover",
                "before:[transform:translate(-50%,50%)_rotate(45deg)]"
              )}
            />
          ) : null}
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

/**
 * Top stack for title + description.
 */
const PopoverHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-0.5 text-sm", className)}
      {...props}
    />
  )
}

type PopoverFooterProps = ComponentProps<"div">

/**
 * Action row under the body. Stacks on small screens; end-aligned from `sm`.
 */
const PopoverFooter = ({ className, ...props }: PopoverFooterProps) => {
  return (
    <div
      data-slot="popover-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the accessible popover title.
 */
type PopoverTitleProps = PopoverPrimitive.Title.Props

/**
 * Accessible title for the popover surface.
 */
const PopoverTitle = ({ className, ...props }: PopoverTitleProps) => {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("font-medium leading-none", className)}
      {...props}
    />
  )
}

/**
 * Props for the accessible popover description.
 */
type PopoverDescriptionProps = PopoverPrimitive.Description.Props

/**
 * Supporting copy linked to the popover for assistive tech.
 */
const PopoverDescription = ({
  className,
  ...props
}: PopoverDescriptionProps) => {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
export type {
  PopoverCloseProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverFooterProps,
  PopoverProps,
  PopoverTitleProps,
  PopoverTriggerProps,
}
