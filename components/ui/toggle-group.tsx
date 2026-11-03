"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { createContext, use } from "react"

import {
  toggleVariants,
  type ToggleVariantProps,
} from "@/components/ui/toggle-variants"
import { cn } from "@/lib/utils"

const ToggleGroupContext = createContext<ToggleVariantProps>({
  size: "default",
  variant: "default",
})

/**
 * Props for the toggle group root.
 */
type ToggleGroupProps = ToggleGroupPrimitive.Props & ToggleVariantProps

/**
 * Shared pressed state for a set of toggles. Single-select by default; set `multiple`.
 */
const ToggleGroup = ({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ToggleGroupProps) => {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-1 rounded-md data-[variant=outline]:gap-0",
        className
      )}
      {...props}
    >
      <ToggleGroupContext value={{ variant, size }}>{children}</ToggleGroupContext>
    </ToggleGroupPrimitive>
  )
}

/**
 * Props for a toggle inside a group.
 */
type ToggleGroupItemProps = TogglePrimitive.Props & ToggleVariantProps

/**
 * Item inside Toggle Group. Inherits variant/size from the group when omitted.
 */
const ToggleGroupItem = ({
  className,
  children,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) => {
  const context = use(ToggleGroupContext)
  const resolvedVariant = variant ?? context.variant
  const resolvedSize = size ?? context.size

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      className={cn(
        toggleVariants({
          variant: resolvedVariant,
          size: resolvedSize,
        }),
        "min-w-0 shrink-0 grow basis-0 focus:z-10 focus-visible:z-10",
        "group-data-[variant=outline]/toggle-group:rounded-none group-data-[variant=outline]/toggle-group:border",
        "group-data-[variant=outline]/toggle-group:first:rounded-s-md group-data-[variant=outline]/toggle-group:last:rounded-e-md",
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
export type { ToggleGroupProps, ToggleGroupItemProps }
