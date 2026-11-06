"use client"

import Link from "next/link"
import { useState } from "react"

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
 * Link options — active page marker and closeOnClick.
 */
const NavigationMenuLinkOptionsPreview = () => {
  const [path, setPath] = useState("/docs/components")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Link options</h2>
      <p className="text-sm text-muted-foreground">
        Mark the current page with{" "}
        <code className="rounded bg-muted px-1 text-xs">active</code>. Use{" "}
        <code className="rounded bg-muted px-1 text-xs">closeOnClick</code> when
        a link should dismiss the panel.
      </p>
      <ComponentPreview
        code={`"use client"

import Link from "next/link"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuLinkOptions() {
  const [path, setPath] = useState("/docs/components")

  return (
    <div className="flex flex-col items-start gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink
                    render={<Link href="/docs" />}
                    active={path === "/docs"}
                    closeOnClick
                    onClick={() => setPath("/docs")}
                  >
                    Introduction
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    render={<Link href="/docs/components" />}
                    active={path === "/docs/components"}
                    closeOnClick
                    onClick={() => setPath("/docs/components")}
                  >
                    Components
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    render={<Link href="/docs/installation" />}
                    active={path === "/docs/installation"}
                    closeOnClick
                    onClick={() => setPath("/docs/installation")}
                  >
                    Installation
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">Active path: {path}</p>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex min-h-40 flex-col items-start gap-3 pt-2" dir={direction}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "مرور" : "Browse"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-1">
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs" />}
                          active={path === "/docs"}
                          closeOnClick
                          onClick={() => {
                            setPath("/docs")
                          }}
                        >
                          {direction === "rtl" ? "مقدمه" : "Introduction"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components" />}
                          active={path === "/docs/components"}
                          closeOnClick
                          onClick={() => {
                            setPath("/docs/components")
                          }}
                        >
                          {direction === "rtl" ? "کامپوننت‌ها" : "Components"}
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/installation" />}
                          active={path === "/docs/installation"}
                          closeOnClick
                          onClick={() => {
                            setPath("/docs/installation")
                          }}
                        >
                          {direction === "rtl" ? "نصب" : "Installation"}
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <p className="text-xs text-muted-foreground">
              {direction === "rtl" ? "مسیر فعال: " : "Active path: "}
              <span className="font-mono">{path}</span>
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { NavigationMenuLinkOptionsPreview }
