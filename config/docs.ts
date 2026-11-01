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
    description: "Philosophy: open code, composition, distribution, RTL, and AI-ready docs.",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "Choose your framework, add the @nk registry, install components.",
  },
] as const

/**
 * Framework-specific installation guides.
 */
export const installationFrameworkItems: readonly DocsNavItem[] = [
  {
    title: "Next.js",
    href: "/docs/installation/next",
    description: "App Router + Tailwind. Recommended path for nk.",
  },
  {
    title: "Vite",
    href: "/docs/installation/vite",
    description: "Vite + React + Tailwind, then shadcn and @nk.",
  },
  {
    title: "Manual",
    href: "/docs/installation/manual",
    description: "Existing React app with Tailwind — wire shadcn + @nk yourself.",
  },
] as const

/**
 * Installable UI primitives shown in the Components section.
 * Add new primitives here as they ship.
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
  {
    title: "GlyphFlux",
    href: "/docs/components/glyph-flux",
    description: "WebGL gradient field as animated ASCII glyphs — shapes, grain, pointer scramble.",
  },
] as const

/**
 * Composed / multi-part pieces built on primitives (still installable via @nk).
 * Listed under Composites in the docs sidebar.
 */
export const compositeItems: readonly DocsNavItem[] = [
  {
    title: "Rail Sidebar",
    href: "/docs/composites/rail-sidebar",
    description: "Animated dashed-rail sidebar with nested items and active route rails.",
  },
  {
    title: "Progress Button",
    href: "/docs/composites/progress-button",
    description: "Download progress with stable label width on top of Button.",
  },
] as const

/**
 * Header primary links for the docs site.
 */
export const headerNavItems: readonly DocsNavItem[] = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/docs/components" },
  { title: "Composites", href: "/docs/composites" },
] as const
