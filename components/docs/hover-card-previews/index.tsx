"use client"

import { HoverCardBasicPreview } from "@/components/docs/hover-card-previews/basic"
import { HoverCardControlledPreview } from "@/components/docs/hover-card-previews/controlled"
import { HoverCardIconPreview } from "@/components/docs/hover-card-previews/icon"
import { HoverCardInDialogPreview } from "@/components/docs/hover-card-previews/in-dialog"
import { HoverCardMultiTriggerPreview } from "@/components/docs/hover-card-previews/multi-trigger"
import { HoverCardPositionsPreview } from "@/components/docs/hover-card-previews/positions"
import { HoverCardProfilePreview } from "@/components/docs/hover-card-previews/profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Hover Card docs examples — one category at a time so the page stays scannable.
 * Preview is the default; Profile, Placement, and Advanced stay one click away.
 */
const HoverCardPreviews = () => {
  return (
    <Tabs defaultValue="preview">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Destination previews — link cards and compact icon help.
        </p>
        <HoverCardBasicPreview />
        <HoverCardIconPreview />
      </TabsContent>

      <TabsContent value="profile" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          People surfaces — avatar, bio, and meta.
        </p>
        <HoverCardProfilePreview />
      </TabsContent>

      <TabsContent value="placement" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Positioning — top, right, bottom, and left.
        </p>
        <HoverCardPositionsPreview />
      </TabsContent>

      <TabsContent value="advanced" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Controlled open, multi-trigger payloads, and nesting in Dialog.
        </p>
        <HoverCardControlledPreview />
        <HoverCardMultiTriggerPreview />
        <HoverCardInDialogPreview />
      </TabsContent>
    </Tabs>
  )
}

export { HoverCardPreviews }
