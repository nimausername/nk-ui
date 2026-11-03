"use client"

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Props for the sheet root (open state / modal behavior / handlers).
 */
type SheetProps = SheetPrimitive.Root.Props

/**
 * Groups all sheet parts. Does not render its own DOM node.
 */
const Sheet = ({ ...props }: SheetProps) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

/**
 * Props for the element that opens the sheet.
 */
type SheetTriggerProps = SheetPrimitive.Trigger.Props

/**
 * Opens the sheet. Compose with nk Button via `render={<Button />}`.
 */
const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

/**
 * Props for a control that closes the sheet.
 */
type SheetCloseProps = SheetPrimitive.Close.Props

/**
 * Closes the sheet. Compose with nk Button via `render={<Button />}`.
 */
const SheetClose = ({ ...props }: SheetCloseProps) => {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

/**
 * Props for the portal that mounts overlay + content.
 */
type SheetPortalProps = SheetPrimitive.Portal.Props

/**
 * Portals sheet layers into `document.body` (or a custom container).
 */
const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

/**
 * Props for the dimmed backdrop behind the panel.
 */
type SheetOverlayProps = SheetPrimitive.Backdrop.Props

/**
 * Modal backdrop. Sits under the panel inside the portal.
 */
const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/40 transition-opacity duration-150 supports-backdrop-filter:backdrop-blur-[2px]",
        "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        "data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Panel edge.
 * - `start` / `end` — logical (mirror with writing direction)
 * - `left` / `right` — physical (same screen edge in LTR and RTL)
 * - `top` / `bottom` — horizontal drawers
 */
type SheetSide = "top" | "bottom" | "start" | "end" | "left" | "right"

/**
 * Panel size.
 * - Side sheets (`start` / `end` / `left` / `right`): max width
 * - Edge drawers (`top` / `bottom`): max height
 */
type SheetSize = "sm" | "md" | "lg" | "xl" | "full"

const sheetSideSizeClassName: Record<SheetSize, string> = {
  sm: "w-3/4 sm:max-w-sm",
  md: "w-3/4 sm:max-w-md",
  lg: "w-[85%] sm:max-w-lg",
  xl: "w-[92%] sm:max-w-xl",
  full: "w-full max-w-none",
}

/** Fixed heights so size is visible even with short copy (body scrolls). */
const sheetEdgeSizeClassName: Record<SheetSize, string> = {
  sm: "h-[40vh] max-h-[40vh]",
  md: "h-[50vh] max-h-[50vh]",
  lg: "h-[70vh] max-h-[70vh]",
  xl: "h-[85vh] max-h-[85vh]",
  full: "h-dvh max-h-dvh",
}

const isSheetHorizontalEdge = (side: SheetSide) =>
  side === "top" || side === "bottom"

type SheetContentProps = SheetPrimitive.Popup.Props & {
  /**
   * Edge the panel slides from.
   * Use `start` / `end` when the panel should flip with locale.
   * Use `left` / `right` when the edge must stay fixed on screen.
   * @default "end"
   */
  readonly side?: SheetSide
  /**
   * Panel size. Width for side sheets; max-height for top/bottom drawers.
   * @default "sm"
   */
  readonly size?: SheetSize
  /** Renders an icon close control in the logical end corner. Defaults to true. */
  readonly showCloseButton?: boolean
}

/**
 * Portaled edge panel with optional corner close control.
 * Compose Header / Title / Description / Footer inside.
 */
const SheetContent = ({
  className,
  children,
  side = "end",
  size = "sm",
  showCloseButton = true,
  ...props
}: SheetContentProps) => {
  const horizontal = isSheetHorizontalEdge(side)

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        data-size={size}
        className={cn(
          "fixed z-50 flex flex-col gap-4 border-border bg-popover text-sm text-popover-foreground shadow-lg outline-none transition duration-200 ease-in-out",
          "data-ending-style:opacity-0 data-starting-style:opacity-0",
          "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-10 data-[side=bottom]:data-starting-style:translate-y-10",
          "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:border-b data-[side=top]:data-ending-style:-translate-y-10 data-[side=top]:data-starting-style:-translate-y-10",
          "data-[side=end]:inset-y-0 data-[side=end]:end-0 data-[side=end]:h-full data-[side=end]:border-s data-[side=end]:data-ending-style:translate-x-10 data-[side=end]:data-starting-style:translate-x-10 rtl:data-[side=end]:data-ending-style:-translate-x-10 rtl:data-[side=end]:data-starting-style:-translate-x-10",
          "data-[side=start]:inset-y-0 data-[side=start]:start-0 data-[side=start]:h-full data-[side=start]:border-e data-[side=start]:data-ending-style:-translate-x-10 data-[side=start]:data-starting-style:-translate-x-10 rtl:data-[side=start]:data-ending-style:translate-x-10 rtl:data-[side=start]:data-starting-style:translate-x-10",
          "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-10 data-[side=right]:data-starting-style:translate-x-10",
          "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:border-r data-[side=left]:data-ending-style:-translate-x-10 data-[side=left]:data-starting-style:-translate-x-10",
          horizontal
            ? sheetEdgeSizeClassName[size]
            : sheetSideSizeClassName[size],
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="absolute top-3 end-3"
                aria-label="Close"
              />
            }
          >
            <X aria-hidden="true" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        ) : null}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

/**
 * Top stack for title + description (and optional leading media).
 */
const SheetHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4 pe-12 text-start", className)}
      {...props}
    />
  )
}

/**
 * Scrollable middle region between header and footer.
 */
const SheetBody = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="sheet-body"
      className={cn("flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4", className)}
      {...props}
    />
  )
}

/**
 * Action row pinned under the body.
 * Stacks on small screens (primary last in DOM sits on top via `flex-col-reverse`);
 * end-aligned row from `sm` — same pattern as DialogFooter.
 */
const SheetFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col-reverse gap-2 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the accessible sheet title.
 */
type SheetTitleProps = SheetPrimitive.Title.Props

/**
 * Accessible title announced when the sheet opens.
 */
const SheetTitle = ({ className, ...props }: SheetTitleProps) => {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "text-base leading-none font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the accessible sheet description.
 */
type SheetDescriptionProps = SheetPrimitive.Description.Props

/**
 * Supporting copy linked to the sheet for assistive tech.
 */
const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
export type {
  SheetCloseProps,
  SheetContentProps,
  SheetDescriptionProps,
  SheetOverlayProps,
  SheetPortalProps,
  SheetProps,
  SheetSide,
  SheetSize,
  SheetTitleProps,
  SheetTriggerProps,
}
