import { describe, expect, it } from "vitest"

import { GlyphFlux } from "@/components/ui/glyph-flux"
import { render, screen } from "@/test/render"

describe("GlyphFlux", () => {
  it("mounts a canvas surface", () => {
    const { container } = render(
      <GlyphFlux
        aria-label="Glyph field"
        style={{ width: 120, height: 80 }}
        interactive={false}
        intro={false}
      />
    )

    expect(screen.getByLabelText("Glyph field")).toBeInTheDocument()
    expect(container.querySelector("canvas")).toBeInTheDocument()
  })
})
