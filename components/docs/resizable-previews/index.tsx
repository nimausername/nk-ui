"use client"

import { ResizableHorizontalPreview } from "@/components/docs/resizable-previews/horizontal"
import { ResizableNestedPreview } from "@/components/docs/resizable-previews/nested"
import { ResizableVerticalPreview } from "@/components/docs/resizable-previews/vertical"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Resizable docs examples — a row, a stack, then a nested layout.
 */
const ResizablePreviews = () => {
  return (
    <Tabs defaultValue="horizontal">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="horizontal">Side by side</TabsTrigger>
          <TabsTrigger value="vertical">Stacked</TabsTrigger>
          <TabsTrigger value="nested">Nested</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="horizontal" className="space-y-10">
        <ResizableHorizontalPreview />
      </TabsContent>

      <TabsContent value="vertical" className="space-y-10">
        <ResizableVerticalPreview />
      </TabsContent>

      <TabsContent value="nested" className="space-y-10">
        <ResizableNestedPreview />
      </TabsContent>
    </Tabs>
  )
}

export { ResizablePreviews }
