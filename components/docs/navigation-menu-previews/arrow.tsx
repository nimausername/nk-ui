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

/**
 * Popup arrow — caret toward the active trigger via showArrow.
 */
const NavigationMenuArrowPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Arrow</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">showArrow</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">NavigationMenu</code> to
        render a caret on the shared popup.
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

export function NavigationMenuArrowExample() {
  return (
    <NavigationMenu showArrow align="center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-52 gap-1">
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
            className="flex min-h-40 items-start justify-center pt-2"
            dir={direction}
          >
            <NavigationMenu showArrow align="center">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "نمای کلی" : "Overview"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-52 gap-1">
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

export { NavigationMenuArrowPreview }
