import { describe, expect, it } from "vitest"

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { render, screen } from "@/test/render"

describe("Accordion", () => {
  it("expands a panel when the trigger is clicked", async () => {
    const { user } = render(
      <Accordion>
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>Section A</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Content A</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByRole("button", { name: "Section A" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    await user.click(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("Content A")).toBeVisible()
  })

  it("disables an individual item", () => {
    render(
      <Accordion>
        <AccordionItem value="a" disabled>
          <AccordionHeader>
            <AccordionTrigger>Locked</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Hidden</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByRole("button", { name: "Locked" })).toBeDisabled()
  })

  it("hides the default chevron when showChevron is false", () => {
    const { container } = render(
      <Accordion>
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger showChevron={false}>Custom</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Body</AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    expect(
      container.querySelector('[data-slot="accordion-trigger-chevron"]')
    ).not.toBeInTheDocument()
  })
})
