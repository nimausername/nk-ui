import { describe, expect, it } from "vitest"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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
})
