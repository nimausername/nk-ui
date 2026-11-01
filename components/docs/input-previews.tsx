"use client"

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
import { Input } from "@/components/ui/input"

/**
 * Input docs examples — basic, labeled, failed/approved, disabled, file, RTL.
 */
const InputPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Input } from "@/components/ui/input"

export function InputBasic() {
  return <Input placeholder="Enter text" className="max-w-sm" />
}`}
        >
          {(direction) => (
            <Input
              placeholder={direction === "rtl" ? "متن را وارد کنید" : "Enter text"}
              className="max-w-sm"
              aria-label={direction === "rtl" ? "متن" : "Text"}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputWithField() {
  return (
    <Field name="email" className="max-w-sm">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="email" className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "ایمیل" : "Email"}</FieldLabel>
              <Input
                type="email"
                placeholder={direction === "rtl" ? "you@example.com" : "you@example.com"}
              />
              <FieldDescription>
                {direction === "rtl"
                  ? "ایمیل شما را با کسی به اشتراک نمی‌گذاریم."
                  : "We never share your email."}
              </FieldDescription>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">nk</code>. Enter anything else, press
          Check — destructive ring +{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>.{" "}
          <code className="rounded bg-muted px-1 text-xs">nk</code> shows{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldSuccess</code>.
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
import { Input } from "@/components/ui/input"

const ACCEPTED_USERNAME = "nk"

export function InputValidation() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="username"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.trim().length === 0) {
            return "Enter a username."
          }
          if (value.trim() !== ACCEPTED_USERNAME) {
            return "That username is not accepted."
          }
        }}
      >
        <FieldLabel>Username</FieldLabel>
        <Input required placeholder="nk" />
        <FieldError />
        <FieldSuccess>Looks good.</FieldSuccess>
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
                name="username"
                validationMode="onSubmit"
                validate={(value) => {
                  if (typeof value !== "string" || value.trim().length === 0) {
                    return direction === "rtl"
                      ? "نام کاربری را وارد کنید."
                      : "Enter a username."
                  }
                  if (value.trim() !== "nk") {
                    return direction === "rtl"
                      ? "این نام کاربری پذیرفته نیست."
                      : "That username is not accepted."
                  }
                }}
              >
                <FieldLabel>{direction === "rtl" ? "نام کاربری" : "Username"}</FieldLabel>
                <Input required placeholder="nk" />
                <FieldError />
                <FieldSuccess>
                  {direction === "rtl" ? "مورد تأیید است." : "Looks good."}
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
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputDisabled() {
  return (
    <Field name="plan" disabled className="max-w-sm">
      <FieldLabel>Plan</FieldLabel>
      <Input defaultValue="Pro" />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="plan" disabled className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "طرح" : "Plan"}</FieldLabel>
              <Input defaultValue={direction === "rtl" ? "حرفه‌ای" : "Pro"} />
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">File</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <Field name="avatar" className="max-w-sm">
      <FieldLabel>Avatar</FieldLabel>
      <Input type="file" />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="avatar" className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "آواتار" : "Avatar"}</FieldLabel>
              <Input type="file" />
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { InputPreviews }
