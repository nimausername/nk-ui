"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { FolderOpen } from "lucide-react"
import { useReducedMotion } from "motion/react"
import Link from "next/link"
import type { ComponentProps } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { cn } from "@/lib/utils"

type PreviewDirection = "ltr" | "rtl"

type EmptyArtProps = {
  readonly src: string
  readonly className?: string
} & Omit<ComponentProps<"img">, "src" | "alt" | "className">

/**
 * Docs-only empty artwork — unDraw SVGs under `/illustrations` (free license).
 */
const EmptyArt = ({ src, className, ...props }: EmptyArtProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static public SVG demos
    <img
      src={src}
      alt=""
      width={160}
      height={160}
      className={cn("size-36 object-contain", className)}
      {...props}
    />
  )
}

/**
 * Empty docs examples — unDraw illustrations, icon tile, and Motion animation.
 */
const EmptyPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Empty</strong>:
            centered shell — add{" "}
            <code className="rounded bg-muted px-1 text-xs">border</code> for a
            dashed outline
          </li>
          <li>
            <strong className="font-medium text-foreground">EmptyMedia</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">variant=&quot;icon&quot;</code>{" "}
            for a glyph tile, or default for open-source illustrations /
            animations
          </li>
          <li>
            Artwork is{" "}
            <a
              href="https://undraw.co/license"
              className="underline underline-offset-4 hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              unDraw
            </a>{" "}
            SVGs plus a{" "}
            <a
              href="https://lottiefiles.com/page/license/"
              className="underline underline-offset-4 hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Lottie Simple License
            </a>{" "}
            animation — see{" "}
            <code className="rounded bg-muted px-1 text-xs">
              /illustrations/LICENSE.md
            </code>
          </li>
          <li>
            Command no-matches stay on{" "}
            <Link
              href="/docs/components/command"
              className="underline underline-offset-4 hover:text-foreground"
            >
              CommandEmpty
            </Link>
          </li>
        </ul>
      </section>

      <BasicPreview />
      <OutlinePreview />
      <NoResultsPreview />
      <InCardPreview />
      <IconMediaPreview />
      <AnimatedPreview />
    </div>
  )
}

/**
 * First-run empty with unDraw “Getting organized”.
 */
const BasicPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Basic</h2>
      <p className="text-sm text-muted-foreground">
        First-run prompt with unDraw{" "}
        <a
          href="https://undraw.co/illustration/getting-organized_lyqo"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          Getting organized
        </a>
        .
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyBasic() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <img
            src="/illustrations/undraw-getting-organized.svg"
            alt=""
            width={160}
            height={160}
            className="size-36 object-contain"
          />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create a project or import an existing one to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button type="button" size="sm">
            Create project
          </Button>
          <Button type="button" size="sm" variant="outline">
            Import
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}`}
      >
        {(direction) => (
          <Empty className="w-full max-w-md">
            <EmptyHeader>
              <EmptyMedia>
                <EmptyArt src="/illustrations/undraw-getting-organized.svg" />
              </EmptyMedia>
              <EmptyTitle>
                {direction === "rtl" ? "هنوز پروژه‌ای نیست" : "No projects yet"}
              </EmptyTitle>
              <EmptyDescription>
                {copy(
                  direction,
                  "Create a project or import an existing one to get started.",
                  "یک پروژه بسازید یا پروژه‌ای موجود را وارد کنید."
                )}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button type="button" size="sm">
                  {direction === "rtl" ? "ایجاد پروژه" : "Create project"}
                </Button>
                <Button type="button" size="sm" variant="outline">
                  {direction === "rtl" ? "ورود" : "Import"}
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * Dashed outline with unDraw empty mailbox.
 */
const OutlinePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Outline</h2>
      <p className="text-sm text-muted-foreground">
        Add{" "}
        <code className="rounded bg-muted px-1 text-xs">border</code> for a
        dashed outline. Art is unDraw{" "}
        <a
          href="https://undraw.co/illustration/empty-mailbox_ef0e"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          Empty mailbox
        </a>
        .
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyOutline() {
  return (
    <Empty className="border border-border">
      <EmptyHeader>
        <EmptyMedia>
          <img
            src="/illustrations/undraw-empty-mailbox.svg"
            alt=""
            width={160}
            height={160}
            className="size-36 object-contain"
          />
        </EmptyMedia>
        <EmptyTitle>Inbox zero</EmptyTitle>
        <EmptyDescription>
          You are all caught up. New messages will show up here.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}`}
      >
        {(direction) => (
          <Empty className="w-full max-w-md border border-border">
            <EmptyHeader>
              <EmptyMedia>
                <EmptyArt src="/illustrations/undraw-empty-mailbox.svg" />
              </EmptyMedia>
              <EmptyTitle>
                {direction === "rtl" ? "صندوق خالی" : "Inbox zero"}
              </EmptyTitle>
              <EmptyDescription>
                {copy(
                  direction,
                  "You are all caught up. New messages will show up here.",
                  "همه چیز بررسی شده. پیام‌های جدید اینجا ظاهر می‌شوند."
                )}
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * No-results with unDraw “The void”.
 */
const NoResultsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">No results</h2>
      <p className="text-sm text-muted-foreground">
        Filter miss with unDraw{" "}
        <a
          href="https://undraw.co/illustration/the-void_i26b"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          The void
        </a>
        .
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyNoResults() {
  return (
    <Empty className="bg-muted/40">
      <EmptyHeader>
        <EmptyMedia>
          <img
            src="/illustrations/undraw-the-void.svg"
            alt=""
            width={160}
            height={160}
            className="size-36 object-contain"
          />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try a different keyword or clear the filters.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" size="sm" variant="outline">
          Clear filters
        </Button>
      </EmptyContent>
    </Empty>
  )
}`}
      >
        {(direction) => (
          <Empty className="w-full max-w-md bg-muted/40">
            <EmptyHeader>
              <EmptyMedia>
                <EmptyArt src="/illustrations/undraw-the-void.svg" />
              </EmptyMedia>
              <EmptyTitle>
                {direction === "rtl" ? "نتیجه‌ای پیدا نشد" : "No results found"}
              </EmptyTitle>
              <EmptyDescription>
                {copy(
                  direction,
                  "Try a different keyword or clear the filters.",
                  "کلیدواژه دیگری امتحان کنید یا فیلترها را پاک کنید."
                )}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button type="button" size="sm" variant="outline">
                {direction === "rtl" ? "پاک کردن فیلترها" : "Clear filters"}
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * Nested card with unDraw “Sharing knowledge”.
 */
const InCardPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">In a Card</h2>
      <p className="text-sm text-muted-foreground">
        Section empty with unDraw{" "}
        <a
          href="https://undraw.co/illustration/sharing-knowledge_2jx3"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          Sharing knowledge
        </a>
        .
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyInCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>People with access to this workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <img
                src="/illustrations/undraw-sharing-knowledge.svg"
                alt=""
                width={160}
                height={160}
                className="size-36 object-contain"
              />
            </EmptyMedia>
            <EmptyTitle>No members yet</EmptyTitle>
            <EmptyDescription>
              Invite collaborators to share this workspace.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button type="button" size="sm">
              Invite people
            </Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>
                {direction === "rtl" ? "اعضای تیم" : "Team members"}
              </CardTitle>
              <CardDescription>
                {copy(
                  direction,
                  "People with access to this workspace.",
                  "افرادی که به این فضای کاری دسترسی دارند."
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia>
                    <EmptyArt src="/illustrations/undraw-sharing-knowledge.svg" />
                  </EmptyMedia>
                  <EmptyTitle>
                    {direction === "rtl" ? "هنوز عضوی نیست" : "No members yet"}
                  </EmptyTitle>
                  <EmptyDescription>
                    {copy(
                      direction,
                      "Invite collaborators to share this workspace.",
                      "همکاران را دعوت کنید تا این فضای کاری را به اشتراک بگذارند."
                    )}
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button type="button" size="sm">
                    {direction === "rtl" ? "دعوت افراد" : "Invite people"}
                  </Button>
                </EmptyContent>
              </Empty>
            </CardContent>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * Icon tile variant — Lucide (ISC) inside EmptyMedia.
 */
const IconMediaPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Icon media</h2>
      <p className="text-sm text-muted-foreground">
        <code className="rounded bg-muted px-1 text-xs">
          EmptyMedia variant=&quot;icon&quot;
        </code>{" "}
        for a compact glyph when you do not need a scene illustration. Lucide
        icons are ISC-licensed.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { FolderOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyIconMedia() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>No folders</EmptyTitle>
        <EmptyDescription>
          Create a folder to organize your files.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" size="sm">
          New folder
        </Button>
      </EmptyContent>
    </Empty>
  )
}`}
      >
        {(direction) => (
          <Empty className="w-full max-w-md">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpen aria-hidden />
              </EmptyMedia>
              <EmptyTitle>
                {direction === "rtl" ? "پوشه‌ای نیست" : "No folders"}
              </EmptyTitle>
              <EmptyDescription>
                {copy(
                  direction,
                  "Create a folder to organize your files.",
                  "یک پوشه بسازید تا فایل‌هایتان را مرتب کنید."
                )}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button type="button" size="sm">
                {direction === "rtl" ? "پوشه جدید" : "New folder"}
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * Free Lottie empty-state animation inside EmptyMedia — honors reduced motion.
 */
const AnimatedPreview = () => {
  const reduced = useReducedMotion() ?? false

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Animated</h2>
      <p className="text-sm text-muted-foreground">
        Real animation in{" "}
        <code className="rounded bg-muted px-1 text-xs">EmptyMedia</code> —{" "}
        <a
          href="https://lottiefiles.com/free-animation/empty-state-EfSeWUwwKs"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          Empty State
        </a>{" "}
        by Creative Salt &amp; Pepper on LottieFiles (
        <a
          href="https://lottiefiles.com/page/license/"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          Lottie Simple License
        </a>
        , free commercial use). Pauses when{" "}
        <code className="rounded bg-muted px-1 text-xs">
          prefers-reduced-motion
        </code>{" "}
        is on.
      </p>
      <ComponentPreview
        className="w-full"
        code={`"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyAnimated() {
  const reduced = useReducedMotion() ?? false

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia className="mb-0 size-40">
          <DotLottieReact
            src="/illustrations/lottie-empty-state.lottie"
            loop
            autoplay={!reduced}
            className="size-40"
            aria-hidden
          />
        </EmptyMedia>
        <EmptyTitle>No invoices yet</EmptyTitle>
        <EmptyDescription>
          Create your first invoice to see it here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button" size="sm">
          Create invoice
        </Button>
      </EmptyContent>
    </Empty>
  )
}`}
      >
        {(direction) => (
          <Empty className="w-full max-w-md">
            <EmptyHeader>
              <EmptyMedia className="mb-0 size-40">
                <DotLottieReact
                  src="/illustrations/lottie-empty-state.lottie"
                  loop
                  autoplay={!reduced}
                  className="size-40"
                  aria-hidden
                />
              </EmptyMedia>
              <EmptyTitle>
                {direction === "rtl" ? "هنوز فاکتوری نیست" : "No invoices yet"}
              </EmptyTitle>
              <EmptyDescription>
                {copy(
                  direction,
                  "Create your first invoice to see it here.",
                  "اولین فاکتور را بسازید تا اینجا دیده شود."
                )}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button type="button" size="sm">
                {direction === "rtl" ? "ایجاد فاکتور" : "Create invoice"}
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </ComponentPreview>
    </section>
  )
}

const copy = (direction: PreviewDirection, en: string, fa: string) => {
  return direction === "rtl" ? fa : en
}

export { EmptyPreviews }
