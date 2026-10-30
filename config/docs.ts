/**
 * Docs-site navigation catalog only.
 * Do not import this from publishable `components/ui` code.
 */

export type DocsNavItem = {
  readonly title: string
  readonly href: string
  readonly description?: string
}

/**
 * Top-level docs guides (not components).
 */
export const docsGuideItems: readonly DocsNavItem[] = [
  {
    title: "Introduction",
    href: "/docs",
    description: "What nk is and how the library is structured.",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "One-time setup for the @nk registry. Works for every component.",
  },
] as const

/**
 * Installable UI components shown in the Components section.
 * Add new components here as they ship.
 */
export const componentItems: readonly DocsNavItem[] = [
  {
    title: "Breadcrumb",
    href: "/docs/components/breadcrumb",
    description: "Composable navigation trail — icons, separators, ellipsis via composition.",
  },
  {
    title: "Button",
    href: "/docs/components/button",
    description: "Accessible actions built on Base UI.",
  },
] as const

/**
 * Header primary links for the docs site.
 */
export const headerNavItems: readonly DocsNavItem[] = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/docs/components" },
] as const
