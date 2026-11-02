"use client"

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
  type Ref,
} from "react"
import { Minus, Plus } from "lucide-react"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { cn } from "@/lib/utils"

type NumberFieldMotionContextValue = {
  readonly value: number | null
  readonly decimals: number
  readonly separator: string
  readonly decimalSeparator: string
  readonly prefix: string
  readonly suffix: string
}

const NumberFieldMotionContext = createContext<NumberFieldMotionContextValue | null>(
  null
)

const decimalsFromStep = (step: number | "any" | undefined) => {
  if (step === undefined || step === "any") return 0
  const text = String(step)
  const index = text.indexOf(".")
  return index === -1 ? 0 : text.length - index - 1
}

type CounterParts = {
  decimals: number
  separator: string
  decimalSeparator: string
  prefix: string
  suffix: string
}

/**
 * Maps Number Field `format` / `step` / `locale` onto AnimatedCounter props.
 */
const getCounterParts = (
  sample: number,
  format: Intl.NumberFormatOptions | undefined,
  locale: Intl.LocalesArgument | undefined,
  step: number | "any" | undefined
): CounterParts => {
  const stepDecimals = decimalsFromStep(step)
  if (!format) {
    return {
      decimals: stepDecimals,
      separator: ",",
      decimalSeparator: ".",
      prefix: "",
      suffix: "",
    }
  }

  const parts = new Intl.NumberFormat(locale, format).formatToParts(
    Number.isFinite(sample) ? sample : 0
  )
  let separator = ","
  let decimalSeparator = "."
  let prefix = ""
  let suffix = ""
  let sawNumber = false

  for (const part of parts) {
    if (part.type === "group") {
      separator = part.value
      continue
    }
    if (part.type === "decimal") {
      decimalSeparator = part.value
      continue
    }
    if (
      part.type === "integer" ||
      part.type === "fraction" ||
      part.type === "minusSign"
    ) {
      sawNumber = true
      continue
    }
    if (
      part.type === "currency" ||
      part.type === "percentSign" ||
      part.type === "literal" ||
      part.type === "plusSign"
    ) {
      if (sawNumber) suffix += part.value
      else prefix += part.value
    }
  }

  const decimals = Math.max(
    format.minimumFractionDigits ?? 0,
    format.maximumFractionDigits ?? 0,
    stepDecimals
  )

  return { decimals, separator, decimalSeparator, prefix, suffix }
}

/**
 * Props for the number field root (`min`, `max`, `step`, `value`, …).
 */
type NumberFieldProps = NumberFieldPrimitive.Root.Props

/**
 * Groups all number-field parts and owns the numeric value.
 * Pair with Field for labels and errors.
 *
 * Stepped values roll on a digit wheel (AnimatedCounter) inside the input.
 * Typing uses the native input. Honors `prefers-reduced-motion`.
 */
const NumberField = ({
  className,
  onValueChange,
  value,
  defaultValue,
  format,
  locale,
  step,
  ...props
}: NumberFieldProps) => {
  const isControlled = value !== undefined
  const [uncontrolledValue, setUncontrolledValue] = useState<number | null>(
    defaultValue ?? null
  )
  const numericValue = isControlled ? value : uncontrolledValue

  const parts = useMemo(
    () => getCounterParts(numericValue ?? 0, format, locale, step),
    [numericValue, format, locale, step]
  )

  return (
    <NumberFieldMotionContext.Provider
      value={{
        value: numericValue,
        decimals: parts.decimals,
        separator: parts.separator,
        decimalSeparator: parts.decimalSeparator,
        prefix: parts.prefix,
        suffix: parts.suffix,
      }}
    >
      <NumberFieldPrimitive.Root
        data-slot="number-field"
        className={cn("flex w-full flex-col gap-1.5", className)}
        value={value}
        defaultValue={defaultValue}
        format={format}
        locale={locale}
        step={step}
        onValueChange={(nextValue, eventDetails) => {
          if (!isControlled) {
            setUncontrolledValue(nextValue)
          }
          onValueChange?.(nextValue, eventDetails)
        }}
        {...props}
      />
    </NumberFieldMotionContext.Provider>
  )
}

/**
 * Props for the bordered control group (decrement + input + increment).
 */
type NumberFieldGroupProps = NumberFieldPrimitive.Group.Props

/**
 * Visual shell matching nk Input height and focus ring.
 */
