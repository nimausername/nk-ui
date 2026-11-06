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
 * Disabled trigger — one item locked while siblings stay interactive.
 */
const NavigationMenuDisabledPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Disabled trigger</h2>
      <p className="text-sm text-muted-foreground">
        Set{" "}
        <code className="rounded bg-muted px-1 text-xs">disabled</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">
          NavigationMenuTrigger
        </code>{" "}
        for unavailable sections.
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

export function NavigationMenuDisabled() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
              <li>
                <NavigationMenuLink render={<Link href="/docs" />}>
                  Introduction
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>Billing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
              <li>
                <NavigationMenuLink href="#billing">Plans</NavigationMenuLink>
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
          <div
            className="flex min-h-40 items-start justify-center pt-2"
            dir={direction}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "مستندات" : "Docs"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1">
                      <li>
                        <NavigationMenuLink render={<Link href="/docs" />}>
                          {direction === "rtl" ? "مقدمه" : "Introduction"}
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger disabled>
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1">
                      <li>
                        <NavigationMenuLink href="#billing">
                          {direction === "rtl" ? "پلن‌ها" : "Plans"}
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

export { NavigationMenuDisabledPreview }
