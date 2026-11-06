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
 * Nested navigation — a second menu inside panel content (Base UI nested root).
 */
const NavigationMenuNestedPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nested</h2>
      <p className="text-sm text-muted-foreground">
        Place another{" "}
        <code className="rounded bg-muted px-1 text-xs">NavigationMenu</code>{" "}
        inside content for a secondary level — Base UI renders the nested root
        as a <code className="rounded bg-muted px-1 text-xs">div</code>.
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

export function NavigationMenuNested() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-44 flex-col gap-2 p-1">
              <p className="px-2 text-xs font-medium text-muted-foreground">
                Nested menu
              </p>
              <NavigationMenu
                className="flex-none justify-start"
                delay={100}
              >
                <NavigationMenuList className="flex-col items-stretch">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-full justify-between">
                      Primitives
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-40 gap-1">
                        <li>
                          <NavigationMenuLink
                            render={<Link href="/docs/components/button" />}
                          >
                            Button
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            render={<Link href="/docs/components/input" />}
                          >
                            Input
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-full justify-between">
                      Overlays
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-40 gap-1">
                        <li>
                          <NavigationMenuLink
                            render={<Link href="/docs/components/dialog" />}
                          >
                            Dialog
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            render={
                              <Link href="/docs/components/hover-card" />
                            }
                          >
                            Hover Card
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
            className="flex min-h-48 items-start justify-center pt-2"
            dir={direction}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "منابع" : "Resources"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-44 flex-col gap-2 p-1">
                      <p className="px-2 text-xs font-medium text-muted-foreground">
                        {direction === "rtl" ? "منوی تو در تو" : "Nested menu"}
                      </p>
                      <NavigationMenu
                        className="flex-none justify-start"
                        delay={100}
                      >
                        <NavigationMenuList className="flex-col items-stretch">
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="w-full justify-between">
                              {direction === "rtl"
                                ? "پریمیتیوها"
                                : "Primitives"}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-40 gap-1">
                                <li>
                                  <NavigationMenuLink
                                    render={
                                      <Link href="/docs/components/button" />
                                    }
                                  >
                                    Button
                                  </NavigationMenuLink>
                                </li>
                                <li>
                                  <NavigationMenuLink
                                    render={
                                      <Link href="/docs/components/input" />
                                    }
                                  >
                                    Input
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="w-full justify-between">
                              {direction === "rtl" ? "اُورلی‌ها" : "Overlays"}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-40 gap-1">
                                <li>
                                  <NavigationMenuLink
                                    render={
                                      <Link href="/docs/components/dialog" />
                                    }
                                  >
                                    Dialog
                                  </NavigationMenuLink>
                                </li>
                                <li>
                                  <NavigationMenuLink
                                    render={
                                      <Link href="/docs/components/hover-card" />
                                    }
                                  >
                                    Hover Card
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
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

export { NavigationMenuNestedPreview }
