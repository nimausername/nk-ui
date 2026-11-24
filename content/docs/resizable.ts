/**
 * Resizable component docs — markdown for Copy Page / AI.
 */

export const resizableDocsTitle = "Resizable"

export const resizableDocsDescription =
  "Drag the divider to resize panels — side by side, stacked, or nested."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const resizableDocsUpdatedAt = "2026-11-24"

export const resizableDocsMarkdown = `# Resizable

${resizableDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/resizable
\`\`\`

## Usage

\`\`\`tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Example() {
  return (
    <ResizablePanelGroup className="min-h-40 rounded-lg border">
      <ResizablePanel defaultSize="50%">
        <div className="p-4">One</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <div className="p-4">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
\`\`\`

## Notes

- \`ResizablePanelGroup\` lays panels in a row. Set \`orientation="vertical"\` to stack them.
- Give the group a height. It fills its parent.
- Sizes are strings with units. \`"50%"\` is half the group. A bare number is pixels.
- \`ResizableHandle\` is the divider. \`withHandle\` adds a grip.
- A horizontal group follows writing direction, so the first panel stays at the start in RTL.
- The handle is a separator. Arrow keys resize it when it has focus.
- Live previews (side by side, stacked, nested) are on the docs page.
`
