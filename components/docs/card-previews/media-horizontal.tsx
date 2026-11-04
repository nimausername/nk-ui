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
 * Horizontal media — media beside copy; stacks on small screens.
 */
const CardMediaHorizontalPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Horizontal media</h2>
      <p className="text-sm text-muted-foreground">
        Media in a start column, copy and actions beside it. Stacks to a vertical
        layout on small screens.
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

export function CardHorizontalMedia() {
  return (
    <Card className="w-full max-w-2xl gap-0 overflow-hidden py-0 sm:flex-row">
      <div
        aria-hidden="true"
        className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black sm:aspect-auto sm:min-h-[14rem] sm:w-56 sm:self-stretch"
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
            className="size-10 rounded-md text-base shadow-sm sm:size-12 sm:text-lg"
          />
          <span className="text-center text-xs font-medium tracking-tight text-white mix-blend-difference">
            UI you own
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-6 py-5">
        <CardHeader className="py-0">
          <CardTitle>Atmosphere</CardTitle>
          <CardDescription>
            Horizontal media — side column on sm+, stack below.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 py-0 text-sm">
          Set the card to sm:flex-row with gap-0 py-0. Give media a fixed width
          and self-stretch so it fills the row height.
        </CardContent>
        <CardFooter className="justify-end pt-2 pb-0">
          <Button type="button" variant="outline">
            Preview
          </Button>
          <Button type="button">Open</Button>
        </CardFooter>
      </div>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-2xl gap-0 overflow-hidden py-0 sm:flex-row">
            <div
              aria-hidden="true"
              className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black sm:aspect-auto sm:min-h-[14rem] sm:w-56 sm:self-stretch"
            >
              <CardBrandMistField className="absolute inset-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <NkMark
                  size="md"
                  className="size-10 rounded-md text-base shadow-sm sm:size-12 sm:text-lg"
                />
                <span className="text-center text-xs font-medium tracking-tight text-white mix-blend-difference">
                  UI you own
                </span>
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-6 py-5">
              <CardHeader className="py-0">
                <CardTitle>
                  {direction === "rtl" ? "اتمسفر" : "Atmosphere"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl"
                    ? "رسانهٔ افقی — ستون کناری در sm+، زیر آن در موبایل."
                    : "Horizontal media — side column on sm+, stack below."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 py-0 text-sm">
                {direction === "rtl"
                  ? "کارت را sm:flex-row با gap-0 py-0 کنید. به رسانه عرض ثابت و self-stretch بدهید تا ارتفاع ردیف را پر کند."
                  : "Set the card to sm:flex-row with gap-0 py-0. Give media a fixed width and self-stretch so it fills the row height."}
              </CardContent>
              <CardFooter className="justify-end pt-2 pb-0">
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "پیش‌نمایش" : "Preview"}
                </Button>
                <Button type="button">
                  {direction === "rtl" ? "باز کردن" : "Open"}
                </Button>
              </CardFooter>
            </div>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardMediaHorizontalPreview }
