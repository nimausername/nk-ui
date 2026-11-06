"use client"

import {
  ArrowRight,
  CalendarDays,
  Menu,
  MousePointer2,
} from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { CardBrandMistField } from "@/components/docs/card-previews/mist"
import { ComponentPreview } from "@/components/docs/component-preview"
import { NkMark } from "@/components/site/nk-mark"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type Destination = {
  readonly href: string
  readonly title: string
  readonly titleFa: string
  readonly description: string
  readonly descriptionFa: string
  readonly icon: LucideIcon
}

const destinations: readonly Destination[] = [
  {
    href: "/docs/components/hover-card",
    title: "Hover Card",
    titleFa: "Hover Card",
    description: "Rich previews on hover and focus.",
    descriptionFa: "پیش‌نمایش غنی با هاور و فوکوس.",
    icon: MousePointer2,
  },
  {
    href: "/docs/components/menubar",
    title: "Menubar",
    titleFa: "Menubar",
    description: "App menu with toggles and flyouts.",
    descriptionFa: "منوی اپ با تاگل و زیرمنو.",
    icon: Menu,
  },
  {
    href: "/docs/components/date-picker",
    title: "Date Picker",
    titleFa: "Date Picker",
    description: "Single, range, and preset dates.",
    descriptionFa: "تکی، بازه و تاریخ‌های پیش‌فرض.",
    icon: CalendarDays,
  },
  {
    href: "/docs/components",
    title: "All components",
    titleFa: "همه کامپوننت‌ها",
    description: "Browse the full catalog.",
    descriptionFa: "فهرست کامل را ببینید.",
    icon: ArrowRight,
  },
]

/**
 * Image mega — brand mist media beside destination links.
 */
const NavigationMenuImagePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Image</h2>
      <p className="text-sm text-muted-foreground">
        Brand mist + nk mark beside icon destination rows — same atmosphere as
        Card media covers.
      </p>
      <ComponentPreview
        code={`import { ArrowRight, CalendarDays, Menu, MousePointer2 } from "lucide-react"
import Link from "next/link"

import { NkMark } from "@/components/site/nk-mark"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ShaderBackground } from "@/components/ui/shader-background"

export function NavigationMenuImage() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[min(100vw-2rem,32rem)] gap-1 p-1.5 sm:grid-cols-[1.05fr_1fr]">
              <NavigationMenuLink
                render={<Link href="/docs/components" />}
                className="flex flex-col gap-2 rounded-md p-1.5"
              >
                <div
                  aria-hidden="true"
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-black"
                >
                  <ShaderBackground
                    effect="mist"
                    className="absolute inset-0"
                    colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
                    colorBack="#000000"
                    softness={0.65}
                    speed={0.45}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <NkMark
                      size="md"
                      className="size-10 rounded-md text-sm shadow-sm"
                    />
                  </div>
                </div>
                <div className="space-y-0.5 px-1 pb-0.5">
                  <span className="font-medium">Featured set</span>
                  <span className="block text-xs leading-snug text-muted-foreground">
                    New components for product chrome.
                  </span>
                </div>
              </NavigationMenuLink>
              <ul className="flex flex-col justify-center gap-0.5">
                <li>
                  <NavigationMenuLink
                    render={<Link href="/docs/components/hover-card" />}
                  >
                    <MousePointer2 aria-hidden="true" />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="font-medium text-foreground">
                        Hover Card
                      </span>
                      <span className="text-xs leading-snug text-muted-foreground">
                        Rich previews on hover and focus.
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                {/* …more destinations */}
              </ul>
            </div>
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
                    {direction === "rtl" ? "مجموعه‌ها" : "Collections"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[min(100vw-2rem,32rem)] gap-1 p-1.5 sm:grid-cols-[1.05fr_1fr]">
                      <NavigationMenuLink
                        render={<Link href="/docs/components" />}
                        className="flex flex-col gap-2 rounded-md p-1.5"
                        aria-label={
                          direction === "rtl"
                            ? "مجموعه ویژه — کامپوننت‌های جدید برای کروم محصول"
                            : "Featured set — new components for product chrome"
                        }
                      >
                        <div
                          aria-hidden="true"
                          className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-black"
                        >
                          <CardBrandMistField className="absolute inset-0" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <NkMark
                              size="md"
                              className="size-10 rounded-md text-sm shadow-sm"
                            />
                          </div>
                        </div>
                        <div className="space-y-0.5 px-1 pb-0.5">
                          <span className="font-medium">
                            {direction === "rtl"
                              ? "مجموعه ویژه"
                              : "Featured set"}
                          </span>
                          <span className="block text-xs leading-snug text-muted-foreground">
                            {direction === "rtl"
                              ? "کامپوننت‌های جدید برای کروم محصول."
                              : "New components for product chrome."}
                          </span>
                        </div>
                      </NavigationMenuLink>
                      <ul className="flex flex-col justify-center gap-0.5">
                        {destinations.map((item) => {
                          const Icon = item.icon
                          return (
                            <li key={item.href + item.title}>
                              <NavigationMenuLink
                                render={<Link href={item.href} />}
                                className="items-start"
                              >
                                <Icon
                                  aria-hidden="true"
                                  className="mt-0.5 text-foreground"
                                />
                                <div className="flex min-w-0 flex-col gap-0.5">
                                  <span className="font-medium text-foreground">
                                    {direction === "rtl"
                                      ? item.titleFa
                                      : item.title}
                                  </span>
                                  <span className="text-xs leading-snug text-muted-foreground">
                                    {direction === "rtl"
                                      ? item.descriptionFa
                                      : item.description}
                                  </span>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
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

export { NavigationMenuImagePreview }
