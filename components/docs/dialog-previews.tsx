"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
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
 * Dialog docs examples — basic, destructive confirm, custom close, RTL copy.
 */
const DialogPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
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

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button type="button">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
        >
          {(direction) => (
            <Dialog>
              <DialogTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "باز کردن گفتگو" : "Open dialog"}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {direction === "rtl" ? "ویرایش پروفایل" : "Edit profile"}
                  </DialogTitle>
                  <DialogDescription>
                    {direction === "rtl"
                      ? "تغییرات پروفایل را اعمال کنید و ذخیره را بزنید."
                      : "Make changes to your profile. Click save when you are done."}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button type="button" variant="outline" />}>
                    {direction === "rtl" ? "لغو" : "Cancel"}
                  </DialogClose>
                  <Button type="button">
                    {direction === "rtl" ? "ذخیره تغییرات" : "Save changes"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Destructive confirm</h2>
        <p className="text-sm text-muted-foreground">
          Keep the danger action on{" "}
          <code className="rounded bg-muted px-1 text-xs">Button</code>{" "}
          <code className="rounded bg-muted px-1 text-xs">variant=&quot;destructive&quot;</code>
          — Dialog stays a shell.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
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

export function DialogDestructive() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive" />}>
        Delete project
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This removes the project and its data. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button variant="destructive" />}>
            Delete
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
        >
          {(direction) => (
            <Dialog>
              <DialogTrigger render={<Button type="button" variant="destructive" />}>
                {direction === "rtl" ? "حذف پروژه" : "Delete project"}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {direction === "rtl" ? "پروژه حذف شود؟" : "Delete project?"}
                  </DialogTitle>
                  <DialogDescription>
                    {direction === "rtl"
                      ? "پروژه و داده‌های آن حذف می‌شوند. این کار قابل بازگشت نیست."
                      : "This removes the project and its data. This action cannot be undone."}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button type="button" variant="outline" />}>
                    {direction === "rtl" ? "لغو" : "Cancel"}
                  </DialogClose>
                  <DialogClose render={<Button type="button" variant="destructive" />}>
                    {direction === "rtl" ? "حذف" : "Delete"}
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Without corner close</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">showCloseButton={"{false}"}</code> on{" "}
          <code className="rounded bg-muted px-1 text-xs">DialogContent</code> when footer actions
          are enough (or use{" "}
          <code className="rounded bg-muted px-1 text-xs">DialogFooter showCloseButton</code>).
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogNoCornerClose() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Continue setup</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Almost done</DialogTitle>
          <DialogDescription>
            Confirm to finish onboarding. Use the footer to dismiss.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button type="button">Finish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
        >
          {(direction) => (
            <Dialog>
              <DialogTrigger render={<Button type="button" />}>
                {direction === "rtl" ? "ادامه راه‌اندازی" : "Continue setup"}
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>
                    {direction === "rtl" ? "تقریباً تمام" : "Almost done"}
                  </DialogTitle>
                  <DialogDescription>
                    {direction === "rtl"
                      ? "تأیید کنید تا راه‌اندازی تمام شود. از پاورقی برای بستن استفاده کنید."
                      : "Confirm to finish onboarding. Use the footer to dismiss."}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button type="button" variant="outline" />}>
                    {direction === "rtl" ? "بستن" : "Close"}
                  </DialogClose>
                  <Button type="button">
                    {direction === "rtl" ? "پایان" : "Finish"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { DialogPreviews }
