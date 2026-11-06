import { useState } from "react"
import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { render, screen } from "@/test/render"

describe("NavigationMenu", () => {
  it("opens a panel and shows a link", async () => {
    const { user } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/docs">Introduction</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    await user.click(screen.getByRole("button", { name: "Docs" }))
    expect(
      await screen.findByRole("link", { name: "Introduction" })
    ).toBeInTheDocument()
  })

  it("renders a top-level link with trigger styles", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs"
              className={navigationMenuTriggerStyle()}
            >
              Docs
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute(
      "href",
      "/docs"
    )
  })

  it("skips the default positioner when withPositioner is false", () => {
    render(
      <NavigationMenu withPositioner={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Inline</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(
      document.querySelector('[data-slot="navigation-menu-positioner"]')
    ).not.toBeInTheDocument()
  })

  it("renders a popup arrow when showArrow is set", async () => {
    const { user } = render(
      <NavigationMenu showArrow>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/docs">Introduction</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    await user.click(screen.getByRole("button", { name: "Overview" }))
    expect(
      await screen.findByRole("link", { name: "Introduction" })
    ).toBeInTheDocument()
    expect(
      document.querySelector('[data-slot="navigation-menu-arrow"]')
    ).toBeInTheDocument()
  })

  it("opens when controlled value is set", async () => {
    const Harness = () => {
      const [value, setValue] = useState<string | null>(null)

      return (
        <>
          <Button type="button" onClick={() => setValue("components")}>
            Open Components
          </Button>
          <NavigationMenu value={value} onValueChange={setValue}>
            <NavigationMenuList>
              <NavigationMenuItem value="components">
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/docs/components">
                    Catalog
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>
      )
    }

    const { user } = render(<Harness />)

    await user.click(screen.getByRole("button", { name: "Open Components" }))
    expect(
      await screen.findByRole("link", { name: "Catalog" })
    ).toBeInTheDocument()
  })
})
