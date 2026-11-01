"use client"

import { useState } from "react"

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
import { PasswordInput } from "@/components/ui/password-input"

/**
 * Password Input docs examples — basic, Field, controlled, RTL labels.
 *
 * Demos use `defaultValue` (not a secret-looking placeholder) so `type="password"`
 * masking is visible when toggling show / hide.
 */
const PasswordInputPreviews = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Browsers only mask the{" "}
          <code className="rounded bg-muted px-1 text-xs">value</code>, not the placeholder —
          demos seed a value so the eye toggle is obvious.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { PasswordInput } from "@/components/ui/password-input"

export function PasswordInputBasic() {
  return (
    <PasswordInput
      defaultValue="correct-horse-battery"
      className="max-w-sm"
      aria-label="Password"
    />
  )
}`}
        >
          {(direction) => (
            <PasswordInput
              defaultValue="correct-horse-battery"
              className="max-w-sm"
              aria-label={direction === "rtl" ? "رمز عبور" : "Password"}
              showPasswordLabel={direction === "rtl" ? "نمایش رمز" : "Show password"}
              hidePasswordLabel={direction === "rtl" ? "مخفی کردن رمز" : "Hide password"}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"

export function PasswordInputWithField() {
  return (
    <Field name="password" className="max-w-sm">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput
        defaultValue="correct-horse-battery"
        autoComplete="new-password"
      />
      <FieldDescription>Use at least 8 characters.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="password" className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "رمز عبور" : "Password"}</FieldLabel>
              <PasswordInput
                defaultValue="correct-horse-battery"
                autoComplete="new-password"
                showPasswordLabel={direction === "rtl" ? "نمایش رمز" : "Show password"}
                hidePasswordLabel={direction === "rtl" ? "مخفی کردن رمز" : "Hide password"}
              />
              <FieldDescription>
                {direction === "rtl"
                  ? "حداقل ۸ کاراکتر استفاده کنید."
                  : "Use at least 8 characters."}
              </FieldDescription>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">correct-horse-battery</code>. Anything
          else + Check shows the destructive ring and{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"

const ACCEPTED_PASSWORD = "correct-horse-battery"

export function PasswordInputValidation() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="password"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.length === 0) {
            return "Enter a password."
          }
          if (value !== ACCEPTED_PASSWORD) {
            return "That password is not accepted."
          }
        }}
      >
        <FieldLabel>Password</FieldLabel>
        <PasswordInput autoComplete="new-password" />
        <FieldError />
        <FieldSuccess>Password accepted.</FieldSuccess>
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
                name="password"
                validationMode="onSubmit"
                validate={(value) => {
                  if (typeof value !== "string" || value.length === 0) {
                    return direction === "rtl"
                      ? "رمز عبور را وارد کنید."
                      : "Enter a password."
                  }
                  if (value !== "correct-horse-battery") {
                    return direction === "rtl"
                      ? "این رمز پذیرفته نیست."
                      : "That password is not accepted."
                  }
                }}
              >
                <FieldLabel>{direction === "rtl" ? "رمز عبور" : "Password"}</FieldLabel>
                <PasswordInput
                  autoComplete="new-password"
                  showPasswordLabel={direction === "rtl" ? "نمایش رمز" : "Show password"}
                  hidePasswordLabel={direction === "rtl" ? "مخفی کردن رمز" : "Hide password"}
                />
                <FieldError />
                <FieldSuccess>
                  {direction === "rtl" ? "رمز پذیرفته شد." : "Password accepted."}
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
        <h2 className="text-lg font-semibold">Controlled visibility</h2>
        <p className="text-sm text-muted-foreground">
          Drive the eye with{" "}
          <code className="rounded bg-muted px-1 text-xs">visible</code> +{" "}
          <code className="rounded bg-muted px-1 text-xs">onVisibleChange</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"

export function PasswordInputControlled() {
  const [visible, setVisible] = useState(false)

  return (
    <Field name="secret" className="max-w-sm">
      <FieldLabel>API secret</FieldLabel>
      <PasswordInput
        visible={visible}
        onVisibleChange={setVisible}
        defaultValue="sk_live_demo_secret"
        autoComplete="off"
      />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="secret" className="max-w-sm">
              <FieldLabel>
                {direction === "rtl" ? "رمز API" : "API secret"}
                <span className="ms-2 font-normal text-muted-foreground">
                  (
                  {visible
                    ? direction === "rtl"
                      ? "نمایش"
                      : "shown"
                    : direction === "rtl"
                      ? "مخفی"
                      : "hidden"}
                  )
                </span>
              </FieldLabel>
              <PasswordInput
                visible={visible}
                onVisibleChange={setVisible}
                defaultValue="sk_live_demo_secret"
                autoComplete="off"
                showPasswordLabel={direction === "rtl" ? "نمایش رمز" : "Show password"}
                hidePasswordLabel={direction === "rtl" ? "مخفی کردن رمز" : "Hide password"}
              />
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"

export function PasswordInputDisabled() {
  return (
    <Field name="locked" disabled className="max-w-sm">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput disabled defaultValue="not-editable" />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="locked" disabled className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "رمز عبور" : "Password"}</FieldLabel>
              <PasswordInput disabled defaultValue="not-editable" />
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { PasswordInputPreviews }
