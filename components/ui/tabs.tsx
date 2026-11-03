"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

import { cn } from "@/lib/utils"

/**
 * Props for the tabs root.
 */
type TabsProps = TabsPrimitive.Root.Props

/**
 * Groups list and panels. Compose List / Trigger / Content (and optional Indicator).
 */
const Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

/**
 * Props for the tab list.
 */
type TabsListProps = TabsPrimitive.List.Props

/**
 * Horizontal (or vertical) row of tab triggers.
 */
const TabsList = ({ className, ...props }: TabsListProps) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative inline-flex h-9 w-fit items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a tab trigger.
 */
type TabsTriggerProps = TabsPrimitive.Tab.Props

/**
 * Activates its paired panel. Use `value` to match TabsContent.
 */
const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-sm px-3 py-1 text-sm font-medium whitespace-nowrap transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-active:bg-background data-active:text-foreground data-active:shadow-sm",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the animated active indicator.
 */
type TabsIndicatorProps = TabsPrimitive.Indicator.Props

/**
 * Optional underline / pill that tracks the active tab via CSS variables.
 */
const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "absolute start-[var(--active-tab-left)] top-[var(--active-tab-top)] z-0 h-[var(--active-tab-height)] w-[var(--active-tab-width)] rounded-sm bg-background shadow-sm transition-[inset-inline-start,width,top,height] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a tab panel.
 */
type TabsContentProps = TabsPrimitive.Panel.Props

/**
 * Panel shown when its `value` matches the active tab.
 */
const TabsContent = ({ className, ...props }: TabsContentProps) => {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsIndicator, TabsContent }
export type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsIndicatorProps,
  TabsContentProps,
}
