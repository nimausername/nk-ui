"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { GlyphFlux } from "@/components/ui/glyph-flux"

const ridgeCode = `import { GlyphFlux } from "@/components/ui/glyph-flux"

export function GlyphFluxRidge() {
  return (
    <div className="relative h-[560px] w-full bg-black">
      <GlyphFlux
        shape="ridge"
        interactive
        clickEffect="wave"
        intro
      />
    </div>
  )
}`

const conduitCode = `import { GlyphFlux } from "@/components/ui/glyph-flux"

export function GlyphFluxConduit() {
  return (
    <div className="relative h-[420px] w-full bg-black">
      <GlyphFlux
        shape="conduit"
        colors={["#020617", "#e2e8f0", "#67e8f9", "#0ea5e9"]}
        glow={0.28}
        flow={0.7}
        softness={0.65}
        interactive
        clickEffect="burst"
      />
    </div>
  )
}`

const coronaCode = `import { GlyphFlux } from "@/components/ui/glyph-flux"

export function GlyphFluxCorona() {
  return (
    <div className="relative h-[480px] w-full bg-[#eef2f6]">
      <GlyphFlux
        shape="corona"
        lightMode
        colors={["#94a3b8", "#64748b", "#0ea5e9", "#0369a1"]}
        characters=" ·.+*xX0O#@"
        cellSize={14}
        softness={0.9}
        glow={0.4}
        flow={0.55}
        scale={1}
        speed={0.8}
        gradientOpacity={0.38}
        glyphOpacity={0.72}
        grain={0.04}
        flicker={0.1}
        interactive
        clickEffect="wave"
        intro
      />
    </div>
  )
}`

/**
 * GlyphFlux docs examples — shapes, interaction, and light mode.
 */
const GlyphFluxPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">How it works</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            Parent needs a real height — the canvas fills{" "}
            <code className="rounded bg-muted px-1 text-xs">h-full w-full</code>
          </li>
          <li>
            Move the pointer to scramble glyphs; click for{" "}
            <code className="rounded bg-muted px-1 text-xs">wave</code> or{" "}
            <code className="rounded bg-muted px-1 text-xs">burst</code>
          </li>
          <li>
            Shapes:{" "}
            <code className="rounded bg-muted px-1 text-xs">ridge</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">conduit</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">bloom</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">corona</code>
          </li>
          <li>
            WebGL cost: one instance per view; on mobile prefer{" "}
            <code className="rounded bg-muted px-1 text-xs">glow={"{0}"}</code> and a
            larger <code className="rounded bg-muted px-1 text-xs">cellSize</code>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Ridge (default)</h2>
        <ComponentPreview
          code={ridgeCode}
          title="Ridge"
          showDirectionToggle={false}
          className="[&_[data-nk-preview]]:p-0"
        >
          <div className="relative h-[560px] w-full min-w-full bg-black">
            <GlyphFlux shape="ridge" interactive clickEffect="wave" intro />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Conduit</h2>
        <ComponentPreview
          code={conduitCode}
          title="Conduit"
          showDirectionToggle={false}
          className="[&_[data-nk-preview]]:p-0"
        >
          <div className="relative h-[420px] w-full min-w-full bg-black">
            <GlyphFlux
              shape="conduit"
              colors={["#020617", "#e2e8f0", "#67e8f9", "#0ea5e9"]}
              glow={0.28}
              flow={0.7}
              softness={0.65}
              interactive
              clickEffect="burst"
            />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Corona · light mode</h2>
        <ComponentPreview
          code={coronaCode}
          title="Corona light"
          showDirectionToggle={false}
          className="[&_[data-nk-preview]]:p-0"
        >
          <div className="relative h-[480px] w-full min-w-full bg-[#eef2f6]">
            <GlyphFlux
              shape="corona"
              lightMode
              colors={["#94a3b8", "#64748b", "#0ea5e9", "#0369a1"]}
              characters=" ·.+*xX0O#@"
              cellSize={14}
              softness={0.9}
              glow={0.4}
              flow={0.55}
              scale={1}
              speed={0.8}
              gradientOpacity={0.38}
              glyphOpacity={0.72}
              grain={0.04}
              flicker={0.1}
              interactive
              clickEffect="wave"
              intro
            />
          </div>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { GlyphFluxPreviews }
