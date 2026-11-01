"use client"

import { Field as FieldPrimitive } from "@base-ui/react/field"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the field root (name, disabled, validate, validationMode).
 */
type FieldProps = FieldPrimitive.Root.Props

/**
 * Groups a control with its label, description, error, and success.
 * Base UI wires associations automatically — no manual `htmlFor` / `id` required.
 */
const Field = ({ className, ...props }: FieldProps) => {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    />
  )
}

/**
 * Props for the accessible field label.
 */
type FieldLabelProps = FieldPrimitive.Label.Props

/**
 * Label linked to the field control via Base UI Field context.
 * Picks up `data-invalid` / `data-valid` after validation.
 */
const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn(
        "text-sm leading-none font-medium text-foreground select-none",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "data-invalid:text-destructive",
        "data-valid:text-success",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for helper text under the control.
 */
type FieldDescriptionProps = FieldPrimitive.Description.Props

/**
 * Supporting copy announced with the control (`aria-describedby`).
 */
const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

/**
 * Props for the validation error message.
 */
type FieldErrorProps = FieldPrimitive.Error.Props

/**
 * Error message shown when the field fails validation (or `match` forces it).
 */
const FieldError = ({ className, ...props }: FieldErrorProps) => {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-sm text-destructive", className)}
      {...props}
    />
  )
}

type FieldSuccessProps = Omit<ComponentProps<"p">, "children"> & {
  /** Approved message. Defaults to “Looks good.” */
  readonly children?: ReactNode
}

/**
 * Success message when the field is valid and has a value.
 * Hidden for pristine / empty fields (`valid === null` or empty value).
 */
const FieldSuccess = ({
  className,
  children = "Looks good.",
  ...props
}: FieldSuccessProps) => {
  return (
    <FieldPrimitive.Validity>
      {(state) => {
        const hasValue =
          state.value != null && String(state.value).trim() !== ""
        if (state.validity.valid !== true || !hasValue) {
          return null
        }

        return (
          <p
            data-slot="field-success"
            className={cn("text-sm text-success", className)}
            {...props}
          >
            {children}
          </p>
        )
      }}
    </FieldPrimitive.Validity>
  )
}

/**
 * Props for the validity render-prop helper.
 */
type FieldValidityProps = FieldPrimitive.Validity.Props

/**
 * Render-prop access to Base UI field validity for custom messages.
 */
const FieldValidity = ({ children }: FieldValidityProps) => {
  return <FieldPrimitive.Validity>{children}</FieldPrimitive.Validity>
}

export {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSuccess,
  FieldValidity,
}
export type {
  FieldDescriptionProps,
  FieldErrorProps,
  FieldLabelProps,
  FieldProps,
  FieldSuccessProps,
  FieldValidityProps,
}
