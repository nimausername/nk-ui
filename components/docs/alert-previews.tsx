"use client"

import { CircleAlert, Info } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

/**
 * Alert docs examples — default, destructive, soft, with icon.
 */
const AlertPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDefault() {
  return (
    <Alert>
      <Info />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Something changed in your workspace.</AlertDescription>
    </Alert>
  )
}`}
        >
          {(direction) => (
            <Alert className="w-full max-w-lg">
              <Info />
              <AlertTitle>{direction === "rtl" ? "توجه" : "Heads up"}</AlertTitle>
              <AlertDescription>
                {direction === "rtl"
                  ? "چیزی در فضای کاری‌تان تغییر کرد."
                  : "Something changed in your workspace."}
              </AlertDescription>
            </Alert>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Destructive</h2>
        <ComponentPreview
          className="w-full"
          code={`import { CircleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <CircleAlert />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session could not be refreshed.</AlertDescription>
    </Alert>
  )
}`}
        >
          {(direction) => (
            <Alert variant="destructive" className="w-full max-w-lg">
              <CircleAlert />
              <AlertTitle>{direction === "rtl" ? "خطا" : "Error"}</AlertTitle>
              <AlertDescription>
                {direction === "rtl"
                  ? "نشست شما تازه نشد."
                  : "Your session could not be refreshed."}
              </AlertDescription>
            </Alert>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Soft</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertSoft() {
  return (
    <Alert variant="soft">
      <AlertTitle>Tip</AlertTitle>
      <AlertDescription>You can dismiss this later from settings.</AlertDescription>
    </Alert>
  )
}`}
        >
          {(direction) => (
            <Alert variant="soft" className="w-full max-w-lg">
              <AlertTitle>{direction === "rtl" ? "نکته" : "Tip"}</AlertTitle>
              <AlertDescription>
                {direction === "rtl"
                  ? "بعداً می‌توانید این را از تنظیمات ببندید."
                  : "You can dismiss this later from settings."}
              </AlertDescription>
            </Alert>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { AlertPreviews }
