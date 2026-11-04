import { describe, expect, it } from "vitest"

import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"
import { render, screen } from "@/test/render"

describe("Progress", () => {
  it("exposes a progressbar with the current value", () => {
    render(
      <Progress value={40}>
        <div className="flex items-center justify-between gap-2">
          <ProgressLabel>Upload</ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    )

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "40")
    expect(screen.getByText("Upload")).toBeInTheDocument()
  })

  it("supports a custom max", () => {
    render(
      <Progress value={3} max={5}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    )

    const bar = screen.getByRole("progressbar")
    expect(bar).toHaveAttribute("aria-valuenow", "3")
    expect(bar).toHaveAttribute("aria-valuemax", "5")
  })

  it("marks indeterminate when value is null", () => {
    render(
      <Progress value={null}>
        <ProgressTrack>
          <ProgressIndicator data-testid="indicator" />
        </ProgressTrack>
      </Progress>
    )

    expect(screen.getByRole("progressbar")).not.toHaveAttribute("aria-valuenow")
    expect(screen.getByTestId("indicator")).toHaveAttribute("data-indeterminate")
  })
})
