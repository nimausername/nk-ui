import { describe, expect, it } from "vitest"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { render, screen } from "@/test/render"

describe("Card", () => {
  it("renders composed parts", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Project</CardTitle>
          <CardDescription>Deploy status</CardDescription>
          <CardAction>
            <button type="button">Menu</button>
          </CardAction>
        </CardHeader>
        <CardContent>Body copy</CardContent>
        <CardFooter>
          <button type="button">Continue</button>
        </CardFooter>
      </Card>
    )

    expect(screen.getByText("Project")).toHaveAttribute("data-slot", "card-title")
    expect(screen.getByText("Deploy status")).toHaveAttribute(
      "data-slot",
      "card-description"
    )
    expect(screen.getByText("Body copy")).toHaveAttribute("data-slot", "card-content")
    expect(screen.getByRole("button", { name: "Menu" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument()
  })
})
