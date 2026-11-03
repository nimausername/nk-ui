import { describe, expect, it } from "vitest"

import { Input } from "@/components/ui/input"
import { render, screen } from "@/test/render"

describe("Input", () => {
  it("accepts typed text", async () => {
    const { user } = render(<Input aria-label="Email" />)

    const field = screen.getByRole("textbox", { name: "Email" })
    await user.type(field, "hi@nk.dev")
    expect(field).toHaveValue("hi@nk.dev")
  })
})
