"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Skeleton docs examples — lines, avatar, card, form, table row.
 */
const SkeletonPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Skeleton</strong>: pulse
            block — size / radius via{" "}
            <code className="rounded bg-muted px-1 text-xs">className</code>
          </li>
          <li>Compose multiple Skeletons for cards, forms, and lists</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonBasic() {
  return <Skeleton className="h-4 w-48" />
}`}
        >
          <Skeleton className="h-4 w-48" />
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Text lines</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTextLines() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}`}
        >
          <div className="w-full max-w-sm space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Card placeholder</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  )
}`}
        >
          <div className="flex w-full max-w-sm items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Form placeholder</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonForm() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
      <Skeleton className="h-9 w-24 rounded-md" />
    </div>
  )
}`}
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-9 w-full rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-9 w-full rounded-md" />
            </div>
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Table row</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTableRow() {
  return (
    <div className="w-full max-w-md space-y-3">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-3 flex-1" />
          <Skeleton className="h-3 w-16" />
        </div>
      ))}
    </div>
  )
}`}
        >
          <div className="w-full max-w-md space-y-3">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex items-center gap-3">
                <Skeleton className="size-8 rounded-full" />
                <Skeleton className="h-3 flex-1" />
                <Skeleton className="h-3 w-16" />
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Media block</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonMedia() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Skeleton className="aspect-video w-full rounded-md" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  )
}`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Skeleton className="aspect-video w-full rounded-md" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SkeletonPreviews }
