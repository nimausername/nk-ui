import { describe, expect, it } from "vitest"

import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { render, screen } from "@/test/render"

describe("HoverCard", () => {
  it("opens on hover and shows content", async () => {
    const { user } = render(
      <HoverCard>
        <p>
          Read about{" "}
          <HoverCardTrigger
            delay={0}
            closeDelay={0}
            href="https://en.wikipedia.org/wiki/Typography"
            className="underline"
          >
            typography
          </HoverCardTrigger>
          .
        </p>
        <HoverCardContent>
          <HoverCardHeader>
            <HoverCardTitle>Typography</HoverCardTitle>
            <HoverCardDescription>
              The art of arranging type.
            </HoverCardDescription>
          </HoverCardHeader>
        </HoverCardContent>
      </HoverCard>
    )

    await user.hover(screen.getByRole("link", { name: "typography" }))
    expect(await screen.findByText("Typography")).toBeInTheDocument()
    expect(screen.getByText("The art of arranging type.")).toBeInTheDocument()
  })
})
