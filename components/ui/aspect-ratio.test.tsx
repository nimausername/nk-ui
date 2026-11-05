import { describe, expect, it } from "vitest"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { render, screen } from "@/test/render"

describe("AspectRatio", () => {
  it("renders a relative box with the default square ratio", () => {
    render(<AspectRatio data-testid="frame" />)

    const frame = screen.getByTestId("frame")
    expect(frame).toBeInTheDocument()
    expect(frame).toHaveAttribute("data-slot", "aspect-ratio")
    expect(frame).toHaveStyle({ aspectRatio: "1" })
  })

  it("applies a custom ratio", () => {
    render(<AspectRatio data-testid="frame" ratio={16 / 9} />)

    expect(screen.getByTestId("frame")).toHaveStyle({
      aspectRatio: String(16 / 9),
    })
  })

  it("merges className and keeps children", () => {
    render(
      <AspectRatio data-testid="frame" className="max-w-sm overflow-hidden">
        <span>Media</span>
      </AspectRatio>
    )

    const frame = screen.getByTestId("frame")
    expect(frame).toHaveClass("max-w-sm", "overflow-hidden")
    expect(screen.getByText("Media")).toBeInTheDocument()
  })
})
