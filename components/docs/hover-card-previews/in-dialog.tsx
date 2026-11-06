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
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

/**
 * Hover card nested inside a Dialog — still portals correctly above the modal.
 */
const HoverCardInDialogPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Inside Dialog</h2>
      <p className="text-sm text-muted-foreground">
        Hover cards keep working over modal surfaces — open the dialog, then
        hover the link.
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardInDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Workspace tip</DialogTitle>
          <DialogDescription>
            Learn more about{" "}
            <HoverCard>
              <HoverCardTrigger
                delay={200}
                closeDelay={100}
                className="font-medium underline decoration-foreground/40 underline-offset-4"
              >
                roles
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <HoverCardHeader>
                  <HoverCardTitle>Roles</HoverCardTitle>
                  <HoverCardDescription>
                    Owners manage billing. Admins manage members. Members edit
                    content.
                  </HoverCardDescription>
                </HoverCardHeader>
              </HoverCardContent>
            </HoverCard>
            .
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
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
                  {direction === "rtl" ? "نکته فضای کاری" : "Workspace tip"}
                </DialogTitle>
                <DialogDescription>
                  {direction === "rtl" ? (
                    <>
                      درباره{" "}
                      <HoverCard>
                        <HoverCardTrigger
                          delay={200}
                          closeDelay={100}
                          className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
                        >
                          نقش‌ها
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <HoverCardHeader>
                            <HoverCardTitle>نقش‌ها</HoverCardTitle>
                            <HoverCardDescription>
                              مالکان صورتحساب را مدیریت می‌کنند. مدیران اعضا را.
                              اعضا محتوا را ویرایش می‌کنند.
                            </HoverCardDescription>
                          </HoverCardHeader>
                        </HoverCardContent>
                      </HoverCard>{" "}
                      بیشتر بدانید.
                    </>
                  ) : (
                    <>
                      Learn more about{" "}
                      <HoverCard>
                        <HoverCardTrigger
                          delay={200}
                          closeDelay={100}
                          className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
                        >
                          roles
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <HoverCardHeader>
                            <HoverCardTitle>Roles</HoverCardTitle>
                            <HoverCardDescription>
                              Owners manage billing. Admins manage members.
                              Members edit content.
                            </HoverCardDescription>
                          </HoverCardHeader>
                        </HoverCardContent>
                      </HoverCard>
                      .
                    </>
                  )}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose
                  render={<Button type="button" variant="outline" />}
                >
                  {direction === "rtl" ? "بستن" : "Close"}
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardInDialogPreview }
