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
import { Textarea } from "@/components/ui/textarea"

/**
 * Textarea docs examples — basic, Field, failed/approved, disabled.
 */
const TextareaPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Textarea } from "@/components/ui/textarea"

export function TextareaBasic() {
  return (
    <Textarea
      placeholder="Write a short note…"
      className="max-w-sm"
      aria-label="Note"
    />
  )
}`}
        >
          {(direction) => (
            <Textarea
              placeholder={
                direction === "rtl" ? "یک یادداشت کوتاه بنویسید…" : "Write a short note…"
              }
              className="max-w-sm"
              aria-label={direction === "rtl" ? "یادداشت" : "Note"}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithField() {
  return (
    <Field name="bio" className="max-w-sm">
      <FieldLabel>Bio</FieldLabel>
      <Textarea placeholder="A sentence or two about you" />
      <FieldDescription>Shown on your public profile.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="bio" className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "بیو" : "Bio"}</FieldLabel>
              <Textarea
                placeholder={
                  direction === "rtl"
                    ? "یک یا دو جمله درباره خودتان"
                    : "A sentence or two about you"
                }
              />
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
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only bio text containing{" "}
          <code className="rounded bg-muted px-1 text-xs">nk</code>. Anything else + Check shows
          the error state.
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
import { Textarea } from "@/components/ui/textarea"

export function TextareaValidation() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="bio"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.trim().length === 0) {
            return "Enter a bio."
          }
          if (!value.toLowerCase().includes("nk")) {
            return "Bio must mention nk."
          }
        }}
      >
        <FieldLabel>Bio</FieldLabel>
        <Textarea required placeholder="Say something about nk…" />
        <FieldError />
        <FieldSuccess>Bio accepted.</FieldSuccess>
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
                name="bio"
                validationMode="onSubmit"
                validate={(value) => {
                  if (typeof value !== "string" || value.trim().length === 0) {
                    return direction === "rtl" ? "بیو را وارد کنید." : "Enter a bio."
                  }
                  if (!value.toLowerCase().includes("nk")) {
                    return direction === "rtl"
                      ? "بیو باید به nk اشاره کند."
                      : "Bio must mention nk."
                  }
                }}
              >
                <FieldLabel>{direction === "rtl" ? "بیو" : "Bio"}</FieldLabel>
                <Textarea
                  required
                  placeholder={
                    direction === "rtl"
                      ? "چیزی درباره nk بنویسید…"
                      : "Say something about nk…"
                  }
                />
                <FieldError />
                <FieldSuccess>
                  {direction === "rtl" ? "بیو پذیرفته شد." : "Bio accepted."}
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
import { Textarea } from "@/components/ui/textarea"

export function TextareaDisabled() {
  return (
    <Field name="notes" disabled className="max-w-sm">
      <FieldLabel>Notes</FieldLabel>
      <Textarea defaultValue="Read-only notes" />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="notes" disabled className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "یادداشت‌ها" : "Notes"}</FieldLabel>
              <Textarea
                defaultValue={
                  direction === "rtl" ? "یادداشت فقط‌خواندنی" : "Read-only notes"
                }
              />
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { TextareaPreviews }
