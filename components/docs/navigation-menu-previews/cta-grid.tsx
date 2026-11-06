"use client"

import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
} from "lucide-react"
import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type Industry = {
  readonly title: string
  readonly titleFa: string
  readonly description: string
  readonly descriptionFa: string
  readonly href: string
  readonly icon: typeof Building2
}

const industries: readonly Industry[] = [
  {
    title: "Commerce",
    titleFa: "تجارت",
    description: "Checkout and catalog chrome.",
    descriptionFa: "کروم چک‌اوت و کاتالوگ.",
    href: "/docs/components",
    icon: ShoppingBag,
  },
  {
    title: "Finance",
    titleFa: "مالی",
    description: "Dense data and confirm flows.",
    descriptionFa: "داده فشرده و جریان تأیید.",
    href: "/docs/components",
    icon: Landmark,
  },
  {
    title: "Health",
    titleFa: "سلامت",
    description: "Calm forms and status.",
    descriptionFa: "فرم‌های آرام و وضعیت.",
    href: "/docs/components",
    icon: HeartPulse,
  },
  {
    title: "Education",
    titleFa: "آموزش",
    description: "Lesson and catalog panels.",
    descriptionFa: "پنل درس و کاتالوگ.",
    href: "/docs/components",
    icon: GraduationCap,
  },
  {
    title: "Logistics",
    titleFa: "لجستیک",
    description: "Status and timeline UI.",
    descriptionFa: "UI وضعیت و تایم‌لاین.",
    href: "/docs/components",
    icon: Truck,
  },
  {
    title: "Enterprise",
    titleFa: "سازمانی",
    description: "Workspace navigation.",
    descriptionFa: "ناوبری فضای کاری.",
    href: "/docs/components",
    icon: Building2,
  },
]

/**
 * CTA grid — icon segments with a full-width learn-more action.
 */
const NavigationMenuCtaGridPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">CTA grid</h2>
      <p className="text-sm text-muted-foreground">
        Icon segments in a fixed grid, with a full-width action under the links.
      </p>
      <ComponentPreview
        code={`import { Building2, ShoppingBag } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuCtaGrid() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[min(100vw-2rem,28rem)] flex-col gap-2 p-2">
              <ul className="grid gap-1 sm:grid-cols-2">
                <li>
                  <NavigationMenuLink render={<Link href="/docs/components" />}>
                    <ShoppingBag aria-hidden="true" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">Commerce</span>
                      <span className="text-xs text-muted-foreground">
                        Checkout and catalog chrome.
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
                {/* …more industries */}
              </ul>
              <Button
                render={<Link href="/docs/components" />}
                variant="outline"
                className="w-full"
              >
                Learn more
              </Button>
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
                    {direction === "rtl" ? "صنایع" : "Industries"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[min(100vw-2rem,28rem)] flex-col gap-2 p-2">
                      <ul className="grid gap-1 sm:grid-cols-2">
                        {industries.map((item) => {
                          const Icon = item.icon
                          return (
                            <li key={item.title}>
                              <NavigationMenuLink
                                render={<Link href={item.href} />}
                              >
                                <Icon aria-hidden="true" />
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
                          )
                        })}
                      </ul>
                      <Button
                        render={<Link href="/docs/components" />}
                        variant="outline"
                        className="w-full"
                      >
                        {direction === "rtl" ? "بیشتر بدانید" : "Learn more"}
                      </Button>
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

export { NavigationMenuCtaGridPreview }
