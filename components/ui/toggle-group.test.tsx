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
})
