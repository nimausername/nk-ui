import { describe, expect, it } from "vitest"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { render, screen } from "@/test/render"

describe("ToggleGroup", () => {
  it("selects a single item by default", async () => {
    const { user } = render(
      <ToggleGroup aria-label="Align" defaultValue={[]}>
        <ToggleGroupItem value="left" aria-label="Left">
          L
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right">
          R
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const left = screen.getByRole("button", { name: "Left" })
    const right = screen.getByRole("button", { name: "Right" })

    await user.click(left)
    expect(left).toHaveAttribute("aria-pressed", "true")
    await user.click(right)
    expect(right).toHaveAttribute("aria-pressed", "true")
    expect(left).toHaveAttribute("aria-pressed", "false")
  })

  it("allows multiple pressed items when multiple is set", async () => {
    const { user } = render(
      <ToggleGroup multiple aria-label="Style" defaultValue={[]}>
        <ToggleGroupItem value="bold" aria-label="Bold">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          I
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const bold = screen.getByRole("button", { name: "Bold" })
    const italic = screen.getByRole("button", { name: "Italic" })

    await user.click(bold)
    await user.click(italic)
    expect(bold).toHaveAttribute("aria-pressed", "true")
    expect(italic).toHaveAttribute("aria-pressed", "true")
  })
})
