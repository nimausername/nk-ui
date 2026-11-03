"use client"

import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import {
  CircleCheck,
  Info,
  Loader2,
  OctagonX,
  TriangleAlert,
  X,
} from "lucide-react"
import {
  createContext,
  useContext,
  type ReactNode,
} from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Shared toast manager for imperative `toast.add(...)` calls.
 * Pass into `Toaster` via `toastManager` (default).
 */
const toast = ToastPrimitive.createToastManager()

/**
 * Where the toast stack sits. Physical corners/edges (not logical start/end).
 */
type ToastPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

type ToastPlacementEdge = "top" | "bottom"
type ToastPlacementAlign = "left" | "center" | "right"

const getToastPlacementEdge = (placement: ToastPlacement): ToastPlacementEdge =>
  placement.startsWith("top") ? "top" : "bottom"

const getToastPlacementAlign = (
  placement: ToastPlacement
): ToastPlacementAlign => {
  if (placement.endsWith("left")) {
    return "left"
  }
  if (placement.endsWith("center")) {
    return "center"
  }
  return "right"
}

type ToastPlacementContextValue = {
  readonly placement: ToastPlacement
  readonly edge: ToastPlacementEdge
  readonly align: ToastPlacementAlign
}

const ToastPlacementContext = createContext<ToastPlacementContextValue>({
  placement: "bottom-right",
  edge: "bottom",
  align: "right",
})

const useToastPlacement = () => useContext(ToastPlacementContext)

/**
 * Props for the toast provider (limit, timeout, manager).
 */
type ToastProviderProps = ToastPrimitive.Provider.Props

/**
 * Provides toast state. Prefer the composed `Toaster` for the docs site.
 */
const ToastProvider = ({ ...props }: ToastProviderProps) => {
  return <ToastPrimitive.Provider data-slot="toast-provider" {...props} />
}

/**
 * Props for the toast portal.
 */
type ToastPortalProps = ToastPrimitive.Portal.Props

/**
 * Portals the toast viewport into `document.body`.
 */
