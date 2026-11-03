import Link from "next/link"

import { AvatarPreviews } from "@/components/docs/avatar-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  avatarDocsDescription,
  avatarDocsMarkdown,
  avatarDocsTitle,
  avatarDocsUpdatedAt,
} from "@/content/docs/avatar"

/**
 * Avatar component detail page.
 */
export default function AvatarDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {avatarDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{avatarDocsTitle}</h1>
          <DocsCopyPage
            page={avatarDocsMarkdown}
            url={`${siteConfig.url}/docs/components/avatar`}
            markdownUrl="/docs/components/avatar.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{avatarDocsDescription}</p>
        <DocsLastUpdated date={avatarDocsUpdatedAt} />
      </header>

      <ComponentInstall name="avatar" />

      <AvatarPreviews />
    </article>
  )
}
