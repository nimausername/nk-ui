import { describe, expect, it } from "vitest"

import { Field, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlots } from "@/components/ui/input-otp"
import { render, screen } from "@/test/render"

describe("InputOTP", () => {
  it("mounts the configured slots", () => {
    render(
      <Field>
        <FieldLabel>One-time code</FieldLabel>
        <InputOTP length={4}>
          <InputOTPGroup>
            <InputOTPSlots length={4} />
          </InputOTPGroup>
        </InputOTP>
      </Field>
    )

    expect(screen.getByText("One-time code")).toBeInTheDocument()
    expect(screen.getByLabelText("Character 4 of 4")).toBeInTheDocument()
    expect(document.querySelectorAll('[data-slot="input-otp-slot"]')).toHaveLength(
      4
    )
  })
})
