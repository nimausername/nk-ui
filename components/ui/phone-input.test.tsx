import { describe, expect, it } from "vitest"

import { PhoneInputField } from "@/components/ui/phone-input"
import { render, screen } from "@/test/render"

describe("PhoneInput", () => {
  it("mounts label and phone control", async () => {
    const { user } = render(
      <PhoneInputField label="Phone" defaultCountry="US" />
    )

    expect(screen.getByText("Phone")).toBeInTheDocument()
    const control = screen.getByRole("textbox", { name: "Phone" })
    await user.type(control, "2025550123")
    expect(control).not.toHaveValue("")
  })
})
