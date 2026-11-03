import { describe, expect, it } from "vitest"

import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { render, screen } from "@/test/render"

describe("Textarea", () => {
  it("accepts typed text inside Field", async () => {
    const { user } = render(
      <Field>
        <FieldLabel>Notes</FieldLabel>
        <Textarea />
      </Field>
    )

    const field = screen.getByRole("textbox", { name: "Notes" })
    await user.type(field, "hello")
    expect(field).toHaveValue("hello")
  })
})
