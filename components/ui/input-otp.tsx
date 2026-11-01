"use client"

import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field"
import { Minus } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the OTP root (`length`, `value`, `mask`, `validationType`, …).
 */
type InputOTPProps = OTPFieldPrimitive.Root.Props

/**
 * One-time code field root. Render `InputOTPSlot` children equal to `length`.
 * Pair with Field or a native label via `id` / `htmlFor`.
 */
const InputOTP = ({ className, ...props }: InputOTPProps) => {
  return (
    <OTPFieldPrimitive.Root
      data-slot="input-otp"
      className={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Optional layout wrapper for a run of slots (e.g. before / after a separator).
 */
const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

/**
 * Props for a single character slot.
 */
type InputOTPSlotProps = OTPFieldPrimitive.Input.Props

/**
 * Single OTP character input with nk cell styling.
 */
const InputOTPSlot = ({ className, ...props }: InputOTPSlotProps) => {
  return (
    <OTPFieldPrimitive.Input
      data-slot="input-otp-slot"
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-md border border-input bg-transparent text-center text-sm text-foreground tabular-nums transition-colors outline-none",
        "placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
        "focus-visible:aria-invalid:border-destructive focus-visible:aria-invalid:ring-destructive/30",
        "focus-visible:data-invalid:border-destructive focus-visible:data-invalid:ring-destructive/30",
        "focus-visible:data-valid:border-success focus-visible:data-valid:ring-success/30",
        "data-filled:border-foreground/40 data-filled:data-invalid:border-destructive data-filled:data-valid:border-success",
        className
      )}
      {...props}
    />
  )
}

type InputOTPSeparatorProps = ComponentProps<typeof OTPFieldPrimitive.Separator> & {
  readonly children?: ReactNode
}

/**
 * Accessible separator between slot groups (e.g. 3 + 3). Defaults to a Minus mark.
 */
const InputOTPSeparator = ({
  className,
  children,
  ...props
}: InputOTPSeparatorProps) => {
  return (
    <OTPFieldPrimitive.Separator
      data-slot="input-otp-separator"
      className={cn(
        "flex items-center text-muted-foreground [&_svg]:size-4",
        className
      )}
      {...props}
    >
      {children ?? <Minus aria-hidden="true" />}
    </OTPFieldPrimitive.Separator>
  )
}

type InputOTPSlotsProps = {
  /** Must match `InputOTP` `length`. */
  readonly length: number
  readonly className?: string
  /** Accessible name for slot 1 when no external label is used. */
  readonly firstSlotLabel?: string
}

/**
 * Renders `length` slots with default aria-labels for slots 2…n.
 */
const InputOTPSlots = ({
  length,
  className,
  firstSlotLabel,
}: InputOTPSlotsProps) => {
  return (
    <>
      {Array.from({ length }, (_, index) => (
        <InputOTPSlot
          key={index}
          className={className}
          aria-label={
            index === 0
              ? firstSlotLabel
              : `Character ${index + 1} of ${length}`
          }
        />
      ))}
    </>
  )
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  InputOTPSlots,
}
export type {
  InputOTPProps,
  InputOTPSeparatorProps,
  InputOTPSlotProps,
  InputOTPSlotsProps,
}
