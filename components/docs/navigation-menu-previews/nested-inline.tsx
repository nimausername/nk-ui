"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

/** Side-rail trigger — hide default down chevron; panel opens sideways. */
const sideTriggerClassName =
  "h-9 w-full justify-between rounded-md px-2.5 text-sm font-medium [&>svg:last-child]:hidden"

type NestedLink = {
  readonly href: string
  readonly title: string
  readonly description: string
  readonly descriptionFa: string
}

type NestedSection = {
  readonly value: string
  readonly title: string
  readonly titleFa: string
  readonly links: readonly NestedLink[]
}

const sections: readonly NestedSection[] = [
  {
    value: "primitives",
    title: "Primitives",
    titleFa: "پریمیتیوها",
    links: [
      {
        href: "/docs/components/button",
        title: "Button",
        description: "Actions and CTAs.",
        descriptionFa: "اقدام‌ها و CTA.",
      },
      {
        href: "/docs/components/input",
        title: "Input",
        description: "Text fields and forms.",
        descriptionFa: "فیلد متن و فرم.",
      },
    ],
  },
  {
    value: "overlays",
    title: "Overlays",
    titleFa: "اُورلی‌ها",
    links: [
      {
        href: "/docs/components/dialog",
        title: "Dialog",
        description: "Modal focus surfaces.",
        descriptionFa: "سطح فوکوس مودال.",
      },
      {
        href: "/docs/components/hover-card",
        title: "Hover Card",
        description: "Rich previews on hover.",
        descriptionFa: "پیش‌نمایش غنی با هاور.",
      },
    ],
  },
  {
    value: "navigation",
    title: "Navigation",
    titleFa: "ناوبری",
    links: [
      {
        href: "/docs/components/menubar",
        title: "Menubar",
        description: "App menus and flyouts.",
        descriptionFa: "منوی اپ و زیرمنو.",
      },
      {
        href: "/docs/components/navigation-menu",
        title: "Navigation Menu",
        description: "Site header panels.",
        descriptionFa: "پنل‌های هدر سایت.",
      },
    ],
  },
  {
    value: "data",
    title: "Data",
    titleFa: "داده",
    links: [
      {
        href: "/docs/components/date-picker",
        title: "Date Picker",
        description: "Single, range, presets.",
        descriptionFa: "تکی، بازه و پیش‌فرض.",
      },
      {
        href: "/docs/components/table",
        title: "Table",
        description: "Dense data surfaces.",
        descriptionFa: "سطوح داده فشرده.",
      },
    ],
  },
]

type NestedPanelProps = {
  readonly title: string
  readonly titleFa: string
  readonly links: readonly NestedLink[]
  readonly direction: "ltr" | "rtl"
}

const NestedPanel = ({
  title,
  titleFa,
  links,
  direction,
}: NestedPanelProps) => {
  return (
    <div className="flex h-full min-h-28 flex-col gap-1 p-1">
      <p className="px-2 pt-1 text-xs font-medium text-muted-foreground">
        {direction === "rtl" ? titleFa : title}
      </p>
      <ul className="grid gap-0.5">
        {links.map((link) => (
          <li key={link.href}>
            <NavigationMenuLink
              render={<Link href={link.href} />}
              className="items-start"
            >
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-medium text-foreground">{link.title}</span>
                <span className="text-xs leading-snug text-muted-foreground">
                  {direction === "rtl" ? link.descriptionFa : link.description}
                </span>
              </div>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Nested inline — second level stays in the same panel (no nested portal).
 */
const NavigationMenuNestedInlinePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nested inline</h2>
      <p className="text-sm text-muted-foreground">
        Same-panel second level — one split surface: side rail + inline{" "}
        <code className="rounded bg-muted px-1 text-xs">
          NavigationMenuViewport
        </code>
        .
      </p>
      <ComponentPreview
        code={`import { ChevronRight } from "lucide-react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const sections = [
  { value: "primitives", title: "Primitives", /* links… */ },
  { value: "overlays", title: "Overlays", /* links… */ },
  { value: "navigation", title: "Navigation", /* links… */ },
  { value: "data", title: "Data", /* links… */ },
]

export function NavigationMenuNestedInline() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenu
              withPositioner={false}
              orientation="vertical"
              defaultValue="primitives"
              className="flex-none items-stretch"
            >
              <div className="flex w-[min(100vw-2rem,28rem)]">
                <NavigationMenuList className="w-40 shrink-0 flex-col items-stretch gap-0.5 border-e border-border p-1.5">
                  {sections.map((section) => (
                    <NavigationMenuItem
                      key={section.value}
                      value={section.value}
                    >
                      <NavigationMenuTrigger className="h-9 w-full justify-between rounded-md px-2.5 font-medium [&>svg:last-child]:hidden">
                        {section.title}
                        <ChevronRight
                          aria-hidden="true"
                          className="size-3.5 text-muted-foreground rtl:rotate-180"
                        />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {/* panel links */}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport className="min-h-40 flex-1" />
              </div>
            </NavigationMenu>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
      >
        {(direction) => (
          <div
            className="flex min-h-56 items-start justify-center pt-2"
            dir={direction}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "محصول" : "Product"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenu
                      withPositioner={false}
                      orientation="vertical"
                      defaultValue="primitives"
                      className="flex-none items-stretch"
                    >
                      <div className="flex w-[min(100vw-2rem,28rem)]">
                        <NavigationMenuList className="w-40 shrink-0 flex-col items-stretch gap-0.5 border-e border-border p-1.5">
                          {sections.map((section) => (
                            <NavigationMenuItem
                              key={section.value}
                              value={section.value}
                            >
                              <NavigationMenuTrigger
                                className={sideTriggerClassName}
                              >
                                {direction === "rtl"
                                  ? section.titleFa
                                  : section.title}
                                <ChevronRight
                                  aria-hidden="true"
                                  className="size-3.5 text-muted-foreground rtl:rotate-180"
                                />
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <NestedPanel
                                  title={section.title}
                                  titleFa={section.titleFa}
                                  links={section.links}
                                  direction={direction}
                                />
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
                        <NavigationMenuViewport className="min-h-40 flex-1" />
                      </div>
                    </NavigationMenu>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { NavigationMenuNestedInlinePreview }
