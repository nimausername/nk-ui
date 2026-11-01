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
    title: "Checkbox",
    href: "/docs/components/checkbox",
    description: "Accessible checkbox with indeterminate support — pair with Field.",
  },
  {
    title: "Dialog",
    href: "/docs/components/dialog",
    description: "Modal dialogs on Base UI — confirmations, forms, and focused tasks.",
  },
  {
    title: "Field",
    href: "/docs/components/field",
    description:
      "Form field shell — label, description, error, and success with Base UI associations.",
  },
  {
    title: "Form",
    href: "/docs/components/form",
    description:
      "Base UI Form for Field onSubmit validation and form-level errors — not a native form.",
  },
  {
    title: "GlyphFlux",
    href: "/docs/components/glyph-flux",
    description: "WebGL gradient field as animated ASCII glyphs — shapes, grain, pointer scramble.",
  },
  {
    title: "Input",
    href: "/docs/components/input",
    description: "Accessible text input on Base UI. Pair with Field for labeled forms.",
  },
  {
    title: "Input OTP",
    href: "/docs/components/input-otp",
    description: "One-time verification code slots — paste, mask, grouped 3+3 layouts.",
  },
  {
    title: "Number Field",
    href: "/docs/components/number-field",
    description: "Numeric input with steppers and optional scrub — not type=number alone.",
  },
  {
    title: "Phone Input",
    href: "/docs/components/phone-input",
    description: "Country picker + national number with E.164 output (phonefield / Base UI).",
  },
  {
    title: "Radio Group",
    href: "/docs/components/radio-group",
    description: "Mutually exclusive options — small choice sets with Field validation.",
  },
  {
    title: "Scroll Area",
    href: "/docs/components/scroll-area",
    description:
      "Native scroll container with custom scrollbars on Base UI — pair with Scroll Fade on the viewport.",
  },
  {
    title: "Scroll Fade",
    href: "/docs/components/scroll-fade",
    description:
      "CSS edge fades for scroll containers — position-aware by default, optional direction-smart hook.",
  },
  {
    title: "Select",
    href: "/docs/components/select",
    description: "Composable dropdown select on Base UI — trigger, popup, items, groups.",
  },
  {
    title: "Switch",
    href: "/docs/components/switch",
    description: "On/off switch for settings toggles — RTL-aware thumb.",
  },
  {
    title: "Textarea",
    href: "/docs/components/textarea",
    description: "Multi-line text field with Input styling and Field validation wiring.",
  },
] as const

/**
 * Composed / multi-part pieces built on primitives (still installable via @nk).
 * Listed under Composites in the docs sidebar.
 */
export const compositeItems: readonly DocsNavItem[] = [
  {
    title: "Password Input",
    href: "/docs/composites/password-input",
    description: "Password field with show / hide toggle on top of Input and Button.",
  },
  {
    title: "Progress Button",
    href: "/docs/composites/progress-button",
    description: "Download progress with stable label width on top of Button.",
  },
  {
    title: "Rail Sidebar",
    href: "/docs/composites/rail-sidebar",
    description: "Animated dashed-rail sidebar with nested items and active route rails.",
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
