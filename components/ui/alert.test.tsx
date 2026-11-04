import { describe, expect, it } from "vitest"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { render, screen } from "@/test/render"

describe("Alert", () => {
  it("exposes an alert role with title and description", () => {
    render(
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Something changed.</AlertDescription>
      </Alert>
    )

    expect(screen.getByRole("alert")).toBeInTheDocument()
    expect(screen.getByText("Heads up")).toBeInTheDocument()
    expect(screen.getByText("Something changed.")).toBeInTheDocument()
  })

  it("renders an action slot", () => {
    render(
      <Alert>
        <AlertTitle>Update</AlertTitle>
        <AlertDescription>A new version is ready.</AlertDescription>
        <AlertAction>
          <button type="button">Install</button>
        </AlertAction>
      </Alert>
    )

    expect(screen.getByRole("button", { name: "Install" })).toBeInTheDocument()
  })

  it("applies success variant classes", () => {
    render(
      <Alert variant="success">
        <AlertTitle>Saved</AlertTitle>
      </Alert>
    )

    expect(screen.getByRole("alert")).toHaveClass("text-success")
  })
})
