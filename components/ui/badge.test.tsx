import { describe, expect, it } from "vitest"

import { Badge } from "@/components/ui/badge"
import { render, screen } from "@/test/render"

describe("Badge", () => {
  it("renders label text", () => {
    render(<Badge>New</Badge>)

    expect(screen.getByText("New")).toHaveAttribute("data-slot", "badge")
  })

  it("applies outline variant classes", () => {
    render(<Badge variant="outline">Draft</Badge>)

    expect(screen.getByText("Draft")).toHaveClass("border-border")
  })

  it("applies size classes", () => {
    render(<Badge size="lg">Large</Badge>)

    expect(screen.getByText("Large")).toHaveClass("text-sm")
  })
})
