import { describe, expect, it } from "vitest"

import { Separator } from "@/components/ui/separator"
import { render, screen } from "@/test/render"

describe("Separator", () => {
  it("renders a horizontal separator by default", () => {
    render(<Separator data-testid="sep" />)

    const sep = screen.getByTestId("sep")
    expect(sep).toBeInTheDocument()
    expect(sep).toHaveAttribute("data-orientation", "horizontal")
  })

  it("supports vertical orientation", () => {
    render(<Separator orientation="vertical" data-testid="sep" />)

    expect(screen.getByTestId("sep")).toHaveAttribute("data-orientation", "vertical")
  })
})
