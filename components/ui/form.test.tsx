import type { FormEvent } from "react"
import { describe, expect, it, vi } from "vitest"

import { Field, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { render, screen } from "@/test/render"

describe("Form", () => {
  it("fires submit", async () => {
    const handleSubmit = vi.fn((event: FormEvent) => {
      event.preventDefault()
    })

    const { user } = render(
      <Form onSubmit={handleSubmit}>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <Input />
        </Field>
        <button type="submit">Send</button>
      </Form>
    )

    await user.click(screen.getByRole("button", { name: "Send" }))
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
