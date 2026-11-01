"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "Vite", value: "vite" },
] as const

/**
 * Select docs examples — basic, Field, grouped, failed, disabled.
 */
const SelectPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "Vite", value: "vite" },
]

export function SelectBasic() {
  return (
    <Select items={frameworks} defaultValue="next">
      <SelectTrigger className="max-w-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}`}
        >
          {() => (
            <Select items={[...frameworks]} defaultValue="next">
              <SelectTrigger className="max-w-sm" aria-label="Framework">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
]

export function SelectWithField() {
  return (
    <Field name="framework" className="max-w-sm">
      <FieldLabel>Framework</FieldLabel>
      <Select items={frameworks}>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="framework" className="max-w-sm">
              <FieldLabel>
                {direction === "rtl" ? "فریمورک" : "Framework"}
              </FieldLabel>
              <Select items={[...frameworks]}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      direction === "rtl" ? "یک فریمورک انتخاب کنید" : "Select a framework"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Grouped</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectGrouped() {
  return (
    <Select>
      <SelectTrigger className="max-w-sm">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Citrus</SelectGroupLabel>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="lemon">Lemon</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Berry</SelectGroupLabel>
          <SelectItem value="strawberry">Strawberry</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`}
        >
          {(direction) => (
            <Select>
              <SelectTrigger className="max-w-sm" aria-label="Fruit">
                <SelectValue
                  placeholder={
                    direction === "rtl" ? "یک میوه انتخاب کنید" : "Select a fruit"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectGroupLabel>
                    {direction === "rtl" ? "مرکبات" : "Citrus"}
                  </SelectGroupLabel>
                  <SelectItem value="orange">
                    {direction === "rtl" ? "پرتقال" : "Orange"}
                  </SelectItem>
                  <SelectItem value="lemon">
                    {direction === "rtl" ? "لیمو" : "Lemon"}
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectGroupLabel>
                    {direction === "rtl" ? "توت" : "Berry"}
                  </SelectGroupLabel>
                  <SelectItem value="strawberry">
                    {direction === "rtl" ? "توت‌فرنگی" : "Strawberry"}
                  </SelectItem>
                  <SelectItem value="blueberry">
                    {direction === "rtl" ? "بلوبری" : "Blueberry"}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">next</code>. Choose anything else +
          Check for the error state.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
]

export function SelectFailed() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="framework"
        validationMode="onSubmit"
        validate={(value) => {
          if (value !== "next") {
            return "Only Next.js is accepted in this demo."
          }
        }}
      >
        <FieldLabel>Framework</FieldLabel>
        <Select items={frameworks} defaultValue="remix" required>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
                name="framework"
                validationMode="onSubmit"
                validate={(value) => {
                  if (value !== "next") {
                    return direction === "rtl"
                      ? "در این دمو فقط Next.js پذیرفته است."
                      : "Only Next.js is accepted in this demo."
                  }
                }}
              >
                <FieldLabel>
                  {direction === "rtl" ? "فریمورک" : "Framework"}
                </FieldLabel>
                <Select
                  items={[...frameworks.slice(0, 3)]}
                  defaultValue="remix"
                  required
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {frameworks.slice(0, 3).map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDisabled() {
  return (
    <Select disabled defaultValue="next" items={[{ label: "Next.js", value: "next" }]}>
      <SelectTrigger className="max-w-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="next">Next.js</SelectItem>
      </SelectContent>
    </Select>
  )
}`}
        >
          {() => (
            <Select
              disabled
              defaultValue="next"
              items={[{ label: "Next.js", value: "next" }]}
            >
              <SelectTrigger className="max-w-sm" aria-label="Framework">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
              </SelectContent>
            </Select>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SelectPreviews }
