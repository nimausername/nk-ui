"use client"

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, MouseEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

/**
 * Props for the field that wraps an input and its addons.
 */
type InputGroupProps = ComponentProps<"div">

/**
 * One field with a prefix, suffix, icon, or button inside the border.
 *
 * Padding uses logical start and end, so the same markup works in RTL.
 */
const InputGroup = ({ className, ...props }: InputGroupProps) => {
  return (
    <div
      role="group"
      data-slot="input-group"
      className={cn(
        "group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-input bg-transparent text-sm transition-colors outline-none",
        "has-[textarea]:h-auto has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col",
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background",
        "has-[[data-slot=input-group-control][aria-invalid=true]]:border-destructive has-[[data-slot=input-group-control][aria-invalid=true]]:ring-2 has-[[data-slot=input-group-control][aria-invalid=true]]:ring-destructive/30",
        "has-[[data-slot=input-group-control][data-invalid]]:border-destructive has-[[data-slot=input-group-control][data-invalid]]:ring-2 has-[[data-slot=input-group-control][data-invalid]]:ring-destructive/30",
        "has-[[data-slot=input-group-control][data-valid]]:border-success has-[[data-slot=input-group-control][data-valid]]:ring-2 has-[[data-slot=input-group-control][data-valid]]:ring-success/30",
        "has-[[data-slot=input-group-control]:disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-has-[[data-slot=input-group-control]:disabled]/input-group:opacity-50 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "order-first ps-3 has-[>button]:-ms-1 has-[>kbd]:-ms-1",
        "inline-end": "order-last pe-3 has-[>button]:-me-1 has-[>kbd]:-me-1",
        "block-start":
          "order-first w-full justify-start px-3 pt-2 [.border-b]:pb-2",
        "block-end": "order-last w-full justify-start px-3 pb-2 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

/**
 * Props for a prefix or suffix inside the field.
 */
type InputGroupAddonProps = ComponentProps<"div"> &
  VariantProps<typeof inputGroupAddonVariants>

/**
 * Prefix, suffix, or a row above or below the text.
 *
 * Clicking the addon focuses the field unless the click landed on a button or link.
 */
const InputGroupAddon = ({
  className,
  align = "inline-start",
  onClick,
  ...props
}: InputGroupAddonProps) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) {
      return
    }
    if (!(event.target instanceof Element)) {
      return
    }
    if (event.target.closest("button, a, input, textarea")) {
      return
    }
    const control = event.currentTarget.parentElement?.querySelector<HTMLElement>(
      "[data-slot=input-group-control]"
    )
    control?.focus()
  }

  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={handleClick}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva("shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-md px-2 text-xs",
      sm: "h-8 gap-1.5 px-2.5",
      "icon-xs": "size-6 p-0",
      "icon-sm": "size-8 p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
})

/**
 * Props for a button that sits inside an addon.
 */
type InputGroupButtonProps = Omit<ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>

/**
 * Button sized to sit inside the field. Defaults to a small ghost button.
 */
const InputGroupButton = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      size={size === "icon-xs" || size === "icon-sm" ? "icon-sm" : "sm"}
      data-slot="input-group-button"
      data-size={size}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

/**
 * Props for static addon text.
 */
type InputGroupTextProps = ComponentProps<"span">

/**
 * Static text inside an addon, such as `https://` or a currency code.
 */
const InputGroupText = ({ className, ...props }: InputGroupTextProps) => {
  return (
    <span
      data-slot="input-group-text"
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

const controlClassName =
  "min-w-0 flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 aria-invalid:border-0 aria-invalid:ring-0 data-invalid:border-0 data-invalid:ring-0 data-valid:border-0 data-valid:ring-0"

/**
 * Props for the text control inside the group.
 */
type InputGroupInputProps = ComponentProps<typeof Input>

/**
 * The text control. The group draws the border and the focus ring.
 */
const InputGroupInput = ({ className, ...props }: InputGroupInputProps) => {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(controlClassName, "h-auto px-3 py-1", className)}
      {...props}
    />
  )
}

/**
 * Props for the multi-line control inside the group.
 */
type InputGroupTextareaProps = ComponentProps<typeof Textarea>

/**
 * The multi-line control. Use with `block-start` or `block-end` addons.
 */
const InputGroupTextarea = ({ className, ...props }: InputGroupTextareaProps) => {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(controlClassName, "min-h-20 py-2", className)}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
}
export type {
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupInputProps,
  InputGroupProps,
  InputGroupTextareaProps,
  InputGroupTextProps,
}
