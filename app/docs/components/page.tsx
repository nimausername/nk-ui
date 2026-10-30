import Link from "next/link"

import { componentItems } from "@/config/docs"

/**
 * Components index — list of all documented nk components.
 */
export default function ComponentsIndexPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-muted-foreground text-pretty">
          Every installable UI piece lives here. Open a component for API notes, previews, and its
          specific <code className="rounded bg-muted px-1.5 py-0.5 text-xs">shadcn add</code> command.
        </p>
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {componentItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex flex-col gap-1 py-4 transition-colors hover:bg-muted/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-medium text-foreground">{item.title}</span>
              {item.description ? (
                <span className="text-sm text-muted-foreground sm:text-end">{item.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted-foreground">
        New components are added to this list as they ship. Registry setup stays the same — see{" "}
        <Link href="/docs/installation" className="underline underline-offset-4">
          Installation
        </Link>
        .
      </p>
    </article>
  )
}
