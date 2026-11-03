import { describe, expect, it } from "vitest"

import { ProgressButton } from "@/components/ui/progress-button"
import { render, screen } from "@/test/render"

describe("ProgressButton", () => {
  it("exposes progress while in flight", () => {
    render(<ProgressButton progress={42} />)

    const button = screen.getByRole("button", { name: /Downloading 42%/ })
    expect(button).toHaveAttribute("aria-valuenow", "42")
    expect(button).toBeDisabled()
  })

  it("enables when complete", () => {
    render(<ProgressButton progress={100} />)

    expect(
      screen.getByRole("button", { name: "Download ready" })
    ).toBeEnabled()
  })
})
