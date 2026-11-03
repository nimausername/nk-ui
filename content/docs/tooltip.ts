/**
 * Tooltip component docs — markdown for Copy Page / AI.
 */

export const tooltipDocsTitle = "Tooltip"

export const tooltipDocsDescription =
  "Short hover and focus hints on Base UI. Invert or outline surfaces, optional arrow, keyboard chips, and logical sides for LTR/RTL."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const tooltipDocsUpdatedAt = "2026-11-02"

export const tooltipDocsMarkdown = `# Tooltip

${tooltipDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/tooltip
\`\`\`

## Provider

Mount \`TooltipProvider\` near the root (the nk docs site already does this in \`AppProviders\`):

\`\`\`tsx
import { TooltipProvider } from "@/components/ui/tooltip"

export function Root({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>
}
\`\`\`

Nest another provider to override \`delay\` / \`closeDelay\` for a subtree.

## Composition model

- \`TooltipProvider\` — shared delay / closeDelay / timeout for a subtree
- \`Tooltip\` — root (open state / handlers / \`disabled\`)
- \`TooltipTrigger\` — hover / focus target; compose with Button via \`render={<Button />}\`
- \`TooltipContent\` — portaled surface + optional arrow (\`side\` / \`align\` / \`variant\`)

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Example() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover me
      </TooltipTrigger>
      <TooltipContent>
        Short hint
        <kbd data-slot="kbd">⌘K</kbd>
      </TooltipContent>
    </Tooltip>
  )
}
\`\`\`

## Variants & patterns

| Pattern | How |
| --- | --- |
| Invert (default) | \`variant="invert"\` — foreground fill |
| Outline | \`variant="outline"\` — popover surface + border |
| No arrow | \`showArrow={false}\` |
| Sides | \`side="top" \\| "bottom" \\| "left" \\| "right" \\| "inline-start" \\| "inline-end"\` |
| Align | \`align="start" \\| "center" \\| "end"\` |
| Shortcut | Nest \`<kbd data-slot="kbd">\` |
| Disabled button | Wrap trigger with \`render={<span tabIndex={0} />}\` |
| Delay | Nested \`TooltipProvider delay={600}\` |

## Notes

- Built on Base UI (\`@base-ui/react/tooltip\`).
- Prefer \`inline-start\` / \`inline-end\` over physical left/right for RTL.
- Pass \`dir\` on content in RTL demos if slide utilities misbehave (tw-animate known quirk).
- Keep copy short — use [Popover](/docs/components/popover) for rich or interactive content.
- Live previews are on the docs page.
`
