"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

/**
 * Props for the switch root (`checked`, `name`, `disabled`, …).
 */
type SwitchProps = SwitchPrimitive.Root.Props

/**
 * Accessible on/off switch. Pair with Field or a wrapping label.
 */
const Switch = ({ className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent bg-input p-0.5 transition-colors outline-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:bg-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:ring-2 data-valid:ring-success/30",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the sliding thumb.
 */
type SwitchThumbProps = SwitchPrimitive.Thumb.Props

/**
 * Thumb that slides with the checked state (logical start → end).
 */
const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  return (
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "pointer-events-none block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform",
        "data-checked:translate-x-4 rtl:data-checked:-translate-x-4",
        className
      )}
      {...props}
    />
  )
}

export { Switch, SwitchThumb }
export type { SwitchProps, SwitchThumbProps }
