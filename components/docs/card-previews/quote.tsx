"use client"

import { playwriteEngland } from "@/components/docs/card-previews/quote-font"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/**
 * Editorial quote — script accent on the line, quiet attribution under a rule.
 */
const CardQuotePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Quote</h2>
      <p className="text-sm text-muted-foreground">
        A short line and an attribution. The script face marks only the key
        words — the rest stays in the UI font.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Playwrite_GB_S } from "next/font/google"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const script = Playwrite_GB_S({ weight: "400" })

export function CardQuote() {
  return (
    <Card className="w-full max-w-sm gap-5 text-center">
      <CardHeader className="items-center gap-0 text-center">
        <p className="text-2xl leading-snug font-medium">
          Own the{" "}
          <span className={cn(script.className, "font-normal")}>source</span>.
          <br />
          Ship the{" "}
          <span className={cn(script.className, "font-normal")}>interface</span>.
        </p>
      </CardHeader>
      <CardContent className="border-t border-border pt-4 text-center">
        <CardDescription>Studio notes · nk</CardDescription>
      </CardContent>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-sm gap-5 text-center">
            <CardHeader className="items-center gap-0 text-center">
              <p className="text-2xl leading-snug font-medium">
                {direction === "rtl" ? (
                  "منبع را مال خود کنید. رابط را منتشر کنید."
                ) : (
                  <>
                    Own the{" "}
                    <span className={cn(playwriteEngland.className, "font-normal")}>
                      source
                    </span>
                    .
                    <br />
                    Ship the{" "}
                    <span className={cn(playwriteEngland.className, "font-normal")}>
                      interface
                    </span>
                    .
                  </>
                )}
              </p>
            </CardHeader>
            <CardContent className="border-t border-border pt-4 text-center">
              <CardDescription>
                {direction === "rtl" ? "یادداشت استودیو · nk" : "Studio notes · nk"}
              </CardDescription>
            </CardContent>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CardQuotePreview }
