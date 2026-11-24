"use client"

import { KbdButtonPreview } from "@/components/docs/kbd-previews/button"
import { KbdCommandPreview } from "@/components/docs/kbd-previews/command"
import { KbdKeysPreview } from "@/components/docs/kbd-previews/keys"
import { KbdTooltipPreview } from "@/components/docs/kbd-previews/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Kbd docs examples — keys first, then the surfaces that host a shortcut.
 */
const KbdPreviews = () => {
  return (
    <Tabs defaultValue="keys">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="keys">Keys</TabsTrigger>
          <TabsTrigger value="surfaces">Surfaces</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="keys" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          One keycap, a chord, and a key that holds an icon.
        </p>
        <KbdKeysPreview />
      </TabsContent>

      <TabsContent value="surfaces" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          The same keycaps on a button, in a tooltip, and on a command row.
        </p>
        <KbdButtonPreview />
        <KbdTooltipPreview />
        <KbdCommandPreview />
      </TabsContent>
    </Tabs>
  )
}

export { KbdPreviews }
