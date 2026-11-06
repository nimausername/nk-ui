import Link from "next/link"
import { Playwrite_GB_S } from "next/font/google"

import { HomeComponentsBadge } from "@/components/site/home-components-badge"
import { HomeMistBackground } from "@/components/site/home-mist-background"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

/** Playwrite England SemiJoined — used only for the “with real RTL” accent. */
const playwriteEngland = Playwrite_GB_S({
  weight: "400",
})

/**
 * Marketing landing for the nk design system — brand-first hero.
 */
export default function HomePage() {
  return (
    <main className="relative -mt-14 flex min-h-svh flex-1 flex-col overflow-x-hidden pt-14">
      <HomeMistBackground />

      <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-8 px-5 py-12 sm:gap-10 sm:px-6 sm:py-24 lg:py-28">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          <HomeComponentsBadge />
          <h1 className="text-2xl font-semibold leading-snug tracking-tight text-balance sm:text-3xl sm:leading-tight md:text-4xl">
            UI you own —{" "}
            <span
              className={cn(
                playwriteEngland.className,
                "font-normal tracking-normal"
              )}
            >
              with real RTL
            </span>
            .
          </h1>
          <p className="max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground text-pretty sm:text-base md:text-lg">
            Source via the shadcn CLI. Logical CSS so Persian and Arabic layouts
            work without fighting the kit.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
          <Link
            href="/docs/installation"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            Get started
          </Link>
          <Link
            href="/docs/components"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto"
            )}
          >
            Browse components
          </Link>
        </div>
      </section>
    </main>
  )
}
