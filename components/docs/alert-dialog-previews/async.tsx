"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

/**
 * Async confirm — loading Button while a request is in flight.
 */
const AlertDialogAsyncPreview = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpenChange = (nextOpen: boolean) => {
    if (loading) {
      return
    }
    setOpen(nextOpen)
  }

  const handleConfirm = async () => {
    setLoading(true)
    await new Promise((resolve) => {
      window.setTimeout(resolve, 1200)
    })
    setLoading(false)
    setOpen(false)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Async confirm</h2>
      <p className="text-sm text-muted-foreground">
        Use a loading Button (not{" "}
        <code className="rounded bg-muted px-1 text-xs">AlertDialogAction</code>
        ) when the confirm awaits a request.
      </p>
      <ComponentPreview
      code={`import { useState } from "react"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogAsync() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleConfirm = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setOpen(false)
  }

  return (
    <>
      <Button type="button" variant="destructive" onClick={() => setOpen(true)}>
        Archive project
      </Button>
      <AlertDialog
        open={open}
        onOpenChange={(next) => {
          if (!loading) setOpen(next)
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Archive project?</AlertDialogTitle>
            <AlertDialogDescription>
              Archiving moves the project out of the active list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <Button
              type="button"
              variant="destructive"
              loading={loading}
              loadingLabel="Archiving…"
              onClick={handleConfirm}
            >
              Archive
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}`}
    >
      {(direction) => (
        <>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              setOpen(true)
            }}
          >
            {direction === "rtl" ? "بایگانی پروژه" : "Archive project"}
          </Button>
          <AlertDialog open={open} onOpenChange={handleOpenChange}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {direction === "rtl"
                    ? "پروژه بایگانی شود؟"
                    : "Archive project?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {direction === "rtl"
                    ? "بایگانی، پروژه را از فهرست فعال خارج می‌کند."
                    : "Archiving moves the project out of the active list."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={loading}>
                  {direction === "rtl" ? "لغو" : "Cancel"}
                </AlertDialogCancel>
                <Button
                  type="button"
                  variant="destructive"
                  loading={loading}
                  loadingLabel={
                    direction === "rtl" ? "در حال بایگانی…" : "Archiving…"
                  }
                  onClick={() => {
                    void handleConfirm()
                  }}
                >
                  {direction === "rtl" ? "بایگانی" : "Archive"}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
      </ComponentPreview>
    </section>
  )
}

export { AlertDialogAsyncPreview }
