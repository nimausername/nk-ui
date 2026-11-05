"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { CardBrandMistField } from "@/components/docs/card-previews/mist"
import { NkMark } from "@/components/site/nk-mark"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type PreviewDirection = "ltr" | "rtl"

/**
 * Shared media fill for Aspect Ratio demos — brand mist + mark.
 */
const AspectRatioMedia = ({
  label,
  direction,
}: {
  readonly label: string
  readonly direction: PreviewDirection
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <CardBrandMistField className="absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <NkMark
          size="md"
          className="size-10 rounded-md text-base shadow-sm sm:size-12 sm:text-lg"
        />
        <span className="text-xs font-medium tracking-tight text-white mix-blend-difference">
          {direction === "rtl" ? "نسبت" : "Ratio"} {label}
        </span>
      </div>
    </div>
  )
}

/**
 * Aspect Ratio docs examples — common ratios and Card composition.
 */
const AspectRatioPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">AspectRatio</strong>:
            relative frame with CSS{" "}
            <code className="rounded bg-muted px-1 text-xs">aspect-ratio</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">ratio</code>: width ÷
            height — defaults to{" "}
            <code className="rounded bg-muted px-1 text-xs">1</code>
          </li>
          <li>
            Media: absolute child with{" "}
            <code className="rounded bg-muted px-1 text-xs">inset-0</code> +{" "}
            <code className="rounded bg-muted px-1 text-xs">object-cover</code>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">16:9</h2>
        <p className="text-sm text-muted-foreground">
          Widescreen — video, hero stills, and dashboard charts.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioWidescreen() {
  return (
    <AspectRatio ratio={16 / 9} className="max-w-lg overflow-hidden rounded-xl">
      <img
        src="/hero.jpg"
        alt="Hero"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  )
}`}
        >
          {(direction) => (
            <AspectRatio
              ratio={16 / 9}
              className="max-w-lg overflow-hidden rounded-xl ring-1 ring-foreground/10"
            >
              <AspectRatioMedia label="16:9" direction={direction} />
            </AspectRatio>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">1:1</h2>
        <p className="text-sm text-muted-foreground">
          Square — avatars at large size, product tiles, gallery thumbs.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioSquare() {
  return (
    <AspectRatio ratio={1} className="max-w-xs overflow-hidden rounded-xl">
      <img
        src="/product.jpg"
        alt="Product"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  )
}`}
        >
          {(direction) => (
            <AspectRatio
              ratio={1}
              className="max-w-xs overflow-hidden rounded-xl ring-1 ring-foreground/10"
            >
              <AspectRatioMedia label="1:1" direction={direction} />
            </AspectRatio>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">4:3</h2>
        <ComponentPreview
          className="w-full"
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioFourThree() {
  return (
    <AspectRatio ratio={4 / 3} className="max-w-md overflow-hidden rounded-xl">
      <img
        src="/photo.jpg"
        alt="Photo"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  )
}`}
        >
          {(direction) => (
            <AspectRatio
              ratio={4 / 3}
              className="max-w-md overflow-hidden rounded-xl ring-1 ring-foreground/10"
            >
              <AspectRatioMedia label="4:3" direction={direction} />
            </AspectRatio>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">9:16</h2>
        <p className="text-sm text-muted-foreground">
          Portrait — stories, reels, and mobile capture.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioPortrait() {
  return (
    <AspectRatio ratio={9 / 16} className="max-w-[180px] overflow-hidden rounded-xl">
      <img
        src="/story.jpg"
        alt="Story"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  )
}`}
        >
          {(direction) => (
            <AspectRatio
              ratio={9 / 16}
              className="max-w-[180px] overflow-hidden rounded-xl ring-1 ring-foreground/10"
            >
              <AspectRatioMedia label="9:16" direction={direction} />
            </AspectRatio>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">In a Card</h2>
        <p className="text-sm text-muted-foreground">
          Media on top, copy below — keep the ratio on the image frame only.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AspectRatioInCard() {
  return (
    <Card className="w-full max-w-sm gap-0 overflow-hidden py-0">
      <AspectRatio ratio={16 / 9}>
        <img
          src="/cover.jpg"
          alt="Cover"
          className="absolute inset-0 size-full object-cover"
        />
      </AspectRatio>
      <CardHeader className="py-4">
        <CardTitle>Release notes</CardTitle>
        <CardDescription>
          What shipped this week across the design system.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4 text-sm text-muted-foreground">
        Aspect Ratio keeps the cover stable while the copy reflows.
      </CardContent>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="w-full max-w-sm gap-0 overflow-hidden py-0">
              <AspectRatio ratio={16 / 9}>
                <AspectRatioMedia label="16:9" direction={direction} />
              </AspectRatio>
              <CardHeader className="py-4">
                <CardTitle>
                  {direction === "rtl" ? "یادداشت‌های انتشار" : "Release notes"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl"
                    ? "آنچه این هفته در سامانه طراحی منتشر شد."
                    : "What shipped this week across the design system."}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 text-sm text-muted-foreground">
                {direction === "rtl"
                  ? "Aspect Ratio کاور را ثابت نگه می‌دارد تا متن آزادانه بچرخد."
                  : "Aspect Ratio keeps the cover stable while the copy reflows."}
              </CardContent>
            </Card>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { AspectRatioPreviews }
