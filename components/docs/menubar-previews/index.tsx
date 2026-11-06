"use client"

import { MenubarAnatomyPreview } from "@/components/docs/menubar-previews/anatomy"
import { MenubarCheckboxesPreview } from "@/components/docs/menubar-previews/checkboxes"
import { MenubarControlledPreview } from "@/components/docs/menubar-previews/controlled"
import { MenubarDisabledPreview } from "@/components/docs/menubar-previews/disabled"
import { MenubarIconsPreview } from "@/components/docs/menubar-previews/icons"
import { MenubarRadiosPreview } from "@/components/docs/menubar-previews/radios"
import { MenubarRegistryStudioPreview } from "@/components/docs/menubar-previews/registry-studio"
import { MenubarRootOptionsPreview } from "@/components/docs/menubar-previews/root-options"
import { MenubarSubmenusPreview } from "@/components/docs/menubar-previews/submenus"
import { MenubarVerticalPreview } from "@/components/docs/menubar-previews/vertical"
import { MenubarWorkspacePreview } from "@/components/docs/menubar-previews/workspace"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Menubar docs examples — API coverage (shadcn-aligned) plus nk product patterns.
 * Preview is the default; Selection, Nested, Patterns, and Advanced stay one click away.
 */
const MenubarPreviews = () => {
  return (
    <Tabs defaultValue="preview">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="selection">Selection</TabsTrigger>
          <TabsTrigger value="nested">Nested</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Composition — anatomy, a full workspace bar, and icon-led rows.
        </p>
        <MenubarAnatomyPreview />
        <MenubarWorkspacePreview />
        <MenubarIconsPreview />
      </TabsContent>

      <TabsContent value="selection" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Toggleable rows — checkboxes and radios (same surface as shadcn docs).
        </p>
        <MenubarCheckboxesPreview />
        <MenubarRadiosPreview />
      </TabsContent>

      <TabsContent value="nested" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Nested flyouts — Export / Insert style submenus.
        </p>
        <MenubarSubmenusPreview />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          nk product usage — registry studio chrome with links and publish
          toggles.
        </p>
        <MenubarRegistryStudioPreview />
      </TabsContent>

      <TabsContent value="advanced" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Root props — vertical orientation, disabled bar, controlled open, and
          modal / loopFocus.
        </p>
        <MenubarVerticalPreview />
        <MenubarDisabledPreview />
        <MenubarControlledPreview />
        <MenubarRootOptionsPreview />
      </TabsContent>
    </Tabs>
  )
}

export { MenubarPreviews }
