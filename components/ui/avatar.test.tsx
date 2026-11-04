import { describe, expect, it } from "vitest"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { render, screen } from "@/test/render"

describe("Avatar", () => {
  it("renders fallback initials", () => {
    render(
      <Avatar>
        <AvatarImage src="/missing.png" alt="Ada" />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText("AK")).toHaveAttribute("data-slot", "avatar-fallback")
  })

  it("applies size data attribute", () => {
    const { container } = render(
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    )

    expect(container.querySelector('[data-slot="avatar"]')).toHaveAttribute(
      "data-size",
      "lg"
    )
  })

  it("renders an avatar group", () => {
    render(
      <AvatarGroup aria-label="Team">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    )

    expect(screen.getByLabelText("Team")).toHaveAttribute("data-slot", "avatar-group")
  })
})
