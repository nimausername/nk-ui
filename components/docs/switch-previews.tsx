"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch, SwitchThumb } from "@/components/ui/switch"

/**
 * Switch docs examples — basic, Field, disabled.
 */
const SwitchPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Switch, SwitchThumb } from "@/components/ui/switch"

export function SwitchBasic() {
  return (
    <label className="flex items-center gap-2 text-sm">
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>
      Airplane mode
    </label>
  )
}`}
        >
          {(direction) => (
            <label className="flex items-center gap-2 text-sm">
              <Switch defaultChecked>
                <SwitchThumb />
              </Switch>
              {direction === "rtl" ? "حالت هواپیما" : "Airplane mode"}
            </label>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch, SwitchThumb } from "@/components/ui/switch"

export function SwitchWithField() {
  return (
    <Field
      name="marketing"
      className="max-w-sm flex-row items-start justify-between gap-4"
    >
      <div className="space-y-1">
        <FieldLabel>Marketing emails</FieldLabel>
        <FieldDescription>Receive occasional product news.</FieldDescription>
      </div>
      <Switch>
        <SwitchThumb />
      </Switch>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field
              name="marketing"
              className="max-w-sm flex-row items-start justify-between gap-4"
            >
              <div className="space-y-1">
                <FieldLabel>
                  {direction === "rtl" ? "ایمیل‌های بازاریابی" : "Marketing emails"}
                </FieldLabel>
                <FieldDescription>
                  {direction === "rtl"
                    ? "گاه‌به‌گاه اخبار محصول را دریافت کنید."
                    : "Receive occasional product news."}
                </FieldDescription>
              </div>
              <Switch>
                <SwitchThumb />
              </Switch>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Switch, SwitchThumb } from "@/components/ui/switch"

export function SwitchDisabled() {
  return (
    <label className="flex items-center gap-2 text-sm">
      <Switch disabled defaultChecked>
        <SwitchThumb />
      </Switch>
      Always on
    </label>
  )
}`}
        >
          {(direction) => (
            <label className="flex items-center gap-2 text-sm">
              <Switch disabled defaultChecked>
                <SwitchThumb />
              </Switch>
              {direction === "rtl" ? "همیشه روشن" : "Always on"}
            </label>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SwitchPreviews }
