"use client"

import { useDeferredValue, useMemo, useState, type ChangeEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { brandIconsCatalog } from "@/components/ui/brand-icons"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const PAGE_SIZE = 120

const LETTERS = [
  "All",
  "#",
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
] as const

type LetterFilter = (typeof LETTERS)[number]

const getEntryLetter = (name: string): string => {
  const initial = name.trim().charAt(0).toUpperCase()
  if (initial >= "A" && initial <= "Z") return initial
  return "#"
}

/**
 * Brand Icons docs examples — searchable, letter-filtered, paginated mark grid.
 */
const BrandIconsPreviews = () => {
  const [query, setQuery] = useState("")
  const [letter, setLetter] = useState<LetterFilter>("All")
  const [page, setPage] = useState(0)
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return brandIconsCatalog.filter(({ name, slug }) => {
      const matchesQuery =
        !q || name.toLowerCase().includes(q) || slug.toLowerCase().includes(q)
      if (!matchesQuery) return false
      if (letter === "All") return true
      return getEntryLetter(name) === letter
    })
  }, [deferredQuery, letter])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount - 1)
  const pageStart = safePage * PAGE_SIZE
  const visible = filtered.slice(pageStart, pageStart + PAGE_SIZE)

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setPage(0)
  }

  const handleLetterClick = (next: LetterFilter) => {
    setLetter(next)
    setPage(0)
  }

  const handlePrevPage = () => {
    setPage((current) => Math.max(0, current - 1))
  }

  const handleNextPage = () => {
    setPage((current) => Math.min(pageCount - 1, current + 1))
  }

  const rangeLabel =
    filtered.length === 0
      ? "0 brands"
      : `${(pageStart + 1).toLocaleString()}–${Math.min(pageStart + PAGE_SIZE, filtered.length).toLocaleString()} of ${filtered.length.toLocaleString()}`

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Marks</h2>
        <p className="text-sm text-muted-foreground">
          Browse all {brandIconsCatalog.length.toLocaleString()} marks from{" "}
          <a
            href="https://simpleicons.org"
            className="underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Simple Icons
          </a>{" "}
          plus curated overrides — all{" "}
          <code className="rounded bg-muted px-1 text-xs">currentColor</code>. Import a named
          export or use{" "}
          <code className="rounded bg-muted px-1 text-xs">{`<BrandIcon slug="…" />`}</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  BrandIcon,
  GitHubBrandIcon,
  SlackBrandIcon,
  VercelBrandIcon,
} from "@/components/ui/brand-icons"

export function BrandIconsGrid() {
  return (
    <div className="flex flex-wrap gap-6 text-foreground">
      <GitHubBrandIcon className="size-6" />
      <SlackBrandIcon className="size-6" />
      <VercelBrandIcon className="size-6" />
      <BrandIcon slug="nextdotjs" className="size-6" />
      <BrandIcon slug="stripe" className="size-6" />
    </div>
  )
}`}
        >
          {() => (
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Input
                  value={query}
                  onChange={handleQueryChange}
                  placeholder="Search brands…"
                  aria-label="Search brand icons"
                  className="max-w-sm"
                />
                <p className="text-xs text-muted-foreground" aria-live="polite">
                  {rangeLabel}
                  {pageCount > 1 ? ` · page ${safePage + 1} of ${pageCount}` : null}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-1"
                role="group"
                aria-label="Filter brands by letter"
              >
                {LETTERS.map((item) => (
                  <Button
                    key={item}
                    type="button"
                    size="sm"
                    variant={letter === item ? "default" : "ghost"}
                    className={cn("h-7 min-w-7 px-2 text-xs", item === "All" && "px-2.5")}
                    aria-pressed={letter === item}
                    onClick={() => handleLetterClick(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>

              {visible.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No brands match
                  {deferredQuery.trim() ? ` “${deferredQuery.trim()}”` : ""}
                  {letter !== "All" ? ` under ${letter}` : ""}.
                </p>
              ) : (
                <ul className="grid w-full grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                  {visible.map(({ name, slug, Icon }) => (
                    <li
                      key={slug}
                      className="flex flex-col items-center gap-2 text-center text-sm"
                    >
                      <Icon className="size-6 text-foreground" />
                      <span className="text-xs text-muted-foreground">{name}</span>
                    </li>
                  ))}
                </ul>
              )}

              {pageCount > 1 ? (
                <div className="flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handlePrevPage}
                    disabled={safePage === 0}
                    aria-label="Previous page of brand icons"
                  >
                    <ChevronLeft aria-hidden="true" />
                    Previous
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Page {safePage + 1} of {pageCount}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={safePage >= pageCount - 1}
                    aria-label="Next page of brand icons"
                  >
                    Next
                    <ChevronRight aria-hidden="true" />
                  </Button>
                </div>
              ) : null}
            </div>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { BrandIconsPreviews }
