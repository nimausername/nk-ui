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
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/components/ui/number-field"

/**
 * Number Field docs examples — quantity, currency, scrub, disabled, RTL.
 */
const NumberFieldPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Quantity</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

export function NumberFieldQuantity() {
  return (
    <Field name="quantity" className="max-w-xs">
      <FieldLabel>Quantity</FieldLabel>
      <NumberField defaultValue={1} min={1} max={99}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="quantity" className="max-w-xs">
              <FieldLabel>{direction === "rtl" ? "تعداد" : "Quantity"}</FieldLabel>
              <NumberField defaultValue={1} min={1} max={99}>
                <NumberFieldGroup>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldGroup>
              </NumberField>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Currency format</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">format</code> (
          <code className="rounded bg-muted px-1 text-xs">Intl.NumberFormatOptions</code>) on{" "}
          <code className="rounded bg-muted px-1 text-xs">NumberField</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

export function NumberFieldCurrency() {
  return (
    <Field name="price" className="max-w-xs">
      <FieldLabel>Price</FieldLabel>
      <NumberField
        defaultValue={24}
        min={0}
        step={0.5}
        format={{ style: "currency", currency: "USD" }}
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <FieldDescription>Half-dollar steps.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="price" className="max-w-xs">
              <FieldLabel>{direction === "rtl" ? "قیمت" : "Price"}</FieldLabel>
              <NumberField
                defaultValue={24}
                min={0}
                step={0.5}
                format={{ style: "currency", currency: "USD" }}
              >
                <NumberFieldGroup>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldGroup>
              </NumberField>
              <FieldDescription>
                {direction === "rtl" ? "گام‌های نیم‌دلاری." : "Half-dollar steps."}
              </FieldDescription>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs tabular-nums">12</code>. Any other
          quantity + Check shows the destructive ring and{" "}
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
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

const ACCEPTED_QUANTITY = 12

export function NumberFieldValidation() {
  return (
    <Form
      className="max-w-xs gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="quantity"
        validationMode="onSubmit"
        validate={(value) => {
          if (value == null || value === "") {
            return "Enter a quantity."
          }
          if (Number(value) !== ACCEPTED_QUANTITY) {
            return "That quantity is not accepted."
          }
        }}
      >
        <FieldLabel>Quantity</FieldLabel>
        <NumberField defaultValue={1} min={1} max={99}>
          <NumberFieldGroup>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldGroup>
        </NumberField>
        <FieldError />
        <FieldSuccess>Quantity accepted.</FieldSuccess>
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
              className="max-w-xs gap-3"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <Field
                name="quantity"
                validationMode="onSubmit"
                validate={(value) => {
                  if (value == null || value === "") {
                    return direction === "rtl"
                      ? "تعداد را وارد کنید."
                      : "Enter a quantity."
                  }
                  if (Number(value) !== 12) {
                    return direction === "rtl"
                      ? "این تعداد پذیرفته نیست."
                      : "That quantity is not accepted."
                  }
                }}
              >
                <FieldLabel>{direction === "rtl" ? "تعداد" : "Quantity"}</FieldLabel>
                <NumberField defaultValue={1} min={1} max={99}>
                  <NumberFieldGroup>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldGroup>
                </NumberField>
                <FieldError />
                <FieldSuccess>
                  {direction === "rtl" ? "تعداد پذیرفته شد." : "Quantity accepted."}
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
        <h2 className="text-lg font-semibold">Scrub label</h2>
        <p className="text-sm text-muted-foreground">
          Drag the scrub area horizontally to change the value (pointer lock where supported).
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/components/ui/number-field"

export function NumberFieldScrub() {
  return (
    <NumberField defaultValue={40} min={0} max={100} className="max-w-xs">
      <NumberFieldScrubArea>
        <span>Opacity</span>
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  )
}`}
        >
          {(direction) => (
            <NumberField defaultValue={40} min={0} max={100} className="max-w-xs">
              <NumberFieldScrubArea>
                <span>{direction === "rtl" ? "شفافیت" : "Opacity"}</span>
              </NumberFieldScrubArea>
              <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldGroup>
            </NumberField>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

export function NumberFieldDisabled() {
  return (
    <Field name="seats" disabled className="max-w-xs">
      <FieldLabel>Seats</FieldLabel>
      <NumberField defaultValue={4} disabled>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="seats" disabled className="max-w-xs">
              <FieldLabel>{direction === "rtl" ? "صندلی‌ها" : "Seats"}</FieldLabel>
              <NumberField defaultValue={4} disabled>
                <NumberFieldGroup>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldGroup>
              </NumberField>
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { NumberFieldPreviews }
