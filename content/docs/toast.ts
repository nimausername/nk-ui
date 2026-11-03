/**
 * Toast component docs — markdown for Copy Page / AI.
 */

export const toastDocsTitle = "Toast"

export const toastDocsDescription =
  "Transient notifications on Base UI. Mount Toaster once, then call toast.add / toast.promise / toast.update from anywhere — with status types, actions, and stacking."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const toastDocsUpdatedAt = "2026-11-03"

export const toastDocsMarkdown = `# Toast

${toastDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/toast
\`\`\`

Pulls \`@nk/button\` as a registry dependency.

## Setup

Toast is not a drop-in widget. Install it, mount \`Toaster\` once, then fire notifications from anywhere with \`toast\`.

### 1. Mount Toaster once near the root

Wrap your app (layout, providers, or root shell). One host is enough — do not nest multiple default \`Toaster\`s that share the same manager.

\`\`\`tsx
// app/layout.tsx (Next.js) or your root providers
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
}
\`\`\`

Optional props:

| Prop | Default | Purpose |
| --- | --- | --- |
| \`placement\` | \`bottom-right\` | Stack position (see below) |
| \`timeout\` | \`5000\` | Auto-dismiss in ms |
| \`limit\` | \`3\` | Max visible toasts |
| \`toastManager\` | exported \`toast\` | Custom / isolated manager |

### Placement

\`\`\`tsx
<Toaster placement="top-right">{children}</Toaster>
\`\`\`

| Value | Position |
| --- | --- |
| \`bottom-right\` | Default — bottom right |
| \`bottom-left\` | Bottom left |
| \`bottom-center\` | Bottom center |
| \`top-right\` | Top right |
| \`top-left\` | Top left |
| \`top-center\` | Top center |

Placement is host-level (one stack position per \`Toaster\`), not per toast. Inset is \`1.5rem\` (\`*-6\`) from each edge.

### 2. Call toast from anywhere

Import the shared \`toast\` manager — it matches the default \`Toaster\`. Works in client components, event handlers, and after mutations.

\`\`\`tsx
import { toast } from "@/components/ui/toast"

toast.add({
  type: "success",
  title: "Saved",
  description: "Your changes are live.",
})
\`\`\`

### 3. Use the right pattern for the job

- **Status feedback** — \`toast.add({ type, title, description? })\` with \`success\`, \`info\`, \`warning\`, or \`error\`
- **Async work** — \`toast.promise\` for loading → success / error (always handle rejections on the promise)
- **Undo / CTA** — pass \`actionProps\` and keep the returned id for \`toast.close(id)\`
- **Sticky loading** — \`type: "loading"\`, \`timeout: 0\`, then \`toast.update\` or \`toast.close\`
- **Urgent a11y** — \`priority: "high"\` for critical errors

\`\`\`tsx
// Async
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
})
\`\`\`

### 4. Keep one manager per app

The exported \`toast\` is wired to the default \`Toaster\`. Only use \`createToastManager()\` when you need a second, isolated stack (docs demos do this for placement playgrounds).

Ensure your theme defines \`--success\` if you use success toasts (nk themes include it). Swipe to dismiss; hover the stack to expand collapsed items.

## Types

Pass \`type\` to drive the status icon and subtle border tone:

| Type | Icon |
| --- | --- |
| \`success\` | check — success color |
| \`info\` | info |
| \`warning\` | alert |
| \`error\` | octagon — destructive color |
| \`loading\` | spinner (\`timeout: 0\` to keep open) |

## Manager API

- \`toast.add(options)\` → id
- \`toast.update(id, options)\`
- \`toast.close(id?)\` — omit id to close the active toast / stack behavior per Base UI
- \`toast.promise(promise, { loading, success, error })\`

## Notes

- Built on Base UI (\`@base-ui/react/toast\`).
- The exported \`toast\` manager matches the default \`Toaster\` — keep one manager per app.
- Physical placement corners (\`top-left\` … \`bottom-right\`); swipe to dismiss.
- Hover the stack to expand collapsed toasts.
- Live previews are on the docs page.
`
