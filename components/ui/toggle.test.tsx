import { describe, expect, it } from "vitest"

import { Toggle } from "@/components/ui/toggle"
import { render, screen } from "@/test/render"

describe("Toggle", () => {
  it("toggles pressed state", async () => {
    const { user } = render(<Toggle aria-label="Bold">B</Toggle>)

    const button = screen.getByRole("button", { name: "Bold" })
    expect(button).toHaveAttribute("aria-pressed", "false")
    await user.click(button)
    expect(button).toHaveAttribute("aria-pressed", "true")
  })

  it("can start pressed and be disabled", () => {
    render(
      <Toggle aria-label="Italic" defaultPressed disabled>
        I
      </Toggle>
    )

    const button = screen.getByRole("button", { name: "Italic" })
    expect(button).toHaveAttribute("aria-pressed", "true")
    expect(button).toBeDisabled()
  })
})
