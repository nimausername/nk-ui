"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  ShaderBackground,
  SHADER_EFFECTS,
  type ShaderEffect,
} from "@/components/ui/shader-background"
import { cn } from "@/lib/utils"

const EFFECT_LABELS: Record<ShaderEffect, string> = {
  mist: "Mist",
  haze: "Haze",
  current: "Current",
  signal: "Signal",
  ember: "Ember",
  night: "Night",
  ink: "Ink",
  lattice: "Lattice",
}

const mistCode = `import { ShaderBackground } from "@/components/ui/shader-background"

export function ShaderBackgroundMist() {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-2xl">
      <ShaderBackground effect="mist" className="absolute inset-0" />
    </div>
  )
}`

const signalCode = `import { ShaderBackground } from "@/components/ui/shader-background"

export function ShaderBackgroundSignal() {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-2xl">
      <ShaderBackground effect="signal" scrim={0.25} className="absolute inset-0" />
    </div>
  )
}`

/**
 * Shader Background docs — nk atmosphere gallery plus Mist / Signal examples.
 */
const ShaderBackgroundPreviews = () => {
  const [active, setActive] = useState<ShaderEffect>("mist")

  const handleSelect = (effect: ShaderEffect) => {
    setActive(effect)
  }

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">How it works</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            Eight product atmospheres — not a clone of every Paper/beUI demo
          </li>
          <li>
            Parent needs a real size — the surface fills{" "}
            <code className="rounded bg-muted px-1 text-xs">h-full w-full</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">effect</code> defaults
            to <code className="rounded bg-muted px-1 text-xs">mist</code>; override
            colors and speed when needed
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">scrim</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">paused</code>, plus
            auto-pause off-screen and under reduced motion
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Atmospheres</h2>
        <p className="text-sm text-muted-foreground">
          Pick a chip to preview an atmosphere.
        </p>
        <div className="space-y-4">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-border">
            <ShaderBackground
              key={active}
              effect={active}
              className="absolute inset-0"
            />
          </div>
          <div
            className="flex flex-wrap justify-center gap-2"
            role="listbox"
            aria-label="Shader atmospheres"
          >
            {SHADER_EFFECTS.map((effect) => {
              const isActive = effect === active
              return (
                <Button
                  key={effect}
                  type="button"
                  size="sm"
                  variant={isActive ? "default" : "outline"}
                  role="option"
                  aria-selected={isActive}
                  className={cn(
                    "rounded-full px-3",
                    isActive && "pointer-events-none"
                  )}
                  onClick={() => handleSelect(effect)}
                >
                  {EFFECT_LABELS[effect]}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Mist</h2>
        <ComponentPreview
          code={mistCode}
          title="Mist"
          showDirectionToggle={false}
          className="[&_[data-nk-preview]]:p-0"
        >
          <div className="relative h-80 w-full min-w-full bg-black">
            <ShaderBackground effect="mist" className="absolute inset-0" />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Signal · with scrim</h2>
        <ComponentPreview
          code={signalCode}
          title="Signal"
          showDirectionToggle={false}
          className="[&_[data-nk-preview]]:p-0"
        >
          <div className="relative h-80 w-full min-w-full bg-black">
            <ShaderBackground
              effect="signal"
              scrim={0.25}
              className="absolute inset-0"
            />
          </div>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ShaderBackgroundPreviews }
