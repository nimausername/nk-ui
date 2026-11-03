import { describe, expect, it } from "vitest"

import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider"
import { render, screen } from "@/test/render"

describe("Slider", () => {
  it("exposes a slider with the current value", () => {
    render(
      <Slider defaultValue={30}>
        <SliderLabel>Volume</SliderLabel>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>
    )

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30")
    expect(screen.getByText("Volume")).toBeInTheDocument()
  })
})
