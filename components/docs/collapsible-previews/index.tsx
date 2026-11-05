"use client"

import { CollapsibleBehaviorPreviews } from "@/components/docs/collapsible-previews/behavior"
import { CollapsibleFileTreePreview } from "@/components/docs/collapsible-previews/file-tree"
import { CollapsibleFiltersPreview } from "@/components/docs/collapsible-previews/filters"
import { CollapsibleInCardPreview } from "@/components/docs/collapsible-previews/in-card"
import { CollapsibleNavGroupPreview } from "@/components/docs/collapsible-previews/nav-group"
import { CollapsibleNestedListPreview } from "@/components/docs/collapsible-previews/nested-list"
import { CollapsibleProfilePreview } from "@/components/docs/collapsible-previews/profile"
import { CollapsibleShowMorePreview } from "@/components/docs/collapsible-previews/show-more"
import { CollapsibleWithBadgePreview } from "@/components/docs/collapsible-previews/with-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Collapsible docs examples — one category at a time so the page stays scannable.
 * Behavior is the default; Patterns and Navigation stay one click away.
 */
const CollapsiblePreviews = () => {
  return (
    <Tabs defaultValue="behavior">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="behavior" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Anatomy and the API surface — basic, open, controlled, disabled, and
          custom trigger.
        </p>
        <CollapsibleBehaviorPreviews />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Product compositions — show more, filters, card, badge, and profile.
        </p>
        <CollapsibleShowMorePreview />
        <CollapsibleFiltersPreview />
        <CollapsibleInCardPreview />
        <CollapsibleWithBadgePreview />
        <CollapsibleProfilePreview />
      </TabsContent>

      <TabsContent value="navigation" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Nested surfaces — nav groups, lists with row actions, and file trees.
        </p>
        <CollapsibleNavGroupPreview />
        <CollapsibleNestedListPreview />
        <CollapsibleFileTreePreview />
      </TabsContent>
    </Tabs>
  )
}

export { CollapsiblePreviews }
