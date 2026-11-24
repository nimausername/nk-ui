import { describe, expect, it } from "vitest"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { render, screen } from "@/test/render"

describe("Resizable", () => {
  it("renders a horizontal group with a separator", () => {
    render(
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize="50%">One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="50%">Two</ResizablePanel>
      </ResizablePanelGroup>
    )

    const group = document.querySelector("[data-slot=resizable-panel-group]")
    expect(group).toHaveAttribute("data-orientation", "horizontal")
    expect(screen.getByRole("separator")).toHaveAttribute("data-slot", "resizable-handle")
    expect(screen.getByText("One")).toBeInTheDocument()
    expect(screen.getByText("Two")).toBeInTheDocument()
  })

  it("stacks panels when orientation is vertical", () => {
    render(
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel>Top</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Bottom</ResizablePanel>
      </ResizablePanelGroup>
    )

    expect(document.querySelector("[data-slot=resizable-panel-group]")).toHaveAttribute(
      "data-orientation",
      "vertical"
    )
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal")
  })

  it("shows a grip when withHandle is set", () => {
    render(
      <ResizablePanelGroup>
        <ResizablePanel>One</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    )

    expect(document.querySelector("[data-slot=resizable-handle] svg")).toBeInTheDocument()
  })
})
