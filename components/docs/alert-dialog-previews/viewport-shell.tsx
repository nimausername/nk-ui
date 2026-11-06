"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogViewport,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

/**
 * Custom viewport shell — Portal / Overlay / Viewport / Popup.
 */
const AlertDialogViewportShellPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Custom viewport shell</h2>
      <p className="text-sm text-muted-foreground">
        Compose{" "}
        <code className="rounded bg-muted px-1 text-xs">AlertDialogPortal</code>{" "}
        /{" "}
        <code className="rounded bg-muted px-1 text-xs">AlertDialogOverlay</code>{" "}
        /{" "}
        <code className="rounded bg-muted px-1 text-xs">
          AlertDialogViewport
        </code>{" "}
        /{" "}
        <code className="rounded bg-muted px-1 text-xs">AlertDialogPopup</code>{" "}
        for scrollable or edge-aligned shells.
      </p>
      <ComponentPreview
        code={`import {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogOverlay,
      AlertDialogPopup,
      AlertDialogPortal,
      AlertDialogTitle,
      AlertDialogTrigger,
      AlertDialogViewport,
    } from "@/components/ui/alert-dialog"
    import { Button } from "@/components/ui/button"

    export function AlertDialogViewportShell() {
      return (
        <AlertDialog>
    <AlertDialogTrigger render={<Button variant="outline" />}>
      Review policy
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogViewport>
        <AlertDialogPopup className="max-h-[min(80dvh,28rem)] overflow-y-auto sm:max-w-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Accept updated terms?</AlertDialogTitle>
            <AlertDialogDescription>
              Please review the summary before continuing. Scrolling stays
              inside the popup while the backdrop stays fixed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              We updated how workspace data is retained, how invitations
              expire, and how billing seats sync with SSO groups.
            </p>
            <p>
              Continuing means you agree to the retention schedule, audit log
              export window, and seat reconciliation rules described here.
            </p>
            <p>
              Admins can still export records for ninety days after a member
              leaves. Personal drafts older than one year may be pruned.
            </p>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction>Accept</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialogViewport>
    </AlertDialogPortal>
        </AlertDialog>
      )
    }`}
      >
        {(direction) => (
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button type="button" variant="outline" />}
            >
              {direction === "rtl" ? "بازبینی سیاست" : "Review policy"}
            </AlertDialogTrigger>
            <AlertDialogPortal>
              <AlertDialogOverlay />
              <AlertDialogViewport>
                <AlertDialogPopup className="max-h-[min(80dvh,28rem)] overflow-y-auto sm:max-w-lg">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {direction === "rtl"
                        ? "شرایط به‌روز پذیرفته شود؟"
                        : "Accept updated terms?"}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {direction === "rtl"
                        ? "قبل از ادامه خلاصه را بخوانید. اسکرول داخل پاپ‌آپ می‌ماند و پس‌زمینه ثابت است."
                        : "Please review the summary before continuing. Scrolling stays inside the popup while the backdrop stays fixed."}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      {direction === "rtl"
                        ? "نحوه نگه‌داری داده فضای کاری، انقضای دعوت‌ها و همگام‌سازی صندلی‌های صورتحساب با گروه‌های SSO به‌روز شده است."
                        : "We updated how workspace data is retained, how invitations expire, and how billing seats sync with SSO groups."}
                    </p>
                    <p>
                      {direction === "rtl"
                        ? "ادامه به‌معنای پذیرش برنامه نگه‌داری، بازه خروجی گزارش ممیزی و قوانین تطبیق صندلی است."
                        : "Continuing means you agree to the retention schedule, audit log export window, and seat reconciliation rules described here."}
                    </p>
                    <p>
                      {direction === "rtl"
                        ? "مدیران می‌توانند تا نود روز پس از خروج عضو، رکوردها را خروجی بگیرند. پیش‌نویس‌های شخصی قدیمی‌تر از یک سال ممکن است پاک شوند."
                        : "Admins can still export records for ninety days after a member leaves. Personal drafts older than one year may be pruned."}
                    </p>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      {direction === "rtl" ? "الان نه" : "Not now"}
                    </AlertDialogCancel>
                    <AlertDialogAction>
                      {direction === "rtl" ? "پذیرش" : "Accept"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogPopup>
              </AlertDialogViewport>
            </AlertDialogPortal>
          </AlertDialog>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogViewportShellPreview }
