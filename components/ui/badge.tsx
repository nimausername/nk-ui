import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps } from "react"

import {
  badgeVariants,
  type BadgeVariantProps,
} from "@/components/ui/badge-variants"
import { cn } from "@/lib/utils"

/**
 * Props for the nk Badge.
 */
type BadgeProps = ComponentProps<"span"> &
  BadgeVariantProps & {
    /** Render as child element (e.g. Link) via Radix Slot. */
    readonly asChild?: boolean
  }

/**
 * Compact status / count label. Compose icons as children.
 */
const Badge = ({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
