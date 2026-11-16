/**
 * Animated Counter component docs — markdown for Copy Page / AI.
 */

export const animatedCounterDocsTitle = "Animated Counter"

export const animatedCounterDocsDescription =
  "Digit-wheel number display with soft top/bottom mask fades — for live values, stats, and KPIs. Display-only; pair with Number Field when the value must be editable."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const animatedCounterDocsUpdatedAt = "2026-11-16"

export const animatedCounterDocsMarkdown = `# Animated Counter

${animatedCounterDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/animated-counter
\`\`\`

## Usage

\`\`\`tsx
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function Example() {
  return (
    <AnimatedCounter
      value={1280}
      separator=","
      className="text-3xl font-semibold tabular-nums"
    />
  )
}
\`\`\`

## Props

- \`value\` — number to display (required)
- \`decimals\` — fraction digits (default \`0\`)
- \`padStart\` — minimum integer places (default \`1\`)
- \`duration\` — roll duration in seconds (default \`0.6\`)
- \`separator\` / \`decimalSeparator\` — grouping and decimal marks
- \`grouping\` — \`"western"\` | \`"indian"\`
- \`prefix\` / \`suffix\` — optional React nodes before / after the digits

## Notes

- Display-only — no input chrome. For steppers and typing, use [\`Number Field\`](/docs/components/number-field) (it embeds this wheel).
- Honors \`prefers-reduced-motion\` (instant digit swap).
- Depends on \`motion\` (\`motion/react\`).
- Live previews (bump, decimals + affix, grouping) are on the docs page.
`
