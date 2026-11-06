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
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <HomeMistBackground />

      <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl space-y-5">
          <HomeComponentsBadge />
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            UI you own —{" "}
            <span
              className={cn(playwriteEngland.className, "font-normal tracking-normal")}
            >
              with real RTL
            </span>
            .
          </h1>
          <p className="max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
            Source via the shadcn CLI. Logical CSS so Persian and Arabic layouts
            work without fighting the kit.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/docs/installation" className={cn(buttonVariants())}>
            Get started
          </Link>
          <Link
            href="/docs/components"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Browse components
          </Link>
        </div>
      </section>
    </main>
  )
}
