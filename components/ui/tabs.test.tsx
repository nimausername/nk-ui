import { describe, expect, it } from "vitest"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { render, screen } from "@/test/render"

describe("Tabs", () => {
  it("switches panels on trigger click", async () => {
    const { user } = render(
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Panel one</TabsContent>
        <TabsContent value="two">Panel two</TabsContent>
      </Tabs>
    )

    expect(screen.getByText("Panel one")).toBeVisible()
    await user.click(screen.getByRole("tab", { name: "Two" }))
    expect(screen.getByText("Panel two")).toBeVisible()
  })
})
