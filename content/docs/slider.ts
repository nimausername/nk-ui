/**
 * Slider component docs — markdown for Copy Page / AI.
 */

export const sliderDocsTitle = "Slider"

export const sliderDocsDescription =
  "Draggable value control on Base UI — single, range, step, disabled, vertical, and Field pairing."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const sliderDocsUpdatedAt = "2026-11-04"

export const sliderDocsMarkdown = `# Slider

${sliderDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/slider
\`\`\`

## Usage

\`\`\`tsx
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/components/ui/slider"

export function Example() {
  return (
    <Slider defaultValue={40}>
      <div className="flex justify-between gap-2">
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
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Parts: \`Slider\` / \`SliderLabel\` / \`SliderValue\` / \`SliderControl\` / \`SliderTrack\` / \`SliderIndicator\` / \`SliderThumb\`.
- Range: pass an array \`defaultValue\` / \`value\` and two thumbs.
- \`step\`, \`min\`, \`max\`, \`disabled\`, and \`orientation="vertical"\` are supported.
- Live previews (Field, RTL) are on the docs page.
`
