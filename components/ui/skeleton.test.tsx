import { describe, expect, it } from "vitest"

import { Skeleton } from "@/components/ui/skeleton"
import { render, screen } from "@/test/render"

describe("Skeleton", () => {
  it("renders a placeholder with data-slot", () => {
    render(<Skeleton data-testid="skel" className="h-4 w-24" />)

    const el = screen.getByTestId("skel")
    expect(el).toHaveAttribute("data-slot", "skeleton")
    expect(el).toHaveClass("animate-pulse")
  })
})
