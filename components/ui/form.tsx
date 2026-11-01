"use client"

import { Form as FormPrimitive } from "@base-ui/react/form"

import { cn } from "@/lib/utils"

/**
 * Props for the nk Form built on Base UI.
 */
type FormProps = FormPrimitive.Props

/**
 * Form that wires Base UI Field `validationMode="onSubmit"` (and form-level errors).
 * Use instead of a native `<form>` when you need Field validation on submit.
 */
const Form = ({ className, ...props }: FormProps) => {
  return (
    <FormPrimitive
      data-slot="form"
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
    />
  )
}

export { Form }
export type { FormProps }
