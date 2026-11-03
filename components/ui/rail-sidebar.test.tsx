import { describe, expect, it } from "vitest"

import { RailSidebar } from "@/components/ui/rail-sidebar"
import { render, screen } from "@/test/render"

describe("RailSidebar", () => {
  it("renders labeled nav items", () => {
    render(
      <RailSidebar
        label="Guides"
        items={["Installation", "Theming"]}
        defaultValue={0}
      />
    )

    expect(screen.getByRole("navigation", { name: "Guides" })).toBeInTheDocument()
    expect(screen.getByText("Installation")).toBeInTheDocument()
    expect(screen.getByText("Theming")).toBeInTheDocument()
  })
})
