/**
 * Slider component docs — markdown for Copy Page / AI.
 */

export const sliderDocsTitle = "Slider"

export const sliderDocsDescription =
  "Draggable value control on Base UI — label, track, indicator, and thumb."

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
- Add a second \`SliderThumb\` for a range (pass an array value).
- Live previews are on the docs page.
`
