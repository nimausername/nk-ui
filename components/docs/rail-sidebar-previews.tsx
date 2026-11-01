"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { NextjsIcon, ReactIcon, ViteIcon } from "@/components/docs/framework-icons"
import { RailSidebar } from "@/components/ui/rail-sidebar"

const RAIL_SIDEBAR_EXAMPLE_CODE = `import { RailSidebar } from "@/components/ui/rail-sidebar"

export function RailSidebarExample() {
  return (
    <RailSidebar
      label="Docs"
      items={[
        { label: "Introduction", href: "/docs" },
        {
          label: "Installation",
          href: "/docs/installation",
          items: [
            { label: "Next.js", href: "/docs/installation/next" },
            { label: "Vite", href: "/docs/installation/vite" },
          ],
        },
        { label: "Components", href: "/docs/components" },
      ]}
    />
  )
}`

const RAIL_SIDEBAR_ICONS_EXAMPLE_CODE = `import { RailSidebar } from "@/components/ui/rail-sidebar"

export function RailSidebarWithIconsExample() {
  return (
    <RailSidebar
      label="Docs"
      items={[
        { label: "Introduction", href: "/docs" },
        {
          label: "Installation",
          href: "/docs/installation",
          items: [
            {
              label: "Next.js",
              href: "/docs/installation/next",
              icon: <NextjsIcon />,
            },
            {
              label: "Vite",
              href: "/docs/installation/vite",
              icon: <ViteIcon />,
            },
            {
              label: "Manual",
              href: "/docs/installation/manual",
              icon: <ReactIcon />,
            },
          ],
        },
        { label: "Components", href: "/docs/components" },
      ]}
    />
  )
}`

/**
 * Rail Sidebar docs examples — default + branded icons.
 */
const RailSidebarPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <p className="text-sm text-muted-foreground">
          Active rail follows the current route. Nested links use a second rail
          from the parent to the leaf. Toggle RTL to verify the rail and corner
          mirror to inline-start.
        </p>
        <ComponentPreview code={RAIL_SIDEBAR_EXAMPLE_CODE} className="w-full">
          {(direction) => (
            <div className="w-full max-w-xs">
              <RailSidebar
                dir={direction}
                label={direction === "rtl" ? "اسناد" : "Docs"}
                items={
                  direction === "rtl"
                    ? [
                        { label: "مقدمه", href: "/docs" },
                        {
                          label: "نصب",
                          href: "/docs/installation",
                          items: [
                            { label: "Next.js", href: "/docs/installation/next" },
                            { label: "Vite", href: "/docs/installation/vite" },
                          ],
                        },
                        { label: "کامپوننت‌ها", href: "/docs/components" },
                        { label: "ترکیبی‌ها", href: "/docs/composites" },
                      ]
                    : [
                        { label: "Introduction", href: "/docs" },
                        {
                          label: "Installation",
                          href: "/docs/installation",
                          items: [
                            { label: "Next.js", href: "/docs/installation/next" },
                            { label: "Vite", href: "/docs/installation/vite" },
                          ],
                        },
                        { label: "Components", href: "/docs/components" },
                        { label: "Composites", href: "/docs/composites" },
                      ]
                }
              />
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With icons</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">icon</code> on any item
          for brand marks or leading glyphs — same nested{" "}
          <code className="rounded bg-muted px-1 text-xs">items</code> API.
        </p>
        <ComponentPreview code={RAIL_SIDEBAR_ICONS_EXAMPLE_CODE} className="w-full">
          {(direction) => (
            <div className="w-full max-w-xs">
              <RailSidebar
                dir={direction}
                label={direction === "rtl" ? "اسناد" : "Docs"}
                items={
                  direction === "rtl"
                    ? [
                        { label: "مقدمه", href: "/docs" },
                        {
                          label: "نصب",
                          href: "/docs/installation",
                          items: [
                            {
                              label: "Next.js",
                              href: "/docs/installation/next",
                              icon: <NextjsIcon aria-hidden="true" />,
                            },
                            {
                              label: "Vite",
                              href: "/docs/installation/vite",
                              icon: <ViteIcon aria-hidden="true" />,
                            },
                            {
                              label: "دستی",
                              href: "/docs/installation/manual",
                              icon: <ReactIcon aria-hidden="true" />,
                            },
                          ],
                        },
                        { label: "کامپوننت‌ها", href: "/docs/components" },
                      ]
                    : [
                        { label: "Introduction", href: "/docs" },
                        {
                          label: "Installation",
                          href: "/docs/installation",
                          items: [
                            {
                              label: "Next.js",
                              href: "/docs/installation/next",
                              icon: <NextjsIcon aria-hidden="true" />,
                            },
                            {
                              label: "Vite",
                              href: "/docs/installation/vite",
                              icon: <ViteIcon aria-hidden="true" />,
                            },
                            {
                              label: "Manual",
                              href: "/docs/installation/manual",
                              icon: <ReactIcon aria-hidden="true" />,
                            },
                          ],
                        },
                        { label: "Components", href: "/docs/components" },
                      ]
                }
              />
            </div>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { RailSidebarPreviews }
