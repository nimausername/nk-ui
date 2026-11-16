import { FolderOpen } from "lucide-react"
import { describe, expect, it } from "vitest"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { render, screen } from "@/test/render"

describe("Empty", () => {
  it("renders composition slots", () => {
    render(
      <Empty data-testid="empty">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderOpen aria-hidden />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>Create your first project to get started.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <button type="button">Create project</button>
        </EmptyContent>
      </Empty>
    )

    expect(screen.getByTestId("empty")).toHaveAttribute("data-slot", "empty")
    expect(screen.getByText("No projects yet")).toHaveAttribute(
      "data-slot",
      "empty-title"
    )
    expect(
      screen.getByText("Create your first project to get started.")
    ).toHaveAttribute("data-slot", "empty-description")
    expect(screen.getByRole("button", { name: "Create project" })).toBeInTheDocument()
  })

  it("applies the icon media tile", () => {
    render(
      <EmptyMedia variant="icon" data-testid="media">
        <FolderOpen aria-hidden />
      </EmptyMedia>
    )

    const media = screen.getByTestId("media")
    expect(media).toHaveAttribute("data-slot", "empty-media")
    expect(media).toHaveAttribute("data-variant", "icon")
    expect(media).toHaveClass("bg-muted")
  })
})
