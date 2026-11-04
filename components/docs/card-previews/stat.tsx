"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/**
 * Stat card — one figure, a label, a quiet delta. Dashboard surface.
 */
const CardStatPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Stat</h2>
      <p className="text-sm text-muted-foreground">
        One figure, a short label, and a delta under a hairline. No chart chrome.
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

export function CardStat() {
  return (
    <Card className="w-fit gap-4 text-center">
      <CardHeader className="items-center gap-1 text-center">
        <CardDescription>Active seats</CardDescription>
        <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
          128
        </CardTitle>
      </CardHeader>
      <CardContent className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
        <span className="font-medium text-foreground">+12%</span>
        {" "}vs last month
      </CardContent>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-fit gap-4 text-center">
            <CardHeader className="items-center gap-1 text-center">
              <CardDescription>
                {direction === "rtl" ? "صندلی‌های فعال" : "Active seats"}
              </CardDescription>
              <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
                {direction === "rtl" ? "۱۲۸" : "128"}
              </CardTitle>
            </CardHeader>
            <CardContent className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {direction === "rtl" ? "٪۱۲+" : "+12%"}
              </span>{" "}
              {direction === "rtl" ? "نسبت به ماه قبل" : "vs last month"}
            </CardContent>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardStatPreview }
