import Link from "next/link"
import { Suspense } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/**
 * GitHub mark (lucide dropped brand icons).
 */
const GitHubIcon = ({ className }: { readonly className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.379 6.839 9.738.5.094.683-.218.683-.485 0-.24-.009-.875-.014-1.717-2.782.615-3.369-1.37-3.369-1.37-.454-1.177-1.11-1.49-1.11-1.49-.908-.635.069-.622.069-.622 1.003.072 1.532 1.055 1.532 1.055.892 1.563 2.341 1.111 2.91.85.091-.66.35-1.111.636-1.367-2.22-.258-4.555-1.136-4.555-5.057 0-1.117.39-2.031 1.029-2.747-.103-.257-.446-1.298.098-2.705 0 0 .84-.274 2.75 1.048A9.35 9.35 0 0 1 12 6.844a9.35 9.35 0 0 1 2.504.345c1.909-1.322 2.748-1.048 2.748-1.048.546 1.407.203 2.448.1 2.705.64.716 1.028 1.63 1.028 2.747 0 3.93-2.339 4.796-4.566 5.049.359.316.679.94.679 1.896 0 1.368-.012 2.471-.012 2.807 0 .269.18.583.688.484C19.138 20.627 22 16.787 22 12.253 22 6.586 17.523 2 12 2Z" />
  </svg>
)

/**
 * Formats a GitHub star count like shadcn (`127k`, `1.2k`, or raw).
 */
const formatStarCount = (count: number): string => {
  if (count >= 1000) {
    const rounded = count / 1000
    const text =
      rounded >= 100 ? `${Math.round(rounded)}` : `${rounded.toFixed(1).replace(/\.0$/, "")}`
    return `${text}k`
  }

  return count.toLocaleString("en-US")
}

/**
 * Live star count from the GitHub API (cached ~24h).
 */
const StarsCount = async () => {
  const { owner, repo } = siteConfig.github

  let stars: number | null = null

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "nk-ui-docs",
      },
      next: { revalidate: 86_400 },
    })

    if (response.ok) {
      const data = (await response.json()) as { stargazers_count?: unknown }
      const count = Number(data.stargazers_count)
      if (Number.isFinite(count)) {
        stars = count
      }
    }
  } catch {
    stars = null
  }

  if (stars === null) {
    return null
  }

  return (
    <span className="text-muted-foreground tabular-nums">{formatStarCount(stars)}</span>
  )
}

/**
 * Header control: GitHub repo link with optional live star count.
 * Docs/site only — not part of the @nk registry.
 */
const GitHubLink = () => {
  return (
    <Link
      href={siteConfig.links.github}
      target="_blank"
      rel="noreferrer"
      aria-label="nk on GitHub"
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground",
        "transition-colors hover:bg-muted"
      )}
    >
      <GitHubIcon className="size-3.5" />
      <Suspense fallback={<span className="inline-block h-3 w-6 animate-pulse rounded bg-muted" />}>
        <StarsCount />
      </Suspense>
    </Link>
  )
}

export { GitHubLink }
