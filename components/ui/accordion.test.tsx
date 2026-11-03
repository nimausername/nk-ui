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
})
