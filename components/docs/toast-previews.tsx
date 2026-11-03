"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  createToastManager,
  toast,
  Toaster,
  type ToastPlacement,
  type ToastType,
} from "@/components/ui/toast"

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })

/** Isolated manager so placement demos do not move the site Toaster. */
const placementDemoToast = createToastManager()

type ToastPlacementDemoProps = {
  readonly direction: "ltr" | "rtl"
}

/**
 * Live placement playground — own Toaster + manager, placement is controlled.
 */
const ToastPlacementDemo = ({ direction }: ToastPlacementDemoProps) => {
  const [placement, setPlacement] = useState<ToastPlacement>("bottom-right")

  const placements: {
    placement: ToastPlacement
    label: string
  }[] = [
    {
      placement: "top-left",
      label: direction === "rtl" ? "بالا چپ" : "top-left",
    },
    {
      placement: "top-center",
      label: direction === "rtl" ? "بالا وسط" : "top-center",
    },
    {
      placement: "top-right",
      label: direction === "rtl" ? "بالا راست" : "top-right",
    },
    {
      placement: "bottom-left",
      label: direction === "rtl" ? "پایین چپ" : "bottom-left",
    },
    {
      placement: "bottom-center",
      label: direction === "rtl" ? "پایین وسط" : "bottom-center",
    },
    {
      placement: "bottom-right",
      label: direction === "rtl" ? "پایین راست" : "bottom-right",
    },
  ]

  const handleSelectPlacement = (next: ToastPlacement) => {
    setPlacement(next)
    placementDemoToast.close()
    placementDemoToast.add({
      type: "info",
      title:
        direction === "rtl" ? `جایگذاری: ${next}` : `Placement: ${next}`,
      description:
        direction === "rtl"
          ? "این اعلان روی Toaster دمو با placement انتخاب‌شده است."
          : "This toast uses the demo Toaster at the selected placement.",
      timeout: 4000,
    })
  }

  return (
    <Toaster toastManager={placementDemoToast} placement={placement}>
      <div className="flex w-full flex-col items-center gap-3">
        <p className="text-xs text-muted-foreground">
          {direction === "rtl" ? "فعال: " : "Active: "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
            {placement}
          </code>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {placements.map((entry) => (
            <Button
              key={entry.placement}
              type="button"
              variant={placement === entry.placement ? "default" : "outline"}
              size="sm"
              aria-pressed={placement === entry.placement}
              onClick={() => {
                handleSelectPlacement(entry.placement)
              }}
            >
              {entry.label}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}

/**
 * Toast docs examples — types, actions, promise, stacking, placement.
 */
const ToastPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          The docs site mounts{" "}
          <code className="rounded bg-muted px-1 text-xs">Toaster</code> in{" "}
          <code className="rounded bg-muted px-1 text-xs">AppProviders</code>.
          Call{" "}
          <code className="rounded bg-muted px-1 text-xs">toast.add(...)</code>{" "}
          from anywhere.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastBasic() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        toast.add({
          title: "Event created",
          description: "Sunday, December 3 at 9:00 AM",
        })
      }
    >
      Show toast
    </Button>
  )
}`}
        >
          {(direction) => (
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                toast.add({
                  title: direction === "rtl" ? "رویداد ساخته شد" : "Event created",
                  description:
                    direction === "rtl"
                      ? "یکشنبه ۳ دسامبر، ساعت ۹:۰۰"
                      : "Sunday, December 3 at 9:00 AM",
                })
              }
            >
              {direction === "rtl" ? "نمایش اعلان" : "Show toast"}
            </Button>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Types</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">type</code> for a
          status icon:{" "}
          <code className="rounded bg-muted px-1 text-xs">success</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">info</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">warning</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">error</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">loading</code>.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ type: "success", title: "Saved", description: "All set." })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ type: "info", title: "Tip", description: "You can swipe to dismiss." })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ type: "warning", title: "Careful", description: "This action is reversible." })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ type: "error", title: "Failed", description: "Please try again." })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ type: "loading", title: "Uploading…", description: "Please wait.", timeout: 0 })
        }
      >
        Loading
      </Button>
    </div>
  )
}`}
        >
          {(direction) => {
            const entries: {
              type: ToastType
              label: string
              title: string
              description: string
              timeout?: number
            }[] = [
              {
                type: "success",
                label: direction === "rtl" ? "موفق" : "Success",
                title: direction === "rtl" ? "ذخیره شد" : "Saved",
                description:
                  direction === "rtl" ? "همه‌چیز آماده است." : "All set.",
              },
              {
                type: "info",
                label: direction === "rtl" ? "اطلاعات" : "Info",
                title: direction === "rtl" ? "نکته" : "Tip",
                description:
                  direction === "rtl"
                    ? "می‌توانید برای بستن بکشید."
                    : "You can swipe to dismiss.",
              },
              {
                type: "warning",
                label: direction === "rtl" ? "هشدار" : "Warning",
                title: direction === "rtl" ? "مراقب باشید" : "Careful",
                description:
                  direction === "rtl"
                    ? "این عمل قابل بازگشت است."
                    : "This action is reversible.",
              },
              {
                type: "error",
                label: direction === "rtl" ? "خطا" : "Error",
                title: direction === "rtl" ? "ناموفق" : "Failed",
                description:
                  direction === "rtl"
                    ? "لطفاً دوباره تلاش کنید."
                    : "Please try again.",
              },
              {
                type: "loading",
                label: direction === "rtl" ? "در حال بارگذاری" : "Loading",
                title: direction === "rtl" ? "در حال آپلود…" : "Uploading…",
                description:
                  direction === "rtl" ? "لطفاً صبر کنید." : "Please wait.",
                timeout: 0,
              },
            ]

            return (
              <div className="flex flex-wrap gap-2">
                {entries.map((entry) => (
                  <Button
                    key={entry.type}
                    type="button"
                    variant="outline"
                    onClick={() =>
                      toast.add({
                        type: entry.type,
                        title: entry.title,
                        description: entry.description,
                        timeout: entry.timeout,
                      })
                    }
                  >
                    {entry.label}
                  </Button>
                ))}
              </div>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Title only</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastTitleOnly() {
  return (
    <Button
      variant="outline"
      onClick={() => toast.add({ type: "success", title: "Copied to clipboard" })}
    >
      Copy
    </Button>
  )
}`}
        >
          {(direction) => (
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                toast.add({
                  type: "success",
                  title:
                    direction === "rtl"
                      ? "در کلیپ‌بورد کپی شد"
                      : "Copied to clipboard",
                })
              }
            >
              {direction === "rtl" ? "کپی" : "Copy"}
            </Button>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With action</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">actionProps</code> for
          an undo / retry control. Use the returned id with{" "}
          <code className="rounded bg-muted px-1 text-xs">toast.close</code>.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastActionExample() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.add({
          type: "info",
          title: "File deleted",
          description: "Moved to trash.",
          actionProps: {
            children: "Undo",
            onClick() {
              toast.close(id)
              toast.add({ type: "success", title: "Restored" })
            },
          },
        })
      }}
    >
      Delete file
    </Button>
  )
}`}
        >
          {(direction) => (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const id = toast.add({
                  type: "info",
                  title: direction === "rtl" ? "فایل حذف شد" : "File deleted",
                  description:
                    direction === "rtl" ? "به سطل زباله منتقل شد." : "Moved to trash.",
                  actionProps: {
                    children: direction === "rtl" ? "واگرد" : "Undo",
                    onClick() {
                      toast.close(id)
                      toast.add({
                        type: "success",
                        title: direction === "rtl" ? "بازیابی شد" : "Restored",
                      })
                    },
                  },
                })
              }}
            >
              {direction === "rtl" ? "حذف فایل" : "Delete file"}
            </Button>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Promise</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">toast.promise</code>{" "}
          updates one toast through loading → success / error.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastPromiseExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          void toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1500)),
            {
              loading: "Saving…",
              success: "Saved",
              error: "Could not save",
            }
          )
        }}
      >
        Resolve
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          void toast
            .promise(
              new Promise((_, reject) => {
                setTimeout(() => {
                  reject(new Error("fail"))
                }, 1500)
              }),
              {
                loading: "Saving…",
                success: "Saved",
                error: "Could not save",
              }
            )
            .catch(() => {
              // Demo rejection — toast already shows the error state.
            })
        }}
      >
        Reject
      </Button>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  void toast.promise(wait(1500), {
                    loading:
                      direction === "rtl" ? "در حال ذخیره…" : "Saving…",
                    success: direction === "rtl" ? "ذخیره شد" : "Saved",
                    error:
                      direction === "rtl" ? "ذخیره نشد" : "Could not save",
                  })
                }}
              >
                {direction === "rtl" ? "موفق" : "Resolve"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  void toast
                    .promise(
                      wait(1500).then(() =>
                        Promise.reject(new Error("fail"))
                      ),
                      {
                        loading:
                          direction === "rtl" ? "در حال ذخیره…" : "Saving…",
                        success: direction === "rtl" ? "ذخیره شد" : "Saved",
                        error:
                          direction === "rtl" ? "ذخیره نشد" : "Could not save",
                      }
                    )
                    .catch(() => {
                      // Demo rejection — toast already shows the error state.
                    })
                }}
              >
                {direction === "rtl" ? "ناموفق" : "Reject"}
              </Button>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Update & close</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastUpdateExample() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.add({
          type: "loading",
          title: "Publishing…",
          timeout: 0,
        })
        window.setTimeout(() => {
          toast.update(id, {
            type: "success",
            title: "Published",
            description: "Your page is live.",
            timeout: 4000,
          })
        }, 1600)
      }}
    >
      Publish
    </Button>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  const id = toast.add({
                    type: "loading",
                    title:
                      direction === "rtl" ? "در حال انتشار…" : "Publishing…",
                    timeout: 0,
                  })
                  window.setTimeout(() => {
                    toast.update(id, {
                      type: "success",
                      title: direction === "rtl" ? "منتشر شد" : "Published",
                      description:
                        direction === "rtl"
                          ? "صفحه شما زنده است."
                          : "Your page is live.",
                      timeout: 4000,
                    })
                  }, 1600)
                }}
              >
                {direction === "rtl" ? "انتشار" : "Publish"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  toast.close()
                }}
              >
                {direction === "rtl" ? "بستن همه" : "Close all"}
              </Button>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Stacking</h2>
        <p className="text-sm text-muted-foreground">
          Hover the stack to expand. Default limit is 3 visible toasts.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastStacking() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.add({ type: "info", title: "First notification" })
        toast.add({ type: "success", title: "Second notification" })
        toast.add({ type: "warning", title: "Third notification" })
        toast.add({ type: "error", title: "Fourth (queued)" })
      }}
    >
      Fire four
    </Button>
  )
}`}
        >
          {(direction) => (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                toast.add({
                  type: "info",
                  title:
                    direction === "rtl" ? "اعلان اول" : "First notification",
                })
                toast.add({
                  type: "success",
                  title:
                    direction === "rtl" ? "اعلان دوم" : "Second notification",
                })
                toast.add({
                  type: "warning",
                  title:
                    direction === "rtl" ? "اعلان سوم" : "Third notification",
                })
                toast.add({
                  type: "error",
                  title:
                    direction === "rtl" ? "اعلان چهارم (صف)" : "Fourth (queued)",
                })
              }}
            >
              {direction === "rtl" ? "چهار اعلان" : "Fire four"}
            </Button>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Placement</h2>
        <p className="text-sm text-muted-foreground">
          Set{" "}
          <code className="rounded bg-muted px-1 text-xs">
            placement
          </code>{" "}
          on{" "}
          <code className="rounded bg-muted px-1 text-xs">Toaster</code>
          — physical corners and edges (
          <code className="rounded bg-muted px-1 text-xs">top-left</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">bottom-right</code>,
          …). Default is{" "}
          <code className="rounded bg-muted px-1 text-xs">bottom-right</code>.
        </p>
        <ComponentPreview
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  createToastManager,
  Toaster,
  type ToastPlacement,
} from "@/components/ui/toast"

const demoToast = createToastManager()

export function ToastPlacementDemo() {
  const [placement, setPlacement] = useState<ToastPlacement>("bottom-right")

  return (
    <Toaster toastManager={demoToast} placement={placement}>
      <Button
        variant="outline"
        onClick={() => {
          setPlacement("top-left")
          demoToast.add({ title: "Pinned top-left" })
        }}
      >
        top-left
      </Button>
    </Toaster>
  )
}`}
        >
          {(direction) => <ToastPlacementDemo direction={direction} />}
        </ComponentPreview>
        <p className="text-sm text-muted-foreground">
          In your app, set placement once on the root{" "}
          <code className="rounded bg-muted px-1 text-xs">Toaster</code>:
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-muted/40 p-3 text-xs text-foreground">
          {`<Toaster placement="top-right">{children}</Toaster>`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">High priority</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">
            priority=&quot;high&quot;
          </code>{" "}
          announces urgently to assistive tech.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastPriority() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          type: "error",
          title: "Payment failed",
          description: "Your card was declined.",
          priority: "high",
        })
      }
    >
      Urgent error
    </Button>
  )
}`}
        >
          {(direction) => (
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                toast.add({
                  type: "error",
                  title:
                    direction === "rtl" ? "پرداخت ناموفق" : "Payment failed",
                  description:
                    direction === "rtl"
                      ? "کارت شما رد شد."
                      : "Your card was declined.",
                  priority: "high",
                })
              }
            >
              {direction === "rtl" ? "خطای فوری" : "Urgent error"}
            </Button>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ToastPreviews }
