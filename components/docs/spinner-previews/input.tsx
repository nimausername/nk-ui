"use client"

import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import { spinnerCopy } from "@/components/docs/spinner-previews/shared"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

/**
 * Leading spinner inside a text field. nk has no Input Group yet.
 */
const SpinnerInputPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">In an input</h2>
      <p className="text-sm text-muted-foreground">
        Pin the spinner to the logical start of an{" "}
        <Link
          href="/docs/components/input"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Input
        </Link>{" "}
        while a search runs.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerInput() {
  return (
    <Field name="search" className="w-full max-w-sm">
      <FieldLabel>Search</FieldLabel>
      <div className="relative">
        <Spinner
          aria-hidden="true"
          className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input className="ps-9" defaultValue="invoices" readOnly />
      </div>
    </Field>
  )
}`}
      >
        {(direction) => (
          <Field name="search" className="w-full max-w-sm">
            <FieldLabel>
              {spinnerCopy(direction, "Search", "جستجو")}
            </FieldLabel>
            <div className="relative">
              <Spinner
                aria-hidden="true"
                className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                className="ps-9"
                defaultValue={spinnerCopy(direction, "invoices", "فاکتورها")}
                readOnly
              />
            </div>
          </Field>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerInputPreview }
