"use client"

import { TriangleAlert } from "lucide-react"

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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

/**
 * With icon — leading warning mark in the header.
 */
const AlertDialogWithIconPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With icon</h2>
      <ComponentPreview
        code={`import { TriangleAlert } from "lucide-react"

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
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    export function AlertDialogWithIcon() {
      return (
        <AlertDialog>
    <AlertDialogTrigger render={<Button variant="outline" />}>
      Discard draft
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader className="sm:flex-row sm:items-start sm:gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
          <TriangleAlert className="size-4" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1.5">
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            You will lose unsaved changes in this draft.
          </AlertDialogDescription>
        </div>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep editing</AlertDialogCancel>
        <AlertDialogAction
          render={<Button type="button" variant="destructive" />}
        >
          Discard
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
        </AlertDialog>
      )
    }`}
      >
        {(direction) => (
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button type="button" variant="outline" />}
            >
              {direction === "rtl" ? "دور انداختن پیش‌نویس" : "Discard draft"}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="sm:flex-row sm:items-start sm:gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                  <TriangleAlert className="size-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <AlertDialogTitle>
                    {direction === "rtl"
                      ? "پیش‌نویس دور انداخته شود؟"
                      : "Discard draft?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {direction === "rtl"
                      ? "تغییرات ذخیره‌نشده این پیش‌نویس از بین می‌رود."
                      : "You will lose unsaved changes in this draft."}
                  </AlertDialogDescription>
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  {direction === "rtl" ? "ادامه ویرایش" : "Keep editing"}
                </AlertDialogCancel>
                <AlertDialogAction
                  render={<Button type="button" variant="destructive" />}
                >
                  {direction === "rtl" ? "دور انداختن" : "Discard"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogWithIconPreview }
