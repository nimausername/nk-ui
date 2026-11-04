"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
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
 * Slider docs examples — basic, range, step, disabled, vertical, Field.
 */
const SliderPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Slider</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">value</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">defaultValue</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">min</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">max</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">step</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">disabled</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">orientation</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">SliderControl</strong> →{" "}
            <strong className="font-medium text-foreground">Track</strong> /{" "}
            <strong className="font-medium text-foreground">Indicator</strong> /{" "}
            <strong className="font-medium text-foreground">Thumb</strong>
          </li>
          <li>Range: pass an array value and two thumbs</li>
        </ul>
      </section>

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

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Step &amp; bounds</h2>
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

export function SliderStep() {
  return (
    <Slider defaultValue={50} min={0} max={100} step={10} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <SliderLabel>Quality</SliderLabel>
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
            <Slider defaultValue={50} min={0} max={100} step={10} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <SliderLabel>
                  {direction === "rtl" ? "کیفیت" : "Quality"}
                </SliderLabel>
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
        <h2 className="text-lg font-semibold">Disabled</h2>
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

export function SliderDisabled() {
  return (
    <Slider disabled defaultValue={30} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <SliderLabel>Locked</SliderLabel>
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
            <Slider disabled defaultValue={30} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <SliderLabel>
                  {direction === "rtl" ? "قفل‌شده" : "Locked"}
                </SliderLabel>
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
        <h2 className="text-lg font-semibold">Vertical</h2>
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

export function SliderVertical() {
  return (
    <Slider
      defaultValue={60}
      orientation="vertical"
      className="h-40 w-auto items-center"
    >
      <SliderLabel>Gain</SliderLabel>
      <SliderValue />
      <SliderControl className="h-full w-auto flex-col">
        <SliderTrack className="h-full w-1.5">
          <SliderIndicator className="w-full" />
        </SliderTrack>
        <SliderThumb />
      </SliderControl>
    </Slider>
  )
}`}
        >
          {(direction) => (
            <Slider
              defaultValue={60}
              orientation="vertical"
              className="h-40 w-auto items-center"
            >
              <SliderLabel>{direction === "rtl" ? "گین" : "Gain"}</SliderLabel>
              <SliderValue />
              <SliderControl className="h-full w-auto flex-col">
                <SliderTrack className="h-full w-1.5">
                  <SliderIndicator className="w-full" />
                </SliderTrack>
                <SliderThumb />
              </SliderControl>
            </Slider>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/components/ui/slider"

export function SliderWithField() {
  const [value, setValue] = useState(70)

  return (
    <Field name="brightness" className="max-w-sm gap-3">
      <div className="flex items-center justify-between gap-2">
        <FieldLabel>Brightness</FieldLabel>
        <SliderValue />
      </div>
      <Slider value={value} onValueChange={(next) => setValue(Array.isArray(next) ? next[0]! : next)}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>
      <FieldDescription>Adjust display brightness from 0 to 100.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => <SliderFieldPreview direction={direction} />}
        </ComponentPreview>
      </section>
    </div>
  )
}

type PreviewDirection = "ltr" | "rtl"

const SliderFieldPreview = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [value, setValue] = useState(70)

  return (
    <Field name="brightness" className="max-w-sm gap-3">
      <div className="flex items-center justify-between gap-2">
        <FieldLabel>
          {direction === "rtl" ? "روشنایی" : "Brightness"}
        </FieldLabel>
        <span className="text-sm text-muted-foreground tabular-nums">{value}</span>
      </div>
      <Slider
        value={value}
        onValueChange={(next) =>
          setValue(Array.isArray(next) ? (next[0] ?? 0) : next)
        }
      >
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>
      <FieldDescription>
        {direction === "rtl"
          ? "روشنایی نمایش را از ۰ تا ۱۰۰ تنظیم کنید."
          : "Adjust display brightness from 0 to 100."}
      </FieldDescription>
    </Field>
  )
}

export { SliderPreviews }
