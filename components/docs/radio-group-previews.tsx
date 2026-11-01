"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

/**
 * Radio Group docs examples — basic, Field, failed, disabled.
 */
const RadioGroupPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

export function RadioGroupBasic() {
  return (
    <RadioGroup defaultValue="pro" className="max-w-sm">
      <label className="flex items-center gap-2 text-sm">
        <Radio value="free">
          <RadioIndicator />
        </Radio>
        Free
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Radio value="pro">
          <RadioIndicator />
        </Radio>
        Pro
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Radio value="team">
          <RadioIndicator />
        </Radio>
        Team
      </label>
    </RadioGroup>
  )
}`}
        >
          {(direction) => (
            <RadioGroup defaultValue="pro" className="max-w-sm">
              <label className="flex items-center gap-2 text-sm">
                <Radio value="free">
                  <RadioIndicator />
                </Radio>
                {direction === "rtl" ? "رایگان" : "Free"}
              </label>
              <label className="flex items-center gap-2 text-sm">
                <Radio value="pro">
                  <RadioIndicator />
                </Radio>
                {direction === "rtl" ? "حرفه‌ای" : "Pro"}
              </label>
              <label className="flex items-center gap-2 text-sm">
                <Radio value="team">
                  <RadioIndicator />
                </Radio>
                {direction === "rtl" ? "تیمی" : "Team"}
              </label>
            </RadioGroup>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

export function RadioGroupWithField() {
  return (
    <Field name="plan" className="max-w-sm">
      <FieldLabel>Plan</FieldLabel>
      <FieldDescription>Choose the plan that fits your team.</FieldDescription>
      <RadioGroup defaultValue="pro">
        <label className="flex items-center gap-2 text-sm">
          <Radio value="free">
            <RadioIndicator />
          </Radio>
          Free
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="pro">
            <RadioIndicator />
          </Radio>
          Pro
        </label>
      </RadioGroup>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="plan" className="max-w-sm">
              <FieldLabel>{direction === "rtl" ? "طرح" : "Plan"}</FieldLabel>
              <FieldDescription>
                {direction === "rtl"
                  ? "طرح مناسب تیم خود را انتخاب کنید."
                  : "Choose the plan that fits your team."}
              </FieldDescription>
              <RadioGroup defaultValue="pro">
                <label className="flex items-center gap-2 text-sm">
                  <Radio value="free">
                    <RadioIndicator />
                  </Radio>
                  {direction === "rtl" ? "رایگان" : "Free"}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Radio value="pro">
                    <RadioIndicator />
                  </Radio>
                  {direction === "rtl" ? "حرفه‌ای" : "Pro"}
                </label>
              </RadioGroup>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">pro</code>. Press Check with another
          plan for{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

export function RadioGroupFailed() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="plan"
        validationMode="onSubmit"
        validate={(value) => {
          if (value !== "pro") {
            return "Only the Pro plan is accepted in this demo."
          }
        }}
      >
        <FieldLabel>Plan</FieldLabel>
        <RadioGroup defaultValue="free" required>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="free">
              <RadioIndicator />
            </Radio>
            Free
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="pro">
              <RadioIndicator />
            </Radio>
            Pro
          </label>
        </RadioGroup>
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
                name="plan"
                validationMode="onSubmit"
                validate={(value) => {
                  if (value !== "pro") {
                    return direction === "rtl"
                      ? "در این دمو فقط طرح حرفه‌ای پذیرفته است."
                      : "Only the Pro plan is accepted in this demo."
                  }
                }}
              >
                <FieldLabel>{direction === "rtl" ? "طرح" : "Plan"}</FieldLabel>
                <RadioGroup defaultValue="free" required>
                  <label className="flex items-center gap-2 text-sm">
                    <Radio value="free">
                      <RadioIndicator />
                    </Radio>
                    {direction === "rtl" ? "رایگان" : "Free"}
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <Radio value="pro">
                      <RadioIndicator />
                    </Radio>
                    {direction === "rtl" ? "حرفه‌ای" : "Pro"}
                  </label>
                </RadioGroup>
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
          code={`import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="pro" disabled className="max-w-sm">
      <label className="flex items-center gap-2 text-sm">
        <Radio value="free">
          <RadioIndicator />
        </Radio>
        Free
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Radio value="pro">
          <RadioIndicator />
        </Radio>
        Pro
      </label>
    </RadioGroup>
  )
}`}
        >
          {(direction) => (
            <RadioGroup defaultValue="pro" disabled className="max-w-sm">
              <label className="flex items-center gap-2 text-sm">
                <Radio value="free">
                  <RadioIndicator />
                </Radio>
                {direction === "rtl" ? "رایگان" : "Free"}
              </label>
              <label className="flex items-center gap-2 text-sm">
                <Radio value="pro">
                  <RadioIndicator />
                </Radio>
                {direction === "rtl" ? "حرفه‌ای" : "Pro"}
              </label>
            </RadioGroup>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { RadioGroupPreviews }
