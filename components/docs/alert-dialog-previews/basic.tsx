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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

/**
 * Basic confirm — title, description, cancel / continue.
 */
const AlertDialogBasicPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Basic confirm</h2>
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
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    export function AlertDialogBasic() {
      return (
        <AlertDialog>
    <AlertDialogTrigger render={<Button variant="outline" />}>
      Show dialog
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
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
              {direction === "rtl" ? "نمایش گفتگو" : "Show dialog"}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {direction === "rtl"
                    ? "کاملاً مطمئن هستید؟"
                    : "Are you absolutely sure?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {direction === "rtl"
                    ? "این کار قابل بازگشت نیست. حساب و داده‌های شما برای همیشه حذف می‌شوند."
                    : "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  {direction === "rtl" ? "لغو" : "Cancel"}
                </AlertDialogCancel>
                <AlertDialogAction>
                  {direction === "rtl" ? "ادامه" : "Continue"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogBasicPreview }
