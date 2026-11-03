import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { render, screen } from "@/test/render"

describe("Popover", () => {
  it("opens content from the trigger", async () => {
    const { user } = render(
      <Popover>
        <PopoverTrigger render={<Button />}>Open popover</PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the canvas size.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByRole("button", { name: "Open popover" }))
    expect(await screen.findByText("Dimensions")).toBeInTheDocument()
  })
})
