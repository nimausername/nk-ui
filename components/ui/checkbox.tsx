"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the checkbox root (`checked`, `indeterminate`, `name`, …).
 */
type CheckboxProps = CheckboxPrimitive.Root.Props

/**
 * Accessible checkbox control. Pair with Field or a wrapping label.
 *
 * After the first toggle, the check / indeterminate mark runs a morph animation.
 * Honors `prefers-reduced-motion`.
 */
const Checkbox = ({ className, onCheckedChange, ...props }: CheckboxProps) => {
  const [morph, setMorph] = useState(false)

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-morph={morph ? "" : undefined}
      className={cn(
        "group/checkbox peer inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-transparent text-primary-foreground shadow-none outline-none",
        "transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:border-primary data-checked:bg-primary",
        "data-indeterminate:border-primary data-indeterminate:bg-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
        className
      )}
      onCheckedChange={(checked, eventDetails) => {
        setMorph(true)
        onCheckedChange?.(checked, eventDetails)
      }}
      {...props}
    />
  )
}

type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props & {
  readonly children?: ReactNode
}

/**
 * Default check mark — stroke path morphs on toggle when the root has `data-morph`.
 */
const CheckboxCheckMark = () => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="size-3.5 in-data-indeterminate:hidden"
  >
    <path
      data-slot="checkbox-check"
      d="M3 7.2 5.8 10l5.2-6"
      pathLength={1}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Default indeterminate mark — stretches on toggle when the root has `data-morph`.
 */
const CheckboxIndeterminateMark = () => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="size-3.5 hidden in-data-indeterminate:block"
  >
    <path
      data-slot="checkbox-indeterminate"
      d="M3 7h8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)

/**
 * Check / indeterminate mark inside the checkbox.
 * Enter/exit morph runs after the parent Checkbox’s first state change (`data-morph`).
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
          <CheckboxCheckMark />
          <CheckboxIndeterminateMark />
        </>
      )}
    </CheckboxPrimitive.Indicator>
  )
}

export { Checkbox, CheckboxIndicator }
export type { CheckboxIndicatorProps, CheckboxProps }
