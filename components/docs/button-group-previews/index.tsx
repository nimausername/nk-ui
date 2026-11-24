"use client"

import { ButtonGroupBasicPreview } from "@/components/docs/button-group-previews/basic"
import { ButtonGroupComposePreview } from "@/components/docs/button-group-previews/compose"
import { ButtonGroupStackPreview } from "@/components/docs/button-group-previews/stack"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Button Group docs examples — a joined row first, then stacks and compositions.
 */
const ButtonGroupPreviews = () => {
  return (
    <Tabs defaultValue="row">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="row">Row</TabsTrigger>
          <TabsTrigger value="stack">Stack</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="row" className="space-y-10">
        <ButtonGroupBasicPreview />
      </TabsContent>

      <TabsContent value="stack" className="space-y-10">
        <ButtonGroupStackPreview />
      </TabsContent>

      <TabsContent value="compose" className="space-y-10">
        <ButtonGroupComposePreview />
      </TabsContent>
    </Tabs>
  )
}

export { ButtonGroupPreviews }
