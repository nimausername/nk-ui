import { useState } from "react"
import { describe, expect, it } from "vitest"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  createAlertDialogHandle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { render, screen } from "@/test/render"

describe("AlertDialog", () => {
  it("opens and shows the title", async () => {
    const { user } = render(
      <AlertDialog>
        <AlertDialogTrigger render={<Button />}>
          Delete account
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              render={<Button type="button" variant="destructive" />}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByRole("button", { name: "Delete account" }))
    expect(await screen.findByRole("alertdialog")).toBeInTheDocument()
    expect(screen.getByText("Are you sure?")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument()
  })

  it("closes when cancel is pressed", async () => {
    const { user } = render(
      <AlertDialog>
        <AlertDialogTrigger render={<Button />}>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Leave page?</AlertDialogTitle>
            <AlertDialogDescription>
              Unsaved changes will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Stay</AlertDialogCancel>
            <AlertDialogAction>Leave</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(await screen.findByRole("alertdialog")).toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: "Stay" }))
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument()
  })

  it("applies the small size class", async () => {
    const { user } = render(
      <AlertDialog>
        <AlertDialogTrigger render={<Button />}>Open small</AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Publish?</AlertDialogTitle>
            <AlertDialogDescription>Goes live now.</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByRole("button", { name: "Open small" }))
    const dialog = await screen.findByRole("alertdialog")
    expect(dialog.className).toContain("sm:max-w-xs")
  })

  it("opens from a detached handle trigger", async () => {
    const handle = createAlertDialogHandle()

    const { user } = render(
      <>
        <AlertDialogTrigger handle={handle} render={<Button />}>
          Detached open
        </AlertDialogTrigger>
        <AlertDialog handle={handle}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Detached confirm</AlertDialogTitle>
              <AlertDialogDescription>Linked by handle.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )

    await user.click(screen.getByRole("button", { name: "Detached open" }))
    expect(await screen.findByRole("alertdialog")).toBeInTheDocument()
    expect(screen.getByText("Detached confirm")).toBeInTheDocument()
  })

  it("renders payload content from multiple triggers", async () => {
    const handle = createAlertDialogHandle<{ name: string }>()

    const { user } = render(
      <>
        <AlertDialogTrigger
          handle={handle}
          payload={{ name: "Atlas" }}
          render={<Button />}
        >
          Delete Atlas
        </AlertDialogTrigger>
        <AlertDialogTrigger
          handle={handle}
          payload={{ name: "Nova" }}
          render={<Button />}
        >
          Delete Nova
        </AlertDialogTrigger>
        <AlertDialog handle={handle}>
          {({ payload }) => (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Delete {payload?.name ?? "project"}?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Permanent delete.
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </>
    )

    await user.click(screen.getByRole("button", { name: "Delete Nova" }))
    expect(await screen.findByRole("alertdialog")).toBeInTheDocument()
    expect(screen.getByText("Delete Nova?")).toBeInTheDocument()
  })

  it("keeps the confirm button disabled until the phrase matches", async () => {
    const TypeToConfirm = () => {
      const [value, setValue] = useState("")

      return (
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete workspace?</AlertDialogTitle>
              <AlertDialogDescription>Type DELETE.</AlertDialogDescription>
            </AlertDialogHeader>
            <input
              aria-label="Confirmation phrase"
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
              }}
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button type="button" variant="destructive" disabled={value !== "DELETE"}>
                Delete workspace
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    }

    const { user } = render(<TypeToConfirm />)

    expect(await screen.findByRole("alertdialog")).toBeInTheDocument()
    const confirm = screen.getByRole("button", { name: "Delete workspace" })
    expect(confirm).toBeDisabled()

    await user.type(screen.getByLabelText("Confirmation phrase"), "DELETE")
    expect(confirm).toBeEnabled()
  })
})
