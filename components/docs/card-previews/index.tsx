"use client"

import { CardMediaBackgroundPreview } from "@/components/docs/card-previews/media-background"
import { CardMediaCompactPreview } from "@/components/docs/card-previews/media-compact"
import { CardMediaCoverPreview } from "@/components/docs/card-previews/media-cover"
import { CardMediaHorizontalBlendPreview } from "@/components/docs/card-previews/media-horizontal-blend"
import { CardMediaHorizontalPreview } from "@/components/docs/card-previews/media-horizontal"
import { CardMediaInsetPreview } from "@/components/docs/card-previews/media-inset"
import { CardPricingPreview } from "@/components/docs/card-previews/pricing"
import { CardQuotePreview } from "@/components/docs/card-previews/quote"
import { CardStatPreview } from "@/components/docs/card-previews/stat"
import { CardStructurePreviews } from "@/components/docs/card-previews/structure"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Card docs examples — one category at a time so the page stays scannable.
 * Structure is the default; Product and Media stay one click away.
 */
const CardPreviews = () => {
  return (
    <Tabs defaultValue="structure">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="structure" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Anatomy and the everyday compositions — basic, action, sections, and
          form.
        </p>
        <CardStructurePreviews />
      </TabsContent>

      <TabsContent value="product" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Type-led product surfaces — stat, quote, and pricing.
        </p>
        <CardStatPreview />
        <CardQuotePreview />
        <CardPricingPreview />
      </TabsContent>

      <TabsContent value="media" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Cover, background, inset, horizontal, blend, and compact. Swap the
          mist for your own image.
        </p>
        <CardMediaCoverPreview />
        <CardMediaBackgroundPreview />
        <CardMediaInsetPreview />
        <CardMediaHorizontalPreview />
        <CardMediaHorizontalBlendPreview />
        <CardMediaCompactPreview />
      </TabsContent>
    </Tabs>
  )
}

export { CardPreviews }
