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
 * Controlled value — external buttons drive which panel is open.
 */
const NavigationMenuControlledPreview = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Controlled</h2>
      <p className="text-sm text-muted-foreground">
        Drive{" "}
        <code className="rounded bg-muted px-1 text-xs">value</code> /{" "}
        <code className="rounded bg-muted px-1 text-xs">onValueChange</code> when
        another control should open a panel.
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

export function NavigationMenuControlled() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setValue("docs")}
        >
          Open Docs
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setValue("registry")}
        >
          Open Registry
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => setValue(null)}
        >
          Close
        </Button>
      </div>
      <NavigationMenu value={value} onValueChange={setValue}>
        <NavigationMenuList>
          <NavigationMenuItem value="docs">
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-52 gap-1">
                <li>
                  <NavigationMenuLink render={<Link href="/docs" />}>
                    Introduction
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    render={<Link href="/docs/installation" />}
                  >
                    Installation
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="registry">
            <NavigationMenuTrigger>Registry</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-52 gap-1">
                <li>
                  <NavigationMenuLink
                    render={<Link href="/docs/components" />}
                  >
                    Components
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground tabular-nums">
        value: {value ?? "null"}
      </p>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-start gap-3" dir={direction}>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setValue("docs")
                }}
              >
                {direction === "rtl" ? "باز کردن Docs" : "Open Docs"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => {
                  setValue("registry")
                }}
              >
                {direction === "rtl" ? "باز کردن Registry" : "Open Registry"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => {
                  setValue(null)
                }}
              >
                {direction === "rtl" ? "بستن" : "Close"}
              </Button>
            </div>
            <NavigationMenu value={value} onValueChange={setValue}>
              <NavigationMenuList>
                <NavigationMenuItem value="docs">
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "مستندات" : "Docs"}
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
                <NavigationMenuItem value="registry">
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "رجیستری" : "Registry"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-52 gap-1">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components" />}
                        >
                          {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <p className="text-xs text-muted-foreground tabular-nums">
              value: {value ?? "null"}
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { NavigationMenuControlledPreview }
