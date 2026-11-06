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

type ProjectPayload = {
  readonly name: string
}

const projectHandle = createAlertDialogHandle<ProjectPayload>()

/**
 * Multiple triggers + payload — one root, typed handle payloads.
 */
const AlertDialogMultiTriggerPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Multiple triggers + payload</h2>
      <p className="text-sm text-muted-foreground">
        One root, several detached triggers — render copy from each trigger{" "}
        <code className="rounded bg-muted px-1 text-xs">payload</code>.
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

    type ProjectPayload = { name: string }

    const projectHandle = createAlertDialogHandle<ProjectPayload>()

    export function AlertDialogMultiTrigger() {
      return (
        <>
    <div className="flex flex-wrap gap-2">
      <AlertDialogTrigger
        handle={projectHandle}
        payload={{ name: "Atlas" }}
        render={<Button variant="outline" />}
      >
        Delete Atlas
      </AlertDialogTrigger>
      <AlertDialogTrigger
        handle={projectHandle}
        payload={{ name: "Nova" }}
        render={<Button variant="outline" />}
      >
        Delete Nova
      </AlertDialogTrigger>
    </div>
    <AlertDialog handle={projectHandle}>
      {({ payload }) => (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete {payload?.name ?? "project"}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This removes the project and its data permanently.
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
      )}
    </AlertDialog>
        </>
      )
    }`}
      >
        {(direction) => (
          <>
            <div className="flex flex-wrap gap-2">
              <AlertDialogTrigger
                handle={projectHandle}
                payload={{ name: "Atlas" }}
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "حذف Atlas" : "Delete Atlas"}
              </AlertDialogTrigger>
              <AlertDialogTrigger
                handle={projectHandle}
                payload={{ name: "Nova" }}
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "حذف Nova" : "Delete Nova"}
              </AlertDialogTrigger>
            </div>
            <AlertDialog handle={projectHandle}>
              {({ payload }) => (
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {direction === "rtl"
                        ? `${payload?.name ?? "پروژه"} حذف شود؟`
                        : `Delete ${payload?.name ?? "project"}?`}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {direction === "rtl"
                        ? "پروژه و داده‌های آن برای همیشه حذف می‌شوند."
                        : "This removes the project and its data permanently."}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      {direction === "rtl" ? "لغو" : "Cancel"}
                    </AlertDialogCancel>
                    <AlertDialogAction
                      render={
                        <Button type="button" variant="destructive" />
                      }
                    >
                      {direction === "rtl" ? "حذف" : "Delete"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              )}
            </AlertDialog>
          </>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogMultiTriggerPreview }
