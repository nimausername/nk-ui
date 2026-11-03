import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { render, screen } from "@/test/render"

describe("Toast", () => {
  it("shows a toast from the shared manager", async () => {
    const { user } = render(
      <Button
        onClick={() => {
          toast.add({ title: "Saved", type: "success" })
        }}
      >
        Notify
      </Button>
    )

    await user.click(screen.getByRole("button", { name: "Notify" }))
    expect(await screen.findByText("Saved")).toBeInTheDocument()
  })
})
