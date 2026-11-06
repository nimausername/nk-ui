"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  createAlertDialogHandle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const discardHandle = createAlertDialogHandle()

/**
 * Detached trigger — linked with createAlertDialogHandle().
 */
const AlertDialogDetachedPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Detached trigger</h2>
      <p className="text-sm text-muted-foreground">
        Link a trigger outside the root with{" "}
        <code className="rounded bg-muted px-1 text-xs">
          createAlertDialogHandle()
        </code>
        .
      </p>
      <ComponentPreview
        code={`import {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      createAlertDialogHandle,
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    const discardHandle = createAlertDialogHandle()

    export function AlertDialogDetached() {
      return (
        <>
    <AlertDialogTrigger
      handle={discardHandle}
      render={<Button variant="outline" />}
    >
      Discard draft
    </AlertDialogTrigger>
    <AlertDialog handle={discardHandle}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            render={<Button type="button" variant="destructive" />}
          >
            Discard
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </>
      )
    }`}
      >
        {(direction) => (
          <>
            <AlertDialogTrigger
              handle={discardHandle}
              render={<Button type="button" variant="outline" />}
            >
              {direction === "rtl" ? "دور انداختن پیش‌نویس" : "Discard draft"}
            </AlertDialogTrigger>
            <AlertDialog handle={discardHandle}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    {direction === "rtl"
                      ? "پیش‌نویس دور انداخته شود؟"
                      : "Discard draft?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {direction === "rtl"
                      ? "این کار قابل بازگشت نیست."
                      : "This action cannot be undone."}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    {direction === "rtl" ? "لغو" : "Cancel"}
                  </AlertDialogCancel>
                  <AlertDialogAction
                    render={<Button type="button" variant="destructive" />}
                  >
                    {direction === "rtl" ? "دور انداختن" : "Discard"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogDetachedPreview }
