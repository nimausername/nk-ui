"use client"

import { NavigationMenuAlignPreview } from "@/components/docs/navigation-menu-previews/align"
import { NavigationMenuAnatomyPreview } from "@/components/docs/navigation-menu-previews/anatomy"
import { NavigationMenuArrowPreview } from "@/components/docs/navigation-menu-previews/arrow"
import { NavigationMenuBadgesPreview } from "@/components/docs/navigation-menu-previews/badges"
import { NavigationMenuCatalogPreview } from "@/components/docs/navigation-menu-previews/catalog"
import { NavigationMenuControlledPreview } from "@/components/docs/navigation-menu-previews/controlled"
import { NavigationMenuCtaGridPreview } from "@/components/docs/navigation-menu-previews/cta-grid"
import { NavigationMenuDelaysPreview } from "@/components/docs/navigation-menu-previews/delays"
import { NavigationMenuDisabledPreview } from "@/components/docs/navigation-menu-previews/disabled"
import { NavigationMenuFeaturedPreview } from "@/components/docs/navigation-menu-previews/featured"
import { NavigationMenuIconsPreview } from "@/components/docs/navigation-menu-previews/icons"
import { NavigationMenuImagePreview } from "@/components/docs/navigation-menu-previews/image"
import { NavigationMenuLinkOptionsPreview } from "@/components/docs/navigation-menu-previews/link-options"
import { NavigationMenuNestedPreview } from "@/components/docs/navigation-menu-previews/nested"
import { NavigationMenuNestedInlinePreview } from "@/components/docs/navigation-menu-previews/nested-inline"
import { NavigationMenuVerticalPreview } from "@/components/docs/navigation-menu-previews/vertical"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Navigation Menu docs examples — Preview default; Patterns and Advanced nearby.
 */
const NavigationMenuPreviews = () => {
  return (
    <Tabs defaultValue="preview">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Composition — anatomy and a catalog mega-panel.
        </p>
        <NavigationMenuAnatomyPreview />
        <NavigationMenuCatalogPreview />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Mega layouts — icons, featured promo, image media, CTA grid, badges,
          and nested inline.
        </p>
        <NavigationMenuIconsPreview />
        <NavigationMenuFeaturedPreview />
        <NavigationMenuImagePreview />
        <NavigationMenuCtaGridPreview />
        <NavigationMenuBadgesPreview />
        <NavigationMenuNestedInlinePreview />
      </TabsContent>

      <TabsContent value="advanced" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Root and link options — orientation, delays, align, active /
          closeOnClick, disabled trigger, arrow, nested portal menu, and
          controlled{" "}
          <code className="rounded bg-muted px-1 text-xs">value</code>.
        </p>
        <NavigationMenuVerticalPreview />
        <NavigationMenuDelaysPreview />
        <NavigationMenuAlignPreview />
        <NavigationMenuLinkOptionsPreview />
        <NavigationMenuDisabledPreview />
        <NavigationMenuArrowPreview />
        <NavigationMenuNestedPreview />
        <NavigationMenuControlledPreview />
      </TabsContent>
    </Tabs>
  )
}

export { NavigationMenuPreviews }
