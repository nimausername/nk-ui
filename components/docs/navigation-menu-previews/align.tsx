"use client"

import Link from "next/link"
import { useState } from "react"

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

type AlignOption = "start" | "center" | "end"

/**
 * Popup align — start / center / end relative to the active trigger.
 */
const NavigationMenuAlignPreview = () => {
  const [align, setAlign] = useState<AlignOption>("center")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Align</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">align</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">NavigationMenu</code> to
        position the shared popup.
      </p>
      <ComponentPreview
        code={`"use client"

import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuAlign() {
  const [align, setAlign] = useState<"start" | "center" | "end">("center")

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {(["start", "center", "end"] as const).map((option) => (
          <Button
            key={option}
            type="button"
            size="sm"
            variant={align === option ? "default" : "outline"}
            onClick={() => setAlign(option)}
          >
            {option}
          </Button>
        ))}
      </div>
      <NavigationMenu align={align}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink render={<Link href="/docs/components" />}>
                    Components
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink render={<Link href="/docs" />}>
                    Docs
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}`}
        actions={(direction) => (
          <div className="flex gap-2" dir={direction}>
            {(["start", "center", "end"] as const).map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={align === option ? "default" : "outline"}
                onClick={() => {
                  setAlign(option)
                }}
              >
                {option}
              </Button>
            ))}
          </div>
        )}
      >
        {(direction) => (
          <div
            className="flex min-h-40 flex-col items-center gap-3 pt-2"
            dir={direction}
          >
            <NavigationMenu align={align}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "محصولات" : "Products"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-1">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components" />}
                        >
                          {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink render={<Link href="/docs" />}>
                          {direction === "rtl" ? "مستندات" : "Docs"}
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

export { NavigationMenuAlignPreview }
