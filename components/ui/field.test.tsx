import { describe, expect, it } from "vitest"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { render, screen } from "@/test/render"

describe("Field", () => {
  it("associates label with the control", () => {
    render(
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input />
        <FieldDescription>Shown on your profile</FieldDescription>
      </Field>
    )

    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument()
    expect(screen.getByText("Shown on your profile")).toBeInTheDocument()
  })
})
