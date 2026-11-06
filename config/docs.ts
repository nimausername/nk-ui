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
    title: "Accordion",
    href: "/docs/components/accordion",
    description: "Collapsible sections on Base UI — single or multiple open panels.",
  },
  {
    title: "Alert",
    href: "/docs/components/alert",
    description: "Inline callout for status messages — title, description, and optional icon.",
  },
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "Modal confirmation on Base UI — requires an explicit cancel or continue response.",
  },
  {
    title: "Aspect Ratio",
    href: "/docs/components/aspect-ratio",
    description:
      "Fixed width / height frames with native CSS — media, embeds, and cards.",
  },
  {
    title: "Avatar",
    href: "/docs/components/avatar",
    description: "Profile image with fallback on Base UI — compose Image and Fallback.",
  },
  {
    title: "Badge",
    href: "/docs/components/badge",
    description: "Compact status and count labels — default, secondary, soft, outline, destructive.",
  },
  {
    title: "Brand Icons",
    href: "/docs/components/brand-icons",
    description:
      "Thousands of currentColor brand marks (Simple Icons + curated overrides) for Select and menus.",
  },
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
    title: "Calendar",
    href: "/docs/components/calendar",
    description:
      "Month calendar on react-day-picker — single, multiple, and range selection.",
  },
  {
    title: "Card",
    href: "/docs/components/card",
    description:
      "Composable bordered surface — header, action, content, and footer.",
  },
  {
    title: "Checkbox",
    href: "/docs/components/checkbox",
    description: "Accessible checkbox with indeterminate support — pair with Field.",
  },
  {
    title: "Collapsible",
    href: "/docs/components/collapsible",
    description:
      "Single expand / collapse region on Base UI — trigger and animated panel.",
  },
  {
    title: "Combobox",
    href: "/docs/components/combobox",
    description:
      "Searchable select on Base UI — filterable input, list, clear, groups, chips.",
  },
  {
    title: "Dialog",
    href: "/docs/components/dialog",
    description: "Modal dialogs on Base UI — confirmations, forms, and focused tasks.",
  },
  {
    title: "Dropdown Menu",
    href: "/docs/components/dropdown-menu",
    description:
      "Action menus on Base UI Menu — items, links, icons, checkboxes, radios, shortcuts, submenus.",
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
    title: "Pagination",
    href: "/docs/components/pagination",
    description:
      "Composable page navigation — previous / next, numbered links, and ellipsis.",
  },
  {
    title: "Phone Input",
    href: "/docs/components/phone-input",
    description: "Country picker + national number with E.164 output (phonefield / Base UI).",
  },
  {
    title: "Popover",
    href: "/docs/components/popover",
    description:
      "Anchored non-modal surface — sides, align, footer, close, arrow, and controlled open.",
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description: "Task completion bar on Base UI — label, value text, track, and indicator.",
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
    title: "Separator",
    href: "/docs/components/separator",
    description: "Accessible divider on Base UI — horizontal or vertical between content.",
  },
  {
    title: "Sheet",
    href: "/docs/components/sheet",
    description:
      "Edge panels on Base UI Dialog — sides, size, form body, close control, and controlled open.",
  },
  {
    title: "Shader Background",
    href: "/docs/components/shader-background",
    description:
      "Small set of product WebGL atmospheres — mist, haze, current, signal, and more.",
  },
  {
    title: "Skeleton",
    href: "/docs/components/skeleton",
    description: "Pulse placeholder for loading UI — size and shape via className.",
  },
  {
    title: "Slider",
    href: "/docs/components/slider",
    description: "Draggable value control on Base UI — label, track, indicator, and thumb.",
  },
  {
    title: "Switch",
    href: "/docs/components/switch",
    description: "On/off switch with morphing thumb — RTL and reduced-motion aware.",
  },
  {
    title: "Table",
    href: "/docs/components/table",
    description:
      "Composable data table — header, body, footer, caption, and selected rows.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description: "Tabbed panels on Base UI — list, triggers, content, and optional indicator.",
  },
  {
    title: "Textarea",
    href: "/docs/components/textarea",
    description: "Multi-line text field with Input styling and Field validation wiring.",
  },
  {
    title: "Toast",
    href: "/docs/components/toast",
    description:
      "Transient notifications — types, actions, promise, stacking, viewport placement.",
  },
  {
    title: "Toggle",
    href: "/docs/components/toggle",
    description: "Two-state press button on Base UI — default and outline variants.",
  },
  {
    title: "Toggle Group",
    href: "/docs/components/toggle-group",
    description: "Shared pressed state for toggles — single or multiple selection on Base UI.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "Hover/focus hints — invert/outline surfaces, sides, shortcuts, optional arrow.",
  },
] as const

/**
 * Composed / multi-part pieces built on primitives (still installable via @nk).
 * Listed under Composites in the docs sidebar.
 */
export const compositeItems: readonly DocsNavItem[] = [
  {
    title: "Copy Field",
    href: "/docs/composites/copy-field",
    description:
      "Input with copy affordance — toast, silent, editable, token, and onCopied patterns.",
  },
  {
    title: "Date Picker",
    href: "/docs/composites/date-picker",
    description:
      "Date fields on Popover + Calendar — single, range, input, time, presets, natural language.",
  },
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
