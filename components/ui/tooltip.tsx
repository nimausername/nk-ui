"use client"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

/**
 * Props for the shared tooltip delay / skip-delay provider.
 */
type TooltipProviderProps = TooltipPrimitive.Provider.Props

/**
 * Sets shared tooltip timing for a subtree. Wrap the app (or a section) once.
 */
const TooltipProvider = ({ delay = 0, ...props }: TooltipProviderProps) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

/**
 * Props for the tooltip root (open state / handlers).
 */
type TooltipProps = TooltipPrimitive.Root.Props

/**
 * Groups trigger + content. Does not render its own DOM node.
 */
const Tooltip = ({ ...props }: TooltipProps) => {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

/**
 * Props for the element that shows the tooltip on hover / focus.
 */
type TooltipTriggerProps = TooltipPrimitive.Trigger.Props

/**
 * Opens the tooltip. Compose with nk Button via `render={<Button />}`.
 */
const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

type TooltipContentProps = TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    /**
     * Surface tone.
     * - `invert` — foreground fill / background text (default)
     * - `outline` — popover surface with border
     */
    readonly variant?: "invert" | "outline"
    /** Renders the caret arrow. Defaults to true. */
    readonly showArrow?: boolean
  }

/**
 * Portaled tooltip surface with an optional arrow.
 * Pass `side` / `align` for placement; nest a `<kbd>` for shortcut hints.
 */
const TooltipContent = ({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  variant = "invert",
  showArrow = true,
  children,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          data-variant={variant}
          className={cn(
            "z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md px-3 py-1.5 text-xs text-balance",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            "**:data-[slot=kbd]:rounded-sm **:data-[slot=kbd]:px-1 **:data-[slot=kbd]:font-sans **:data-[slot=kbd]:text-[0.65rem] **:data-[slot=kbd]:tracking-widest",
            variant === "invert" &&
              "bg-foreground text-background **:data-[slot=kbd]:bg-background/15 **:data-[slot=kbd]:text-background",
            variant === "outline" &&
              "border border-border bg-popover text-popover-foreground shadow-md **:data-[slot=kbd]:bg-muted **:data-[slot=kbd]:text-muted-foreground",
            className
          )}
          {...props}
        >
          {children}
          {showArrow ? (
            <TooltipPrimitive.Arrow
              data-slot="tooltip-arrow"
              className={cn(
                "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]",
                "data-[side=bottom]:top-1 data-[side=top]:-bottom-2.5",
                "data-[side=inline-end]:top-1/2! data-[side=inline-end]:-start-1 data-[side=inline-end]:-translate-y-1/2",
                "data-[side=inline-start]:top-1/2! data-[side=inline-start]:-end-1 data-[side=inline-start]:-translate-y-1/2",
                "data-[side=left]:top-1/2! data-[side=left]:-end-1 data-[side=left]:-translate-y-1/2",
                "data-[side=right]:top-1/2! data-[side=right]:-start-1 data-[side=right]:-translate-y-1/2",
                variant === "invert" && "bg-foreground fill-foreground",
                variant === "outline" &&
                  "border-e border-b border-border bg-popover fill-popover"
              )}
            />
          ) : null}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
export type {
  TooltipContentProps,
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps,
}
