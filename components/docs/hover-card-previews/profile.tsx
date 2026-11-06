"use client"

import { CalendarDays } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
 * Profile hover card — avatar, bio, meta, and a follow action.
 */
const HoverCardProfilePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Profile</h2>
      <p className="text-sm text-muted-foreground">
        Compose Avatar, header copy, and a Button inside the card body.
      </p>
      <ComponentPreview
        code={`import { CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardProfile() {
  return (
    <HoverCard>
      <HoverCardTrigger
        render={<Button variant="link" className="h-auto p-0" />}
      >
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@nextjs" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <HoverCardHeader className="space-y-1">
            <HoverCardTitle>@nextjs</HoverCardTitle>
            <HoverCardDescription>
              The React Framework – created and maintained by @vercel.
            </HoverCardDescription>
            <div className="flex items-center gap-1.5 pt-2 text-xs text-muted-foreground">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              Joined December 2021
            </div>
          </HoverCardHeader>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
      >
        {(direction) => (
          <HoverCard>
            <HoverCardTrigger
              delay={200}
              closeDelay={100}
              render={
                <Button type="button" variant="link" className="h-auto p-0" />
              }
            >
              @nextjs
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between gap-4" dir={direction}>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" alt="@nextjs" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <HoverCardHeader className="space-y-1">
                  <HoverCardTitle>@nextjs</HoverCardTitle>
                  <HoverCardDescription>
                    {direction === "rtl"
                      ? "فریمورک React — ساخته و نگهداری‌شده توسط @vercel."
                      : "The React Framework – created and maintained by @vercel."}
                  </HoverCardDescription>
                  <div className="flex items-center gap-1.5 pt-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {direction === "rtl"
                      ? "عضویت از دسامبر ۲۰۲۱"
                      : "Joined December 2021"}
                  </div>
                </HoverCardHeader>
              </div>
            </HoverCardContent>
          </HoverCard>
        )}
      </ComponentPreview>
    </section>
  )
}

export { HoverCardProfilePreview }
