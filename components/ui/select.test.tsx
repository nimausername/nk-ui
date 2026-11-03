import { describe, expect, it } from "vitest"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { render, screen } from "@/test/render"

const items = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
]

describe("Select", () => {
  it("opens and lists options", async () => {
    const { user } = render(
      <Select items={items} defaultValue="next">
        <SelectTrigger aria-label="Framework">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )

    await user.click(screen.getByRole("combobox", { name: "Framework" }))
    expect(await screen.findByRole("option", { name: "Vite" })).toBeInTheDocument()
  })
})
