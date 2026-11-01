"use client"

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input, type InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

/**
 * Props for PasswordInput — Input minus `type`, plus visibility controls.
 */
type PasswordInputProps = Omit<InputProps, "type"> & {
  /** Initial visibility when uncontrolled. Defaults to hidden (`false`). */
  readonly defaultVisible?: boolean
  /** Controlled visibility. Pair with `onVisibleChange`. */
  readonly visible?: boolean
  /** Called when the user toggles show / hide. */
  readonly onVisibleChange?: (visible: boolean) => void
  /** Accessible name for the control when the password is hidden. */
  readonly showPasswordLabel?: string
  /** Accessible name for the control when the password is visible. */
  readonly hidePasswordLabel?: string
}

/**
 * Password field with a show / hide toggle on the logical end edge.
 *
 * Built on `@nk/input` + `@nk/button`. Pair with Field for labels and errors.
 * Visibility is uncontrolled by default; pass `visible` + `onVisibleChange` to control it.
 */
const PasswordInput = ({
  className,
  disabled,
  defaultVisible = false,
  visible: visibleProp,
  onVisibleChange,
  showPasswordLabel = "Show password",
  hidePasswordLabel = "Hide password",
  autoComplete = "current-password",
  ...props
}: PasswordInputProps) => {
  const [uncontrolledVisible, setUncontrolledVisible] = useState(defaultVisible)
  const isControlled = visibleProp !== undefined
  const isVisible = isControlled ? Boolean(visibleProp) : uncontrolledVisible

  const handleToggleVisible = () => {
    const next = !isVisible
    if (!isControlled) {
      setUncontrolledVisible(next)
    }
    onVisibleChange?.(next)
  }

  return (
    <div
      data-slot="password-input"
      className={cn(
        "relative w-full has-[input:disabled]:[&_button]:pointer-events-none has-[input:disabled]:[&_button]:opacity-50",
        className
      )}
    >
      <Input
        type={isVisible ? "text" : "password"}
        disabled={disabled}
        autoComplete={autoComplete}
        className="w-full pe-9"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        disabled={disabled}
        aria-label={isVisible ? hidePasswordLabel : showPasswordLabel}
        aria-pressed={isVisible}
        onClick={handleToggleVisible}
        className="absolute top-1/2 end-1 size-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {isVisible ? (
          <EyeOff aria-hidden="true" />
        ) : (
          <Eye aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}

export { PasswordInput }
export type { PasswordInputProps }
