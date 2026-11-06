"use client"

import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"
import type { ComponentProps } from "react"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuContentProps,
  type DropdownMenuGroupProps,
  type DropdownMenuItemProps,
  type DropdownMenuLabelProps,
  type DropdownMenuLinkItemProps,
  type DropdownMenuPortalProps,
  type DropdownMenuProps,
  type DropdownMenuRadioGroupProps,
  type DropdownMenuRadioItemProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuSubContentProps,
  type DropdownMenuSubProps,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuTriggerProps,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

/**
 * Props for the menubar container (orientation / modal / disabled).
 */
type MenubarProps = MenubarPrimitive.Props

/**
 * Horizontal (or vertical) bar that owns one or more menus.
 * Built on Base UI Menubar + nk Dropdown Menu surfaces.
 */
const Menubar = ({ className, ...props }: MenubarProps) => {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "flex h-8 items-center gap-0.5 rounded-lg border border-border bg-background p-[3px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a top-level menu inside the menubar.
 */
type MenubarMenuProps = DropdownMenuProps

/**
 * One menu root inside the menubar (trigger + content).
 */
const MenubarMenu = ({ ...props }: MenubarMenuProps) => {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

/**
 * Props for the portal that mounts menu layers.
 */
type MenubarPortalProps = DropdownMenuPortalProps

/**
 * Portals menubar layers into `document.body` (or a custom container).
 */
const MenubarPortal = ({ ...props }: MenubarPortalProps) => {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />
}

/**
 * Props for a menubar top-level trigger.
 */
type MenubarTriggerProps = DropdownMenuTriggerProps

/**
 * Opens a menubar menu. Prefer plain text labels (File, Edit, View).
 */
const MenubarTrigger = ({ className, ...props }: MenubarTriggerProps) => {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        "flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none",
        "hover:bg-muted focus-visible:bg-muted",
        "aria-expanded:bg-muted data-popup-open:bg-muted data-pressed:bg-muted",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the portaled menubar popup.
 */
type MenubarContentProps = DropdownMenuContentProps

/**
 * Portaled menu surface under a menubar trigger.
 */
const MenubarContent = ({
  className,
  align = "start",
  alignOffset = -4,
  side = "bottom",
  sideOffset = 8,
  ...props
}: MenubarContentProps) => {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className={cn("min-w-36", className)}
      {...props}
    />
  )
}

/**
 * Props for a labeled group of items.
 */
type MenubarGroupProps = DropdownMenuGroupProps

/**
 * Groups related menubar items under an optional label.
 */
const MenubarGroup = ({ ...props }: MenubarGroupProps) => {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />
}

/**
 * Props for a non-interactive group heading.
 */
type MenubarLabelProps = DropdownMenuLabelProps

/**
 * Non-interactive group heading inside a menubar menu.
 */
const MenubarLabel = ({ className, ...props }: MenubarLabelProps) => {
  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for a selectable menubar action row.
 */
type MenubarItemProps = DropdownMenuItemProps

/**
 * Selectable action row inside a menubar menu.
 */
const MenubarItem = ({ className, ...props }: MenubarItemProps) => {
  return (
    <DropdownMenuItem
      data-slot="menubar-item"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for an anchor row inside a menubar menu.
 */
type MenubarLinkItemProps = DropdownMenuLinkItemProps

/**
 * Anchor row for in-menu navigation. Renders an `<a>`.
 */
const MenubarLinkItem = ({ className, ...props }: MenubarLinkItemProps) => {
  return (
    <DropdownMenuLinkItem
      data-slot="menubar-link-item"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for a checkbox item inside a menubar menu.
 */
type MenubarCheckboxItemProps = DropdownMenuCheckboxItemProps

/**
 * Menubar item with a checked indicator.
 */
const MenubarCheckboxItem = ({
  className,
  ...props
}: MenubarCheckboxItemProps) => {
  return (
    <DropdownMenuCheckboxItem
      data-slot="menubar-checkbox-item"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for a radio group inside a menubar menu.
 */
type MenubarRadioGroupProps = DropdownMenuRadioGroupProps

/**
 * Mutually exclusive radio items inside a menubar menu.
 */
const MenubarRadioGroup = ({ ...props }: MenubarRadioGroupProps) => {
  return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />
}

/**
 * Props for a radio item inside a menubar menu.
 */
type MenubarRadioItemProps = DropdownMenuRadioItemProps

/**
 * Single choice inside a MenubarRadioGroup.
 */
const MenubarRadioItem = ({ className, ...props }: MenubarRadioItemProps) => {
  return (
    <DropdownMenuRadioItem
      data-slot="menubar-radio-item"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for a visual separator between items.
 */
type MenubarSeparatorProps = DropdownMenuSeparatorProps

/**
 * Hairline rule between menubar menu sections.
 */
const MenubarSeparator = ({ className, ...props }: MenubarSeparatorProps) => {
  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={className}
      {...props}
    />
  )
}

/**
 * Trailing keyboard hint inside a menubar item.
 */
const MenubarShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for a nested submenu root.
 */
type MenubarSubProps = DropdownMenuSubProps

/**
 * Nested submenu. Place SubTrigger + SubContent inside.
 */
const MenubarSub = ({ ...props }: MenubarSubProps) => {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />
}

/**
 * Props for a nested submenu trigger.
 */
type MenubarSubTriggerProps = DropdownMenuSubTriggerProps

/**
 * Opens a nested submenu. Chevron flips in RTL.
 */
const MenubarSubTrigger = ({
  className,
  ...props
}: MenubarSubTriggerProps) => {
  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      className={className}
      {...props}
    />
  )
}

/**
 * Props for a nested submenu popup.
 */
type MenubarSubContentProps = DropdownMenuSubContentProps

/**
 * Nested submenu popup. Opens on the logical end side.
 */
const MenubarSubContent = ({
  className,
  ...props
}: MenubarSubContentProps) => {
  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={className}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarLinkItem,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}
export type {
  MenubarCheckboxItemProps,
  MenubarContentProps,
  MenubarGroupProps,
  MenubarItemProps,
  MenubarLabelProps,
  MenubarLinkItemProps,
  MenubarMenuProps,
  MenubarPortalProps,
  MenubarProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarSeparatorProps,
  MenubarSubContentProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps,
}
