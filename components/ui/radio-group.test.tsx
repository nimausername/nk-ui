import { describe, expect, it } from "vitest"

import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"
import { render, screen } from "@/test/render"

describe("RadioGroup", () => {
  it("selects an option", async () => {
    const { user } = render(
      <RadioGroup defaultValue="a" aria-label="Plan">
        <label>
          <Radio value="a">
            <RadioIndicator />
          </Radio>
          Starter
        </label>
        <label>
          <Radio value="b">
            <RadioIndicator />
          </Radio>
          Pro
        </label>
      </RadioGroup>
    )

    const pro = screen.getByRole("radio", { name: "Pro" })
    await user.click(pro)
    expect(pro).toBeChecked()
  })
})
