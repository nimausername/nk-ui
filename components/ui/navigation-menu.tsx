"use client"

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Shared trigger / top-level link look for navigation menu rows.
 */
const navigationMenuTriggerStyle = cva(
  [
    "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none transition-colors",
    "hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted",
    "data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted",
  ].join(" ")
)

/**
 * Props for the navigation menu root (value / delays / orientation / align).
 */
type NavigationMenuProps = NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align"> & {
    /** Renders a caret on the shared popup. Defaults to false. */
    readonly showArrow?: boolean
    /**
     * Mounts the default portaled positioner + viewport.
     * Set to false for nested inline menus that render their own Viewport.
     * Defaults to true.
     */
    readonly withPositioner?: boolean
  }

/**
 * Site navigation with hover / focus panels. Renders a shared positioner + viewport.
 */
const NavigationMenu = ({
  className,
  children,
  align = "start",
  showArrow = false,
  withPositioner = true,
  ...props
}: NavigationMenuProps) => {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {withPositioner ? (
        <NavigationMenuPositioner align={align} showArrow={showArrow} />
      ) : null}
    </NavigationMenuPrimitive.Root>
  )
}

/**
 * Props for the horizontal (or vertical) list of items.
 */
type NavigationMenuListProps = NavigationMenuPrimitive.List.Props

/**
 * Flex list that holds navigation items.
 */
const NavigationMenuList = ({
  className,
  ...props
}: NavigationMenuListProps) => {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for one navigation item (trigger + content, or a lone link).
 */
type NavigationMenuItemProps = NavigationMenuPrimitive.Item.Props

/**
 * One item in the navigation list.
 */
const NavigationMenuItem = ({
  className,
  ...props
}: NavigationMenuItemProps) => {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

/**
 * Props for a trigger that opens a content panel.
 */
type NavigationMenuTriggerProps = NavigationMenuPrimitive.Trigger.Props

/**
 * Opens the item panel. Includes a chevron that rotates when open.
 */
const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) => {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      <ChevronDown
        aria-hidden="true"
        className="relative top-px ms-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

/**
 * Props for panel content projected into the shared viewport.
 */
type NavigationMenuContentProps = NavigationMenuPrimitive.Content.Props

/**
 * Panel body for a triggered item. Rendered inside the shared viewport.
 */
const NavigationMenuContent = ({
  className,
  ...props
}: NavigationMenuContentProps) => {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "h-full w-auto p-1 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "data-starting-style:opacity-0 data-ending-style:opacity-0",
        "data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%]",
        "data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%]",
        "**:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a navigation link (compose Next.js `Link` via `render`).
 */
type NavigationMenuLinkProps = NavigationMenuPrimitive.Link.Props

/**
 * Navigational link. Use `render={<Link href="..." />}` for the App Router.
 */
const NavigationMenuLink = ({
  className,
  ...props
}: NavigationMenuLinkProps) => {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm outline-none transition-colors",
        "hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "in-data-[slot=navigation-menu-content]:rounded-md",
        "data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for an optional caret on the popup.
 */
type NavigationMenuArrowProps = NavigationMenuPrimitive.Arrow.Props

/**
 * Caret on the shared popup pointing at the active trigger.
 */
const NavigationMenuArrow = ({
  className,
  ...props
}: NavigationMenuArrowProps) => {
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot="navigation-menu-arrow"
      className={cn(
        "relative z-50 flex",
        "block h-1.5 w-3 overflow-clip",
        "data-[side=bottom]:top-[-6px]",
        "data-[side=top]:bottom-[-6px] data-[side=top]:rotate-180",
        "data-[side=left]:right-[-9px] data-[side=left]:rotate-90",
        "data-[side=right]:left-[-9px] data-[side=right]:-rotate-90",
        "before:absolute before:bottom-0 before:left-1/2 before:box-border before:content-['']",
        "before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))]",
        "before:border before:border-border before:bg-popover",
        "before:[transform:translate(-50%,50%)_rotate(45deg)]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the shared floating positioner.
 */
type NavigationMenuPositionerProps = NavigationMenuPrimitive.Positioner.Props & {
  /** Renders a caret toward the active trigger. */
  readonly showArrow?: boolean
}

/**
 * Portaled positioner + popup + viewport. Mounted once by `NavigationMenu`.
 */
const NavigationMenuPositioner = ({
  className,
  side = "bottom",
  sideOffset,
  align = "start",
  alignOffset = 0,
  showArrow = false,
  ...props
}: NavigationMenuPositionerProps) => {
  const resolvedSideOffset = sideOffset ?? (showArrow ? 10 : 8)

  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        data-slot="navigation-menu-positioner"
        side={side}
        sideOffset={resolvedSideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)",
          "transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none",
          "data-[side=bottom]:before:absolute data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=bottom]:before:content-['']",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup
          data-slot="navigation-menu-popup"
          className={cn(
            "relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) xs:w-(--popup-width)",
            "rounded-lg border border-border bg-popover text-popover-foreground shadow-md outline-none",
            "transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "data-starting-style:scale-90 data-starting-style:opacity-0",
            "data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150"
          )}
        >
          {showArrow ? <NavigationMenuArrow /> : null}
          <NavigationMenuPrimitive.Viewport
            data-slot="navigation-menu-viewport"
            className="relative size-full overflow-hidden"
          />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

/**
 * Props for a portal wrapper when composing a custom positioner.
 */
type NavigationMenuPortalProps = NavigationMenuPrimitive.Portal.Props

/**
 * Portal for a custom positioner composition.
 */
const NavigationMenuPortal = ({ ...props }: NavigationMenuPortalProps) => {
  return (
    <NavigationMenuPrimitive.Portal
      data-slot="navigation-menu-portal"
      {...props}
    />
  )
}

/**
 * Props for an inline viewport (nested menus without a portal).
 */
type NavigationMenuViewportProps = NavigationMenuPrimitive.Viewport.Props

/**
 * Inline viewport for nested menus that keep second-level content in-panel.
 */
const NavigationMenuViewport = ({
  className,
  ...props
}: NavigationMenuViewportProps) => {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      className={cn(
        "relative isolate z-50 overflow-hidden bg-popover text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
export type {
  NavigationMenuArrowProps,
  NavigationMenuContentProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuPortalProps,
  NavigationMenuPositionerProps,
  NavigationMenuProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
}
