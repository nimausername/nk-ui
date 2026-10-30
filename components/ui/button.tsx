"use client"

import { Button as BaseButton } from "@base-ui/react/button"
import { Loader2 } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import {
  buttonVariants,
  type ButtonVariantProps,
} from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

/**
 * Props for the nk Button built on Base UI.
 */
type ButtonProps = ComponentProps<typeof BaseButton> &
  ButtonVariantProps & {
    /** Shows a spinner, sets aria-busy, and disables interaction. */
    readonly loading?: boolean
    /** Optional label announced while loading (defaults to children text context). */
    readonly loadingLabel?: ReactNode
  }

/**
 * Accessible button with nk product styling.
 *
 * Styles: `variant` + `size`. Behaviors like loading are props.
 * Icons, progress fill, and full-width are composition / className.
 */
const Button = ({
  className,
  variant,
  size,
  loading = false,
  loadingLabel,
  disabled,
  children,
  focusableWhenDisabled,
  ...props
}: ButtonProps) => {
  const isDisabled = Boolean(disabled || loading)

  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isDisabled}
      focusableWhenDisabled={focusableWhenDisabled ?? loading}
      aria-busy={loading || undefined}
      data-loading={loading ? "" : undefined}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" aria-hidden="true" />
          {loadingLabel ?? children}
        </>
      ) : (
        children
      )}
    </BaseButton>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
