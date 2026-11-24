"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

/**
 * Joined edges for a row or stack of controls.
 *
 * Horizontal joins use logical start/end so RTL layouts share the same markup.
 */
const buttonGroupVariants = cva(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:relative [&>*]:focus-visible:z-10 [&>input:not([type=hidden])]:min-w-0 [&>input:not([type=hidden])]:w-auto [&>input:not([type=hidden])]:flex-1 [&>[data-slot=select-trigger]]:w-fit",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-s-none [&>*:not(:first-child)]:border-s-0 [&>*:not(:last-child)]:rounded-e-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

/**
 * Props for a group of joined controls.
 */
type ButtonGroupProps = ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants>

/**
 * Joins buttons, inputs, and labels into one control.
 *
 * Direct children share a border. Nest another `ButtonGroup` to leave a gap between clusters.
 */
const ButtonGroup = ({
  className,
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) => {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

/**
 * Props for a non-interactive label inside a group.
 */
type ButtonGroupTextProps = ComponentProps<"div"> & {
  /** Render the single child instead of a div. */
  readonly asChild?: boolean
}

/**
 * Static label or prefix inside a group. Use `asChild` for a custom element.
 */
const ButtonGroupText = ({
  className,
  asChild = false,
  ...props
}: ButtonGroupTextProps) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="button-group-text"
      className={cn(
        "flex items-center gap-2 rounded-md border border-border bg-muted px-3 text-sm font-medium text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the divider between controls in a group.
 */
type ButtonGroupSeparatorProps = ComponentProps<typeof Separator>

/**
 * Divider between joined controls. Vertical when the group is a row.
 */
const ButtonGroupSeparator = ({
  className,
  orientation = "vertical",
  ...props
}: ButtonGroupSeparatorProps) => {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "relative m-0 self-stretch bg-input data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
export type { ButtonGroupProps, ButtonGroupSeparatorProps, ButtonGroupTextProps }
