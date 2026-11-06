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

/**
 * Open / close delays — hover timing for the shared popup.
 */
const NavigationMenuDelaysPreview = () => {
  const [slow, setSlow] = useState(true)
  const delay = slow ? 400 : 50
  const closeDelay = slow ? 300 : 50

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Delays</h2>
      <p className="text-sm text-muted-foreground">
        Tune{" "}
        <code className="rounded bg-muted px-1 text-xs">delay</code> /{" "}
        <code className="rounded bg-muted px-1 text-xs">closeDelay</code> (ms).
        Defaults are 50 — slow mode makes hover intent obvious.
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

export function NavigationMenuDelays() {
  const [slow, setSlow] = useState(true)
  const delay = slow ? 400 : 50
  const closeDelay = slow ? 300 : 50

  return (
    <div className="flex flex-col items-start gap-3">
      <Button
        type="button"
        size="sm"
        variant={slow ? "default" : "outline"}
        onClick={() => setSlow((value) => !value)}
      >
        {slow ? "Slow hover (400 / 300)" : "Fast hover (50 / 50)"}
      </Button>
      <NavigationMenu delay={delay} closeDelay={closeDelay}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hover me</NavigationMenuTrigger>
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}`}
        actions={(direction) => (
          <Button
            type="button"
            size="sm"
            variant={slow ? "default" : "outline"}
            onClick={() => {
              setSlow((value) => !value)
            }}
          >
            {slow
              ? direction === "rtl"
                ? "هاور آهسته (۴۰۰ / ۳۰۰)"
                : "Slow hover (400 / 300)"
              : direction === "rtl"
                ? "هاور سریع (۵۰ / ۵۰)"
                : "Fast hover (50 / 50)"}
          </Button>
        )}
      >
        {(direction) => (
          <div className="flex min-h-40 flex-col items-start gap-3 pt-2" dir={direction}>
            <NavigationMenu delay={delay} closeDelay={closeDelay}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "هاور کنید" : "Hover me"}
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
              </NavigationMenuList>
            </NavigationMenu>
            <p className="text-xs text-muted-foreground tabular-nums">
              delay {delay} · closeDelay {closeDelay}
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { NavigationMenuDelaysPreview }
