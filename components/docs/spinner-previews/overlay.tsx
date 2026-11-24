"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { spinnerCopy } from "@/components/docs/spinner-previews/shared"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

/**
 * Spinner covering a card, with and without a caption.
 */
const SpinnerOverlayPreview = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Card overlay</h2>
        <p className="text-sm text-muted-foreground">
          Cover a card while its numbers refresh. The spinner is the only
          control.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerCardOverlay() {
  return (
    <Card className="relative w-full max-w-sm">
      <CardHeader>
        <CardTitle>Monthly report</CardTitle>
        <CardDescription>Revenue for the last 30 days.</CardDescription>
      </CardHeader>
      <CardContent className="text-2xl font-semibold tabular-nums">
        $12,480
      </CardContent>
      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/70 backdrop-blur-[2px]">
        <Spinner className="size-6" />
      </div>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="relative w-full max-w-sm">
              <CardHeader>
                <CardTitle>
                  {spinnerCopy(direction, "Monthly report", "گزارش ماهانه")}
                </CardTitle>
                <CardDescription>
                  {spinnerCopy(
                    direction,
                    "Revenue for the last 30 days.",
                    "درآمد ۳۰ روز گذشته."
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-2xl font-semibold tabular-nums">
                $12,480
              </CardContent>
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/70 backdrop-blur-[2px]">
                <Spinner className="size-6" />
              </div>
            </Card>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Overlay with caption</h2>
        <p className="text-sm text-muted-foreground">
          Same cover, with a short line under the spinner.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerCaptionOverlay() {
  return (
    <Card className="relative w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        8 members · 2 pending invites
      </CardContent>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-background/70 backdrop-blur-[2px]">
        <Spinner aria-hidden="true" />
        <p className="text-sm text-muted-foreground">Refreshing data</p>
      </div>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="relative w-full max-w-sm">
              <CardHeader>
                <CardTitle>{spinnerCopy(direction, "Team", "تیم")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {spinnerCopy(
                  direction,
                  "8 members · 2 pending invites",
                  "۸ عضو · ۲ دعوت در انتظار"
                )}
              </CardContent>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-background/70 backdrop-blur-[2px]">
                <Spinner aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  {spinnerCopy(direction, "Refreshing data", "در حال به‌روزرسانی")}
                </p>
              </div>
            </Card>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SpinnerOverlayPreview }
