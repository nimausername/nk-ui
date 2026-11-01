"use client"

import { Download } from "lucide-react"
import { useEffect, useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { ProgressButton } from "@/components/ui/progress-button"

const PROGRESS_BUTTON_EXAMPLE_CODE = `import { useState } from "react"
import { ProgressButton } from "@/components/ui/progress-button"

export function ProgressButtonExample() {
  const [progress, setProgress] = useState(0)

  // Drive \`progress\` from your upload/download. At 100 the button is clickable.
  return (
    <ProgressButton
      type="button"
      progress={progress}
      onClick={() => {
        // e.g. save the file, then reset progress for another run
      }}
    />
  )
}`

/**
 * Docs-only progress demo. Idle start and replay stay in the preview — the
 * installable ProgressButton remains a controlled `progress: 0–100` component.
 */
const ProgressButtonPreview = () => {
  const [progress, setProgress] = useState<number | null>(null)
  const [runId, setRunId] = useState(0)
  const isRunning = progress !== null && progress < 100
  const isComplete = progress !== null && progress >= 100

  useEffect(() => {
    if (!isRunning) {
      return
    }

    const id = window.setInterval(() => {
      setProgress((value) => {
        if (value === null) {
          return value
        }
        return Math.min(100, value + 8)
      })
    }, 500)

    return () => window.clearInterval(id)
  }, [isRunning, runId])

  const handleStartOrReplay = () => {
    setProgress(0)
    setRunId((value) => value + 1)
  }

  return (
    <ComponentPreview
      code={PROGRESS_BUTTON_EXAMPLE_CODE}
      actions={(direction) => (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleStartOrReplay}
          aria-label={
            direction === "rtl"
              ? "پخش مجدد انیمیشن پیشرفت"
              : "Replay progress animation"
          }
        >
          {direction === "rtl" ? "پخش مجدد" : "Replay"}
        </Button>
      )}
    >
      {(direction) =>
        progress === null ? (
          <Button
            type="button"
            variant="outline"
            className="min-w-44"
            onClick={handleStartOrReplay}
            aria-label={direction === "rtl" ? "شروع دانلود" : "Start download"}
          >
            <Download aria-hidden="true" />
            {direction === "rtl" ? "دانلود" : "Download"}
          </Button>
        ) : (
          <ProgressButton
            type="button"
            progress={progress}
            onClick={isComplete ? handleStartOrReplay : undefined}
            progressLabel={direction === "rtl" ? "در حال دانلود" : "Downloading"}
            completeLabel={direction === "rtl" ? "دانلود آماده" : "Download ready"}
            percentMark={direction === "rtl" ? "٪" : "%"}
          />
        )
      }
    </ComponentPreview>
  )
}

/**
 * ProgressButton docs examples.
 */
const ProgressButtonPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <p className="text-sm text-muted-foreground">
          Controlled by{" "}
          <code className="rounded bg-muted px-1 text-xs">progress</code> (0–100).
          Both labels stay mounted so width stays stable when the copy swaps —
          including custom and RTL strings. Idle / start is composed with{" "}
          <code className="rounded bg-muted px-1 text-xs">Button</code> in your app
          (shown here for the demo only).
        </p>
        <ProgressButtonPreview />
      </section>
    </div>
  )
}

export { ProgressButtonPreviews }
