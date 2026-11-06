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
 * Small size — tighter confirm via Content size="sm".
 */
const AlertDialogSmallPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Small size</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">size=&quot;sm&quot;</code>{" "}
        on{" "}
        <code className="rounded bg-muted px-1 text-xs">AlertDialogContent</code>{" "}
        for a tighter confirm.
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
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    export function AlertDialogSmall() {
      return (
        <AlertDialog>
    <AlertDialogTrigger render={<Button variant="outline" />}>
      Quick confirm
    </AlertDialogTrigger>
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Publish changes?</AlertDialogTitle>
        <AlertDialogDescription>
          Your draft goes live immediately.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Not now</AlertDialogCancel>
        <AlertDialogAction>Publish</AlertDialogAction>
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
              {direction === "rtl" ? "تأیید سریع" : "Quick confirm"}
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {direction === "rtl"
                    ? "تغییرات منتشر شوند؟"
                    : "Publish changes?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {direction === "rtl"
                    ? "پیش‌نویس شما بلافاصله منتشر می‌شود."
                    : "Your draft goes live immediately."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  {direction === "rtl" ? "الان نه" : "Not now"}
                </AlertDialogCancel>
                <AlertDialogAction>
                  {direction === "rtl" ? "انتشار" : "Publish"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogSmallPreview }
