"use client"

import { AlertDialogAsyncPreview } from "@/components/docs/alert-dialog-previews/async"
import { AlertDialogBasicPreview } from "@/components/docs/alert-dialog-previews/basic"
import { AlertDialogControlledPreview } from "@/components/docs/alert-dialog-previews/controlled"
import { AlertDialogDestructivePreview } from "@/components/docs/alert-dialog-previews/destructive"
import { AlertDialogDetachedPreview } from "@/components/docs/alert-dialog-previews/detached"
import { AlertDialogFromMenuPreview } from "@/components/docs/alert-dialog-previews/from-menu"
import { AlertDialogMultiTriggerPreview } from "@/components/docs/alert-dialog-previews/multi-trigger"
import { AlertDialogNestedPreview } from "@/components/docs/alert-dialog-previews/nested"
import { AlertDialogSmallPreview } from "@/components/docs/alert-dialog-previews/small"
import { AlertDialogTypeToConfirmPreview } from "@/components/docs/alert-dialog-previews/type-to-confirm"
import { AlertDialogViewportShellPreview } from "@/components/docs/alert-dialog-previews/viewport-shell"
import { AlertDialogWithIconPreview } from "@/components/docs/alert-dialog-previews/with-icon"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Alert Dialog docs examples — one category at a time so the page stays scannable.
 * Confirm is the default; Patterns and Advanced stay one click away.
 */
const AlertDialogPreviews = () => {
  return (
    <Tabs defaultValue="confirm">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="confirm">Confirm</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="confirm" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Everyday confirms — basic, small, destructive, and with icon.
        </p>
        <AlertDialogBasicPreview />
        <AlertDialogSmallPreview />
        <AlertDialogDestructivePreview />
        <AlertDialogWithIconPreview />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Product flows — type-to-confirm, controlled open, menu, and async.
        </p>
        <AlertDialogTypeToConfirmPreview />
        <AlertDialogControlledPreview />
        <AlertDialogFromMenuPreview />
        <AlertDialogAsyncPreview />
      </TabsContent>

      <TabsContent value="advanced" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Base UI APIs — detached triggers, payloads, viewport shells, and
          nested dialogs.
        </p>
        <AlertDialogDetachedPreview />
        <AlertDialogMultiTriggerPreview />
        <AlertDialogViewportShellPreview />
        <AlertDialogNestedPreview />
      </TabsContent>
    </Tabs>
  )
}

export { AlertDialogPreviews }
