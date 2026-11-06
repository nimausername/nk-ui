"use client"

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Props for the alert dialog root (open state and handlers).
 * Always modal; pointer dismissal outside the popup is disabled.
 */
type AlertDialogProps<Payload = unknown> = AlertDialogPrimitive.Root.Props<Payload>

/**
 * Groups all alert dialog parts. Does not render its own DOM node.
 */
const AlertDialog = <Payload,>(props: AlertDialogProps<Payload>) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

/**
 * Creates a handle that links detached triggers to an alert dialog root.
 */
const createAlertDialogHandle = AlertDialogPrimitive.createHandle

/**
 * Props for the element that opens the alert dialog.
 */
type AlertDialogTriggerProps = AlertDialogPrimitive.Trigger.Props

/**
 * Opens the alert dialog. Compose with nk Button via `render={<Button />}` .
 * Pass `handle` when the trigger sits outside the root.
 */
const AlertDialogTrigger = ({ ...props }: AlertDialogTriggerProps) => {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

/**
 * Props for the portal that mounts overlay + content.
 */
type AlertDialogPortalProps = AlertDialogPrimitive.Portal.Props

/**
 * Portals alert dialog layers into `document.body` (or a custom container).
 */
const AlertDialogPortal = ({ ...props }: AlertDialogPortalProps) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

/**
 * Props for a control that closes the alert dialog.
 */
type AlertDialogCloseProps = AlertDialogPrimitive.Close.Props

/**
 * Closes the alert dialog. Compose with nk Button via `render={<Button />}` .
 */
const AlertDialogClose = ({ ...props }: AlertDialogCloseProps) => {
  return (
    <AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
  )
}

/**
 * Props for the dimmed backdrop behind the popup.
 */
type AlertDialogOverlayProps = AlertDialogPrimitive.Backdrop.Props

/**
 * Modal backdrop. Sits under the popup inside the portal.
 * Outside clicks do not dismiss (alert dialog requires an explicit response).
 */
const AlertDialogOverlay = ({ className, ...props }: AlertDialogOverlayProps) => {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/40 transition-opacity duration-150 supports-backdrop-filter:backdrop-blur-[2px]",
        "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the positioning / scroll container around the popup.
 */
type AlertDialogViewportProps = AlertDialogPrimitive.Viewport.Props

/**
 * Positioning container for custom shells. Prefer `AlertDialogContent` for the default layout.
 */
const AlertDialogViewport = ({
  className,
  ...props
}: AlertDialogViewportProps) => {
  return (
    <AlertDialogPrimitive.Viewport
      data-slot="alert-dialog-viewport"
      className={cn(
        "fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center",
        className
      )}
      {...props}
    />
  )
}

type AlertDialogPopupProps = AlertDialogPrimitive.Popup.Props

/**
 * Popup surface without portal / overlay. Use inside a custom Viewport shell.
 */
const AlertDialogPopup = ({ className, ...props }: AlertDialogPopupProps) => {
  return (
    <AlertDialogPrimitive.Popup
      data-slot="alert-dialog-popup"
      className={cn(
        "relative z-50 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border border-border bg-popover p-4 text-sm text-popover-foreground shadow-lg outline-none sm:max-w-md",
        "duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

type AlertDialogContentProps = AlertDialogPrimitive.Popup.Props & {
  /** Popup width. `sm` is a tighter confirm. Defaults to `default`. */
  readonly size?: "default" | "sm"
}

/**
 * Portaled popup surface. Compose Header / Title / Description / Footer inside.
 * No corner close — actions must live in the footer.
 */
const AlertDialogContent = ({
  className,
  children,
  size = "default",
  ...props
}: AlertDialogContentProps) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-border bg-popover p-4 text-sm text-popover-foreground shadow-lg outline-none",
          size === "sm" ? "sm:max-w-xs" : "sm:max-w-md",
          "duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPortal>
  )
}

/**
 * Top stack for title + description (and optional leading media).
 */
const AlertDialogHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-1.5 text-start", className)}
      {...props}
    />
  )
}

/**
 * Action row under the body. Stacks on small screens; end-aligned from `sm`.
 */
const AlertDialogFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the accessible alert dialog title.
 */
type AlertDialogTitleProps = AlertDialogPrimitive.Title.Props

/**
 * Accessible title announced when the alert dialog opens.
 */
const AlertDialogTitle = ({ className, ...props }: AlertDialogTitleProps) => {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "text-base leading-none font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the accessible alert dialog description.
 */
type AlertDialogDescriptionProps = AlertDialogPrimitive.Description.Props

/**
 * Supporting copy linked to the alert dialog for assistive tech.
 */
const AlertDialogDescription = ({
  className,
  ...props
}: AlertDialogDescriptionProps) => {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

/**
 * Convenience cancel control — outline Button that closes the alert dialog.
 * Override with `render` when you need a different surface.
 */
const AlertDialogCancel = ({ ...props }: AlertDialogCloseProps) => {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      render={<Button type="button" variant="outline" />}
      {...props}
    />
  )
}

/**
 * Convenience confirm control — default Button that closes the alert dialog.
 * Pass `render={<Button variant="destructive" />}` for destructive confirms.
 */
const AlertDialogAction = ({ ...props }: AlertDialogCloseProps) => {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-action"
      render={<Button type="button" />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogViewport,
  createAlertDialogHandle,
}
export type {
  AlertDialogCloseProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogPopupProps,
  AlertDialogPortalProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
  AlertDialogViewportProps,
}
