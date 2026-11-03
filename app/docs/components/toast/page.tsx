import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsStep, DocsSteps } from "@/components/docs/docs-steps"
import { ToastPreviews } from "@/components/docs/toast-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  toastDocsDescription,
  toastDocsMarkdown,
  toastDocsTitle,
  toastDocsUpdatedAt,
} from "@/content/docs/toast"

/**
 * Toast component detail page.
 */
export default function ToastDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {toastDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{toastDocsTitle}</h1>
          <DocsCopyPage
            page={toastDocsMarkdown}
            url={`${siteConfig.url}/docs/components/toast`}
            markdownUrl="/docs/components/toast.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{toastDocsDescription}</p>
        <DocsLastUpdated date={toastDocsUpdatedAt} />
      </header>

      <ComponentInstall name="toast" />

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Setup</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Toast is not a drop-in widget — install it, mount{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Toaster</code>{" "}
            once, then fire notifications from anywhere with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">toast</code>.
          </p>
        </div>

        <DocsSteps>
          <DocsStep step={1} title="Mount Toaster once near the root">
            <p>
              Wrap your app (layout, providers, or root shell). One host is enough —
              do not nest multiple default{" "}
              <code className="rounded bg-muted px-1 text-xs">Toaster</code>s that
              share the same manager.
            </p>
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{`// app/layout.tsx (Next.js) or your root providers
import { Toaster } from "@/components/ui/toast"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster placement="bottom-right" timeout={5000} limit={3}>
          {children}
        </Toaster>
      </body>
    </html>
  )
}`}</code>
            </pre>
            <ul className="list-disc space-y-1 ps-5">
              <li>
                <code className="rounded bg-muted px-1 text-xs">placement</code> —{" "}
                <code className="rounded bg-muted px-1 text-xs">bottom-right</code>{" "}
                (default),{" "}
                <code className="rounded bg-muted px-1 text-xs">top-left</code>,{" "}
                <code className="rounded bg-muted px-1 text-xs">top-center</code>,{" "}
                <code className="rounded bg-muted px-1 text-xs">top-right</code>,{" "}
                <code className="rounded bg-muted px-1 text-xs">bottom-left</code>,{" "}
                <code className="rounded bg-muted px-1 text-xs">bottom-center</code>
              </li>
              <li>
                <code className="rounded bg-muted px-1 text-xs">timeout</code> — ms
                before auto-dismiss (default{" "}
                <code className="rounded bg-muted px-1 text-xs">5000</code>)
              </li>
              <li>
                <code className="rounded bg-muted px-1 text-xs">limit</code> — max
                visible toasts (default{" "}
                <code className="rounded bg-muted px-1 text-xs">3</code>)
              </li>
            </ul>
          </DocsStep>

          <DocsStep step={2} title="Call toast from anywhere">
            <p>
              Import the shared{" "}
              <code className="rounded bg-muted px-1 text-xs">toast</code> manager —
              it matches the default{" "}
              <code className="rounded bg-muted px-1 text-xs">Toaster</code>. Works in
              client components, event handlers, and after mutations.
            </p>
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{`import { toast } from "@/components/ui/toast"

toast.add({
  type: "success",
  title: "Saved",
  description: "Your changes are live.",
})`}</code>
            </pre>
          </DocsStep>

          <DocsStep step={3} title="Use the right pattern for the job">
            <ul className="list-disc space-y-2 ps-5">
              <li>
                <strong className="font-medium text-foreground">Status feedback</strong>{" "}
                —{" "}
                <code className="rounded bg-muted px-1 text-xs">
                  toast.add({`{ type, title, description? }`})
                </code>{" "}
                with{" "}
                <code className="rounded bg-muted px-1 text-xs">success</code>,{" "}
                <code className="rounded bg-muted px-1 text-xs">info</code>,{" "}
                <code className="rounded bg-muted px-1 text-xs">warning</code>, or{" "}
                <code className="rounded bg-muted px-1 text-xs">error</code>
              </li>
              <li>
                <strong className="font-medium text-foreground">Async work</strong> —{" "}
                <code className="rounded bg-muted px-1 text-xs">toast.promise</code>{" "}
                for loading → success / error (always handle rejections on the
                promise)
              </li>
              <li>
                <strong className="font-medium text-foreground">Undo / CTA</strong> —{" "}
                pass{" "}
                <code className="rounded bg-muted px-1 text-xs">actionProps</code> and
                keep the returned id for{" "}
                <code className="rounded bg-muted px-1 text-xs">toast.close(id)</code>
              </li>
              <li>
                <strong className="font-medium text-foreground">Sticky loading</strong>{" "}
                —{" "}
                <code className="rounded bg-muted px-1 text-xs">
                  type: &quot;loading&quot;
                </code>
                ,{" "}
                <code className="rounded bg-muted px-1 text-xs">timeout: 0</code>, then{" "}
                <code className="rounded bg-muted px-1 text-xs">toast.update</code> or{" "}
                <code className="rounded bg-muted px-1 text-xs">toast.close</code>
              </li>
              <li>
                <strong className="font-medium text-foreground">Urgent a11y</strong> —{" "}
                <code className="rounded bg-muted px-1 text-xs">
                  priority: &quot;high&quot;
                </code>{" "}
                for critical errors
              </li>
            </ul>
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{`// Async
void toast.promise(save(), {
  loading: "Saving…",
  success: "Saved",
  error: "Could not save",
})

// Action + close by id
const id = toast.add({
  type: "info",
  title: "File deleted",
  actionProps: {
    children: "Undo",
    onClick() {
      toast.close(id)
    },
  },
})`}</code>
            </pre>
          </DocsStep>

          <DocsStep step={4} title="Keep one manager per app">
            <p>
              The exported{" "}
              <code className="rounded bg-muted px-1 text-xs">toast</code> is wired to
              the default{" "}
              <code className="rounded bg-muted px-1 text-xs">Toaster</code>. Only use{" "}
              <code className="rounded bg-muted px-1 text-xs">
                createToastManager()
              </code>{" "}
              when you need a second, isolated stack (docs demos do this for
              placement playgrounds).
            </p>
            <p>
              Ensure your theme defines{" "}
              <code className="rounded bg-muted px-1 text-xs">--success</code> if you
              use success toasts (nk themes include it). Swipe to dismiss; hover the
              stack to expand collapsed items.
            </p>
          </DocsStep>
        </DocsSteps>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">API checklist</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Toaster</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">placement</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">timeout</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">limit</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">toastManager</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">toast.add</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">update</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">close</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">promise</code>
          </li>
          <li>
            Types:{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">success</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">info</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">warning</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">error</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">loading</code>
          </li>
          <li>
            Optional{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">actionProps</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              priority=&quot;high&quot;
            </code>
          </li>
        </ul>
      </section>

      <ToastPreviews />
    </article>
  )
}
