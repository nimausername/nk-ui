import { describe, expect, it } from "vitest"

import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"
import { render, screen } from "@/test/render"

describe("NumberField", () => {
  it("increments the value", async () => {
    const { user } = render(
      <NumberField defaultValue={1} aria-label="Quantity">
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    )

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("1")

    await user.click(screen.getByRole("button", { name: /increase/i }))
    expect(input).toHaveValue("2")
  })
})
