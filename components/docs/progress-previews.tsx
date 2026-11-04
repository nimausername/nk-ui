"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

/**
 * Progress docs examples — determinate, indeterminate, sizes, custom max, controlled.
 */
const ProgressPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Progress</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">value</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">min</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">max</code> (
            <code className="rounded bg-muted px-1 text-xs">null</code> = indeterminate)
          </li>
          <li>
            <strong className="font-medium text-foreground">ProgressLabel</strong> /{" "}
            <strong className="font-medium text-foreground">ProgressValue</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">ProgressTrack</strong> /{" "}
            <strong className="font-medium text-foreground">ProgressIndicator</strong>
          </li>
          <li>
            For download on a button, see{" "}
            <a
              href="/docs/composites/progress-button"
              className="underline underline-offset-4"
            >
              Progress Button
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Determinate</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

export function ProgressDeterminate() {
  return (
    <Progress value={64} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <ProgressLabel>Upload</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}`}
        >
          {(direction) => (
            <Progress value={64} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <ProgressLabel>
                  {direction === "rtl" ? "بارگذاری" : "Upload"}
                </ProgressLabel>
                <ProgressValue />
              </div>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Indeterminate</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
} from "@/components/ui/progress"

export function ProgressIndeterminate() {
  return (
    <Progress value={null} className="max-w-sm">
      <ProgressLabel>Syncing</ProgressLabel>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}`}
        >
          {(direction) => (
            <Progress value={null} className="max-w-sm">
              <ProgressLabel>
                {direction === "rtl" ? "در حال همگام‌سازی" : "Syncing"}
              </ProgressLabel>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Complete</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

export function ProgressComplete() {
  return (
    <Progress value={100} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <ProgressLabel>Done</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}`}
        >
          {(direction) => (
            <Progress value={100} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <ProgressLabel>{direction === "rtl" ? "تمام" : "Done"}</ProgressLabel>
                <ProgressValue />
              </div>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Track sizes</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/components/ui/progress"

export function ProgressTrackSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={40}>
        <ProgressTrack className="h-1">
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <Progress value={40}>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <Progress value={40}>
        <ProgressTrack className="h-3">
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    </div>
  )
}`}
        >
          <div className="flex w-full max-w-sm flex-col gap-4">
            <Progress value={40}>
              <ProgressTrack className="h-1">
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
            <Progress value={40}>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
            <Progress value={40}>
              <ProgressTrack className="h-3">
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom max</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

export function ProgressCustomMax() {
  return (
    <Progress value={3} max={5} className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <ProgressLabel>Steps</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}`}
        >
          {(direction) => (
            <Progress value={3} max={5} className="max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <ProgressLabel>
                  {direction === "rtl" ? "مراحل" : "Steps"}
                </ProgressLabel>
                <ProgressValue />
              </div>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </Progress>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

export function ProgressControlled() {
  const [value, setValue] = useState(20)

  return (
    <div className="w-full max-w-sm space-y-3">
      <Progress value={value}>
        <div className="flex items-center justify-between gap-2">
          <ProgressLabel>Download</ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <div className="flex flex-wrap gap-2">
        <Button type="button" size="sm" variant="outline" onClick={() => setValue((v) => Math.max(0, v - 10))}>
          -10
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={() => setValue((v) => Math.min(100, v + 10))}>
          +10
        </Button>
      </div>
    </div>
  )
}`}
        >
          {(direction) => <ProgressControlledPreview direction={direction} />}
        </ComponentPreview>
      </section>
    </div>
  )
}

type PreviewDirection = "ltr" | "rtl"

const ProgressControlledPreview = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [value, setValue] = useState(20)

  return (
    <div className="w-full max-w-sm space-y-3">
      <Progress value={value}>
        <div className="flex items-center justify-between gap-2">
          <ProgressLabel>
            {direction === "rtl" ? "دانلود" : "Download"}
          </ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setValue((v) => Math.max(0, v - 10))}
        >
          -10
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setValue((v) => Math.min(100, v + 10))}
        >
          +10
        </Button>
      </div>
    </div>
  )
}

export { ProgressPreviews }
