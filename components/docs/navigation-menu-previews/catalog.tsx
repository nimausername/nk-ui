"use client"

import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type CatalogEntry = {
  readonly title: string
  readonly titleFa: string
  readonly href: string
  readonly description: string
  readonly descriptionFa: string
}

const catalog: readonly CatalogEntry[] = [
  {
    title: "Hover Card",
    titleFa: "Hover Card",
    href: "/docs/components/hover-card",
    description: "Rich hover / focus previews for links and profiles.",
    descriptionFa: "پیش‌نمایش غنی با هاور / فوکوس برای لینک و پروفایل.",
  },
  {
    title: "Menubar",
    titleFa: "Menubar",
    href: "/docs/components/menubar",
    description: "Application menu bar with toggles, radios, and flyouts.",
    descriptionFa: "نوار منوی اپ با تاگل، رادیو و زیرمنو.",
  },
  {
    title: "Date Picker",
    titleFa: "Date Picker",
    href: "/docs/components/date-picker",
    description: "Popover + Calendar — single, range, input, and presets.",
    descriptionFa: "Popover + Calendar — تکی، بازه، ورودی و پیش‌فرض‌ها.",
  },
  {
    title: "Alert Dialog",
    titleFa: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description: "Modal confirmation that requires an explicit response.",
    descriptionFa: "تأیید مودال که پاسخ صریح می‌خواهد.",
  },
]

/**
 * Catalog panel — two-column grid of nk component destinations.
 */
const NavigationMenuCatalogPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Catalog panel</h2>
      <p className="text-sm text-muted-foreground">
        Wider content with a titled link grid — typical marketing / docs header
        mega-panel.
      </p>
      <ComponentPreview
        code={`import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const catalog = [
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "Rich hover / focus previews for links and profiles.",
  },
  {
    title: "Menubar",
    href: "/docs/components/menubar",
    description: "Application menu bar with toggles, radios, and flyouts.",
  },
  {
    title: "Date Picker",
    href: "/docs/components/date-picker",
    description: "Popover + Calendar — single, range, input, and presets.",
  },
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description: "Modal confirmation that requires an explicit response.",
  },
]

export function NavigationMenuCatalog() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[min(100vw-2rem,32rem)] gap-1 sm:grid-cols-2">
              {catalog.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />}>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{item.title}</span>
                      <span className="line-clamp-2 text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1">
              <li>
                <NavigationMenuLink render={<Link href="/docs" />}>
                  Introduction
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink render={<Link href="/docs/installation" />}>
                  Installation
                </NavigationMenuLink>
              </li>
            </ul>
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
                    {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[min(100vw-2rem,32rem)] gap-1 sm:grid-cols-2">
                      {catalog.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            render={<Link href={item.href} />}
                          >
                            <div className="flex flex-col gap-0.5">
                              <span className="font-medium">
                                {direction === "rtl"
                                  ? item.titleFa
                                  : item.title}
                              </span>
                              <span className="line-clamp-2 text-xs text-muted-foreground">
                                {direction === "rtl"
                                  ? item.descriptionFa
                                  : item.description}
                              </span>
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "راهنماها" : "Guides"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-1">
                      <li>
                        <NavigationMenuLink render={<Link href="/docs" />}>
                          {direction === "rtl" ? "مقدمه" : "Introduction"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/installation" />}
                        >
                          {direction === "rtl" ? "نصب" : "Installation"}
                        </NavigationMenuLink>
                      </li>
                    </ul>
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

export { NavigationMenuCatalogPreview }
