"use client"

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Props for the collapsible root.
 */
type CollapsibleProps = CollapsiblePrimitive.Root.Props

/**
 * Single expand / collapse region. Use `defaultOpen` or controlled `open`.
 */
const Collapsible = ({ className, ...props }: CollapsibleProps) => {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  )
}

/**
 * Props for the collapsible trigger.
 */
type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props & {
  /** Renders the default trailing chevron. Defaults to true. */
  readonly showChevron?: boolean
}

/**
 * Toggles the panel. Renders a chevron by default.
 */
const CollapsibleTrigger = ({
  className,
  children,
  showChevron = true,
  ...props
}: CollapsibleTriggerProps) => {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "group/collapsible-trigger inline-flex w-fit items-center gap-2 rounded-md text-sm font-medium transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {showChevron ? (
        <ChevronDown
          data-slot="collapsible-trigger-chevron"
          aria-hidden="true"
          className="pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-panel-open/collapsible-trigger:rotate-180 motion-reduce:transition-none"
        />
      ) : null}
    </CollapsiblePrimitive.Trigger>
  )
}

/**
 * Props for the collapsible panel.
 */
type CollapsiblePanelProps = CollapsiblePrimitive.Panel.Props

/**
 * Collapsible body. Height animates via `--collapsible-panel-height`.
 */
const CollapsiblePanel = ({ className, children, ...props }: CollapsiblePanelProps) => {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-panel"
      className={cn(
        "overflow-hidden text-sm text-muted-foreground",
        "h-[var(--collapsible-panel-height)] transition-[height] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        "data-ending-style:h-0 data-starting-style:h-0",
        className
      )}
      {...props}
    >
      <div className="pt-1 pb-0">{children}</div>
    </CollapsiblePrimitive.Panel>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel }
export type { CollapsibleProps, CollapsibleTriggerProps, CollapsiblePanelProps }
