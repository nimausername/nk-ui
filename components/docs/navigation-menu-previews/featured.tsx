"use client"

import Link from "next/link"

import { CardBrandMistField } from "@/components/docs/card-previews/mist"
import { ComponentPreview } from "@/components/docs/component-preview"
import { NkMark } from "@/components/site/nk-mark"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

/**
 * Featured mega — brand mist promo beside described links.
 */
const NavigationMenuFeaturedPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Featured</h2>
      <p className="text-sm text-muted-foreground">
        Brand mist + nk mark beside described links — same atmosphere as Card
        media covers.
      </p>
      <ComponentPreview
        code={`import Link from "next/link"

import { NkMark } from "@/components/site/nk-mark"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ShaderBackground } from "@/components/ui/shader-background"

export function NavigationMenuFeatured() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Start</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-1.5 md:w-[28rem] md:grid-cols-[0.9fr_1.1fr]">
              <li className="md:row-span-3">
                <NavigationMenuLink
                  render={<Link href="/docs" />}
                  className="relative flex h-full min-h-40 flex-col overflow-hidden rounded-md p-0"
                >
                  <ShaderBackground
                    effect="mist"
                    className="absolute inset-0"
                    colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
                    colorBack="#000000"
                    softness={0.65}
                    speed={0.45}
                  />
                  <span
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <NkMark
                      size="md"
                      className="size-8 rounded-md text-xs shadow-sm"
                    />
                  </span>
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 mt-auto space-y-0.5 p-3.5">
                    <span className="block text-sm font-medium">nk</span>
                    <span className="block text-xs leading-snug text-muted-foreground">
                      UI you own — with real RTL.
                    </span>
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink render={<Link href="/docs" />}>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Introduction</span>
                    <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      What nk is and how the registry works.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/installation" />}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Installation</span>
                    <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      Add the registry and install components.
                    </span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  render={<Link href="/docs/components" />}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">Components</span>
                    <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      Browse the full catalog.
                    </span>
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
            className="flex min-h-56 items-start justify-center pt-2"
            dir={direction}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {direction === "rtl" ? "شروع" : "Start"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-1.5 md:w-[28rem] md:grid-cols-[0.9fr_1.1fr]">
                      <li className="md:row-span-3">
                        <NavigationMenuLink
                          render={<Link href="/docs" />}
                          className="relative flex h-full min-h-40 flex-col overflow-hidden rounded-md p-0"
                          aria-label={
                            direction === "rtl"
                              ? "nk — UI که مال خودتان است"
                              : "nk — UI you own"
                          }
                        >
                          <CardBrandMistField className="absolute inset-0" />
                          <span
                            className="absolute inset-0 z-10 flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <NkMark
                              size="md"
                              className="size-8 rounded-md text-xs shadow-sm"
                            />
                          </span>
                          <span
                            className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                            aria-hidden="true"
                          />
                          <span className="relative z-10 mt-auto space-y-0.5 p-3.5">
                            <span className="block text-sm font-medium">nk</span>
                            <span className="block text-xs leading-snug text-muted-foreground">
                              {direction === "rtl"
                                ? "UI که مال خودتان است — با RTL واقعی."
                                : "UI you own — with real RTL."}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink render={<Link href="/docs" />}>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {direction === "rtl" ? "مقدمه" : "Introduction"}
                            </span>
                            <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {direction === "rtl"
                                ? "nk چیست و رجیستری چطور کار می‌کند."
                                : "What nk is and how the registry works."}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/installation" />}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {direction === "rtl" ? "نصب" : "Installation"}
                            </span>
                            <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {direction === "rtl"
                                ? "رجیستری را اضافه کنید و کامپوننت نصب کنید."
                                : "Add the registry and install components."}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          render={<Link href="/docs/components" />}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-foreground">
                              {direction === "rtl"
                                ? "کامپوننت‌ها"
                                : "Components"}
                            </span>
                            <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {direction === "rtl"
                                ? "فهرست کامل را ببینید."
                                : "Browse the full catalog."}
                            </span>
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

export { NavigationMenuFeaturedPreview }
