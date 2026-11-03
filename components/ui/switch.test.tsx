import { describe, expect, it } from "vitest"

import { Switch, SwitchThumb } from "@/components/ui/switch"
import { render, screen } from "@/test/render"

describe("Switch", () => {
  it("toggles checked state", async () => {
    const { user } = render(
      <Switch aria-label="Notifications">
        <SwitchThumb />
      </Switch>
    )

    const control = screen.getByRole("switch", { name: "Notifications" })
    expect(control).not.toBeChecked()
    await user.click(control)
    expect(control).toBeChecked()
  })
})
