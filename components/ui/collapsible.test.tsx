import { describe, expect, it } from "vitest"

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { render, screen } from "@/test/render"

describe("Collapsible", () => {
  it("expands the panel when the trigger is clicked", async () => {
    const { user } = render(
      <Collapsible>
        <CollapsibleTrigger>Details</CollapsibleTrigger>
        <CollapsiblePanel>Hidden until open</CollapsiblePanel>
      </Collapsible>
    )

    const trigger = screen.getByRole("button", { name: "Details" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("Hidden until open")).toBeVisible()
  })

  it("starts open when defaultOpen is set", () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Details</CollapsibleTrigger>
        <CollapsiblePanel>Already visible</CollapsiblePanel>
      </Collapsible>
    )

    expect(screen.getByRole("button", { name: "Details" })).toHaveAttribute(
      "aria-expanded",
      "true"
    )
    expect(screen.getByText("Already visible")).toBeVisible()
  })

  it("disables the trigger when the root is disabled", () => {
    render(
      <Collapsible disabled>
        <CollapsibleTrigger>Locked</CollapsibleTrigger>
        <CollapsiblePanel>Hidden</CollapsiblePanel>
      </Collapsible>
    )

    expect(screen.getByRole("button", { name: "Locked" })).toBeDisabled()
  })

  it("hides the default chevron when showChevron is false", () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger showChevron={false}>Custom</CollapsibleTrigger>
        <CollapsiblePanel>Body</CollapsiblePanel>
      </Collapsible>
    )

    expect(
      container.querySelector('[data-slot="collapsible-trigger-chevron"]')
    ).not.toBeInTheDocument()
  })
})
