"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

/**
 * Image + text — edge-to-edge media with a short caption.
 */
const HoverCardImageTextPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Image &amp; text</h2>
      <p className="text-sm text-muted-foreground">
        Full-bleed 16:9 media across the top of the card, then a title and one
        line of support.
      </p>
      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardImageText() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={100}
        closeDelay={100}
        render={<Button type="button" variant="outline" />}
      >
        View image
      </HoverCardTrigger>
      <HoverCardContent className="w-80 overflow-hidden p-0">
        <div
          className="aspect-video w-full bg-muted"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=640&h=360)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Abstract landing preview"
        />
        <HoverCardHeader className="space-y-1 p-3">
          <HoverCardTitle>Image overview</HoverCardTitle>
          <HoverCardDescription>
            Visual overview of a generated landing page.
          </HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>
  )
}`}
      >
        {(direction) => (
          <HoverCard>
            <HoverCardTrigger
              delay={100}
              closeDelay={100}
              render={<Button type="button" variant="outline" />}
            >
              {direction === "rtl" ? "مشاهده تصویر" : "View image"}
            </HoverCardTrigger>
            <HoverCardContent className="w-80 overflow-hidden p-0">
              <div
                className="aspect-video w-full bg-muted"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=640&h=360)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={
                  direction === "rtl"
                    ? "پیش‌نمایش انتزاعی لندینگ"
                    : "Abstract landing preview"
                }
              />
              <HoverCardHeader className="space-y-1 p-3">
                <HoverCardTitle>
                  {direction === "rtl" ? "نمای تصویر" : "Image overview"}
                </HoverCardTitle>
                <HoverCardDescription>
                  {direction === "rtl"
                    ? "نمای بصری از یک صفحهٔ فرود تولیدشده."
                    : "Visual overview of a generated landing page."}
                </HoverCardDescription>
              </HoverCardHeader>
            </HoverCardContent>
          </HoverCard>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardImageTextPreview }
