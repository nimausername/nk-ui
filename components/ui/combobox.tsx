"use client"

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { Check, ChevronDown, X } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Props for the combobox root (`value`, `items`, `multiple`, …).
 */
type ComboboxProps<
  Value = unknown,
  Multiple extends boolean | undefined = false,
  Item = Value,
> = ComboboxPrimitive.Root.Props<Value, Multiple, Item>

/**
 * Combobox root. Owns value / filter state; compose InputGroup / Content / Items.
 */
const Combobox = <
  Value,
  Multiple extends boolean | undefined = false,
  Item = Value,
>({
  ...props
}: ComboboxProps<Value, Multiple, Item>) => {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />
}

/**
 * Props for the selected-value render helper.
 */
type ComboboxValueProps = ComboboxPrimitive.Value.Props

/**
 * Reads the selected value — useful for rendering chips in `multiple` mode.
 */
const ComboboxValue = (props: ComboboxValueProps) => {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

/**
 * Props for the input + controls wrapper.
 */
type ComboboxInputGroupProps = ComboboxPrimitive.InputGroup.Props

/**
 * Bordered shell around the input, clear, and trigger — matches Input height.
 */
const ComboboxInputGroup = ({
  className,
  ...props
}: ComboboxInputGroupProps) => {
  return (
    <ComboboxPrimitive.InputGroup
      data-slot="combobox-input-group"
      className={cn(
        "relative flex h-9 w-full min-w-0 items-center rounded-md border border-input bg-transparent text-sm transition-colors",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        "has-aria-invalid:border-destructive has-aria-invalid:ring-2 has-aria-invalid:ring-destructive/30",
        "has-data-invalid:border-destructive has-data-invalid:ring-2 has-data-invalid:ring-destructive/30",
        "has-data-valid:border-success has-data-valid:ring-2 has-data-valid:ring-success/30",
        "has-disabled:pointer-events-none has-disabled:opacity-50",
        "[&_input]:pe-9 has-data-[slot=combobox-clear]:[&_input]:pe-16",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the filterable text input.
 */
type ComboboxInputProps = ComboboxPrimitive.Input.Props

/**
 * Search / value input inside ComboboxInputGroup (or Chips).
 */
const ComboboxInput = ({ className, ...props }: ComboboxInputProps) => {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "h-full w-full min-w-0 flex-1 border-0 bg-transparent px-3 py-1 text-sm text-foreground outline-none placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the popup open trigger.
 */
type ComboboxTriggerProps = ComboboxPrimitive.Trigger.Props

/**
 * Chevron control that opens / closes the popup.
 */
const ComboboxTrigger = ({
  className,
  children,
  ...props
}: ComboboxTriggerProps) => {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "absolute end-0 top-0 flex h-full w-9 items-center justify-center text-muted-foreground outline-none",
        "hover:text-foreground disabled:pointer-events-none",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children ?? (
        <ComboboxPrimitive.Icon data-slot="combobox-icon">
          <ChevronDown aria-hidden="true" />
        </ComboboxPrimitive.Icon>
      )}
    </ComboboxPrimitive.Trigger>
  )
}

/**
 * Props for the clear-selection control.
 */
type ComboboxClearProps = ComboboxPrimitive.Clear.Props

/**
 * Clears the current selection. Only renders when a value is set.
 */
const ComboboxClear = ({
  className,
  children,
  ...props
}: ComboboxClearProps) => {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "absolute end-9 top-0 flex h-full w-7 items-center justify-center text-muted-foreground outline-none",
        "hover:text-foreground disabled:pointer-events-none",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      {children ?? <X aria-hidden="true" />}
    </ComboboxPrimitive.Clear>
  )
}

/**
 * Props for the portaled popup surface.
 */
type ComboboxContentProps = ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "sideOffset" | "align" | "alignOffset" | "anchor"
  >

/**
 * Portaled list surface. Anchors to the input group by default.
 */
const ComboboxContent = ({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxContentProps) => {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50 outline-none"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          className={cn(
            "group/combobox-content relative z-50 max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-32 origin-(--transform-origin) overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md outline-none",
            "duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

/**
 * Props for the scrollable item list.
 */
type ComboboxListProps = ComboboxPrimitive.List.Props

/**
 * Scrollable list of filtered items. Children may be a render function.
 */
const ComboboxList = ({ className, ...props }: ComboboxListProps) => {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "max-h-[min(22.5rem,var(--available-height))] scroll-py-1 overflow-y-auto overscroll-contain p-1 outline-none data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a selectable option.
 */
type ComboboxItemProps = ComboboxPrimitive.Item.Props

/**
 * One selectable option with a trailing check indicator.
 */
const ComboboxItem = ({ className, children, ...props }: ComboboxItemProps) => {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none select-none",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        data-slot="combobox-item-indicator"
        className="absolute end-2 flex size-3.5 items-center justify-center"
      >
        <Check className="size-4" aria-hidden="true" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

/**
 * Props for the empty-results message.
 */
type ComboboxEmptyProps = ComboboxPrimitive.Empty.Props

/**
 * Shown when the filtered list has no items.
 */
const ComboboxEmpty = ({ className, ...props }: ComboboxEmptyProps) => {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "hidden w-full justify-center px-2 py-4 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a labeled option group.
 */
type ComboboxGroupProps = ComboboxPrimitive.Group.Props

/**
 * Groups related options.
 */
const ComboboxGroup = ({ className, ...props }: ComboboxGroupProps) => {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("p-1", className)}
      {...props}
    />
  )
}

/**
 * Props for a group heading.
 */
type ComboboxGroupLabelProps = ComboboxPrimitive.GroupLabel.Props

/**
 * Heading for a ComboboxGroup.
 */
const ComboboxGroupLabel = ({
  className,
  ...props
}: ComboboxGroupLabelProps) => {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

/**
 * Props for a list separator.
 */
type ComboboxSeparatorProps = ComboboxPrimitive.Separator.Props

/**
 * Visual divider between options or groups.
 */
const ComboboxSeparator = ({
  className,
  ...props
}: ComboboxSeparatorProps) => {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

/**
 * Props for the multi-select chips container.
 */
type ComboboxChipsProps = ComboboxPrimitive.Chips.Props

/**
 * Chip container for `multiple` selection — wraps chips + input.
 */
const ComboboxChips = ({ className, ...props }: ComboboxChipsProps) => {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "flex min-h-9 w-full min-w-0 flex-wrap items-center gap-1 rounded-md border border-input bg-transparent px-2.5 py-1.5 text-sm transition-colors",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        "has-aria-invalid:border-destructive has-aria-invalid:ring-2 has-aria-invalid:ring-destructive/30",
        "has-disabled:pointer-events-none has-disabled:opacity-50",
        "has-data-[slot=combobox-chip]:px-1.5",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for one selected chip.
 */
type ComboboxChipProps = ComboboxPrimitive.Chip.Props & {
  readonly showRemove?: boolean
}

/**
 * Selected value chip. Include ComboboxChipRemove for dismiss.
 */
const ComboboxChip = ({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxChipProps) => {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "inline-flex h-6 max-w-full items-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium text-foreground",
        "has-data-[slot=combobox-chip-remove]:pe-0",
        className
      )}
      {...props}
    >
      {children}
      {showRemove ? (
        <ComboboxPrimitive.ChipRemove
          data-slot="combobox-chip-remove"
          className="inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none hover:text-foreground"
          aria-label="Remove"
        >
          <X className="size-3.5" aria-hidden="true" />
        </ComboboxPrimitive.ChipRemove>
      ) : null}
    </ComboboxPrimitive.Chip>
  )
}

/**
 * Props for the input nested inside ComboboxChips.
 */
type ComboboxChipsInputProps = ComboboxPrimitive.Input.Props

/**
 * Filter input rendered inside ComboboxChips for multiple selection.
 */
const ComboboxChipsInput = ({
  className,
  ...props
}: ComboboxChipsInputProps) => {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chips-input"
      className={cn(
        "min-w-16 flex-1 border-0 bg-transparent py-0.5 text-sm text-foreground outline-none placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for Collection (render helpers for `items`).
 */
type ComboboxCollectionProps = ComboboxPrimitive.Collection.Props

/**
 * Renders collection items when not using a List render function.
 */
const ComboboxCollection = (props: ComboboxCollectionProps) => {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

/**
 * Base UI filter helpers (`contains`, …) for async / custom filtering.
 */
const useComboboxFilter = ComboboxPrimitive.useFilter

export {
  Combobox,
  ComboboxValue,
  ComboboxInputGroup,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxCollection,
  useComboboxFilter,
}
export type {
  ComboboxProps,
  ComboboxValueProps,
  ComboboxInputGroupProps,
  ComboboxInputProps,
  ComboboxTriggerProps,
  ComboboxClearProps,
  ComboboxContentProps,
  ComboboxListProps,
  ComboboxItemProps,
  ComboboxEmptyProps,
  ComboboxGroupProps,
  ComboboxGroupLabelProps,
  ComboboxSeparatorProps,
  ComboboxChipsProps,
  ComboboxChipProps,
  ComboboxChipsInputProps,
  ComboboxCollectionProps,
}
