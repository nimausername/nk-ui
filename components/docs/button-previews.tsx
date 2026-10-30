"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"

/**
 * Button docs examples with English LTR and Persian RTL copy.
 */
const ButtonPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <ComponentPreview>
          {(direction) =>
            direction === "rtl" ? (
              <>
                <Button type="button">پیش‌فرض</Button>
                <Button type="button" variant="secondary">
                  ثانویه
                </Button>
                <Button type="button" variant="outline">
                  حاشیه‌دار
                </Button>
                <Button type="button" variant="ghost">
                  شفاف
                </Button>
                <Button type="button" variant="destructive">
                  حذف
                </Button>
              </>
            ) : (
              <>
                <Button type="button">Default</Button>
                <Button type="button" variant="secondary">
                  Secondary
                </Button>
                <Button type="button" variant="outline">
                  Outline
                </Button>
                <Button type="button" variant="ghost">
                  Ghost
                </Button>
                <Button type="button" variant="destructive">
                  Destructive
                </Button>
              </>
            )
          }
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview>
          {(direction) =>
            direction === "rtl" ? (
              <>
                <Button type="button" size="sm">
                  کوچک
                </Button>
                <Button type="button" size="default">
                  پیش‌فرض
                </Button>
                <Button type="button" size="lg">
                  بزرگ
                </Button>
              </>
            ) : (
              <>
                <Button type="button" size="sm">
                  Small
                </Button>
                <Button type="button" size="default">
                  Default
                </Button>
                <Button type="button" size="lg">
                  Large
                </Button>
              </>
            )
          }
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With icon</h2>
        <p className="text-sm text-muted-foreground">
          RTL preview uses Persian label and reading direction. Spacing still uses{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">gap</code>.
        </p>
        <ComponentPreview>
          {(direction) =>
            direction === "rtl" ? (
              <Button type="button">
                ادامه
                <span aria-hidden="true">←</span>
              </Button>
            ) : (
              <Button type="button">
                <span aria-hidden="true">→</span>
                Continue
              </Button>
            )
          }
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ButtonPreviews }
