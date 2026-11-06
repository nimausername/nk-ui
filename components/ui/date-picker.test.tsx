import { describe, expect, it, vi } from "vitest"

import {
  DatePicker,
  DatePickerInput,
  DatePickerNatural,
  DateRangePicker,
  DateTimePicker,
} from "@/components/ui/date-picker"
import { render, screen } from "@/test/render"

describe("DatePicker", () => {
  it("shows the placeholder when empty", () => {
    render(<DatePicker placeholder="Pick a date" />)

    expect(
      screen.getByRole("button", { name: /pick a date/i })
    ).toBeInTheDocument()
  })

  it("shows a formatted value when provided", () => {
    render(
      <DatePicker
        value={new Date(2026, 10, 5)}
        formatStr="PPP"
      />
    )

    expect(
      screen.getByRole("button", { name: /November 5th, 2026/i })
    ).toBeInTheDocument()
  })

  it("opens a calendar and selects a day", async () => {
    const handleChange = vi.fn()
    const { user } = render(
      <DatePicker
        defaultMonth={new Date(2026, 10, 1)}
        onValueChange={handleChange}
        placeholder="Pick a date"
      />
    )

    await user.click(screen.getByRole("button", { name: /pick a date/i }))
    expect(screen.getByRole("grid")).toBeInTheDocument()

    const day = screen.getByRole("gridcell", { name: "12" })
    await user.click(day.querySelector("button") ?? day)

    expect(handleChange).toHaveBeenCalled()
    const selected = handleChange.mock.calls[0]?.[0] as Date | undefined
    expect(selected?.getDate()).toBe(12)
  })
})

describe("DateRangePicker", () => {
  it("shows the placeholder when empty", () => {
    render(<DateRangePicker placeholder="Pick a date range" />)

    expect(
      screen.getByRole("button", { name: /pick a date range/i })
    ).toBeInTheDocument()
  })

  it("shows a formatted range when provided", () => {
    render(
      <DateRangePicker
        value={{
          from: new Date(2026, 10, 10),
          to: new Date(2026, 10, 18),
        }}
        formatStr="LLL dd, y"
      />
    )

    expect(
      screen.getByRole("button", { name: /Nov 10, 2026.*Nov 18, 2026/i })
    ).toBeInTheDocument()
  })
})

describe("DatePickerInput", () => {
  it("renders a text field with the formatted value", () => {
    render(
      <DatePickerInput value={new Date(2026, 10, 5)} formatStr="yyyy-MM-dd" />
    )

    expect(screen.getByDisplayValue("2026-11-05")).toBeInTheDocument()
  })
})

describe("DateTimePicker", () => {
  it("shows date and time in the trigger", () => {
    render(
      <DateTimePicker
        value={new Date(2026, 10, 5, 14, 30)}
        formatStr="PPP p"
      />
    )

    expect(
      screen.getByRole("button", { name: /November 5th, 2026/i })
    ).toBeInTheDocument()
  })
})

describe("DatePickerNatural", () => {
  it("parses a natural language phrase", async () => {
    const handleChange = vi.fn()
    const { user } = render(
      <DatePickerNatural
        onValueChange={handleChange}
        placeholder="Tomorrow or next Friday"
      />
    )

    await user.type(
      screen.getByPlaceholderText("Tomorrow or next Friday"),
      "tomorrow"
    )

    expect(handleChange).toHaveBeenCalled()
    const selected = handleChange.mock.calls.at(-1)?.[0] as Date | undefined
    expect(selected).toBeInstanceOf(Date)
  })
})
