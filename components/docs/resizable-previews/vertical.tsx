"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

/**
 * Two panels stacked, with a plain divider.
 */
const ResizableVerticalPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Stacked</h2>
      <p className="text-sm text-muted-foreground">
        Set the group to vertical when one panel sits above the other.
      </p>
      <ComponentPreview
        code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableVertical() {
  return (
    <ResizablePanelGroup orientation="vertical" className="min-h-48 rounded-lg border">
      <ResizablePanel defaultSize="40%" minSize="20%">
        <div className="p-4 text-sm">Preview</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="20%">
        <div className="p-4 text-sm">Source</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      >
        {(direction) => (
          <ResizablePanelGroup
            orientation="vertical"
            className="min-h-48 rounded-lg border"
          >
            <ResizablePanel defaultSize="40%" minSize="20%">
              <div className="p-4 text-sm">
                {direction === "rtl" ? "پیش‌نمایش" : "Preview"}
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="60%" minSize="20%">
              <div className="p-4 text-sm">
                {direction === "rtl" ? "منبع" : "Source"}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ResizableVerticalPreview }
