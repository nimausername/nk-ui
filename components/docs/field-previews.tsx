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
 * Field docs examples — labeled, failed, and approved validation states.
 */
const FieldPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Labeled control</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldLabeled() {
  return (
    <Field name="displayName" className="max-w-sm">
      <FieldLabel>Display name</FieldLabel>
      <Input placeholder="Nima" />
      <FieldDescription>Shown on your public profile.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="displayName" className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "نام نمایشی" : "Display name"}</FieldLabel>
              <Input placeholder={direction === "rtl" ? "نیما" : "Nima"} />
              <FieldDescription>
                {direction === "rtl"
                  ? "در پروفایل عمومی شما نمایش داده می‌شود."
                  : "Shown on your public profile."}
              </FieldDescription>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">Acme</code>. Enter anything else
          (or leave empty), press Check — destructive ring +{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>. Uses Base UI{" "}
          <code className="rounded bg-muted px-1 text-xs">Form</code> so{" "}
          <code className="rounded bg-muted px-1 text-xs">validationMode=&quot;onSubmit&quot;</code>{" "}
          runs.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ACCEPTED_TEAM = "Acme"

export function FieldFailed() {
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
              </Field>
              <Button type="submit" variant="outline" size="sm" className="self-start">
                {direction === "rtl" ? "بررسی" : "Check"}
              </Button>
            </Form>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Approved</h2>
        <p className="text-sm text-muted-foreground">
          Type at least 3 characters, then leave the field (blur). The control gets a success
          ring and{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldSuccess</code> appears.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldApproved() {
  return (
    <Field
      name="username"
      className="max-w-sm"
      validationMode="onBlur"
      validate={(value) => {
        if (typeof value !== "string" || value.length < 3) {
          return "Use at least 3 characters."
        }
      }}
    >
      <FieldLabel>Username</FieldLabel>
      <Input required minLength={3} placeholder="nk" />
      <FieldError />
      <FieldSuccess>Username is available.</FieldSuccess>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field
              name="username"
              className="max-w-sm"
              validationMode="onBlur"
              validate={(value) => {
                if (typeof value !== "string" || value.length < 3) {
                  return direction === "rtl"
                    ? "حداقل ۳ کاراکتر وارد کنید."
                    : "Use at least 3 characters."
                }
              }}
            >
              <FieldLabel>{direction === "rtl" ? "نام کاربری" : "Username"}</FieldLabel>
              <Input required minLength={3} placeholder="nk" />
              <FieldError />
              <FieldSuccess>
                {direction === "rtl" ? "نام کاربری در دسترس است." : "Username is available."}
              </FieldSuccess>
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { FieldPreviews }
