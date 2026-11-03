import { describe, expect, it } from "vitest"

import { PasswordInput } from "@/components/ui/password-input"
import { render, screen } from "@/test/render"

describe("PasswordInput", () => {
  it("toggles visibility", async () => {
    const { user } = render(<PasswordInput aria-label="Password" />)

    const field = screen.getByLabelText("Password")
    expect(field).toHaveAttribute("type", "password")

    await user.click(screen.getByRole("button", { name: "Show password" }))
    expect(field).toHaveAttribute("type", "text")
  })
})
