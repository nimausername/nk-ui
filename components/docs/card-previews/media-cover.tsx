"use client"

import { CardBrandMistCover } from "@/components/docs/card-previews/mist"
import { ComponentPreview } from "@/components/docs/component-preview"
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
 * Edge-bleed cover media — mist + nk mark above header / content / footer.
 */
const CardMediaCoverPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Media</h2>
      <p className="text-sm text-muted-foreground">
        Cover pairs the home mist palette with the nk mark and tagline.
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

export function CardMedia() {
  return (
    <Card className="w-full max-w-md gap-0 overflow-hidden py-0">
      <div
        aria-hidden="true"
        className="relative aspect-[16/9] w-full overflow-hidden bg-black"
      >
        <ShaderBackground
          effect="mist"
          className="absolute inset-0"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          colorBack="#000000"
          softness={0.65}
          speed={0.45}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <NkMark size="md" className="size-12 rounded-md text-lg sm:size-14 sm:text-xl" />
          <span className="text-sm font-medium tracking-tight text-white">
            UI you own
          </span>
        </div>
      </div>
      <CardHeader className="py-5">
        <CardTitle>Atmosphere</CardTitle>
        <CardDescription>
          Brand cover — keep the card root unpadded.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 text-sm">
        Compose the cover as a sibling before CardHeader. Swap this block for
        an image when you have product media.
      </CardContent>
      <CardFooter className="justify-end pb-5">
        <Button type="button" variant="outline">
          Preview
        </Button>
        <Button type="button">Open</Button>
      </CardFooter>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-md gap-0 overflow-hidden py-0">
            <CardBrandMistCover />
            <CardHeader className="py-5">
              <CardTitle>
                {direction === "rtl" ? "اتمسفر" : "Atmosphere"}
              </CardTitle>
              <CardDescription>
                {direction === "rtl"
                  ? "کاور برند — ریشه کارت را بدون پدینگ نگه دارید."
                  : "Brand cover — keep the card root unpadded."}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 text-sm">
              {direction === "rtl"
                ? "کاور را قبل از CardHeader ترکیب کنید. وقتی رسانه محصول دارید این بلوک را عوض کنید."
                : "Compose the cover as a sibling before CardHeader. Swap this block for an image when you have product media."}
            </CardContent>
            <CardFooter className="justify-end pb-5">
              <Button type="button" variant="outline">
                {direction === "rtl" ? "پیش‌نمایش" : "Preview"}
              </Button>
              <Button type="button">
                {direction === "rtl" ? "باز کردن" : "Open"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardMediaCoverPreview }
