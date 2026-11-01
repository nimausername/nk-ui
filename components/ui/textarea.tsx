"use client"

import { Field as FieldPrimitive } from "@base-ui/react/field"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the nk Textarea (native textarea via Field.Control for Field wiring).
 */
type TextareaProps = Omit<ComponentProps<"textarea">, "size">

/** Stable base classes — match Input chrome for failed / approved states. */
const textareaBaseClassName =
  "flex min-h-20 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30 data-valid:border-success data-valid:ring-2 data-valid:ring-success/30 focus-visible:aria-invalid:border-destructive focus-visible:aria-invalid:ring-destructive/30 focus-visible:data-invalid:border-destructive focus-visible:data-invalid:ring-destructive/30 focus-visible:data-valid:border-success focus-visible:data-valid:ring-success/30 field-sizing-content resize-y"

/**
 * Multi-line text field with nk Input styling.
 *
 * Built on Field.Control so it wires into Field validation like Base UI Input.
 * Pair with Field / FieldLabel / FieldError / FieldSuccess.
 */
const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <FieldPrimitive.Control
      data-slot="textarea"
      render={(controlProps) => (
        <textarea
          {...controlProps}
          {...props}
          className={cn(textareaBaseClassName, className, controlProps.className)}
        />
      )}
    />
  )
}

export { Textarea }
export type { TextareaProps }
