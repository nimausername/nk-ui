import { useState } from "react"
import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLinkItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { render, screen } from "@/test/render"

describe("ContextMenu", () => {
  it("opens on right click and shows an item", async () => {
    const { user } = render(
      <ContextMenu>
        <ContextMenuTrigger className="flex h-24 w-48 items-center justify-center border">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    await user.pointer({
      keys: "[MouseRight]",
      target: screen.getByText("Right click here"),
    })

    expect(await screen.findByRole("menuitem", { name: "Open" })).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "Delete" })).toBeInTheDocument()
  })

  it("opens when controlled open is set", async () => {
    const Controlled = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button type="button" onClick={() => setOpen(true)}>
            Open menu
          </Button>
          <ContextMenu open={open} onOpenChange={setOpen}>
            <ContextMenuTrigger className="flex h-12 w-40 items-center justify-center border">
              Surface
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Rename</ContextMenuItem>
              <ContextMenuLinkItem href="#docs" closeOnClick>
                Docs
              </ContextMenuLinkItem>
            </ContextMenuContent>
          </ContextMenu>
        </>
      )
    }

    const { user } = render(<Controlled />)

    await user.click(screen.getByRole("button", { name: "Open menu" }))
    expect(await screen.findByRole("menuitem", { name: "Rename" })).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "Docs" })).toBeInTheDocument()
  })
})
