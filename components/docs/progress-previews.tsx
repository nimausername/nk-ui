"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

/**
 * Progress docs examples — determinate and indeterminate.
 */
const ProgressPreviews = () => {
  return (
    <div className="space-y-10">
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
    </div>
  )
}

export { ProgressPreviews }
