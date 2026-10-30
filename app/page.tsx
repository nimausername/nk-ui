import Link from "next/link"
import { Playwrite_GB_S } from "next/font/google"

import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

/** Playwrite England SemiJoined — used only for the “with real RTL” accent. */
const playwriteEngland = Playwrite_GB_S({
  weight: "400",
})

/**
 * Marketing landing for the nk design system.
 */
export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f5f5f5_0%,_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_#171717_0%,_transparent_50%)]"
      />

      <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Base UI components you own —{" "}
            <span className={cn(playwriteEngland.className, "font-normal tracking-normal")}>
              with real RTL
            </span>
            .
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground text-pretty">
            Clean product styling, light and dark built in, and logical CSS so Persian and
            Arabic layouts work without fighting the kit. Install source with the shadcn CLI.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/docs" className={cn(buttonVariants())}>
            Documentation
          </Link>
          <Link
            href="/docs/components"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Components
          </Link>
        </div>
      </section>
    </main>
  )
}
