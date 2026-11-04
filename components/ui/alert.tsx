import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Visual variants for the nk Alert callout.
 */
const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-md border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground",
        soft: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-destructive/30 bg-destructive/5 text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-destructive",
        success:
          "border-success/30 bg-success/5 text-success *:data-[slot=alert-description]:text-success/90 [&>svg]:text-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type AlertVariantProps = VariantProps<typeof alertVariants>

/**
 * Props for the alert root.
 */
type AlertProps = ComponentProps<"div"> & AlertVariantProps

/**
 * Inline callout for status messages. Compose Title / Description / Action (and optional icon).
 */
const Alert = ({ className, variant, ...props }: AlertProps) => {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

/**
 * Props for the alert title.
 */
type AlertTitleProps = ComponentProps<"div">

/**
 * Short heading inside an Alert.
 */
const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Props for the alert description.
 */
type AlertDescriptionProps = ComponentProps<"div">

/**
 * Supporting body copy inside an Alert.
 */
const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for optional alert actions.
 */
type AlertActionProps = ComponentProps<"div">

/**
 * Action row (buttons / links) under the description.
 */
const AlertAction = ({ className, ...props }: AlertActionProps) => {
  return (
    <div
      data-slot="alert-action"
      className={cn("col-start-2 mt-2 flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction, alertVariants }
export type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertActionProps,
}