const ToastPortal = ({ ...props }: ToastPortalProps) => {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

type ToastViewportProps = ToastPrimitive.Viewport.Props & {
  /** Stack position in the viewport. Defaults to `bottom-right`. */
  readonly placement?: ToastPlacement
}

/**
 * Full-screen host for absolute toast roots. Placement insets live on each toast.
 */
const ToastViewport = ({
  className,
  placement = "bottom-right",
  ...props
}: ToastViewportProps) => {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      data-placement={placement}
      className={cn(
        "pointer-events-none fixed inset-0 z-50 mx-auto outline-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for an individual toast root.
 */
type ToastProps = ToastPrimitive.Root.Props

/** Shared stacking transforms — bottom edge (stack grows upward). */
const toastBottomStackClassName = cn(
  "bottom-0 origin-bottom",
  "[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]",
  "h-(--height) [transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
  "after:top-full after:bottom-auto",
  "data-expanded:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(var(--offset-y))]",
  "data-starting-style:[transform:translateX(var(--toast-anchor-x,0px))_translateY(150%)]",
  "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateX(var(--toast-anchor-x,0px))_translateY(150%)]",
  "data-ending-style:data-[swipe-direction=down]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)+150%))]",
  "data-ending-style:data-[swipe-direction=up]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)-150%))]",
  "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)+150%))]",
  "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)-150%))]"
)

/** Shared stacking transforms — top edge (stack grows downward). */
const toastTopStackClassName = cn(
  "top-0 origin-top",
  "[--offset-y:calc(var(--toast-offset-y)+calc(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))]",
  "h-(--height) [transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))]",
  "after:bottom-full after:top-auto",
  "data-expanded:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(var(--offset-y))]",
  "data-starting-style:[transform:translateX(var(--toast-anchor-x,0px))_translateY(-150%)]",
  "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateX(var(--toast-anchor-x,0px))_translateY(-150%)]",
  "data-ending-style:data-[swipe-direction=up]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)-150%))]",
  "data-ending-style:data-[swipe-direction=down]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)+150%))]",
  "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)-150%))]",
  "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)))_translateY(calc(var(--toast-swipe-movement-y)+150%))]"
)

/**
 * Horizontal pin. Inset lives on the toast — absolute children ignore viewport
 * padding, so edge offset must be here (not on the viewport).
 */
const toastAlignClassName: Record<ToastPlacementAlign, string> = {
  left: "left-6 right-auto [--toast-anchor-x:0px]",
  center: "left-1/2 right-auto [--toast-anchor-x:-50%]",
  right: "right-6 left-auto [--toast-anchor-x:0px]",
}

/** Vertical pin — overrides the bare top-0 / bottom-0 stack anchors. */
const toastEdgeInsetClassName: Record<ToastPlacementEdge, string> = {
  top: "top-6 bottom-auto",
  bottom: "bottom-6 top-auto",
}

/**
 * Single toast surface. Usually rendered by `ToastList` via `Toaster`.
 */
const Toast = ({ className, swipeDirection, ...props }: ToastProps) => {
  const { edge, align } = useToastPlacement()

  return (
    <ToastPrimitive.Root
      data-slot="toast"
      data-edge={edge}
      data-align={align}
      swipeDirection={
        swipeDirection ??
        (edge === "top" ? ["up", "left", "right"] : ["down", "left", "right"])
      }
      className={cn(
        "group/toast pointer-events-auto absolute z-[calc(1000-var(--toast-index))] w-[min(100%-3rem,24rem)] max-w-sm rounded-lg border border-border bg-popover text-popover-foreground shadow-lg will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
        "[transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]",
        "after:absolute after:start-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
        "data-expanded:h-(--toast-height) data-limited:opacity-0",
        "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-anchor-x,0px)+var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        toastAlignClassName[align],
        edge === "top" ? toastTopStackClassName : toastBottomStackClassName,
        toastEdgeInsetClassName[edge],
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the toast content row.
 */
type ToastContentProps = ToastPrimitive.Content.Props

/**
 * Inner layout for icon, title, description, and actions.
 */
const ToastContent = ({ className, ...props }: ToastContentProps) => {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the toast title.
 */
type ToastTitleProps = ToastPrimitive.Title.Props

/**
 * Primary toast label. Reads from the toast manager when children are omitted.
 */
const ToastTitle = ({ className, ...props }: ToastTitleProps) => {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

/**
 * Props for the toast description.
 */
type ToastDescriptionProps = ToastPrimitive.Description.Props

/**
 * Secondary toast copy. Reads from the toast manager when children are omitted.
 */
const ToastDescription = ({ className, ...props }: ToastDescriptionProps) => {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

/**
 * Props for the optional toast action button.
 */
type ToastActionProps = ToastPrimitive.Action.Props

/**
 * Optional action control. Defaults to an outline Button.
 */
const ToastAction = ({
  className,
  render = <Button type="button" variant="outline" size="sm" />,
  ...props
}: ToastActionProps) => {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}

/**
 * Props for the toast dismiss control.
 */
type ToastCloseProps = ToastPrimitive.Close.Props

/**
 * Dismiss control. Defaults to a ghost icon Button.
 */
const ToastClose = ({
  className,
  children,
  render = <Button type="button" variant="ghost" size="icon-sm" />,
  ...props
}: ToastCloseProps) => {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close toast"
      render={render}
      className={cn(
        "relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? <X aria-hidden="true" className="size-4" />}
    </ToastPrimitive.Close>
  )
}

/** Built-in status types recognized by `ToastIcon` / `ToastList`. */
type ToastType = "success" | "info" | "warning" | "error" | "loading"

type ToastIconProps = {
  /** Toast type from `toast.add({ type })` — drives the glyph. */
  readonly type: string | undefined
  readonly className?: string
}

/**
 * Status glyph for known toast types (`success`, `info`, `warning`, `error`, `loading`).
 */
const ToastIcon = ({ type, className }: ToastIconProps) => {
  let icon: ReactNode = null

  if (type === "success") {
    icon = <CircleCheck aria-hidden="true" className="text-success" />
  }

  if (type === "info") {
    icon = <Info aria-hidden="true" className="text-muted-foreground" />
  }

  if (type === "warning") {
    icon = <TriangleAlert aria-hidden="true" className="text-foreground" />
  }

  if (type === "error") {
    icon = <OctagonX aria-hidden="true" className="text-destructive" />
  }

  if (type === "loading") {
    icon = (
      <Loader2
        aria-hidden="true"
        className="animate-spin text-muted-foreground"
      />
    )
  }

  if (!icon) {
    return null
  }

  return (
    <span
      data-slot="toast-icon"
      data-type={type}
      className={cn(
        "shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
    >
      {icon}
    </span>
  )
}

/**
 * Renders every active toast from the nearest toast manager.
 */
const ToastList = () => {
  const { toasts } = ToastPrimitive.useToastManager()

  return toasts.map((toastItem) => {
    const hasDescription = Boolean(toastItem.description)

    return (
      <Toast
        key={toastItem.id}
        toast={toastItem}
        data-type={toastItem.type}
        className={cn(
          toastItem.type === "error" && "border-destructive/35",
          toastItem.type === "success" && "border-success/35"
        )}
      >
        <ToastContent
          className={hasDescription ? "items-start" : "items-center"}
        >
          <ToastIcon
            type={toastItem.type}
            className={hasDescription ? "mt-0.5" : undefined}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <ToastTitle />
            <ToastDescription />
          </div>
          {toastItem.actionProps ? <ToastAction /> : null}
          <ToastClose />
        </ToastContent>
      </Toast>
    )
  })
}

type ToasterProps = ToastPrimitive.Provider.Props & {
  /** Where the toast stack sits. Defaults to `bottom-right`. */
  readonly placement?: ToastPlacement
}

/**
 * App-level toast host. Place once near the root; call `toast.add(...)` anywhere.
 */
const Toaster = ({
  children,
  toastManager = toast,
  placement = "bottom-right",
  ...props
}: ToasterProps) => {
  const edge = getToastPlacementEdge(placement)
  const align = getToastPlacementAlign(placement)

  return (
    <ToastPlacementContext.Provider value={{ placement, edge, align }}>
      <ToastProvider toastManager={toastManager} {...props}>
        {children}
        <ToastPortal>
          <ToastViewport placement={placement}>
            <ToastList />
          </ToastViewport>
        </ToastPortal>
      </ToastProvider>
    </ToastPlacementContext.Provider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastList,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
  useToastPlacement,
}
export type {
  ToastActionProps,
  ToastCloseProps,
  ToastContentProps,
  ToastDescriptionProps,
  ToastIconProps,
  ToastPlacement,
  ToasterProps,
  ToastPortalProps,
  ToastProps,
  ToastProviderProps,
  ToastTitleProps,
  ToastType,
  ToastViewportProps,
}
