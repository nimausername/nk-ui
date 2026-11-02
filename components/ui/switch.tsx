"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the switch root (`checked`, `name`, `disabled`, …).
 */
type SwitchProps = SwitchPrimitive.Root.Props

/**
 * Accessible on/off switch. Pair with Field or a wrapping label.
 *
 * After the first toggle, the thumb runs a morph (stretch mid-travel) animation.
 * Honors `prefers-reduced-motion`.
 */
const Switch = ({ className, onCheckedChange, ...props }: SwitchProps) => {
  const [morph, setMorph] = useState(false)

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-morph={morph ? "" : undefined}
      className={cn(
        "group/switch peer inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent bg-input p-0.5 outline-none",
        "transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:bg-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:ring-2 data-valid:ring-success/30",
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

/**
 * Props for the sliding thumb.
 */
type SwitchThumbProps = SwitchPrimitive.Thumb.Props

/**
 * Thumb that slides with the checked state (logical start → end).
 * Morph stretch runs after the parent Switch’s first state change (`data-morph`).
 */
const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  return (
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "pointer-events-none block h-4 w-4 shrink-0 rounded-full bg-background shadow-sm ring-0 will-change-[transform,width]",
        "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        // Before first toggle (and reduced motion): plain slide
        "group-[:not([data-morph])]/switch:data-checked:translate-x-4",
        "rtl:group-[:not([data-morph])]/switch:data-checked:-translate-x-4",
        "motion-reduce:data-checked:translate-x-4 rtl:motion-reduce:data-checked:-translate-x-4",
        // After first toggle: width morph mid-travel (stays a rounded capsule)
        "group-data-morph/switch:transition-none",
        "motion-safe:group-data-morph/switch:data-checked:animate-nk-switch-thumb-on",
        "motion-safe:group-data-morph/switch:data-unchecked:animate-nk-switch-thumb-off",
        "rtl:motion-safe:group-data-morph/switch:data-checked:animate-nk-switch-thumb-on-rtl",
        "rtl:motion-safe:group-data-morph/switch:data-unchecked:animate-nk-switch-thumb-off-rtl",
        className
      )}
      {...props}
    />
  )
}

export { Switch, SwitchThumb }
export type { SwitchProps, SwitchThumbProps }
