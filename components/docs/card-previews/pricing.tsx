"use client"

import { Check } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/**
 * Pricing card — plan name, one price, three lines, one action.
 */
const CardPricingPreview = () => {
  return (
    <div className="space-y-10">
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Pricing</h2>
        <p className="text-sm text-muted-foreground">
        Plan name, one price, three short lines, and a single button. Badge and
        icon versions sit below — same card, one accent each.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardPricing() {
  return (
    <Card className="w-full max-w-xs gap-0 py-0 text-center">
      <CardHeader className="items-center gap-1 py-6">
        <CardDescription>Studio</CardDescription>
        <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
          $24
        </CardTitle>
        <CardDescription>per seat / month</CardDescription>
      </CardHeader>
      <CardContent className="border-t border-border py-5 text-sm text-muted-foreground">
        <ul className="space-y-2">
          <li>Source in your repo</li>
          <li>Light and dark</li>
          <li>Real RTL</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-center border-t border-border py-4">
        <Button type="button" className="w-full">
          Start
        </Button>
      </CardFooter>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-xs gap-0 py-0 text-center">
            <CardHeader className="items-center gap-1 py-6">
              <CardDescription>
                {direction === "rtl" ? "استودیو" : "Studio"}
              </CardDescription>
              <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
                {direction === "rtl" ? "۲۴$" : "$24"}
              </CardTitle>
              <CardDescription>
                {direction === "rtl" ? "هر صندلی / ماه" : "per seat / month"}
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-border py-5 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>
                  {direction === "rtl" ? "منبع در مخزن شما" : "Source in your repo"}
                </li>
                <li>
                  {direction === "rtl" ? "روشن و تیره" : "Light and dark"}
                </li>
                <li>{direction === "rtl" ? "راست‌به‌چپ واقعی" : "Real RTL"}</li>
              </ul>
            </CardContent>
            <CardFooter className="justify-center border-t border-border py-4">
              <Button type="button" className="w-full">
                {direction === "rtl" ? "شروع" : "Start"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </ComponentPreview>
    </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Pricing with badge</h2>
        <p className="text-sm text-muted-foreground">
          Badge sits on the top border, centered — half inside the card, half
          out.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function CardPricingBadge() {
  return (
    <Card className="relative w-full max-w-xs gap-0 overflow-visible py-0 text-center">
      <Badge
        variant="outline"
        className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-card"
      >
        Most popular
      </Badge>
      <CardHeader className="items-center gap-1 py-6">
        <CardDescription>Studio</CardDescription>
        <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
          $24
        </CardTitle>
        <CardDescription>per seat / month</CardDescription>
      </CardHeader>
      <CardContent className="border-t border-border py-5 text-sm text-muted-foreground">
        <ul className="space-y-2">
          <li>Source in your repo</li>
          <li>Light and dark</li>
          <li>Real RTL</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-center border-t border-border py-4">
        <Button type="button" className="w-full">
          Start
        </Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="relative w-full max-w-xs gap-0 overflow-visible py-0 text-center">
              <Badge
                variant="outline"
                className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-card"
              >
                {direction === "rtl" ? "محبوب‌ترین" : "Most popular"}
              </Badge>
              <CardHeader className="items-center gap-1 py-6">
                <CardDescription>
                  {direction === "rtl" ? "استودیو" : "Studio"}
                </CardDescription>
                <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
                  {direction === "rtl" ? "۲۴$" : "$24"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl" ? "هر صندلی / ماه" : "per seat / month"}
                </CardDescription>
              </CardHeader>
              <CardContent className="border-t border-border py-5 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>
                    {direction === "rtl" ? "منبع در مخزن شما" : "Source in your repo"}
                  </li>
                  <li>
                    {direction === "rtl" ? "روشن و تیره" : "Light and dark"}
                  </li>
                  <li>{direction === "rtl" ? "راست‌به‌چپ واقعی" : "Real RTL"}</li>
                </ul>
              </CardContent>
              <CardFooter className="justify-center border-t border-border py-4">
                <Button type="button" className="w-full">
                  {direction === "rtl" ? "شروع" : "Start"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Pricing with icons</h2>
        <p className="text-sm text-muted-foreground">
          A check on each line. Keep the list start-aligned so the icons form a
          column.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardPricingIcons() {
  return (
    <Card className="w-full max-w-xs gap-0 py-0 text-center">
      <CardHeader className="items-center gap-1 py-6">
        <CardDescription>Studio</CardDescription>
        <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
          $24
        </CardTitle>
        <CardDescription>per seat / month</CardDescription>
      </CardHeader>
      <CardContent className="border-t border-border py-5 text-sm text-muted-foreground">
        <ul className="space-y-2 text-start">
          <li className="flex items-center gap-2">
            <Check className="size-4 shrink-0" aria-hidden="true" />
            Source in your repo
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-4 shrink-0" aria-hidden="true" />
            Light and dark
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-4 shrink-0" aria-hidden="true" />
            Real RTL
          </li>
        </ul>
      </CardContent>
      <CardFooter className="justify-center border-t border-border py-4">
        <Button type="button" className="w-full">
          Start
        </Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="w-full max-w-xs gap-0 py-0 text-center">
              <CardHeader className="items-center gap-1 py-6">
                <CardDescription>
                  {direction === "rtl" ? "استودیو" : "Studio"}
                </CardDescription>
                <CardTitle className="text-4xl font-semibold tracking-tight tabular-nums">
                  {direction === "rtl" ? "۲۴$" : "$24"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl" ? "هر صندلی / ماه" : "per seat / month"}
                </CardDescription>
              </CardHeader>
              <CardContent className="border-t border-border py-5 text-sm text-muted-foreground">
                <ul className="space-y-2 text-start">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                    {direction === "rtl" ? "منبع در مخزن شما" : "Source in your repo"}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                    {direction === "rtl" ? "روشن و تیره" : "Light and dark"}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                    {direction === "rtl" ? "راست‌به‌چپ واقعی" : "Real RTL"}
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="justify-center border-t border-border py-4">
                <Button type="button" className="w-full">
                  {direction === "rtl" ? "شروع" : "Start"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { CardPricingPreview }
