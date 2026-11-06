"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
  HoverCardViewport,
  createHoverCardHandle,
} from "@/components/ui/hover-card"
import { ComponentPreview } from "@/components/docs/component-preview"

type TopicPayload = {
  readonly title: string
  readonly body: string
  readonly titleFa: string
  readonly bodyFa: string
}

const topicHandle = createHoverCardHandle<TopicPayload>()

const topics: readonly TopicPayload[] = [
  {
    title: "Spacing",
    body: "Use a consistent rhythm so related blocks feel grouped.",
    titleFa: "فاصله‌گذاری",
    bodyFa: "ریتم یکنواخت فاصله‌ها بلوک‌های مرتبط را کنار هم نگه می‌دارد.",
  },
  {
    title: "Contrast",
    body: "Keep body text readable against the surface in light and dark.",
    titleFa: "کنتراست",
    bodyFa: "متن بدنه باید روی سطح در حالت روشن و تیره خوانا بماند.",
  },
  {
    title: "Motion",
    body: "Short transitions reinforce hierarchy without distraction.",
    titleFa: "حرکت",
    bodyFa: "گذارهای کوتاه سلسله‌مراتب را تقویت می‌کنند بدون حواس‌پرتی.",
  },
]

/**
 * Multiple triggers + payload — one root, animated viewport content.
 */
const HoverCardMultiTriggerPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Multiple triggers</h2>
      <p className="text-sm text-muted-foreground">
        Share one root with{" "}
        <code className="rounded bg-muted px-1 text-xs">
          createHoverCardHandle()
        </code>{" "}
        and render each trigger{" "}
        <code className="rounded bg-muted px-1 text-xs">payload</code> inside{" "}
        <code className="rounded bg-muted px-1 text-xs">HoverCardViewport</code>.
      </p>
      <ComponentPreview
        code={`import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
  HoverCardViewport,
  createHoverCardHandle,
} from "@/components/ui/hover-card"

type TopicPayload = { title: string; body: string }

const topicHandle = createHoverCardHandle<TopicPayload>()

const topics = [
  { title: "Spacing", body: "Use a consistent rhythm…" },
  { title: "Contrast", body: "Keep body text readable…" },
  { title: "Motion", body: "Short transitions reinforce hierarchy…" },
]

export function HoverCardMultiTrigger() {
  return (
    <>
      <p className="text-sm text-pretty">
        Design systems balance{" "}
        {topics.map((topic, index) => (
          <span key={topic.title}>
            <HoverCardTrigger
              handle={topicHandle}
              payload={topic}
              delay={200}
              closeDelay={100}
              className="font-medium underline decoration-foreground/40 underline-offset-4"
            >
              {topic.title.toLowerCase()}
            </HoverCardTrigger>
            {index < topics.length - 1 ? ", " : ""}
          </span>
        ))}
        .
      </p>
      <HoverCard handle={topicHandle}>
        {({ payload }) => (
          <HoverCardContent className="w-72 overflow-hidden p-0">
            <HoverCardViewport className="p-3">
              <HoverCardHeader>
                <HoverCardTitle>{payload?.title ?? "Topic"}</HoverCardTitle>
                <HoverCardDescription>
                  {payload?.body ?? "Hover a term to preview it."}
                </HoverCardDescription>
              </HoverCardHeader>
            </HoverCardViewport>
          </HoverCardContent>
        )}
      </HoverCard>
    </>
  )
}`}
      >
        {(direction) => (
          <>
            <p className="max-w-lg text-sm text-pretty" dir={direction}>
              {direction === "rtl" ? (
                <>
                  سیستم‌های طراحی بین{" "}
                  {topics.map((topic, index) => (
                    <span key={topic.title}>
                      <HoverCardTrigger
                        handle={topicHandle}
                        payload={topic}
                        delay={200}
                        closeDelay={100}
                        className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
                      >
                        {topic.titleFa}
                      </HoverCardTrigger>
                      {index < topics.length - 1 ? "، " : ""}
                    </span>
                  ))}{" "}
                  تعادل برقرار می‌کنند.
                </>
              ) : (
                <>
                  Design systems balance{" "}
                  {topics.map((topic, index) => (
                    <span key={topic.title}>
                      <HoverCardTrigger
                        handle={topicHandle}
                        payload={topic}
                        delay={200}
                        closeDelay={100}
                        className="font-medium text-foreground underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground data-popup-open:decoration-foreground"
                      >
                        {topic.title.toLowerCase()}
                      </HoverCardTrigger>
                      {index < topics.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  .
                </>
              )}
            </p>
            <HoverCard handle={topicHandle}>
              {({ payload }) => (
                <HoverCardContent className="w-72 overflow-hidden p-0">
                  <HoverCardViewport className="p-3">
                    <HoverCardHeader>
                      <HoverCardTitle>
                        {direction === "rtl"
                          ? (payload?.titleFa ?? "موضوع")
                          : (payload?.title ?? "Topic")}
                      </HoverCardTitle>
                      <HoverCardDescription>
                        {direction === "rtl"
                          ? (payload?.bodyFa ??
                            "روی یک واژه بروید تا پیش‌نمایش ببینید.")
                          : (payload?.body ??
                            "Hover a term to preview it.")}
                      </HoverCardDescription>
                    </HoverCardHeader>
                  </HoverCardViewport>
                </HoverCardContent>
              )}
            </HoverCard>
          </>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardMultiTriggerPreview }
