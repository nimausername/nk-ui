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
import { cn } from "@/lib/utils"

/**
 * Horizontal media blend — mist clipped to the start half, soft fade into copy.
 */
const CardMediaHorizontalBlendPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Horizontal media blend</h2>
      <p className="text-sm text-muted-foreground">
        Mist stays in the start half (~42%) and fades into the content column —
        soft seam, without washing under the copy.
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

export function CardHorizontalMediaBlend() {
  return (
    <Card className="relative w-full max-w-2xl gap-0 overflow-hidden py-0">
      {/* Mask the mist pixels so they fade into the card — not a clipped overlay. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[46%] overflow-hidden bg-black [-webkit-mask-image:linear-gradient(to_bottom,#000_55%,transparent)] [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] sm:inset-y-0 sm:start-0 sm:h-auto sm:w-[48%] sm:[-webkit-mask-image:linear-gradient(to_right,#000_52%,transparent)] sm:[mask-image:linear-gradient(to_right,#000_52%,transparent)]"
      >
        <ShaderBackground
          effect="mist"
          className="absolute inset-0"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          colorBack="#000000"
          softness={0.65}
          speed={0.45}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-[1] hidden w-40 sm:block"
        style={{
          insetInlineStart: "calc(48% - 10rem)",
          backgroundImage: "linear-gradient(to right, transparent, var(--card))",
        }}
      />
      <div className="relative z-[1] grid sm:grid-cols-[minmax(0,42%)_minmax(0,1fr)]">
        <div className="flex min-h-[9rem] flex-col items-center justify-center gap-2 sm:min-h-0">
          <NkMark
            size="md"
            className="size-10 rounded-md text-base shadow-sm sm:size-12 sm:text-lg"
          />
          <span className="text-center text-xs font-medium tracking-tight text-white mix-blend-difference">
            UI you own
          </span>
        </div>
        <div className="flex flex-col justify-start gap-4 px-6 py-5 sm:-ms-10 sm:ps-4">
          <CardHeader className="px-0 py-0">
            <CardTitle>Atmosphere</CardTitle>
            <CardDescription>
              Horizontal blend — media fades into the content column.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 py-0 text-sm">
            Clip mist to the start half and mask-image it to transparent so the
            pixels themselves fade into the card.
          </CardContent>
          <CardFooter className="justify-end px-0 pt-1 pb-0">
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
          <Card className="relative w-full max-w-2xl gap-0 overflow-hidden py-0">
            <div
              aria-hidden="true"
              className={cn(
                "absolute overflow-hidden bg-black",
                "inset-x-0 top-0 h-[46%]",
                "[-webkit-mask-image:linear-gradient(to_bottom,#000_55%,transparent)] [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]",
                "sm:inset-y-0 sm:h-auto sm:w-[48%]",
                direction === "rtl"
                  ? "sm:inset-x-auto sm:end-0 sm:[-webkit-mask-image:linear-gradient(to_left,#000_52%,transparent)] sm:[mask-image:linear-gradient(to_left,#000_52%,transparent)]"
                  : "sm:start-0 sm:[-webkit-mask-image:linear-gradient(to_right,#000_52%,transparent)] sm:[mask-image:linear-gradient(to_right,#000_52%,transparent)]"
              )}
            >
              <CardBrandMistField className="absolute inset-0" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 z-[1] hidden w-40 sm:block"
              style={{
                insetInlineStart: direction === "rtl" ? undefined : "calc(48% - 10rem)",
                insetInlineEnd: direction === "rtl" ? "calc(48% - 10rem)" : undefined,
                backgroundImage:
                  direction === "rtl"
                    ? "linear-gradient(to left, transparent, var(--card))"
                    : "linear-gradient(to right, transparent, var(--card))",
              }}
            />
            <div className="relative z-[1] grid sm:grid-cols-[minmax(0,42%)_minmax(0,1fr)]">
              <div className="flex min-h-[9rem] flex-col items-center justify-center gap-2 sm:min-h-0">
                <NkMark
                  size="md"
                  className="size-10 rounded-md text-base shadow-sm sm:size-12 sm:text-lg"
                />
                <span className="text-center text-xs font-medium tracking-tight text-white mix-blend-difference">
                  UI you own
                </span>
              </div>
              <div className="flex flex-col justify-start gap-4 px-6 py-5 sm:-ms-10 sm:ps-4">
                <CardHeader className="px-0 py-0">
                  <CardTitle>
                    {direction === "rtl" ? "اتمسفر" : "Atmosphere"}
                  </CardTitle>
                  <CardDescription>
                    {direction === "rtl"
                      ? "ترکیب افقی — رسانه در ستون محتوا محو می‌شود."
                      : "Horizontal blend — media fades into the content column."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 py-0 text-sm">
                  {direction === "rtl"
                    ? "میست را به نیمهٔ شروع محدود کنید و با mask-image تا شفاف محو کنید تا خود پیکسل‌ها در کارت حل شوند."
                    : "Clip mist to the start half and mask-image it to transparent so the pixels themselves fade into the card."}
                </CardContent>
                <CardFooter className="justify-end px-0 pt-1 pb-0">
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

export { CardMediaHorizontalBlendPreview }
