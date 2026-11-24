"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

/**
 * Two panels in a row with a grip on the divider.
 */
const ResizableHorizontalPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Side by side</h2>
      <p className="text-sm text-muted-foreground">
        Drag the grip to give one panel more room. The first panel stays at the start.
      </p>
      <ComponentPreview
        code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableHorizontal() {
  return (
    <ResizablePanelGroup className="min-h-40 rounded-lg border">
      <ResizablePanel defaultSize="50%" minSize="20%">
        <div className="p-4 text-sm">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="20%">
        <div className="p-4 text-sm">Content</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      >
        {(direction) => (
          <ResizablePanelGroup className="min-h-40 rounded-lg border">
            <ResizablePanel defaultSize="50%" minSize="20%">
              <div className="p-4 text-sm">
                {direction === "rtl" ? "نوار کناری" : "Sidebar"}
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="50%" minSize="20%">
              <div className="p-4 text-sm">
                {direction === "rtl" ? "محتوا" : "Content"}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ResizableHorizontalPreview }
