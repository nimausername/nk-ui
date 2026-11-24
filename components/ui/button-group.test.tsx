import { describe, expect, it } from "vitest"

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { render, screen } from "@/test/render"

describe("ButtonGroup", () => {
  it("renders a horizontal group by default", () => {
    render(<ButtonGroup>Copy</ButtonGroup>)

    const group = screen.getByRole("group")
    expect(group).toHaveAttribute("data-slot", "button-group")
    expect(group).toHaveAttribute("data-orientation", "horizontal")
    expect(group).toHaveClass("[&>*:not(:last-child)]:rounded-e-none")
  })

  it("stacks children when orientation is vertical", () => {
    render(<ButtonGroup orientation="vertical">Copy</ButtonGroup>)

    const group = screen.getByRole("group")
    expect(group).toHaveAttribute("data-orientation", "vertical")
    expect(group).toHaveClass("flex-col")
  })

  it("renders a muted label", () => {
    render(<ButtonGroupText>https://</ButtonGroupText>)

    expect(screen.getByText("https://")).toHaveAttribute("data-slot", "button-group-text")
    expect(screen.getByText("https://")).toHaveClass("bg-muted")
  })

  it("renders the label as the child element", () => {
    render(
      <ButtonGroupText asChild>
        <span>Prefix</span>
      </ButtonGroupText>
    )

    const label = screen.getByText("Prefix")
    expect(label.tagName).toBe("SPAN")
    expect(label).toHaveAttribute("data-slot", "button-group-text")
  })

  it("renders a vertical separator by default", () => {
    render(<ButtonGroupSeparator data-testid="sep" />)

    const separator = screen.getByTestId("sep")
    expect(separator).toHaveAttribute("data-slot", "button-group-separator")
    expect(separator).toHaveAttribute("data-orientation", "vertical")
  })
})
