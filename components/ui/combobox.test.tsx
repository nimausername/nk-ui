import { describe, expect, it } from "vitest"

import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"
import { render, screen } from "@/test/render"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
] as const

describe("Combobox", () => {
  it("renders a labeled filter input", () => {
    render(
      <Combobox items={[...fruits]}>
        <ComboboxInputGroup>
          <ComboboxInput aria-label="Fruit" placeholder="Search fruit" />
          <ComboboxTrigger aria-label="Open" />
        </ComboboxInputGroup>
        <ComboboxContent>
          <ComboboxEmpty>No fruits found.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof fruits)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )

    expect(screen.getByRole("combobox", { name: "Fruit" })).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Search fruit")).toBeInTheDocument()
  })

  it("exposes a clear control when a value is selected", () => {
    render(
      <Combobox items={[...fruits]} defaultValue={fruits[0]}>
        <ComboboxInputGroup>
          <ComboboxInput aria-label="Fruit" />
          <ComboboxClear aria-label="Clear selection" />
          <ComboboxTrigger aria-label="Open" />
        </ComboboxInputGroup>
        <ComboboxContent>
          <ComboboxList>
            {(item: (typeof fruits)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )

    expect(
      screen.getByRole("button", { name: "Clear selection" })
    ).toBeInTheDocument()
  })
})
