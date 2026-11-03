"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

/**
 * Props for the nk Separator (orientation, decorative, className).
 */
type SeparatorProps = SeparatorPrimitive.Props

/**
 * Accessible divider. Use `orientation="vertical"` inside flex rows.
 */
const Separator = ({ className, orientation = "horizontal", ...props }: SeparatorProps) => {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
export type { SeparatorProps }
