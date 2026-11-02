"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"

/**
 * Checkbox docs examples — basic, Field, indeterminate, failed, disabled.
 */
const CheckboxPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Toggle to see the checkmark morph — it draws with a mid-motion overshoot, then undraws
          on uncheck.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"

export function CheckboxBasic() {
  return (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox>
        <CheckboxIndicator />
      </Checkbox>
      Enable notifications
    </label>
  )
}`}
        >
          {(direction) => (
            <label className="flex items-center gap-2 text-sm">
              <Checkbox>
                <CheckboxIndicator />
              </Checkbox>
              {direction === "rtl" ? "فعال‌سازی اعلان‌ها" : "Enable notifications"}
            </label>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function CheckboxWithField() {
  return (
    <Field name="marketing" className="max-w-sm flex-row items-center gap-2">
      <Checkbox>
        <CheckboxIndicator />
      </Checkbox>
      <FieldLabel className="font-normal">Send me product updates</FieldLabel>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="marketing" className="max-w-sm flex-row items-center gap-2">
              <Checkbox>
                <CheckboxIndicator />
              </Checkbox>
              <FieldLabel className="font-normal">
                {direction === "rtl"
                  ? "به‌روزرسانی‌های محصول را برایم بفرست"
                  : "Send me product updates"}
              </FieldLabel>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Indeterminate</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"

export function CheckboxIndeterminate() {
  return (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox indeterminate>
        <CheckboxIndicator />
      </Checkbox>
      Select all
    </label>
  )
}`}
        >
          {(direction) => (
            <label className="flex items-center gap-2 text-sm">
              <Checkbox indeterminate>
                <CheckboxIndicator />
              </Checkbox>
              {direction === "rtl" ? "انتخاب همه" : "Select all"}
            </label>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed</h2>
        <p className="text-sm text-muted-foreground">
          Press Check without accepting — destructive ring +{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"

export function CheckboxFailed() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="terms"
        validationMode="onSubmit"
        validate={(value) => {
          if (value !== true) {
            return "You must accept the terms."
          }
        }}
      >
        <div className="flex items-center gap-2">
          <Checkbox required>
            <CheckboxIndicator />
          </Checkbox>
          <FieldLabel className="font-normal">Accept terms</FieldLabel>
        </div>
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
                name="terms"
                validationMode="onSubmit"
                validate={(value) => {
                  if (value !== true) {
                    return direction === "rtl"
                      ? "باید شرایط را بپذیرید."
                      : "You must accept the terms."
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <Checkbox required>
                    <CheckboxIndicator />
                  </Checkbox>
                  <FieldLabel className="font-normal">
                    {direction === "rtl" ? "پذیرش شرایط" : "Accept terms"}
                  </FieldLabel>
                </div>
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
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"

export function CheckboxDisabled() {
  return (
    <label className="flex items-center gap-2 text-sm opacity-100">
      <Checkbox disabled defaultChecked>
        <CheckboxIndicator />
      </Checkbox>
      Locked preference
    </label>
  )
}`}
        >
          {(direction) => (
            <label className="flex items-center gap-2 text-sm">
              <Checkbox disabled defaultChecked>
                <CheckboxIndicator />
              </Checkbox>
              {direction === "rtl" ? "ترجیح قفل‌شده" : "Locked preference"}
            </label>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { CheckboxPreviews }
