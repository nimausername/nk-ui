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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

/**
 * Minimal anatomy — one panel plus a top-level Docs link.
 */
const NavigationMenuAnatomyPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Anatomy</h2>
      <p className="text-sm text-muted-foreground">
        Smallest useful bar — a triggered panel and a plain link styled like a
        trigger.
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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuAnatomy() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Start</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1">
              <li>
                <NavigationMenuLink render={<Link href="/docs" />}>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Introduction</span>
                    <span className="text-xs text-muted-foreground">
                      Philosophy, RTL, and AI-ready docs.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink render={<Link href="/docs/installation" />}>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Installation</span>
                    <span className="text-xs text-muted-foreground">
                      Add the @nk registry and install components.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
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
}`}
      >
        {(direction) => (
          <div className="flex min-h-48 items-start justify-center pt-2" dir={direction}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "شروع" : "Start"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 gap-1">
                      <li>
                        <NavigationMenuLink render={<Link href="/docs" />}>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium">
                              {direction === "rtl" ? "مقدمه" : "Introduction"}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {direction === "rtl"
                                ? "فلسفه، RTL و مستندات آمادهٔ AI."
                                : "Philosophy, RTL, and AI-ready docs."}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/installation" />}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium">
                              {direction === "rtl" ? "نصب" : "Installation"}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {direction === "rtl"
                                ? "رجیستری @nk را اضافه کنید و کامپوننت نصب کنید."
                                : "Add the @nk registry and install components."}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={<Link href="/docs/components" />}
                    className={navigationMenuTriggerStyle()}
                  >
                    {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { NavigationMenuAnatomyPreview }
