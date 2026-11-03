"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"

import {
  toggleVariants,
  type ToggleVariantProps,
} from "@/components/ui/toggle-variants"
import { cn } from "@/lib/utils"

/**
 * Props for the nk Toggle.
 */
type ToggleProps = TogglePrimitive.Props & ToggleVariantProps

/**
 * Two-state press button. Use inside Toggle Group with a `value`.
 */
const Toggle = ({ className, variant, size, ...props }: ToggleProps) => {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
export type { ToggleProps }
