"use client"

import { Command as CommandPrimitive } from "cmdk"
import { Check, Search } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

/**
 * Props for the command root (`value`, `onValueChange`, `filter`, …).
 */
type CommandProps = ComponentProps<typeof CommandPrimitive>

/**
 * Filterable command list root (cmdk). Compose Input / List / Groups / Items.
 */
const Command = ({ className, ...props }: CommandProps) => {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

type CommandDialogProps = ComponentProps<typeof Dialog> & {
  /** Accessible dialog title (visually hidden). Defaults to “Command Palette”. */
  readonly title?: string
  /** Accessible dialog description (visually hidden). */
  readonly description?: string
  /** Extra classes on DialogContent (palette chrome). */
  readonly className?: string
  /** Corner close control. Defaults to false for palette UIs. */
  readonly showCloseButton?: boolean
  readonly children: ReactNode
}

/**
 * Command palette in a Dialog. Pass Dialog `open` / `onOpenChange` for control.
 */
const CommandDialog = ({
  title = "Command Palette",
  description = "Search for a command to run...",
  className,
  showCloseButton = false,
  children,
  ...props
}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent
        className={cn(
          "top-[min(20vh,8rem)] max-w-[calc(100%-2rem)] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-lg",
          className
        )}
        showCloseButton={showCloseButton}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/**
 * Props for the filter input.
 */
type CommandInputProps = ComponentProps<typeof CommandPrimitive.Input>

/**
 * Search field at the top of the command surface.
 */
const CommandInput = ({ className, ...props }: CommandInputProps) => {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b border-border px-3"
      cmdk-input-wrapper=""
    >
      <Search
        data-slot="command-input-icon"
        className="size-4 shrink-0 opacity-50"
        aria-hidden="true"
      />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-10 w-full min-w-0 bg-transparent py-3 text-sm text-foreground outline-hidden placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

/**
 * Props for the scrollable results list.
 */
type CommandListProps = ComponentProps<typeof CommandPrimitive.List>

/**
 * Scrollable list of groups and items under the input.
 */
const CommandList = ({ className, ...props }: CommandListProps) => {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the empty-state message.
 */
type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty>

/**
 * Shown when the filter matches no items.
 */
const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    />
  )
}

/**
 * Props for a labeled group of items.
 */
type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group>

/**
 * Section of related items with an optional `heading`.
 */
const CommandGroup = ({ className, ...props }: CommandGroupProps) => {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground",
        "**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5",
        "**:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium",
        "**:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the async loading row.
 */
type CommandLoadingProps = ComponentProps<typeof CommandPrimitive.Loading>

/**
 * Progress row shown while async results load (`shouldFilter={false}` flows).
 */
const CommandLoading = ({ className, ...props }: CommandLoadingProps) => {
  return (
    <CommandPrimitive.Loading
      data-slot="command-loading"
      className={cn(
        // cmdk wraps children in an inner [aria-hidden] div — style that row
        "py-6 text-center text-sm text-muted-foreground",
        "[&>[aria-hidden]]:flex [&>[aria-hidden]]:items-center [&>[aria-hidden]]:justify-center [&>[aria-hidden]]:gap-2",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a horizontal rule between groups.
 */
type CommandSeparatorProps = ComponentProps<typeof CommandPrimitive.Separator>

/**
 * Divider between command groups.
 */
const CommandSeparator = ({ className, ...props }: CommandSeparatorProps) => {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  )
}

/**
 * Props for a selectable command row.
 */
type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>

/**
 * One actionable / selectable row. Use `keywords` for extra filter terms.
 */
const CommandItem = ({ className, children, ...props }: CommandItemProps) => {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-hidden select-none",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        // cmdk sets data-selected="false" on idle rows — match true only
        "data-[selected=true]:bg-muted data-[selected=true]:text-foreground",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[selected=true]:*:[svg]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <Check
        data-slot="command-item-check"
        aria-hidden="true"
        className="ms-auto size-4 opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
      />
    </CommandPrimitive.Item>
  )
}

/**
 * Props for a trailing keyboard hint.
 */
type CommandShortcutProps = ComponentProps<"span">

/**
 * Keyboard shortcut hint aligned to the logical end of an item.
 */
const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ms-auto text-xs tracking-widest text-muted-foreground group-data-[selected=true]/command-item:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
}
export type {
  CommandDialogProps,
  CommandEmptyProps,
  CommandGroupProps,
  CommandInputProps,
  CommandItemProps,
  CommandListProps,
  CommandLoadingProps,
  CommandProps,
  CommandSeparatorProps,
  CommandShortcutProps,
}
