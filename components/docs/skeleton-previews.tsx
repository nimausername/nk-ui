"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Skeleton docs examples — line, avatar, card placeholder.
 */
const SkeletonPreviews = () => {
  return (
    <div className="space-y-10">
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
    </div>
  )
}

export { SkeletonPreviews }
