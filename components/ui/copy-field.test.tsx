import { describe, expect, it, vi } from "vitest"

import { CopyField } from "@/components/ui/copy-field"
import { render, screen, waitFor } from "@/test/render"

describe("CopyField", () => {
  it("copies the value and shows the copied state", async () => {
    const handleCopied = vi.fn()
    const { user } = render(
      <CopyField
        aria-label="Invite link"
        defaultValue="https://nk.dev"
        successToastTitle={null}
        onCopied={handleCopied}
      />
    )

    expect(screen.getByRole("textbox", { name: "Invite link" })).toHaveValue(
      "https://nk.dev"
    )

    await user.click(screen.getByRole("button", { name: "Copy" }))

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument()
    })
    expect(handleCopied).toHaveBeenCalledWith("https://nk.dev")
  })
})
