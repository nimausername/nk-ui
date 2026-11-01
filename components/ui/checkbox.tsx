"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Check, Minus } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the checkbox root (`checked`, `indeterminate`, `name`, …).
 */
type CheckboxProps = CheckboxPrimitive.Root.Props

/**
 * Accessible checkbox control. Pair with Field or a wrapping label.
 */
const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-transparent text-primary-foreground shadow-none transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:border-primary data-checked:bg-primary",
        "data-indeterminate:border-primary data-indeterminate:bg-primary",
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

type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props & {
  readonly children?: ReactNode
}

/**
 * Check / indeterminate mark inside the checkbox.
 */
const CheckboxIndicator = ({
  className,
  children,
  ...props
}: CheckboxIndicatorProps) => {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn("flex items-center justify-center text-current", className)}
      {...props}
    >
      {children ?? (
        <>
          <Check
            className="size-3.5 in-data-indeterminate:hidden"
            aria-hidden="true"
          />
          <Minus
            className="size-3.5 hidden in-data-indeterminate:block"
            aria-hidden="true"
          />
        </>
      )}
    </CheckboxPrimitive.Indicator>
  )
}

export { Checkbox, CheckboxIndicator }
export type { CheckboxIndicatorProps, CheckboxProps }
