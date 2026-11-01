"use client"

import { Input as InputPrimitive } from "@base-ui/react/input"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the nk Input built on Base UI.
 */
type InputProps = ComponentProps<typeof InputPrimitive>

/** Stable base classes — avoid rebuilding long cn() strings during SSR/hydrate. */
const inputBaseClassName =
  "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30 data-valid:border-success data-valid:ring-2 data-valid:ring-success/30 focus-visible:aria-invalid:border-destructive focus-visible:aria-invalid:ring-destructive/30 focus-visible:data-invalid:border-destructive focus-visible:data-invalid:ring-destructive/30 focus-visible:data-valid:border-success focus-visible:data-valid:ring-success/30 file:me-2 file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground"

/**
 * Accessible text field with nk product styling.
 *
 * Pair with Field / FieldLabel / FieldDescription / FieldError / FieldSuccess.
 * Failed and approved chrome come from `aria-invalid` / `data-invalid` / `data-valid`
 * (Field wires these) — not from variant props.
 */
const Input = ({ className, type = "text", ...props }: InputProps) => {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={className ? cn(inputBaseClassName, className) : inputBaseClassName}
      {...props}
    />
  )
}

export { Input }
export type { InputProps }
