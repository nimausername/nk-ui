"use client"

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { Check, ChevronRight } from "lucide-react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the context menu root (open state / handlers).
 */
type ContextMenuProps = ContextMenuPrimitive.Root.Props

/**
 * Groups trigger + content. Does not render its own DOM node.
 */
const ContextMenu = ({ ...props }: ContextMenuProps) => {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

/**
 * Props for the portal that mounts the menu.
 */
type ContextMenuPortalProps = ContextMenuPrimitive.Portal.Props

/**
 * Portals menu layers into `document.body` (or a custom container).
 */
const ContextMenuPortal = ({ ...props }: ContextMenuPortalProps) => {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

/**
 * Props for the surface that opens the menu on right click / long press.
 */
type ContextMenuTriggerProps = ContextMenuPrimitive.Trigger.Props

/**
 * Area that opens the context menu on right click or long press.
 */
const ContextMenuTrigger = ({ className, ...props }: ContextMenuTriggerProps) => {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn("select-none", className)}
      {...props}
    />
  )
}

type ContextMenuContentProps = ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    | "align"
    | "alignOffset"
    | "side"
    | "sideOffset"
    | "collisionBoundary"
    | "collisionAvoidance"
  >

/** Shared popup surface classes for root and nested menus. */
const contextMenuPopupClassName =
  "z-50 max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95"

/**
 * Keep nested menus on the inline axis (end ↔ start). Never fall back to
 * opening above/below the trigger — that reads as overlapping the parent.
 */
const submenuCollisionAvoidance = {
  side: "flip" as const,
  align: "shift" as const,
  fallbackAxisSide: "none" as const,
}

/**
 * Portaled menu surface. Positions at the pointer by default.
 */
const ContextMenuContent = ({
  align,
  alignOffset,
  side,
  sideOffset,
  collisionBoundary,
  collisionAvoidance,
  className,
  ...props
}: ContextMenuContentProps) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(contextMenuPopupClassName, className)}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

/**
 * Props for a labeled group of items.
 */
type ContextMenuGroupProps = ContextMenuPrimitive.Group.Props

/**
 * Groups related menu items under an optional label.
 */
const ContextMenuGroup = ({ ...props }: ContextMenuGroupProps) => {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
}

type ContextMenuLabelProps = ContextMenuPrimitive.GroupLabel.Props & {
  /** Indents the label to align with inset items. */
  readonly inset?: boolean
}

/**
 * Non-interactive group heading inside the menu.
 */
const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: ContextMenuLabelProps) => {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:ps-7",
        className
      )}
      {...props}
    />
  )
}

type ContextMenuItemProps = ContextMenuPrimitive.Item.Props & {
  /** Indents the item to align with checkbox / radio rows. */
  readonly inset?: boolean
  /** Visual tone — use `destructive` for dangerous actions. */
  readonly variant?: "default" | "destructive"
}

/**
 * Selectable action row inside the menu.
 */
const ContextMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuItemProps) => {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/context-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1.5 text-sm outline-hidden select-none",
        "focus:bg-accent focus:text-accent-foreground data-inset:ps-7",
        "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
        "data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

type ContextMenuLinkItemProps = ContextMenuPrimitive.LinkItem.Props & {
  /** Indents the link to align with inset items. */
  readonly inset?: boolean
  /** Visual tone — use `destructive` for dangerous actions. */
  readonly variant?: "default" | "destructive"
}

/**
 * Anchor row for in-menu navigation. Renders an `<a>`.
 */
const ContextMenuLinkItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuLinkItemProps) => {
  return (
    <ContextMenuPrimitive.LinkItem
      data-slot="context-menu-link-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/context-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1.5 text-sm outline-hidden select-none no-underline",
        "focus:bg-accent focus:text-accent-foreground data-inset:ps-7",
        "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
        "data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a nested submenu root.
 */
type ContextMenuSubProps = ContextMenuPrimitive.SubmenuRoot.Props

/**
 * Nested submenu. Place SubTrigger + SubContent inside.
 */
const ContextMenuSub = ({ ...props }: ContextMenuSubProps) => {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  )
}

type ContextMenuSubTriggerProps = ContextMenuPrimitive.SubmenuTrigger.Props & {
  /** Indents the trigger to align with inset items. */
  readonly inset?: boolean
}

/**
 * Opens a nested submenu. Chevron flips in RTL.
 */
const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) => {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1.5 text-sm outline-hidden select-none",
        "focus:bg-accent focus:text-accent-foreground data-inset:ps-7",
        "data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight
        aria-hidden="true"
        className="ms-auto size-4 text-muted-foreground rtl:rotate-180"
      />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

type ContextMenuSubContentProps = ContextMenuContentProps

/**
 * Nested submenu popup. Opens on the logical end side, clear of the parent menu.
 */
const ContextMenuSubContent = ({
  align = "start",
  alignOffset = -4,
  side = "inline-end",
  sideOffset = 8,
  collisionBoundary,
  collisionAvoidance = submenuCollisionAvoidance,
  className,
  ...props
}: ContextMenuSubContentProps) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-sub-content"
          className={cn(
            contextMenuPopupClassName,
            "w-auto min-w-24 shadow-lg",
            className
          )}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

type ContextMenuCheckboxItemProps = ContextMenuPrimitive.CheckboxItem.Props & {
  /** Indents the item to align with other inset rows. */
  readonly inset?: boolean
}

/**
 * Menu item with a checked indicator.
 */
const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuCheckboxItemProps) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1.5 pe-8 ps-1.5 text-sm outline-hidden select-none",
        "focus:bg-accent focus:text-accent-foreground data-inset:ps-7",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute end-2 flex items-center justify-center"
        data-slot="context-menu-checkbox-item-indicator"
      >
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <Check aria-hidden="true" className="size-4" />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

/**
 * Props for a radio group inside the menu.
 */
type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroup.Props

/**
 * Mutually exclusive radio items inside the menu.
 */
const ContextMenuRadioGroup = ({
  ...props
}: ContextMenuRadioGroupProps) => {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

type ContextMenuRadioItemProps = ContextMenuPrimitive.RadioItem.Props & {
  /** Indents the item to align with other inset rows. */
  readonly inset?: boolean
}

/**
 * Single choice inside a ContextMenuRadioGroup.
 */
const ContextMenuRadioItem = ({
  className,
  children,
  inset,
  ...props
}: ContextMenuRadioItemProps) => {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1.5 pe-8 ps-1.5 text-sm outline-hidden select-none",
        "focus:bg-accent focus:text-accent-foreground data-inset:ps-7",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute end-2 flex items-center justify-center"
        data-slot="context-menu-radio-item-indicator"
      >
        <ContextMenuPrimitive.RadioItemIndicator>
          <Check aria-hidden="true" className="size-4" />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

/**
 * Props for a visual separator between items.
 */
type ContextMenuSeparatorProps = ContextMenuPrimitive.Separator.Props

/**
 * Hairline rule between menu sections.
 */
const ContextMenuSeparator = ({
  className,
  ...props
}: ContextMenuSeparatorProps) => {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

/**
 * Trailing keyboard hint inside a menu item.
 */
const ContextMenuShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "ms-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuLinkItem,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
}
export type {
  ContextMenuCheckboxItemProps,
  ContextMenuContentProps,
  ContextMenuGroupProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  ContextMenuLinkItemProps,
  ContextMenuPortalProps,
  ContextMenuProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuSeparatorProps,
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuTriggerProps,
}
