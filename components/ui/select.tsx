"use client"

import { Select as SelectPrimitive } from "@base-ui/react/select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the select root (`value`, `items`, `onValueChange`, …).
 */
type SelectProps<
  Value = unknown,
  Multiple extends boolean | undefined = false,
> = SelectPrimitive.Root.Props<Value, Multiple>

/**
 * Select root. Owns value state; compose Trigger / Popup / Items inside.
 */
const Select = <Value, Multiple extends boolean | undefined = false>({
  ...props
}: SelectProps<Value, Multiple>) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

/**
 * Props for the optional select-owned label.
 */
type SelectLabelProps = SelectPrimitive.Label.Props

/**
 * Label owned by Select (prefer FieldLabel when using Field).
 */
const SelectLabel = ({ className, ...props }: SelectLabelProps) => {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  )
}

/**
 * Props for the trigger button.
 */
type SelectTriggerProps = SelectPrimitive.Trigger.Props

/**
 * Opens the select popup. Matches Input height and validation rings.
 */
const SelectTrigger = ({ className, children, ...props }: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-9 w-full min-w-0 items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "data-placeholder:text-muted-foreground",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        data-slot="select-icon"
        className="size-4 shrink-0 text-muted-foreground"
      >
        <ChevronDown className="size-4" aria-hidden="true" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/**
 * Props for the selected value display.
 */
type SelectValueProps = SelectPrimitive.Value.Props

/**
 * Shows the selected item label or placeholder.
 */
const SelectValue = ({ className, ...props }: SelectValueProps) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex-1 text-start", className)}
      {...props}
    />
  )
}

/**
 * Props for the portaled popup content.
 */
type SelectContentProps = SelectPrimitive.Popup.Props & {
  readonly sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"]
  readonly alignItemWithTrigger?: SelectPrimitive.Positioner.Props["alignItemWithTrigger"]
}

/**
 * Portaled list surface with scroll arrows.
 */
const SelectContent = ({
  className,
  children,
  sideOffset = 4,
  alignItemWithTrigger = false,
  ...props
}: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        className="isolate z-50 outline-none"
        sideOffset={sideOffset}
        alignItemWithTrigger={alignItemWithTrigger}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "relative z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md outline-none",
            "duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List
            data-slot="select-list"
            className="max-h-(--available-height) scroll-py-1 overflow-y-auto p-1"
          >
            {children}
          </SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

/**
 * Props for a select option.
 */
type SelectItemProps = SelectPrimitive.Item.Props

/**
 * One selectable option.
 */
const SelectItem = ({ className, children, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none select-none",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 items-center gap-2">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        data-slot="select-item-indicator"
        className="absolute end-2 flex size-3.5 items-center justify-center"
      >
        <Check className="size-4" aria-hidden="true" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

/**
 * Props for a labeled option group.
 */
type SelectGroupProps = SelectPrimitive.Group.Props

/**
 * Groups related options.
 */
const SelectGroup = ({ className, ...props }: SelectGroupProps) => {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("p-1", className)}
      {...props}
    />
  )
}

/**
 * Props for a group heading.
 */
type SelectGroupLabelProps = SelectPrimitive.GroupLabel.Props

/**
 * Heading for a SelectGroup.
 */
const SelectGroupLabel = ({ className, ...props }: SelectGroupLabelProps) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-group-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

/**
 * Props for a list separator.
 */
type SelectSeparatorProps = SelectPrimitive.Separator.Props

/**
 * Visual divider between options or groups.
 */
const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

type SelectScrollButtonProps = {
  readonly className?: string
  readonly children?: ReactNode
}

/**
 * Scroll-up control shown when the list can scroll upward.
 */
const SelectScrollUpButton = ({
  className,
  children,
}: SelectScrollButtonProps) => {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up"
      className={cn(
        "flex w-full cursor-default items-center justify-center py-1 text-muted-foreground",
        className
      )}
    >
      {children ?? <ChevronUp className="size-4" aria-hidden="true" />}
    </SelectPrimitive.ScrollUpArrow>
  )
}

/**
 * Scroll-down control shown when the list can scroll downward.
 */
const SelectScrollDownButton = ({
  className,
  children,
}: SelectScrollButtonProps) => {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down"
      className={cn(
        "flex w-full cursor-default items-center justify-center py-1 text-muted-foreground",
        className
      )}
    >
      {children ?? <ChevronDown className="size-4" aria-hidden="true" />}
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
export type {
  SelectContentProps,
  SelectGroupLabelProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
}
