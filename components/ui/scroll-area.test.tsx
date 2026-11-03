import { describe, expect, it } from "vitest"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"
import { render, screen } from "@/test/render"

describe("ScrollArea", () => {
  it("mounts children", () => {
    render(
      <ScrollArea className="h-24">
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <p>Scrollable copy</p>
          </ScrollAreaContent>
        </ScrollAreaViewport>
      </ScrollArea>
    )

    expect(screen.getByText("Scrollable copy")).toBeInTheDocument()
  })
})
