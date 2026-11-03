"use client"

import { Check, Copy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input, type InputProps } from "@/components/ui/input"
import { toast } from "@/components/ui/toast"
import { cn } from "@/lib/utils"

/**
 * Props for CopyField — Input minus `type`, plus copy labels.
 */
type CopyFieldProps = Omit<InputProps, "type"> & {
  /** Called after a successful clipboard write. */
  readonly onCopied?: (value: string) => void
  /** Accessible name for the copy control. */
  readonly copyLabel?: string
  /** Accessible name while the brief "copied" state is active. */
  readonly copiedLabel?: string
  /** Toast title after a successful copy. Pass `null` to skip the toast. */
  readonly successToastTitle?: string | null
  /** Toast description after a successful copy. */
  readonly successToastDescription?: string
  /** Toast title when clipboard write fails. Pass `null` to skip the toast. */
  readonly errorToastTitle?: string | null
  /** How long the checkmark state stays visible (ms). */
  readonly copiedDurationMs?: number
}

/**
 * Read-focused input with a copy affordance on the logical end edge.
 *
 * Built on `@nk/input`, `@nk/button`, and `@nk/toast`. Pair with Field for labels.
 * Shows a brief checkmark after a successful copy and fires an optional toast.
 */
const CopyField = ({
  className,
  disabled,
  value,
  defaultValue = "",
  onCopied,
  copyLabel = "Copy",
  copiedLabel = "Copied",
  successToastTitle = "Copied",
  successToastDescription,
  errorToastTitle = "Copy failed",
  copiedDurationMs = 1500,
  onChange,
  ...props
}: CopyFieldProps) => {
  const isControlled = value !== undefined
  const [uncontrolledValue, setUncontrolledValue] = useState(
    String(defaultValue ?? "")
  )
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentValue = isControlled ? String(value ?? "") : uncontrolledValue

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const handleChange: NonNullable<InputProps["onChange"]> = (event) => {
    if (!isControlled) {
      setUncontrolledValue(event.currentTarget.value)
    }
    onChange?.(event)
  }

  const canCopy = currentValue.length > 0 && !disabled

  const handleCopy = async () => {
    if (!canCopy) {
      return
    }

    try {
      await navigator.clipboard.writeText(currentValue)
      setCopied(true)
      onCopied?.(currentValue)

      if (successToastTitle !== null) {
        toast.add({
          type: "success",
          title: successToastTitle,
          description: successToastDescription,
        })
      }

      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
      resetTimerRef.current = setTimeout(() => {
        setCopied(false)
      }, copiedDurationMs)
    } catch {
      if (errorToastTitle !== null) {
        toast.add({
          type: "error",
          title: errorToastTitle,
          description: "Your browser blocked clipboard access.",
        })
      }
    }
  }

  return (
    <div
      data-slot="copy-field"
      className={cn(
        "relative w-full has-[input:disabled]:[&_button]:pointer-events-none has-[input:disabled]:[&_button]:opacity-50",
        className
      )}
    >
      <Input
        type="text"
        disabled={disabled}
        value={isControlled ? value : undefined}
        defaultValue={isControlled ? undefined : defaultValue}
        onChange={handleChange}
        className="w-full pe-9"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        disabled={!canCopy}
        aria-label={copied ? copiedLabel : copyLabel}
        onClick={() => {
          void handleCopy()
        }}
        className="absolute top-1/2 end-1 size-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {copied ? (
          <Check aria-hidden="true" className="size-3.5" />
        ) : (
          <Copy aria-hidden="true" className="size-3.5" />
        )}
      </Button>
    </div>
  )
}

export { CopyField }
export type { CopyFieldProps }