const NumberFieldGroup = ({ className, ...props }: NumberFieldGroupProps) => {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn(
        "relative flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border border-input bg-transparent transition-colors",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        "has-[[data-slot=number-field-input][aria-invalid=true]]:border-destructive has-[[data-slot=number-field-input][aria-invalid=true]]:ring-2 has-[[data-slot=number-field-input][aria-invalid=true]]:ring-destructive/30",
        "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
        "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
        "focus-within:data-invalid:border-destructive focus-within:data-invalid:ring-destructive/30",
        "focus-within:data-valid:border-success focus-within:data-valid:ring-success/30",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the numeric text input.
 */
type NumberFieldInputProps = NumberFieldPrimitive.Input.Props

const mergeRefs =
  <T,>(...refs: Array<Ref<T> | undefined>) =>
  (node: T) => {
    for (const ref of refs) {
      if (!ref) continue
      if (typeof ref === "function") {
        ref(node)
        continue
      }
      ;(ref as { current: T }).current = node
    }
  }

/**
 * Formatted number input inside the group (no own border / ring).
 * Shows the digit-wheel counter until the user types; then the native input.
 */
const NumberFieldInput = ({
  className,
  ref,
  onBlur,
  onKeyDown,
  onPaste,
  ...props
}: NumberFieldInputProps) => {
  const motion = useContext(NumberFieldMotionContext)
  const [editing, setEditing] = useState(false)
  const showCounter = Boolean(motion && motion.value !== null && !editing)

  return (
    <span
      data-slot="number-field-input-shell"
      className="relative flex h-full min-w-0 flex-1 items-center justify-center overflow-hidden"
    >
      {showCounter && motion?.value !== null && motion ? (
        <AnimatedCounter
          value={motion.value}
          decimals={motion.decimals}
          separator={motion.separator}
          decimalSeparator={motion.decimalSeparator}
          prefix={motion.prefix || undefined}
          suffix={motion.suffix || undefined}
          duration={0.45}
          padStart={1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full justify-center text-sm text-foreground"
        />
      ) : null}
      <NumberFieldPrimitive.Input
        data-slot="number-field-input"
        ref={mergeRefs(ref)}
        className={cn(
          "h-full min-w-0 flex-1 bg-transparent px-2 text-center text-sm text-foreground tabular-nums outline-none",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed",
          showCounter && "text-transparent caret-transparent",
          className
        )}
        onBlur={(event) => {
          setEditing(false)
          onBlur?.(event)
        }}
        onPaste={(event) => {
          setEditing(true)
          onPaste?.(event)
        }}
        onKeyDown={(event) => {
          if (event.metaKey || event.ctrlKey || event.altKey) {
            onKeyDown?.(event)
            return
          }

          // Arrow / Home / End stepping keeps the digit wheel visible.
          const stepping =
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight" ||
            event.key === "Home" ||
            event.key === "End"

          if (
            !stepping &&
            (event.key.length === 1 ||
              event.key === "Backspace" ||
              event.key === "Delete")
          ) {
            setEditing(true)
          }

          onKeyDown?.(event)
        }}
        {...props}
      />
    </span>
  )
}

/**
 * Props for the decrement control.
 */
type NumberFieldDecrementProps = NumberFieldPrimitive.Decrement.Props & {
  readonly children?: ReactNode
}

/**
 * Steps the value down. Defaults to a Minus icon when no children are passed.
 */
const NumberFieldDecrement = ({
  className,
  children,
  ...props
}: NumberFieldDecrementProps) => {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center text-muted-foreground transition-colors outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:bg-accent focus-visible:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children ?? <Minus className="size-4" aria-hidden="true" />}
    </NumberFieldPrimitive.Decrement>
  )
}

/**
 * Props for the increment control.
 */
type NumberFieldIncrementProps = NumberFieldPrimitive.Increment.Props & {
  readonly children?: ReactNode
}

/**
 * Steps the value up. Defaults to a Plus icon when no children are passed.
 */
const NumberFieldIncrement = ({
  className,
  children,
  ...props
}: NumberFieldIncrementProps) => {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center text-muted-foreground transition-colors outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:bg-accent focus-visible:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children ?? <Plus className="size-4" aria-hidden="true" />}
    </NumberFieldPrimitive.Increment>
  )
}

/**
 * Props for the scrub-drag area (usually wraps a label).
 */
type NumberFieldScrubAreaProps = NumberFieldPrimitive.ScrubArea.Props

/**
 * Drag horizontally to change the value (pointer-lock cursor where supported).
 */
const NumberFieldScrubArea = ({ className, ...props }: NumberFieldScrubAreaProps) => {
  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot="number-field-scrub-area"
      className={cn(
        "inline-flex cursor-ew-resize select-none items-center gap-1.5 text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the custom scrub cursor element.
 */
type NumberFieldScrubAreaCursorProps = NumberFieldPrimitive.ScrubAreaCursor.Props

/**
 * Optional custom cursor rendered while scrubbing.
 */
const NumberFieldScrubAreaCursor = ({
  className,
  ...props
}: NumberFieldScrubAreaCursorProps) => {
  return (
    <NumberFieldPrimitive.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      className={cn("drop-shadow-sm", className)}
      {...props}
    />
  )
}

export {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
}
export type {
  NumberFieldDecrementProps,
  NumberFieldGroupProps,
  NumberFieldIncrementProps,
  NumberFieldInputProps,
  NumberFieldProps,
  NumberFieldScrubAreaCursorProps,
  NumberFieldScrubAreaProps,
}
