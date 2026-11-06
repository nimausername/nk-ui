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
 * Destructive confirm — danger action via Button variant.
 */
const AlertDialogDestructivePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Destructive</h2>
      <p className="text-sm text-muted-foreground">
        Override the action with{" "}
        <code className="rounded bg-muted px-1 text-xs">
          {'render={<Button variant="destructive" />}'}
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
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    export function AlertDialogDestructive() {
      return (
        <AlertDialog>
    <AlertDialogTrigger render={<Button variant="destructive" />}>
      Delete project
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete project?</AlertDialogTitle>
        <AlertDialogDescription>
          This removes the project and its data. This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          render={<Button type="button" variant="destructive" />}
        >
          Delete
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
              render={<Button type="button" variant="destructive" />}
            >
              {direction === "rtl" ? "حذف پروژه" : "Delete project"}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {direction === "rtl" ? "پروژه حذف شود؟" : "Delete project?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {direction === "rtl"
                    ? "پروژه و داده‌های آن حذف می‌شوند. این کار قابل بازگشت نیست."
                    : "This removes the project and its data. This action cannot be undone."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  {direction === "rtl" ? "لغو" : "Cancel"}
                </AlertDialogCancel>
                <AlertDialogAction
                  render={<Button type="button" variant="destructive" />}
                >
                  {direction === "rtl" ? "حذف" : "Delete"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogDestructivePreview }
