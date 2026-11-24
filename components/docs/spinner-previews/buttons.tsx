"use client"

import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import { spinnerCopy } from "@/components/docs/spinner-previews/shared"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

/**
 * Spinner inside button variants, plus Button's own loading prop.
 */
const SpinnerButtonsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Buttons</h2>
      <p className="text-sm text-muted-foreground">
        Lead a label, fill an icon button, or use{" "}
        <Link
          href="/docs/components/button"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Button
        </Link>{" "}
        <code className="rounded bg-muted px-1 text-xs">loading</code>, which
        keeps its own icon.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" disabled>
        <Spinner aria-hidden="true" />
        Submit
      </Button>
      <Button type="button" variant="outline" disabled>
        <Spinner aria-hidden="true" />
        Outline
      </Button>
      <Button type="button" variant="secondary" disabled>
        <Spinner aria-hidden="true" />
        Secondary
      </Button>
      <Button type="button" variant="destructive" disabled>
        <Spinner aria-hidden="true" />
        Delete
      </Button>
      <Button type="button" size="icon" disabled aria-label="Loading">
        <Spinner />
      </Button>
      <Button type="button" loading loadingLabel="Saving">
        Save
      </Button>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-wrap items-center gap-2">
            <Button type="button" disabled>
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Submit", "ارسال")}
            </Button>
            <Button type="button" variant="outline" disabled>
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Outline", "خط‌دار")}
            </Button>
            <Button type="button" variant="secondary" disabled>
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Secondary", "ثانویه")}
            </Button>
            <Button type="button" variant="destructive" disabled>
              <Spinner aria-hidden="true" />
              {spinnerCopy(direction, "Delete", "حذف")}
            </Button>
            <Button
              type="button"
              size="icon"
              disabled
              aria-label={spinnerCopy(direction, "Loading", "در حال بارگذاری")}
            >
              <Spinner />
            </Button>
            <Button
              type="button"
              loading
              loadingLabel={spinnerCopy(direction, "Saving", "در حال ذخیره")}
            >
              {spinnerCopy(direction, "Save", "ذخیره")}
            </Button>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { SpinnerButtonsPreview }
