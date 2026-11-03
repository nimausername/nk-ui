import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { render, screen } from "@/test/render"

describe("DropdownMenu", () => {
  it("opens and shows an item", async () => {
    const { user } = render(
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button />}>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByRole("button", { name: "Open menu" }))
    expect(await screen.findByRole("menuitem", { name: "Profile" })).toBeInTheDocument()
  })
})
