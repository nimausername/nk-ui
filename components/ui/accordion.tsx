"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Props for the accordion root.
 */
type AccordionProps = AccordionPrimitive.Root.Props

/**
 * Groups accordion items. Single-open by default; set `multiple` for multi-open.
 */
const Accordion = ({ className, ...props }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

/**
 * Props for an accordion item.
 */
type AccordionItemProps = AccordionPrimitive.Item.Props

/**
 * One collapsible section. Requires a `value`.
 */
const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-border last:border-b-0", className)}
      {...props}
    />
  )
}

/**
 * Props for the accordion header.
 */
type AccordionHeaderProps = AccordionPrimitive.Header.Props

/**
 * Heading wrapper around the trigger.
 */
const AccordionHeader = ({ className, ...props }: AccordionHeaderProps) => {
  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className={cn("flex", className)}
      {...props}
    />
  )
}

/**
 * Props for the accordion trigger.
 */
type AccordionTriggerProps = AccordionPrimitive.Trigger.Props

/**
 * Expands / collapses the panel. Renders a chevron by default.
 */
const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
  return (
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(
        "group/accordion-trigger flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-start text-sm font-medium transition-colors outline-none hover:underline",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-panel-open/accordion-trigger:rotate-180 motion-reduce:transition-none"
      />
    </AccordionPrimitive.Trigger>
  )
}

/**
 * Props for the accordion panel.
 */
type AccordionPanelProps = AccordionPrimitive.Panel.Props

/**
 * Collapsible content. Height animates via `--accordion-panel-height`.
 */
const AccordionPanel = ({ className, children, ...props }: AccordionPanelProps) => {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        "overflow-hidden text-sm text-muted-foreground",
        "h-[var(--accordion-panel-height)] transition-[height] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        "data-ending-style:h-0 data-starting-style:h-0",
        className
      )}
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
}
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionTriggerProps,
  AccordionPanelProps,
}
