"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/components/ui/slider"

/**
 * Slider docs examples — single and range.
 */
const SliderPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/components/ui/slider"

export function SliderBasic() {
  return (
    <Slider defaultValue={40} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <SliderLabel>Volume</SliderLabel>
        <SliderValue />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
        </SliderTrack>
        <SliderThumb />
      </SliderControl>
    </Slider>
  )
}`}
        >
          {(direction) => (
            <Slider defaultValue={40} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <SliderLabel>{direction === "rtl" ? "صدا" : "Volume"}</SliderLabel>
                <SliderValue />
              </div>
              <SliderControl>
                <SliderTrack>
                  <SliderIndicator />
                </SliderTrack>
                <SliderThumb />
              </SliderControl>
            </Slider>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Range</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/components/ui/slider"

export function SliderRange() {
  return (
    <Slider defaultValue={[25, 75]} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <SliderLabel>Price</SliderLabel>
        <SliderValue />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
        </SliderTrack>
        <SliderThumb />
        <SliderThumb />
      </SliderControl>
    </Slider>
  )
}`}
        >
          {(direction) => (
            <Slider defaultValue={[25, 75]} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <SliderLabel>{direction === "rtl" ? "قیمت" : "Price"}</SliderLabel>
                <SliderValue />
              </div>
              <SliderControl>
                <SliderTrack>
                  <SliderIndicator />
                </SliderTrack>
                <SliderThumb />
                <SliderThumb />
              </SliderControl>
            </Slider>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SliderPreviews }
