import { describe, expect, it } from "vitest"

import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import { render, screen } from "@/test/render"

describe("Checkbox", () => {
  it("toggles checked state", async () => {
    const { user } = render(
      <label>
        <Checkbox aria-label="Accept">
          <CheckboxIndicator />
        </Checkbox>
        Accept
      </label>
    )

    const box = screen.getByRole("checkbox", { name: "Accept" })
    expect(box).not.toBeChecked()
    await user.click(box)
    expect(box).toBeChecked()
  })
})
