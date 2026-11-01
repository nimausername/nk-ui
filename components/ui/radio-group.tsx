"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the radio group root (`value`, `name`, `onValueChange`, …).
 */
type RadioGroupProps = RadioGroupPrimitive.Props

/**
 * Groups mutually exclusive radio options. Pair with Field for labels and errors.
 */
const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

/**
 * Props for a single radio option (`value`, `disabled`, …).
 */
type RadioProps = RadioPrimitive.Root.Props

/**
 * One radio button inside a RadioGroup.
 */
const Radio = ({ className, ...props }: RadioProps) => {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        "peer inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-transparent text-primary shadow-none transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
        className
      )}
      {...props}
    />
  )
}

type RadioIndicatorProps = RadioPrimitive.Indicator.Props & {
  readonly children?: ReactNode
}

/**
 * Filled center mark for the selected radio.
 */
const RadioIndicator = ({
  className,
  children,
  ...props
}: RadioIndicatorProps) => {
  return (
    <RadioPrimitive.Indicator
      data-slot="radio-indicator"
      className={cn(
        "flex size-2 items-center justify-center rounded-full bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </RadioPrimitive.Indicator>
  )
}

export { Radio, RadioGroup, RadioIndicator }
export type { RadioGroupProps, RadioIndicatorProps, RadioProps }
