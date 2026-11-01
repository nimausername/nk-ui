"use client"

import { useId, useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  InputOTPSlots,
} from "@/components/ui/input-otp"

/**
 * Input OTP docs examples — 6-digit, masked, grouped, complete, disabled, RTL.
 */
const InputOtpPreviews = () => {
  const basicId = useId()
  const maskId = useId()
  const groupId = useId()
  const validationId = useId()
  const completeId = useId()
  const disabledId = useId()
  const [completed, setCompleted] = useState<string | null>(null)

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">6-digit code</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useId } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

export function InputOtpBasic() {
  const id = useId()

  return (
    <Field name="code">
      <FieldLabel htmlFor={id}>Verification code</FieldLabel>
      <InputOTP id={id} length={6}>
        <InputOTPSlots length={6} />
      </InputOTP>
      <FieldDescription>Enter the 6-digit code we sent you.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="code">
              <FieldLabel htmlFor={basicId}>
                {direction === "rtl" ? "کد تأیید" : "Verification code"}
              </FieldLabel>
              <InputOTP id={basicId} length={6}>
                <InputOTPSlots length={6} />
              </InputOTP>
              <FieldDescription>
                {direction === "rtl"
                  ? "کد ۶ رقمی ارسال‌شده را وارد کنید."
                  : "Enter the 6-digit code we sent you."}
              </FieldDescription>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Masked</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">mask</code> to hide characters while
          typing.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useId } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

export function InputOtpMasked() {
  const id = useId()

  return (
    <Field name="pin">
      <FieldLabel htmlFor={id}>PIN</FieldLabel>
      <InputOTP id={id} length={4} mask>
        <InputOTPSlots length={4} />
      </InputOTP>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="pin">
              <FieldLabel htmlFor={maskId}>
                {direction === "rtl" ? "پین" : "PIN"}
              </FieldLabel>
              <InputOTP id={maskId} length={4} mask>
                <InputOTPSlots length={4} />
              </InputOTP>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Grouped (3 + 3)</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useId } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOtpGrouped() {
  const id = useId()

  return (
    <Field name="ticket">
      <FieldLabel htmlFor={id}>Ticket code</FieldLabel>
      <InputOTP id={id} length={6} validationType="alphanumeric">
        <InputOTPGroup>
          <InputOTPSlot />
          <InputOTPSlot aria-label="Character 2 of 6" />
          <InputOTPSlot aria-label="Character 3 of 6" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot aria-label="Character 4 of 6" />
          <InputOTPSlot aria-label="Character 5 of 6" />
          <InputOTPSlot aria-label="Character 6 of 6" />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="ticket">
              <FieldLabel htmlFor={groupId}>
                {direction === "rtl" ? "کد بلیت" : "Ticket code"}
              </FieldLabel>
              <InputOTP id={groupId} length={6} validationType="alphanumeric">
                <InputOTPGroup>
                  <InputOTPSlot />
                  <InputOTPSlot aria-label="Character 2 of 6" />
                  <InputOTPSlot aria-label="Character 3 of 6" />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot aria-label="Character 4 of 6" />
                  <InputOTPSlot aria-label="Character 5 of 6" />
                  <InputOTPSlot aria-label="Character 6 of 6" />
                </InputOTPGroup>
              </InputOTP>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs tabular-nums">424242</code>. Enter
          anything else (or leave incomplete), press Check — destructive rings +{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>. The accepted code
          shows{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldSuccess</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useId } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

const ACCEPTED_CODE = "424242"

export function InputOtpValidation() {
  const id = useId()

  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="otp"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.length < 6) {
            return "Enter the full 6-digit code."
          }
          if (value !== ACCEPTED_CODE) {
            return "That code is not accepted."
          }
        }}
      >
        <FieldLabel htmlFor={id}>Verification code</FieldLabel>
        <InputOTP id={id} length={6}>
          <InputOTPSlots length={6} />
        </InputOTP>
        <FieldError />
        <FieldSuccess>Code accepted.</FieldSuccess>
      </Field>
      <Button type="submit" variant="outline" size="sm" className="self-start">
        Check
      </Button>
    </Form>
  )
}`}
        >
          {(direction) => (
            <Form
              className="max-w-sm gap-3"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <Field
                name="otp"
                validationMode="onSubmit"
                validate={(value) => {
                  if (typeof value !== "string" || value.length < 6) {
                    return direction === "rtl"
                      ? "کد ۶ رقمی کامل را وارد کنید."
                      : "Enter the full 6-digit code."
                  }
                  if (value !== "424242") {
                    return direction === "rtl"
                      ? "این کد پذیرفته نیست."
                      : "That code is not accepted."
                  }
                }}
              >
                <FieldLabel htmlFor={validationId}>
                  {direction === "rtl" ? "کد تأیید" : "Verification code"}
                </FieldLabel>
                <InputOTP id={validationId} length={6}>
                  <InputOTPSlots length={6} />
                </InputOTP>
                <FieldError />
                <FieldSuccess>
                  {direction === "rtl" ? "کد پذیرفته شد." : "Code accepted."}
                </FieldSuccess>
              </Field>
              <Button type="submit" variant="outline" size="sm" className="self-start">
                {direction === "rtl" ? "بررسی" : "Check"}
              </Button>
            </Form>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">On complete</h2>
        <p className="text-sm text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1 text-xs">onValueComplete</code> when every slot
          is filled (or{" "}
          <code className="rounded bg-muted px-1 text-xs">autoSubmit</code> on a form).
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useId, useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

export function InputOtpComplete() {
  const id = useId()
  const [completed, setCompleted] = useState<string | null>(null)

  return (
    <Field name="sms">
      <FieldLabel htmlFor={id}>SMS code</FieldLabel>
      <InputOTP
        id={id}
        length={6}
        onValueComplete={(value) => setCompleted(value)}
      >
        <InputOTPSlots length={6} />
      </InputOTP>
      <p className="text-xs text-muted-foreground tabular-nums">
        {completed ?? "—"}
      </p>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="sms">
              <FieldLabel htmlFor={completeId}>
                {direction === "rtl" ? "کد پیامک" : "SMS code"}
              </FieldLabel>
              <InputOTP
                id={completeId}
                length={6}
                onValueComplete={(value) => {
                  setCompleted(value)
                }}
              >
                <InputOTPSlots length={6} />
              </InputOTP>
              <p className="text-xs text-muted-foreground tabular-nums">
                {completed ?? "—"}
              </p>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useId } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

export function InputOtpDisabled() {
  const id = useId()

  return (
    <Field name="locked" disabled>
      <FieldLabel htmlFor={id}>Code</FieldLabel>
      <InputOTP id={id} length={6} disabled defaultValue="123456">
        <InputOTPSlots length={6} />
      </InputOTP>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="locked" disabled>
              <FieldLabel htmlFor={disabledId}>
                {direction === "rtl" ? "کد" : "Code"}
              </FieldLabel>
              <InputOTP id={disabledId} length={6} disabled defaultValue="123456">
                <InputOTPSlots length={6} />
              </InputOTP>
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { InputOtpPreviews }
