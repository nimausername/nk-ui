"use client"

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Props for the dialog root (open state, modal behavior, handlers).
 */
type DialogProps = DialogPrimitive.Root.Props

/**
 * Groups all dialog parts. Does not render its own DOM node.
 */
const Dialog = ({ ...props }: DialogProps) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * Props for the element that opens the dialog.
 */
type DialogTriggerProps = DialogPrimitive.Trigger.Props

/**
 * Opens the dialog. Compose with nk Button via `render={<Button />}` .
 */
const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * Props for the portal that mounts overlay + content.
 */
type DialogPortalProps = DialogPrimitive.Portal.Props

/**
 * Portals dialog layers into `document.body` (or a custom container).
 */
const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * Props for a control that closes the dialog.
 */
type DialogCloseProps = DialogPrimitive.Close.Props

/**
 * Closes the dialog. Compose with nk Button via `render={<Button />}` .
 */
const DialogClose = ({ ...props }: DialogCloseProps) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * Props for the dimmed backdrop behind the popup.
 */
type DialogOverlayProps = DialogPrimitive.Backdrop.Props

/**
 * Modal backdrop. Sits under the popup inside the portal.
 */
const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/40 transition-opacity duration-150 supports-backdrop-filter:backdrop-blur-[2px]",
        "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

type DialogContentProps = DialogPrimitive.Popup.Props & {
  /** Renders an icon close control in the logical end corner. Defaults to true. */
  readonly showCloseButton?: boolean
}

/**
 * Portaled popup surface with optional corner close control.
 * Compose Header / Title / Description / Footer inside.
 */
const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-border bg-popover p-4 text-sm text-popover-foreground shadow-lg outline-none sm:max-w-md",
          "duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="absolute top-2 end-2"
                aria-label="Close"
              />
            }
          >
            <X aria-hidden="true" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

/**
 * Top stack for title + description (and optional leading media).
 */
const DialogHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1.5 pe-8 text-start", className)}
      {...props}
    />
  )
}

type DialogFooterProps = ComponentProps<"div"> & {
  /** Appends a default Close action using outline Button. Defaults to false. */
  readonly showCloseButton?: boolean
}

/**
 * Action row under the body. Stacks on small screens; end-aligned from `sm`.
 */
const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  ...props
}: DialogFooterProps) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton ? (
        <DialogPrimitive.Close
          render={<Button type="button" variant="outline" />}
        >
          Close
        </DialogPrimitive.Close>
      ) : null}
    </div>
  )
}

/**
 * Props for the accessible dialog title.
 */
type DialogTitleProps = DialogPrimitive.Title.Props

/**
 * Accessible title announced when the dialog opens.
 */
const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-base leading-none font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Props for the accessible dialog description.
 */
type DialogDescriptionProps = DialogPrimitive.Description.Props

/**
 * Supporting copy linked to the dialog for assistive tech.
 */
const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
export type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
}
