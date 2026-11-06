/**
 * Navigation Menu component docs — markdown for Copy Page / AI.
 */

export const navigationMenuDocsTitle = "Navigation Menu"

export const navigationMenuDocsDescription =
  "Site navigation on Base UI — mega panels, featured / image / CTA layouts, nested menus, delays, align, arrow, and controlled open value."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const navigationMenuDocsUpdatedAt = "2026-11-06"

export const navigationMenuDocsMarkdown = `# Navigation Menu

${navigationMenuDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/navigation-menu
\`\`\`

## Composition model

\`\`\`text
NavigationMenu
├── NavigationMenuList
│   ├── NavigationMenuItem
│   │   ├── NavigationMenuTrigger
│   │   └── NavigationMenuContent
│   │       └── NavigationMenuLink
│   └── NavigationMenuItem
│       └── NavigationMenuLink   ← top-level link (use navigationMenuTriggerStyle)
└── (shared Positioner / Popup / Viewport — mounted by NavigationMenu)
\`\`\`

## Usage

\`\`\`tsx
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Start</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink render={<Link href="/docs" />}>
              Introduction
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/docs/components" />}
            className={navigationMenuTriggerStyle()}
          >
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/navigation-menu\`). Compose Next.js \`Link\` via \`render\`.
- Root mounts a shared positioner so panels morph width/height when switching triggers.
- Control open state with \`value\` / \`onValueChange\` (item \`value\` props).
- Root also accepts \`orientation\`, \`delay\` / \`closeDelay\`, \`align\`, \`showArrow\`, and \`withPositioner\`.
- Links support \`active\` and \`closeOnClick\`. Triggers accept \`disabled\`.
- Nest another \`NavigationMenu\` inside content for a secondary level (nested root renders as a \`div\`).
- Nested inline: set \`withPositioner={false}\` and render \`NavigationMenuViewport\` in-panel.
- Mega layouts (featured, image, CTA grid, badges) are content patterns inside \`NavigationMenuContent\` — not a separate component.
- Export \`NavigationMenuArrow\` / \`NavigationMenuPositioner\` / \`NavigationMenuViewport\` for custom composition.
- Live previews (Preview / Patterns / Advanced, RTL) are on the docs page.
`
