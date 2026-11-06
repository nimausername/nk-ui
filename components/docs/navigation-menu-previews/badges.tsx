"use client"

import { Sparkles, Wand2, Workflow } from "lucide-react"
import Link from "next/link"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

/**
 * Badges mega — destination rows with New / Beta markers.
 */
const NavigationMenuBadgesPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Badges</h2>
      <p className="text-sm text-muted-foreground">
        Mark new or preview destinations inside the panel without a separate
        component.
      </p>
      <ComponentPreview
        code={`import { Sparkles, Wand2, Workflow } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuBadges() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What's new</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 p-1">
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/components/navigation-menu" />}
                >
                  <Workflow aria-hidden="true" />
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <span className="font-medium">Navigation Menu</span>
                    <Badge variant="secondary">New</Badge>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/components/menubar" />}
                >
                  <Wand2 aria-hidden="true" />
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <span className="font-medium">Menubar</span>
                    <Badge variant="outline">Stable</Badge>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/components/hover-card" />}
                >
                  <Sparkles aria-hidden="true" />
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <span className="font-medium">Hover Card</span>
                    <Badge variant="secondary">New</Badge>
                  </div>
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
                    {direction === "rtl" ? "تازه‌ها" : "What's new"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-72 gap-1 p-1">
                      <li>
                        <NavigationMenuLink
                          render={
                            <Link href="/docs/components/navigation-menu" />
                          }
                        >
                          <Workflow aria-hidden="true" />
                          <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                            <span className="font-medium">Navigation Menu</span>
                            <Badge variant="secondary">
                              {direction === "rtl" ? "جدید" : "New"}
                            </Badge>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components/menubar" />}
                        >
                          <Wand2 aria-hidden="true" />
                          <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                            <span className="font-medium">Menubar</span>
                            <Badge variant="outline">
                              {direction === "rtl" ? "پایدار" : "Stable"}
                            </Badge>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components/hover-card" />}
                        >
                          <Sparkles aria-hidden="true" />
                          <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                            <span className="font-medium">Hover Card</span>
                            <Badge variant="secondary">
                              {direction === "rtl" ? "جدید" : "New"}
                            </Badge>
                          </div>
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

export { NavigationMenuBadgesPreview }
