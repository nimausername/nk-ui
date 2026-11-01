"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

/**
 * Form docs examples — submit validation and form-level errors.
 */
const FormPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Submit validation</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">Acme</code>. Press Check with any other
          value for Field failed chrome.{" "}
          <code className="rounded bg-muted px-1 text-xs">Form</code> is required for{" "}
          <code className="rounded bg-muted px-1 text-xs">validationMode=&quot;onSubmit&quot;</code>.
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

const ACCEPTED_TEAM = "Acme"

export function FormSubmitValidation() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="team"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.trim().length === 0) {
            return "Enter a team name."
          }
          if (value.trim() !== ACCEPTED_TEAM) {
            return "That name is not accepted."
          }
        }}
      >
        <FieldLabel>Team name</FieldLabel>
        <Input required placeholder="Acme" />
        <FieldError />
        <FieldSuccess>Team accepted.</FieldSuccess>
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
                name="team"
                validationMode="onSubmit"
                validate={(value) => {
                  if (typeof value !== "string" || value.trim().length === 0) {
                    return direction === "rtl"
                      ? "نام تیم را وارد کنید."
                      : "Enter a team name."
                  }
                  if (value.trim() !== "Acme") {
                    return direction === "rtl"
                      ? "این نام پذیرفته نیست."
                      : "That name is not accepted."
                  }
                }}
              >
                <FieldLabel>{direction === "rtl" ? "نام تیم" : "Team name"}</FieldLabel>
                <Input
                  required
                  placeholder={direction === "rtl" ? "آکمه" : "Acme"}
                />
                <FieldError />
                <FieldSuccess>
                  {direction === "rtl" ? "تیم پذیرفته شد." : "Team accepted."}
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
        <h2 className="text-lg font-semibold">Form-level errors</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">errors</code> on{" "}
          <code className="rounded bg-muted px-1 text-xs">Form</code> to show messages keyed by
          field{" "}
          <code className="rounded bg-muted px-1 text-xs">name</code> (e.g. server responses).
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function FormLevelErrors() {
  return (
    <Form
      className="max-w-sm"
      errors={{ email: "This email is already registered." }}
    >
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <Input type="email" defaultValue="taken@example.com" />
        <FieldError />
      </Field>
    </Form>
  )
}`}
        >
          {(direction) => (
            <Form
              className="max-w-sm"
              errors={{
                email:
                  direction === "rtl"
                    ? "این ایمیل قبلاً ثبت شده است."
                    : "This email is already registered.",
              }}
            >
              <Field name="email">
                <FieldLabel>{direction === "rtl" ? "ایمیل" : "Email"}</FieldLabel>
                <Input type="email" defaultValue="taken@example.com" />
                <FieldError />
              </Field>
            </Form>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { FormPreviews }
