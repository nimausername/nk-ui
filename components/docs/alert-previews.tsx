"use client"

import { CheckCircle2, CircleAlert, Info, TriangleAlert } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

/**
 * Alert docs examples — variants, composition, actions, long copy.
 */
const AlertPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Alert</strong>: root +{" "}
            <code className="rounded bg-muted px-1 text-xs">variant</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">AlertTitle</strong> /{" "}
            <strong className="font-medium text-foreground">AlertDescription</strong>:
            heading and body
          </li>
          <li>
            <strong className="font-medium text-foreground">AlertAction</strong>: optional
            button / link row
          </li>
          <li>Leading icon: first-child SVG (auto layout via{" "}
            <code className="rounded bg-muted px-1 text-xs">has-[&#62;svg]</code>)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <ComponentPreview
          className="w-full"
          code={`import { CheckCircle2, CircleAlert, Info, TriangleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertVariants() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Alert>
        <Info />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Neutral status message.</AlertDescription>
      </Alert>
      <Alert variant="soft">
        <Info />
        <AlertTitle>Soft</AlertTitle>
        <AlertDescription>Low-emphasis tip or note.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle2 />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes were saved.</AlertDescription>
      </Alert>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex w-full max-w-lg flex-col gap-3">
              <Alert>
                <Info />
                <AlertTitle>{direction === "rtl" ? "پیش‌فرض" : "Default"}</AlertTitle>
                <AlertDescription>
                  {direction === "rtl" ? "پیام وضعیت خنثی." : "Neutral status message."}
                </AlertDescription>
              </Alert>
              <Alert variant="soft">
                <Info />
                <AlertTitle>{direction === "rtl" ? "ملایم" : "Soft"}</AlertTitle>
                <AlertDescription>
                  {direction === "rtl" ? "نکته یا یادداشت کم‌تأکید." : "Low-emphasis tip or note."}
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <CircleAlert />
                <AlertTitle>{direction === "rtl" ? "مخرب" : "Destructive"}</AlertTitle>
                <AlertDescription>
                  {direction === "rtl" ? "مشکلی پیش آمد." : "Something went wrong."}
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircle2 />
                <AlertTitle>{direction === "rtl" ? "موفق" : "Success"}</AlertTitle>
                <AlertDescription>
                  {direction === "rtl"
                    ? "تغییرات شما ذخیره شد."
                    : "Your changes were saved."}
                </AlertDescription>
              </Alert>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Title only</h2>
        <ComponentPreview
          className="w-full"
          code={`import { TriangleAlert } from "lucide-react"
import { Alert, AlertTitle } from "@/components/ui/alert"

export function AlertTitleOnly() {
  return (
    <Alert variant="soft">
      <TriangleAlert />
      <AlertTitle>Maintenance window starts in 10 minutes</AlertTitle>
    </Alert>
  )
}`}
        >
          {(direction) => (
            <Alert variant="soft" className="w-full max-w-lg">
              <TriangleAlert />
              <AlertTitle>
                {direction === "rtl"
                  ? "پنجره نگهداری تا ۱۰ دقیقه دیگر شروع می‌شود"
                  : "Maintenance window starts in 10 minutes"}
              </AlertTitle>
            </Alert>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With action</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Info } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertWithAction() {
  return (
    <Alert>
      <Info />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>Version 0.2.0 is ready to install.</AlertDescription>
      <AlertAction>
        <Button type="button" size="sm">
          Install
        </Button>
        <Button type="button" size="sm" variant="ghost">
          Later
        </Button>
      </AlertAction>
    </Alert>
  )
}`}
        >
          {(direction) => (
            <Alert className="w-full max-w-lg">
              <Info />
              <AlertTitle>
                {direction === "rtl" ? "به‌روزرسانی آماده است" : "Update available"}
              </AlertTitle>
              <AlertDescription>
                {direction === "rtl"
                  ? "نسخه ۰٫۲٫۰ برای نصب آماده است."
                  : "Version 0.2.0 is ready to install."}
              </AlertDescription>
              <AlertAction>
                <Button type="button" size="sm">
                  {direction === "rtl" ? "نصب" : "Install"}
                </Button>
                <Button type="button" size="sm" variant="ghost">
                  {direction === "rtl" ? "بعداً" : "Later"}
                </Button>
              </AlertAction>
            </Alert>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Long description</h2>
        <ComponentPreview
          className="w-full"
          code={`import { CircleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertLongDescription() {
  return (
    <Alert variant="destructive">
      <CircleAlert />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        <p>We could not charge the card on file.</p>
        <p>Check the billing address and try again, or use a different payment method.</p>
      </AlertDescription>
    </Alert>
  )
}`}
        >
          {(direction) => (
            <Alert variant="destructive" className="w-full max-w-lg">
              <CircleAlert />
              <AlertTitle>
                {direction === "rtl" ? "پرداخت ناموفق" : "Payment failed"}
              </AlertTitle>
              <AlertDescription>
                {direction === "rtl" ? (
                  <>
                    <p>نتوانستیم کارت ذخیره‌شده را شارژ کنیم.</p>
                    <p>
                      آدرس صورتحساب را بررسی کنید و دوباره تلاش کنید، یا روش پرداخت دیگری
                      انتخاب کنید.
                    </p>
                  </>
                ) : (
                  <>
                    <p>We could not charge the card on file.</p>
                    <p>
                      Check the billing address and try again, or use a different payment
                      method.
                    </p>
                  </>
                )}
              </AlertDescription>
            </Alert>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { AlertPreviews }
