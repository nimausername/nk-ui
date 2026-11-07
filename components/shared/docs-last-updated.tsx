import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type DocsLastUpdatedProps = {
  /** ISO date (`YYYY-MM-DD`) or parseable date string. */
  readonly date: string
  readonly className?: string
}

/**
 * Formats a docs content date for display (e.g. "November 1, 2026").
 */
const formatDocsDate = (date: string) => {
  const parsed = new Date(`${date}T00:00:00.000Z`)
  if (Number.isNaN(parsed.getTime())) {
    return date
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed)
}

/**
 * Muted kit version + “Last updated” line for docs headers.
 * Shared site UI — not registry.
 */
const DocsLastUpdated = ({ date, className }: DocsLastUpdatedProps) => {
  const label = formatDocsDate(date)
  const versionLabel = `v${siteConfig.version}`

  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      data-slot="docs-last-updated"
    >
      <a
        href={siteConfig.links.release}
        className="underline-offset-4 hover:underline"
        aria-label={`nk ${versionLabel} release notes`}
      >
        {versionLabel}
      </a>
      <span aria-hidden="true"> · </span>
      Last updated{" "}
      <time dateTime={date} className="text-muted-foreground">
        {label}
      </time>
    </p>
  )
}

export { DocsLastUpdated, formatDocsDate }
export type { DocsLastUpdatedProps }
