"use client"

import { CommandAnatomyPreview } from "@/components/docs/command-previews/anatomy"
import { CommandControlledPreview } from "@/components/docs/command-previews/controlled"
import { CommandDescriptionsPreview } from "@/components/docs/command-previews/descriptions"
import { CommandDestructivePreview } from "@/components/docs/command-previews/destructive"
import { CommandDisabledPreview } from "@/components/docs/command-previews/disabled"
import { CommandEmptyPreview } from "@/components/docs/command-previews/empty"
import { CommandGroupsPreview } from "@/components/docs/command-previews/groups"
import { CommandInlinePreview } from "@/components/docs/command-previews/inline"
import { CommandInPopoverPreview } from "@/components/docs/command-previews/in-popover"
import { CommandKeywordsPreview } from "@/components/docs/command-previews/keywords"
import { CommandLoadingPreview } from "@/components/docs/command-previews/loading"
import { CommandPalettePreview } from "@/components/docs/command-previews/palette"
import { CommandScrollablePreview } from "@/components/docs/command-previews/scrollable"
import { CommandShortcutsPreview } from "@/components/docs/command-previews/shortcuts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Command docs examples — one category at a time so the page stays scannable.
 * Palette is the default; Patterns and Composition stay one click away.
 */
const CommandPreviews = () => {
  return (
    <Tabs defaultValue="palette">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="palette">Palette</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="composition">Composition</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="palette" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Everyday palettes — anatomy, ⌘K dialog, shortcuts, and grouped icons.
        </p>
        <CommandAnatomyPreview />
        <CommandPalettePreview />
        <CommandShortcutsPreview />
        <CommandGroupsPreview />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Filter and state patterns — scrollable lists, disabled rows,
          keywords, empty, loading, and controlled highlight.
        </p>
        <CommandScrollablePreview />
        <CommandDisabledPreview />
        <CommandKeywordsPreview />
        <CommandEmptyPreview />
        <CommandLoadingPreview />
        <CommandControlledPreview />
      </TabsContent>

      <TabsContent value="composition" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          How Command composes with other surfaces — Popover pickers,
          descriptions, destructive actions, and inline embeds.
        </p>
        <CommandInPopoverPreview />
        <CommandDescriptionsPreview />
        <CommandDestructivePreview />
        <CommandInlinePreview />
      </TabsContent>
    </Tabs>
  )
}

export { CommandPreviews }
