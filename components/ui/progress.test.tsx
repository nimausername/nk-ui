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
})
