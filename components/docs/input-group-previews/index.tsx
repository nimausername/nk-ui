"use client"

import { InputGroupBlockPreview } from "@/components/docs/input-group-previews/block"
import { InputGroupInlinePreview } from "@/components/docs/input-group-previews/inline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Input Group docs examples — addons beside the text, then a note with an action below.
 */
const InputGroupPreviews = () => {
  return (
    <Tabs defaultValue="inline">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="inline">Inline</TabsTrigger>
          <TabsTrigger value="block">Note</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="inline" className="space-y-10">
        <InputGroupInlinePreview />
      </TabsContent>

      <TabsContent value="block" className="space-y-10">
        <InputGroupBlockPreview />
      </TabsContent>
    </Tabs>
  )
}

export { InputGroupPreviews }
