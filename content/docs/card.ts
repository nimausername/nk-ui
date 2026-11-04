/**
 * Card component docs — markdown for Copy Page / AI.
 */

export const cardDocsTitle = "Card"

export const cardDocsDescription =
  "Composable bordered surface — header, action, content, and footer for grouped UI."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const cardDocsUpdatedAt = "2026-11-04"

export const cardDocsMarkdown = `# Card

${cardDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/card
\`\`\`

## Usage

\`\`\`tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        Review alerts from the last 24 hours.
      </CardContent>
      <CardFooter>
        <Button type="button">Open inbox</Button>
      </CardFooter>
    </Card>
  )
}
\`\`\`

## Notes

- Parts: \`Card\` / \`CardHeader\` / \`CardTitle\` / \`CardDescription\` / \`CardAction\` / \`CardContent\` / \`CardFooter\`.
- \`CardDescription\` stays in the header with the title. \`CardContent\` is the next section, so the card’s \`gap-6\` separates them.
- \`CardAction\` sits in the end column of the header (pair with a Button or menu).
- Form / settings cards: use \`gap-0 py-0\` plus \`border-b\` / \`border-t\` on Header / Footer for clear sections.
- Footer actions: pair outline + primary; \`CardFooter\` includes a default gap.
- Not a Base UI primitive — styled composition on semantic tokens.
- Media demo cover uses the home mist palette plus the nk mark / “UI you own” — swap for product imagery as needed.
- Background media: pin media \`absolute inset-0\`, place the nk mark in the open media area, and fade title / description / body with \`bg-gradient-to-t from-card via-card/80 to-transparent\`.
- Inset media: keep card padding; media uses \`mx-*\` + \`rounded-*\` as a sibling above \`CardHeader\` (not edge-bleed).
- Horizontal media: \`sm:flex-row\` on the card; fixed-width media column with \`self-stretch\`.
- Horizontal media blend: mist on the start half, faded with \`mask-image: linear-gradient(... transparent)\` so the media pixels blend into the card.
- Compact media: small square thumbnail + \`CardHeader\` / \`CardAction\` in a dense row.
- Stat: one tabular figure, a label, and a delta under a hairline — no chart chrome.
- Quote: one line plus attribution. Use a script face on the key words only; the rest stays in the UI font.
- Pricing: plan name, one price, three short lines, and a single button. Badge version pins an outline badge to the top border (\`top-0 -translate-y-1/2\`). Icon version puts a check on each line.
- Live previews are grouped in three tabs — Structure, Product, and Media — on the docs page.
`
