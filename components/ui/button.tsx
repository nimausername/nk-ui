"use client"

import { Button as BaseButton } from "@base-ui/react/button"
import type { ComponentProps } from "react"

import {
  buttonVariants,
  type ButtonVariantProps,
} from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

/**
 * Props for the nk Button built on Base UI.
 */
type ButtonProps = ComponentProps<typeof BaseButton> & ButtonVariantProps

/**
 * Accessible button with nk product styling. Uses Base UI for behavior
 * and gap-based spacing so LTR and RTL both work.
 */
const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
