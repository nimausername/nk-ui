"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

/**
 * Basic link preview — hover a word to see destination media + copy.
 */
const HoverCardBasicPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Basic</h2>
      <p className="text-sm text-muted-foreground">
        Hover or focus the link. The card previews the destination without
        interrupting keyboard navigation.
      </p>
      <ComponentPreview
        code={`import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardBasic() {
  return (
    <HoverCard>
      <p className="text-sm text-pretty">
        The principles of good{" "}
        <HoverCardTrigger
          href="https://en.wikipedia.org/wiki/Typography"
          className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
        >
          typography
        </HoverCardTrigger>{" "}
        remain in the digital age.
      </p>
      <HoverCardContent className="w-80">
        <div
          className="mb-3 aspect-[3/2] w-full rounded-md bg-muted"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Station Hofplein"
        />
        <HoverCardHeader>
          <HoverCardTitle>Typography</HoverCardTitle>
          <HoverCardDescription>
            The art and science of arranging type so written language is clear,
            visually appealing, and effective.
          </HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>
  )
}`}
      >
        {(direction) => (
          <HoverCard>
            <p className="max-w-md text-sm text-pretty" dir={direction}>
              {direction === "rtl" ? (
                <>
                  اصول خوب{" "}
                  <HoverCardTrigger
                    delay={200}
                    closeDelay={100}
                    href="https://en.wikipedia.org/wiki/Typography"
                    className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
                  >
                    تایپوگرافی
                  </HoverCardTrigger>{" "}
                  در عصر دیجیتال هم برقرار است.
                </>
              ) : (
                <>
                  The principles of good{" "}
                  <HoverCardTrigger
                    delay={200}
                    closeDelay={100}
                    href="https://en.wikipedia.org/wiki/Typography"
                    className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
                  >
                    typography
                  </HoverCardTrigger>{" "}
                  remain in the digital age.
                </>
              )}
            </p>
            <HoverCardContent className="w-80">
              <div
                className="mb-3 aspect-[3/2] w-full rounded-md bg-muted"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label="Station Hofplein"
              />
              <HoverCardHeader>
                <HoverCardTitle>
                  {direction === "rtl" ? "تایپوگرافی" : "Typography"}
                </HoverCardTitle>
                <HoverCardDescription>
                  {direction === "rtl"
                    ? "هنر و علم چیدن حروف تا زبان نوشتاری روشن، زیبا و مؤثر باشد."
                    : "The art and science of arranging type so written language is clear, visually appealing, and effective."}
                </HoverCardDescription>
              </HoverCardHeader>
            </HoverCardContent>
          </HoverCard>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardBasicPreview }
