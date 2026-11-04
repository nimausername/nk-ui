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
 * Full-bleed background media — copy in a gradient blend band.
 */
const CardMediaBackgroundPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Background media</h2>
      <p className="text-sm text-muted-foreground">
        Full-bleed media behind the card. Copy sits in a bottom band that fades
        into the media with a gradient blend — no hard edge.
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

export function CardBackgroundMedia() {
  return (
    <Card className="relative w-full max-w-md gap-0 overflow-hidden py-0">
      <div aria-hidden="true" className="absolute inset-0 bg-black">
        <ShaderBackground
          effect="mist"
          className="absolute inset-0"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          colorBack="#000000"
          softness={0.65}
          speed={0.45}
        />
      </div>
      <div className="relative flex min-h-[22rem] flex-col justify-end">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex h-[42%] w-full flex-col items-center justify-center gap-2"
        >
          <NkMark
            size="md"
            className="size-12 rounded-md text-lg shadow-sm sm:size-14 sm:text-xl"
          />
          <span className="text-center text-sm font-medium tracking-tight text-white mix-blend-difference">
            UI you own
          </span>
        </div>
        <div className="relative z-[2] bg-gradient-to-t from-card from-35% via-card/80 to-transparent pt-20">
          <CardHeader className="py-5">
            <CardTitle>Atmosphere</CardTitle>
            <CardDescription>
              Full media background — copy blends into the media.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2 text-sm">
            Keep the card root relative and unpadded. Pin media absolute inset-0;
            fade the content band with from-card via-card/80 to-transparent.
          </CardContent>
          <CardFooter className="justify-end pb-5">
            <Button type="button" variant="outline">
              Preview
            </Button>
            <Button type="button">Open</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="relative w-full max-w-md gap-0 overflow-hidden py-0">
            <div aria-hidden="true" className="absolute inset-0 bg-black">
              <CardBrandMistField className="absolute inset-0" />
            </div>
            <div className="relative flex min-h-[22rem] flex-col justify-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex h-[42%] w-full flex-col items-center justify-center gap-2"
              >
                <NkMark
                  size="md"
                  className="size-12 rounded-md text-lg shadow-sm sm:size-14 sm:text-xl"
                />
                <span className="text-center text-sm font-medium tracking-tight text-white mix-blend-difference">
                  UI you own
                </span>
              </div>
              <div className="relative z-[2] bg-gradient-to-t from-card from-35% via-card/80 to-transparent pt-20">
                <CardHeader className="py-5">
                  <CardTitle>
                    {direction === "rtl" ? "اتمسفر" : "Atmosphere"}
                  </CardTitle>
                  <CardDescription>
                    {direction === "rtl"
                      ? "پس‌زمینهٔ کامل رسانه — متن با پس‌زمینه محو می‌شود."
                      : "Full media background — copy blends into the media."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2 text-sm">
                  {direction === "rtl"
                    ? "ریشه کارت را relative و بدون پدینگ نگه دارید. رسانه را absolute inset-0 بگذارید؛ نوار محتوا را با گرادیان محو کنید."
                    : "Keep the card root relative and unpadded. Pin media absolute inset-0; fade the content band with from-card via-card/80 to-transparent."}
                </CardContent>
                <CardFooter className="justify-end pb-5">
                  <Button type="button" variant="outline">
                    {direction === "rtl" ? "پیش‌نمایش" : "Preview"}
                  </Button>
                  <Button type="button">
                    {direction === "rtl" ? "باز کردن" : "Open"}
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardMediaBackgroundPreview }
