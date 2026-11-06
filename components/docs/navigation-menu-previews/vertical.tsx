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
 * Vertical orientation — side-rail style navigation.
 */
const NavigationMenuVerticalPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Vertical</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">
          orientation=&quot;vertical&quot;
        </code>{" "}
        and stack the list with{" "}
        <code className="rounded bg-muted px-1 text-xs">flex-col</code>.
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

export function NavigationMenuVertical() {
  return (
    <NavigationMenu
      orientation="vertical"
      className="items-stretch"
      align="start"
    >
      <NavigationMenuList className="w-40 flex-col items-stretch">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full justify-between">
            Docs
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
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
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full justify-between">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/components" />}
                >
                  Catalog
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
          <div className="flex min-h-48 items-start pt-2" dir={direction}>
            <NavigationMenu
              orientation="vertical"
              className="items-stretch"
              align="start"
            >
              <NavigationMenuList className="w-40 flex-col items-stretch">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-full justify-between">
                    {direction === "rtl" ? "مستندات" : "Docs"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1">
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
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-full justify-between">
                    {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components" />}
                        >
                          {direction === "rtl" ? "فهرست" : "Catalog"}
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

export { NavigationMenuVerticalPreview }
