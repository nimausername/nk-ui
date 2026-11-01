"use client"

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"
import { Minus, Plus } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the number field root (`min`, `max`, `step`, `value`, …).
 */
type NumberFieldProps = NumberFieldPrimitive.Root.Props

/**
 * Groups all number-field parts and owns the numeric value.
 * Pair with Field for labels and errors.
 */
const NumberField = ({ className, ...props }: NumberFieldProps) => {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    />
  )
}

/**
 * Props for the bordered control group (decrement + input + increment).
 */
type NumberFieldGroupProps = NumberFieldPrimitive.Group.Props

/**
 * Visual shell matching nk Input height and focus ring.
 */
const NumberFieldGroup = ({ className, ...props }: NumberFieldGroupProps) => {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn(
        "relative flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border border-input bg-transparent transition-colors",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        "has-[[data-slot=number-field-input][aria-invalid=true]]:border-destructive has-[[data-slot=number-field-input][aria-invalid=true]]:ring-2 has-[[data-slot=number-field-input][aria-invalid=true]]:ring-destructive/30",
        "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
        "focus-within:data-invalid:border-destructive focus-within:data-invalid:ring-destructive/30",
        "focus-within:data-valid:border-success focus-within:data-valid:ring-success/30",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the numeric text input.
 */
type NumberFieldInputProps = NumberFieldPrimitive.Input.Props

/**
 * Formatted number input inside the group (no own border / ring).
 */
const NumberFieldInput = ({ className, ...props }: NumberFieldInputProps) => {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={cn(
        "h-full min-w-0 flex-1 bg-transparent px-2 text-center text-sm text-foreground tabular-nums outline-none",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the decrement control.
 */
type NumberFieldDecrementProps = NumberFieldPrimitive.Decrement.Props & {
  readonly children?: ReactNode
}

/**
 * Steps the value down. Defaults to a Minus icon when no children are passed.
 */
const NumberFieldDecrement = ({
  className,
  children,
  ...props
}: NumberFieldDecrementProps) => {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center text-muted-foreground transition-colors outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:bg-accent focus-visible:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children ?? <Minus className="size-4" aria-hidden="true" />}
    </NumberFieldPrimitive.Decrement>
  )
}

/**
 * Props for the increment control.
 */
type NumberFieldIncrementProps = NumberFieldPrimitive.Increment.Props & {
  readonly children?: ReactNode
}

/**
 * Steps the value up. Defaults to a Plus icon when no children are passed.
 */
const NumberFieldIncrement = ({
  className,
  children,
  ...props
}: NumberFieldIncrementProps) => {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center text-muted-foreground transition-colors outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:bg-accent focus-visible:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children ?? <Plus className="size-4" aria-hidden="true" />}
    </NumberFieldPrimitive.Increment>
  )
}

/**
 * Props for the scrub-drag area (usually wraps a label).
 */
type NumberFieldScrubAreaProps = NumberFieldPrimitive.ScrubArea.Props

/**
 * Drag horizontally to change the value (pointer-lock cursor where supported).
 */
const NumberFieldScrubArea = ({ className, ...props }: NumberFieldScrubAreaProps) => {
  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot="number-field-scrub-area"
      className={cn(
        "inline-flex cursor-ew-resize select-none items-center gap-1.5 text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the custom scrub cursor element.
 */
type NumberFieldScrubAreaCursorProps = NumberFieldPrimitive.ScrubAreaCursor.Props

/**
 * Optional custom cursor rendered while scrubbing.
 */
const NumberFieldScrubAreaCursor = ({
  className,
  ...props
}: NumberFieldScrubAreaCursorProps) => {
  return (
    <NumberFieldPrimitive.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      className={cn("drop-shadow-sm", className)}
      {...props}
    />
  )
}

export {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
}
export type {
  NumberFieldDecrementProps,
  NumberFieldGroupProps,
  NumberFieldIncrementProps,
  NumberFieldInputProps,
  NumberFieldProps,
  NumberFieldScrubAreaCursorProps,
  NumberFieldScrubAreaProps,
}
