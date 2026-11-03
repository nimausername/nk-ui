import { describe, expect, it, vi } from "vitest"

import { Button } from "@/components/ui/button"
import { render, screen } from "@/test/render"

describe("Button", () => {
  it("renders and handles click", async () => {
    const handleClick = vi.fn()
    const { user } = render(<Button onClick={handleClick}>Save</Button>)

    await user.click(screen.getByRole("button", { name: "Save" }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("sets aria-busy when loading", () => {
    render(
      <Button loading loadingLabel="Saving">
        Save
      </Button>
    )

    expect(screen.getByRole("button", { name: "Saving" })).toHaveAttribute(
      "aria-busy",
      "true"
    )
  })
})
