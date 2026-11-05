import { describe, expect, it, vi } from "vitest"

import { Calendar } from "@/components/ui/calendar"
import { render, screen } from "@/test/render"

describe("Calendar", () => {
  it("renders a grid with weekday headers and navigation", () => {
    render(
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 10, 5)}
        selected={new Date(2026, 10, 5)}
      />
    )

    expect(screen.getByRole("grid")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /previous month/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /next month/i })
    ).toBeInTheDocument()
    expect(screen.getByText("November 2026")).toBeInTheDocument()
  })

  it("marks the selected day", () => {
    render(
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 10, 5)}
        selected={new Date(2026, 10, 5)}
      />
    )

    const selected = screen.getByRole("gridcell", { selected: true })
    expect(selected).toBeInTheDocument()
    expect(selected).toHaveTextContent("5")
  })

  it("calls onSelect when a day is chosen", async () => {
    const handleSelect = vi.fn()

    const { user } = render(
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 10, 5)}
        onSelect={handleSelect}
      />
    )

    const day = screen.getByRole("gridcell", { name: "12" })
    await user.click(day.querySelector("button") ?? day)

    expect(handleSelect).toHaveBeenCalled()
    const selectedDate = handleSelect.mock.calls[0]?.[0] as Date | undefined
    expect(selectedDate).toBeInstanceOf(Date)
    expect(selectedDate?.getDate()).toBe(12)
  })
})
