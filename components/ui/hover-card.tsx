"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the hover card root (open state / handlers / handle).
 */
type HoverCardProps<Payload = unknown> = PreviewCardPrimitive.Root.Props<Payload>

/**
 * Groups trigger + content. Does not render its own DOM node.
 * Built on Base UI Preview Card — opens on hover / focus without stealing navigation.
 */
const HoverCard = <Payload,>(props: HoverCardProps<Payload>) => {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

/**
 * Creates a handle that links detached triggers to a hover card root.
 */
const createHoverCardHandle = PreviewCardPrimitive.createHandle

/**
 * Props for the element that opens the hover card.
 */
type HoverCardTriggerProps = PreviewCardPrimitive.Trigger.Props

/**
 * Opens the hover card on hover / focus. Often an `<a>` via `href`, or compose with Button via `render`.
 */
const HoverCardTrigger = ({ ...props }: HoverCardTriggerProps) => {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

/**
 * Props for the portal that mounts the card.
 */
type HoverCardPortalProps = PreviewCardPrimitive.Portal.Props

/**
 * Portals hover card layers into `document.body` (or a custom container).
 */
const HoverCardPortal = ({ ...props }: HoverCardPortalProps) => {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal" {...props} />
  )
}

type HoverCardContentProps = PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    /** Renders a caret arrow toward the trigger. Defaults to true. */
    readonly showArrow?: boolean
  }

/**
 * Portaled hover card surface. Pass `side` / `align` for placement.
 */
const HoverCardContent = ({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset,
  showArrow = true,
  children,
  ...props
}: HoverCardContentProps) => {
  const resolvedSideOffset = sideOffset ?? (showArrow ? 8 : 4)

  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={resolvedSideOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            "relative z-50 w-72 origin-(--transform-origin) rounded-lg border border-border bg-popover p-3 text-sm text-popover-foreground shadow-md outline-hidden duration-100",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {showArrow ? (
            <PreviewCardPrimitive.Arrow
              data-slot="hover-card-arrow"
              className={cn(
                "z-50 flex",
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
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

/**
 * Props for the positioning / scroll viewport used with animated payload swaps.
 */
type HoverCardViewportProps = PreviewCardPrimitive.Viewport.Props

/**
 * Viewport for animated content swaps when using multiple triggers / payloads.
 */
const HoverCardViewport = ({
  className,
  ...props
}: HoverCardViewportProps) => {
  return (
    <PreviewCardPrimitive.Viewport
      data-slot="hover-card-viewport"
      className={cn("relative h-(--popup-height,auto) w-full overflow-hidden", className)}
      {...props}
    />
  )
}

/**
 * Top stack for title + description (and optional leading media).
 */
const HoverCardHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="hover-card-header"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
}

/**
 * Title line inside the hover card body.
 */
const HoverCardTitle = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="hover-card-title"
      className={cn("text-sm font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Supporting copy under the title.
 */
const HoverCardDescription = ({
  className,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p
      data-slot="hover-card-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

export {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardPortal,
  HoverCardTitle,
  HoverCardTrigger,
  HoverCardViewport,
  createHoverCardHandle,
}
export type {
  HoverCardContentProps,
  HoverCardPortalProps,
  HoverCardProps,
  HoverCardTriggerProps,
  HoverCardViewportProps,
}
