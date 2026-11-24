import { describe, expect, it } from "vitest"

import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { render, screen } from "@/test/render"

describe("Kbd", () => {
  it("renders a keycap", () => {
    render(<Kbd>K</Kbd>)

    const key = screen.getByText("K")
    expect(key.tagName).toBe("KBD")
    expect(key).toHaveAttribute("data-slot", "kbd")
    expect(key).toHaveClass("bg-muted")
  })

  it("groups a chord", () => {
    render(
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    )

    const group = screen.getByText("⌘").parentElement
    expect(group).toHaveAttribute("data-slot", "kbd-group")
    expect(screen.getByText("K")).toBeInTheDocument()
  })
})
