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

  it("supports a range with two thumbs", () => {
    render(
      <Slider defaultValue={[20, 80]}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
          <SliderThumb />
        </SliderControl>
      </Slider>
    )

    const thumbs = screen.getAllByRole("slider")
    expect(thumbs).toHaveLength(2)
    expect(thumbs[0]).toHaveAttribute("aria-valuenow", "20")
    expect(thumbs[1]).toHaveAttribute("aria-valuenow", "80")
  })

  it("can be disabled", () => {
    render(
      <Slider disabled defaultValue={10}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>
    )

    expect(screen.getByRole("slider")).toBeDisabled()
  })
})
