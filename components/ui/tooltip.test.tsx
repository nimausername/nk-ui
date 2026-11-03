import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { render, screen } from "@/test/render"

describe("Tooltip", () => {
  it("shows content on hover", async () => {
    const { user } = render(
      <Tooltip>
        <TooltipTrigger render={<Button />}>Hint</TooltipTrigger>
        <TooltipContent>More detail</TooltipContent>
      </Tooltip>
    )

    await user.hover(screen.getByRole("button", { name: "Hint" }))
    expect(await screen.findByText("More detail")).toBeInTheDocument()
  })
})
