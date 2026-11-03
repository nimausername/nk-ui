"use client"

import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Check, ChevronRight } from "lucide-react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the dropdown menu root (open state / handlers).
 */
type DropdownMenuProps = MenuPrimitive.Root.Props

/**
 * Groups trigger + content. Does not render its own DOM node.
 */
const DropdownMenu = ({ ...props }: DropdownMenuProps) => {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

/**
 * Props for the portal that mounts the menu.
 */
type DropdownMenuPortalProps = MenuPrimitive.Portal.Props

/**
 * Portals menu layers into `document.body` (or a custom container).
 */
const DropdownMenuPortal = ({ ...props }: DropdownMenuPortalProps) => {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

/**
 * Props for the element that opens the menu.
 */
type DropdownMenuTriggerProps = MenuPrimitive.Trigger.Props

/**
 * Opens the menu. Compose with nk Button via `render={<Button />}`.
 */
const DropdownMenuTrigger = ({ ...props }: DropdownMenuTriggerProps) => {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

type DropdownMenuContentProps = MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    | "align"
    | "alignOffset"
    | "side"
    | "sideOffset"
    | "collisionBoundary"
    | "collisionAvoidance"
  >

/** Shared popup surface classes for root and nested menus. */
const dropdownMenuPopupClassName =
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
 * Portaled menu surface. Pass `side` / `align` for placement.
 */
const DropdownMenuContent = ({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  collisionBoundary,
  collisionAvoidance,
  className,
  ...props
}: DropdownMenuContentProps) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(dropdownMenuPopupClassName, className)}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

/**
 * Props for a labeled group of items.
 */
type DropdownMenuGroupProps = MenuPrimitive.Group.Props

/**
 * Groups related menu items under an optional label.
 */
const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupProps) => {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

type DropdownMenuLabelProps = MenuPrimitive.GroupLabel.Props & {
  /** Indents the label to align with inset items. */
  readonly inset?: boolean
}

/**
 * Non-interactive group heading inside the menu.
 */
const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) => {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:ps-7",
        className
      )}
      {...props}
    />
  )
}

type DropdownMenuItemProps = MenuPrimitive.Item.Props & {
  /** Indents the item to align with checkbox / radio rows. */
  readonly inset?: boolean
  /** Visual tone — use `destructive` for dangerous actions. */
  readonly variant?: "default" | "destructive"
}

/**
 * Selectable action row inside the menu.
 */
const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: DropdownMenuItemProps) => {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1.5 text-sm outline-hidden select-none",
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

type DropdownMenuLinkItemProps = MenuPrimitive.LinkItem.Props & {
  /** Indents the link to align with inset items. */
  readonly inset?: boolean
  /** Visual tone — use `destructive` for dangerous actions. */
  readonly variant?: "default" | "destructive"
}

/**
 * Anchor row for in-menu navigation. Renders an `<a>`.
 */
const DropdownMenuLinkItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: DropdownMenuLinkItemProps) => {
  return (
    <MenuPrimitive.LinkItem
      data-slot="dropdown-menu-link-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1.5 text-sm outline-hidden select-none no-underline",
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
type DropdownMenuSubProps = MenuPrimitive.SubmenuRoot.Props

/**
 * Nested submenu. Place SubTrigger + SubContent inside.
 */
const DropdownMenuSub = ({ ...props }: DropdownMenuSubProps) => {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

type DropdownMenuSubTriggerProps = MenuPrimitive.SubmenuTrigger.Props & {
  /** Indents the trigger to align with inset items. */
  readonly inset?: boolean
}

/**
 * Opens a nested submenu. Chevron flips in RTL.
 */
const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) => {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
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
    </MenuPrimitive.SubmenuTrigger>
  )
}

type DropdownMenuSubContentProps = DropdownMenuContentProps

/**
 * Nested submenu popup. Opens on the logical end side, clear of the parent menu.
 */
const DropdownMenuSubContent = ({
  align = "start",
  alignOffset = -4,
  side = "inline-end",
  sideOffset = 8,
  collisionBoundary,
  collisionAvoidance = submenuCollisionAvoidance,
  className,
  ...props
}: DropdownMenuSubContentProps) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-sub-content"
          className={cn(
            dropdownMenuPopupClassName,
            "w-auto min-w-24 shadow-lg",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

type DropdownMenuCheckboxItemProps = MenuPrimitive.CheckboxItem.Props & {
  /** Indents the item to align with other inset rows. */
  readonly inset?: boolean
}

/**
 * Menu item with a checked indicator.
 */
const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  inset,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
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
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <Check aria-hidden="true" className="size-4" />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

/**
 * Props for a radio group inside the menu.
 */
type DropdownMenuRadioGroupProps = MenuPrimitive.RadioGroup.Props

/**
 * Mutually exclusive radio items inside the menu.
 */
const DropdownMenuRadioGroup = ({
  ...props
}: DropdownMenuRadioGroupProps) => {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

type DropdownMenuRadioItemProps = MenuPrimitive.RadioItem.Props & {
  /** Indents the item to align with other inset rows. */
  readonly inset?: boolean
}

/**
 * Single choice inside a DropdownMenuRadioGroup.
 */
const DropdownMenuRadioItem = ({
  className,
  children,
  inset,
  ...props
}: DropdownMenuRadioItemProps) => {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
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
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <Check aria-hidden="true" className="size-4" />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

/**
 * Props for a visual separator between items.
 */
type DropdownMenuSeparatorProps = MenuPrimitive.Separator.Props

/**
 * Hairline rule between menu sections.
 */
const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

/**
 * Trailing keyboard hint inside a menu item.
 */
const DropdownMenuShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ms-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
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
}
export type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuLinkItemProps,
  DropdownMenuPortalProps,
  DropdownMenuProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
}
