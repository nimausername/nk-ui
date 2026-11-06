import { useState } from "react"
import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { render, screen } from "@/test/render"

describe("Menubar", () => {
  it("opens a menu and shows an item", async () => {
    const { user } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByRole("menuitem", { name: "File" }))
    expect(
      await screen.findByRole("menuitem", { name: "New Tab" })
    ).toBeInTheDocument()
  })

  it("toggles a checkbox item", async () => {
    const Harness = () => {
      const [guides, setGuides] = useState(false)

      return (
        <div>
          <p>guides:{guides ? "on" : "off"}</p>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem
                  checked={guides}
                  onCheckedChange={(checked) => {
                    setGuides(checked === true)
                  }}
                >
                  Guides
                </MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      )
    }

    const { user } = render(<Harness />)

    expect(screen.getByText("guides:off")).toBeInTheDocument()
    await user.click(screen.getByRole("menuitem", { name: "View" }))
    const item = await screen.findByRole("menuitemcheckbox", { name: "Guides" })
    expect(item).toHaveAttribute("aria-checked", "false")
    await user.click(item)
    expect(await screen.findByText("guides:on")).toBeInTheDocument()
  })

  it("selects a radio item", async () => {
    const Harness = () => {
      const [mode, setMode] = useState("design")

      return (
        <div>
          <p>mode:{mode}</p>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Workspace</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value={mode} onValueChange={setMode}>
                  <MenubarRadioItem value="design">Design</MenubarRadioItem>
                  <MenubarRadioItem value="dev">Dev mode</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      )
    }

    const { user } = render(<Harness />)

    expect(screen.getByText("mode:design")).toBeInTheDocument()
    await user.click(screen.getByRole("menuitem", { name: "Workspace" }))
    expect(
      await screen.findByRole("menuitemradio", { name: "Design" })
    ).toHaveAttribute("aria-checked", "true")
    await user.click(screen.getByRole("menuitemradio", { name: "Dev mode" }))
    expect(await screen.findByText("mode:dev")).toBeInTheDocument()
  })

  it("opens a submenu", async () => {
    const { user } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Export</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Raster</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PNG</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    await user.click(screen.getByRole("menuitem", { name: "Export" }))
    await user.hover(await screen.findByRole("menuitem", { name: "Raster" }))
    expect(
      await screen.findByRole("menuitem", { name: "PNG" })
    ).toBeInTheDocument()
  })

  it("does not open when the menubar is disabled", async () => {
    const { user } = render(
      <Menubar disabled>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    const trigger = screen.getByRole("menuitem", { name: "File" })
    expect(trigger).toHaveAttribute("aria-disabled", "true")
    await user.click(trigger)
    expect(screen.queryByRole("menuitem", { name: "New Tab" })).not.toBeInTheDocument()
  })

  it("opens when a menu is controlled open", async () => {
    const Harness = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button type="button" onClick={() => setOpen(true)}>
            Open Help
          </Button>
          <Menubar>
            <MenubarMenu open={open} onOpenChange={setOpen}>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Docs</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </>
      )
    }

    const { user } = render(<Harness />)

    await user.click(screen.getByRole("button", { name: "Open Help" }))
    expect(
      await screen.findByRole("menuitem", { name: "Docs" })
    ).toBeInTheDocument()
  })
})
