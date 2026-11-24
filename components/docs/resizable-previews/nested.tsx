"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

/**
 * A sidebar beside a stack of editor and output.
 */
const ResizableNestedPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nested</h2>
      <p className="text-sm text-muted-foreground">
        Put a group inside a panel when a layout needs both directions.
      </p>
      <ComponentPreview
        code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableNested() {
  return (
    <ResizablePanelGroup className="min-h-56 rounded-lg border">
      <ResizablePanel defaultSize="30%" minSize="15%">
        <div className="p-4 text-sm">Files</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%" minSize="30%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="65%" minSize="20%">
            <div className="p-4 text-sm">Editor</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="35%" minSize="15%">
            <div className="p-4 text-sm">Output</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      >
        {(direction) => (
          <ResizablePanelGroup className="min-h-56 rounded-lg border">
            <ResizablePanel defaultSize="30%" minSize="15%">
              <div className="p-4 text-sm">
                {direction === "rtl" ? "فایل‌ها" : "Files"}
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="70%" minSize="30%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="65%" minSize="20%">
                  <div className="p-4 text-sm">
                    {direction === "rtl" ? "ویرایشگر" : "Editor"}
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="35%" minSize="15%">
                  <div className="p-4 text-sm">
                    {direction === "rtl" ? "خروجی" : "Output"}
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ResizableNestedPreview }
