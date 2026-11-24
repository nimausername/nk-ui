import { describe, expect, it } from "vitest"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { render, screen } from "@/test/render"

describe("InputGroup", () => {
  it("renders a group around the text control", () => {
    render(
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Website" />
      </InputGroup>
    )

    const input = screen.getByRole("textbox", { name: "Website" })
    expect(input.closest("[data-slot=input-group]")).toHaveAttribute("data-slot", "input-group")
    expect(input).toHaveAttribute("data-slot", "input-group-control")
    expect(input).toHaveClass("border-0")
    expect(screen.getByText("https://")).toHaveAttribute("data-slot", "input-group-text")
  })

  it("places an addon at the end", () => {
    render(
      <InputGroup>
        <InputGroupInput aria-label="Search" />
        <InputGroupAddon align="inline-end">End</InputGroupAddon>
      </InputGroup>
    )

    expect(screen.getByText("End")).toHaveAttribute("data-align", "inline-end")
  })

  it("focuses the field when the addon is clicked", () => {
    render(
      <InputGroup>
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput aria-label="Website" />
      </InputGroup>
    )

    screen.getByText("https://").click()
    expect(screen.getByRole("textbox", { name: "Website" })).toHaveFocus()
  })

  it("renders a small button inside the group", () => {
    render(<InputGroupButton>Send</InputGroupButton>)

    const button = screen.getByRole("button", { name: "Send" })
    expect(button).toHaveAttribute("data-slot", "input-group-button")
    expect(button).toHaveAttribute("data-size", "xs")
    expect(button).toHaveClass("h-6")
  })

  it("renders a textarea control", () => {
    render(
      <InputGroup>
        <InputGroupTextarea aria-label="Note" />
      </InputGroup>
    )

    expect(screen.getByRole("textbox", { name: "Note" }).tagName).toBe("TEXTAREA")
  })
})
