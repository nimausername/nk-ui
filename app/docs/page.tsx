import Link from "next/link"

import { buttonVariants } from "@/components/ui/button-variants"
import { componentItems, docsGuideItems } from "@/config/docs"
import { cn } from "@/lib/utils"

/**
 * Docs introduction — entry to the documentation system.
 */
export default function DocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground text-pretty">
          nk is a shadcn-compatible registry of Base UI components. You install source into your
          project, own the files, and theme with black/white CSS variables — including LTR and RTL.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Start here</h2>
        <ul className="space-y-3">
          {docsGuideItems.map((item) => (
            <li key={item.href} className="border-b border-border pb-3">
              <Link
                href={item.href}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
              {item.description ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              ) : null}
            </li>
          ))}
          <li className="border-b border-border pb-3">
            <Link
              href="/docs/components"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Components
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse the full component list. Each item has its own detail page and install command.
            </p>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Available now</h2>
        <p className="text-sm text-muted-foreground">
          {componentItems.length} component{componentItems.length === 1 ? "" : "s"} in the
          registry. More will appear in Components as they ship.
        </p>
        <Link href="/docs/installation" className={cn(buttonVariants(), "inline-flex")}>
          Installation
        </Link>
      </section>
    </article>
  )
}
