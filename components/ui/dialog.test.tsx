import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { render, screen } from "@/test/render"

describe("Dialog", () => {
  it("opens and shows the title", async () => {
    const { user } = render(
      <Dialog>
        <DialogTrigger render={<Button />}>Open dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm</DialogTitle>
            <DialogDescription>This cannot be undone.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByRole("button", { name: "Open dialog" }))
    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("Confirm")).toBeInTheDocument()
  })
})
