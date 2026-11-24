import { describe, expect, it } from "vitest"

import { Spinner } from "@/components/ui/spinner"
import { render, screen } from "@/test/render"

describe("Spinner", () => {
  it("announces a loading status", () => {
    render(<Spinner />)

    const spinner = screen.getByRole("status", { name: "Loading" })
    expect(spinner).toHaveAttribute("data-slot", "spinner")
    expect(spinner).toHaveClass("animate-spin", "size-4")
  })

  it("accepts a custom label and size", () => {
    render(<Spinner aria-label="Saving" className="size-6 text-muted-foreground" />)

    const spinner = screen.getByRole("status", { name: "Saving" })
    expect(spinner).toHaveClass("size-6", "text-muted-foreground")
  })

  it("swaps the glyph", () => {
    render(<Spinner icon="pinwheel" />)

    expect(screen.getByRole("status", { name: "Loading" })).toHaveAttribute(
      "data-icon",
      "pinwheel"
    )
  })
})
