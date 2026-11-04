"use client"

import { CardBrandMistField } from "@/components/docs/card-previews/mist"
import { ComponentPreview } from "@/components/docs/component-preview"
import { NkMark } from "@/components/site/nk-mark"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/**
 * Compact / list-row media — small square thumbnail beside dense title + meta.
 */
const CardMediaCompactPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Compact media</h2>
      <p className="text-sm text-muted-foreground">
        Small square thumbnail beside title and meta — feed / search result
        density. Trailing action via{" "}
        <code className="rounded bg-muted px-1 text-xs">CardAction</code>.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NkMark } from "@/components/site/nk-mark"
import { ShaderBackground } from "@/components/ui/shader-background"

export function CardCompactMedia() {
  return (
    <Card className="w-full max-w-md flex-row items-center gap-4 py-4 pe-4 ps-4">
      <div
        aria-hidden="true"
        className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-black"
      >
        <ShaderBackground
          effect="mist"
          className="absolute inset-0"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          colorBack="#000000"
          softness={0.65}
          speed={0.45}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <NkMark size="sm" className="size-7 rounded-sm text-[10px]" />
        </div>
      </div>
      <CardHeader className="flex-1 p-0">
        <CardTitle>Atmosphere</CardTitle>
        <CardDescription>Updated 2 hours ago · Brand mist</CardDescription>
        <CardAction>
          <Button type="button" size="sm" variant="outline">
            Open
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-md flex-row items-center gap-4 py-4 pe-4 ps-4">
            <div
              aria-hidden="true"
              className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-black"
            >
              <CardBrandMistField className="absolute inset-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <NkMark size="sm" className="size-7 rounded-sm text-[10px]" />
              </div>
            </div>
            <CardHeader className="flex-1 p-0">
              <CardTitle>
                {direction === "rtl" ? "اتمسفر" : "Atmosphere"}
              </CardTitle>
              <CardDescription>
                {direction === "rtl"
                  ? "۲ ساعت پیش · میست برند"
                  : "Updated 2 hours ago · Brand mist"}
              </CardDescription>
              <CardAction>
                <Button type="button" size="sm" variant="outline">
                  {direction === "rtl" ? "باز کردن" : "Open"}
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardMediaCompactPreview }
