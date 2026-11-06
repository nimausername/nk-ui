"use client"

import {
  BookOpen,
  Boxes,
  Package,
  Puzzle,
} from "lucide-react"
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
 * Icon rows — compact destination list with leading Lucide marks.
 */
const NavigationMenuIconsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With icons</h2>
      <p className="text-sm text-muted-foreground">
        Leading icons inside{" "}
        <code className="rounded bg-muted px-1 text-xs">NavigationMenuLink</code>
        .
      </p>
      <ComponentPreview
        code={`import { BookOpen, Boxes, Package, Puzzle } from "lucide-react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuIcons() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Library</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1">
              <li>
                <NavigationMenuLink render={<Link href="/docs/components" />}>
                  <Boxes aria-hidden="true" />
                  Components
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink render={<Link href="/docs/installation" />}>
                  <Package aria-hidden="true" />
                  Registry setup
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink render={<Link href="/docs" />}>
                  <BookOpen aria-hidden="true" />
                  Docs
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/components/menubar" />}
                >
                  <Puzzle aria-hidden="true" />
                  Composites
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
            className="flex min-h-48 items-start justify-center pt-2"
            dir={direction}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "کتابخانه" : "Library"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-1">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components" />}
                        >
                          <Boxes aria-hidden="true" />
                          {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/installation" />}
                        >
                          <Package aria-hidden="true" />
                          {direction === "rtl"
                            ? "راه‌اندازی رجیستری"
                            : "Registry setup"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink render={<Link href="/docs" />}>
                          <BookOpen aria-hidden="true" />
                          {direction === "rtl" ? "مستندات" : "Docs"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components/menubar" />}
                        >
                          <Puzzle aria-hidden="true" />
                          {direction === "rtl" ? "ترکیبی‌ها" : "Composites"}
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

export { NavigationMenuIconsPreview }
