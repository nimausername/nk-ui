"use client"

import { CardBrandMistField } from "@/components/docs/card-previews/mist"
import { ComponentPreview } from "@/components/docs/component-preview"
import { NkMark } from "@/components/site/nk-mark"
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
 * Inset media — padded rounded frame inside the card, content below.
 */
const CardMediaInsetPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Inset media</h2>
      <p className="text-sm text-muted-foreground">
        Keep card padding. Media sits in a rounded inset frame — not edge-bleed
        — with title, description, and actions below.
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
import { NkMark } from "@/components/site/nk-mark"
import { ShaderBackground } from "@/components/ui/shader-background"

export function CardInsetMedia() {
  return (
    <Card className="w-full max-w-md gap-4 pt-4 pb-0">
      <div
        aria-hidden="true"
        className="relative mx-4 aspect-[16/9] overflow-hidden rounded-xl bg-black"
      >
        <ShaderBackground
          effect="mist"
          className="absolute inset-0"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          colorBack="#000000"
          softness={0.65}
          speed={0.45}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <NkMark
            size="md"
            className="size-12 rounded-md text-lg shadow-sm sm:size-14 sm:text-xl"
          />
          <span className="text-center text-sm font-medium tracking-tight text-white mix-blend-difference">
            UI you own
          </span>
        </div>
      </div>
      <CardHeader className="pt-0">
        <CardTitle>Atmosphere</CardTitle>
        <CardDescription>
          Inset media — padded frame inside the card, not full-bleed.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        Use mx-* and rounded-* on the media block. Keep the card root padded so
        the image sits as a sibling above CardHeader.
      </CardContent>
      <CardFooter className="justify-start pb-5">
        <Button type="button">Open</Button>
        <Button type="button" variant="outline">
          Preview
        </Button>
      </CardFooter>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-md gap-4 pt-4 pb-0">
            <div
              aria-hidden="true"
              className="relative mx-4 aspect-[16/9] overflow-hidden rounded-xl bg-black"
            >
              <CardBrandMistField className="absolute inset-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <NkMark
                  size="md"
                  className="size-12 rounded-md text-lg shadow-sm sm:size-14 sm:text-xl"
                />
                <span className="text-center text-sm font-medium tracking-tight text-white mix-blend-difference">
                  UI you own
                </span>
              </div>
            </div>
            <CardHeader className="pt-0">
              <CardTitle>
                {direction === "rtl" ? "اتمسفر" : "Atmosphere"}
              </CardTitle>
              <CardDescription>
                {direction === "rtl"
                  ? "رسانهٔ تو‌رفته — قاب پدینگ‌دار داخل کارت، نه تمام‌عرض."
                  : "Inset media — padded frame inside the card, not full-bleed."}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              {direction === "rtl"
                ? "روی بلوک رسانه از mx-* و rounded-* استفاده کنید. ریشه کارت را پدینگ‌دار نگه دارید تا تصویر بالای CardHeader باشد."
                : "Use mx-* and rounded-* on the media block. Keep the card root padded so the image sits as a sibling above CardHeader."}
            </CardContent>
            <CardFooter className="justify-start pb-5">
              <Button type="button">
                {direction === "rtl" ? "باز کردن" : "Open"}
              </Button>
              <Button type="button" variant="outline">
                {direction === "rtl" ? "پیش‌نمایش" : "Preview"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardMediaInsetPreview }
