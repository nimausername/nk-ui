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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

/**
 * Nested in Dialog — confirm without losing the parent surface.
 */
const AlertDialogNestedPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nested in Dialog</h2>
      <p className="text-sm text-muted-foreground">
        Confirm a destructive step from inside a regular Dialog without losing
        the parent surface.
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
    import {
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog"

    export function AlertDialogNested() {
      return (
        <Dialog>
    <DialogTrigger render={<Button variant="outline" />}>
      Edit sharing
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sharing settings</DialogTitle>
        <DialogDescription>
          Anyone with the link can view this workspace.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-between">
        <AlertDialog>
          <AlertDialogTrigger
            render={<Button type="button" variant="destructive" />}
          >
            Revoke access
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Revoke public access?</AlertDialogTitle>
              <AlertDialogDescription>
                Existing links will stop working immediately.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                render={<Button type="button" variant="destructive" />}
              >
                Revoke
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <DialogClose render={<Button type="button" variant="outline" />}>
          Done
        </DialogClose>
      </DialogFooter>
    </DialogContent>
        </Dialog>
      )
    }`}
      >
        {(direction) => (
          <Dialog>
            <DialogTrigger render={<Button type="button" variant="outline" />}>
              {direction === "rtl" ? "ویرایش اشتراک‌گذاری" : "Edit sharing"}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {direction === "rtl"
                    ? "تنظیمات اشتراک‌گذاری"
                    : "Sharing settings"}
                </DialogTitle>
                <DialogDescription>
                  {direction === "rtl"
                    ? "هر کسی که لینک را داشته باشد می‌تواند این فضای کاری را ببیند."
                    : "Anyone with the link can view this workspace."}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-between">
                <AlertDialog>
                  <AlertDialogTrigger
                    render={
                      <Button type="button" variant="destructive" />
                    }
                  >
                    {direction === "rtl" ? "لغو دسترسی" : "Revoke access"}
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {direction === "rtl"
                          ? "دسترسی عمومی لغو شود؟"
                          : "Revoke public access?"}
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {direction === "rtl"
                          ? "لینک‌های موجود بلافاصله از کار می‌افتند."
                          : "Existing links will stop working immediately."}
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
                        {direction === "rtl" ? "لغو دسترسی" : "Revoke"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <DialogClose
                  render={<Button type="button" variant="outline" />}
                >
                  {direction === "rtl" ? "تمام" : "Done"}
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogNestedPreview }
