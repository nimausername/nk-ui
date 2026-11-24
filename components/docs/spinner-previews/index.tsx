"use client"

import Link from "next/link"

import { SpinnerBadgesPreview } from "@/components/docs/spinner-previews/badges"
import { SpinnerButtonsPreview } from "@/components/docs/spinner-previews/buttons"
import { SpinnerCenteredPreview } from "@/components/docs/spinner-previews/centered"
import { SpinnerColorsPreview } from "@/components/docs/spinner-previews/colors"
import { SpinnerDefaultPreview } from "@/components/docs/spinner-previews/default"
import { SpinnerEmptyPreview } from "@/components/docs/spinner-previews/empty"
import { SpinnerIconsPreview } from "@/components/docs/spinner-previews/icons"
import { SpinnerInlinePreview } from "@/components/docs/spinner-previews/inline"
import { SpinnerInputPreview } from "@/components/docs/spinner-previews/input"
import { SpinnerOverlayPreview } from "@/components/docs/spinner-previews/overlay"
import { SpinnerSizesPreview } from "@/components/docs/spinner-previews/sizes"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Spinner docs examples — one category at a time so the page stays scannable.
 * Mark is the default; Compose and Surfaces stay one click away.
 */
const SpinnerPreviews = () => {
  return (
    <Tabs defaultValue="mark">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="mark">Mark</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="surfaces">Surfaces</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="mark" className="space-y-10">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">What lives where</h2>
          <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
            <li>
              <strong className="font-medium text-foreground">Spinner</strong>:
              one mark. Glyph, size, and color are props or classes, not
              variants.
            </li>
            <li>
              Known-shape placeholders belong on{" "}
              <Link
                href="/docs/components/skeleton"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Skeleton
              </Link>
              .
            </li>
          </ul>
        </section>
        <SpinnerDefaultPreview />
        <SpinnerIconsPreview />
        <SpinnerSizesPreview />
        <SpinnerColorsPreview />
      </TabsContent>

      <TabsContent value="compose" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          The same mark next to copy, inside buttons, badges, and a field.
        </p>
        <SpinnerInlinePreview />
        <SpinnerButtonsPreview />
        <SpinnerBadgesPreview />
        <SpinnerInputPreview />
      </TabsContent>

      <TabsContent value="surfaces" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Empty, overlays, and a centered first-load panel.
        </p>
        <SpinnerEmptyPreview />
        <SpinnerOverlayPreview />
        <SpinnerCenteredPreview />
      </TabsContent>
    </Tabs>
  )
}

export { SpinnerPreviews }
