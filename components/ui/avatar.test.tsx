import { describe, expect, it } from "vitest"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
})
