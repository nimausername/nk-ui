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
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

/**
 * Type to confirm — disable action until the phrase matches.
 */
const AlertDialogTypeToConfirmPreview = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const confirmation = "DELETE"
  const canConfirm = value === confirmation

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      setValue("")
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Type to confirm</h2>
      <p className="text-sm text-muted-foreground">
        Disable the destructive action until the typed phrase matches.
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
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function AlertDialogTypeToConfirm() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const canConfirm = value === "DELETE"

  return (
    <>
      <Button
        type="button"
        variant="destructive"
        onClick={() => setOpen(true)}
      >
        Delete workspace
      </Button>
      <AlertDialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setValue("")
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete workspace?</AlertDialogTitle>
            <AlertDialogDescription>
              Type DELETE to confirm. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Field>
            <FieldLabel>Confirmation</FieldLabel>
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="DELETE"
              autoComplete="off"
            />
            <FieldDescription>Phrase is case-sensitive.</FieldDescription>
          </Field>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              type="button"
              variant="destructive"
              disabled={!canConfirm}
              onClick={() => setOpen(false)}
            >
              Delete workspace
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
            {direction === "rtl" ? "حذف فضای کاری" : "Delete workspace"}
          </Button>
          <AlertDialog open={open} onOpenChange={handleOpenChange}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {direction === "rtl"
                    ? "فضای کاری حذف شود؟"
                    : "Delete workspace?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {direction === "rtl"
                    ? `برای تأیید «${confirmation}» را تایپ کنید. این کار قابل بازگشت نیست.`
                    : `Type ${confirmation} to confirm. This cannot be undone.`}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <Field>
                <FieldLabel>
                  {direction === "rtl" ? "تأیید" : "Confirmation"}
                </FieldLabel>
                <Input
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value)
                  }}
                  placeholder={confirmation}
                  autoComplete="off"
                  aria-label={
                    direction === "rtl" ? "عبارت تأیید" : "Confirmation phrase"
                  }
                />
                <FieldDescription>
                  {direction === "rtl"
                    ? "عبارت به حروف بزرگ و کوچک حساس است."
                    : "Phrase is case-sensitive."}
                </FieldDescription>
              </Field>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  {direction === "rtl" ? "لغو" : "Cancel"}
                </AlertDialogCancel>
                <Button
                  type="button"
                  variant="destructive"
                  disabled={!canConfirm}
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  {direction === "rtl" ? "حذف فضای کاری" : "Delete workspace"}
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

export { AlertDialogTypeToConfirmPreview }
