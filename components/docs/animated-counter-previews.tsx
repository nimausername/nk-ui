"use client"

import Link from "next/link"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"

/**
 * Animated Counter docs examples — bump, decimals / affix, grouping.
 */
const AnimatedCounterPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">
              AnimatedCounter
            </strong>
            : display-only digit wheel with soft top/bottom fades
          </li>
          <li>
            Editable stepped values belong on{" "}
            <Link
              href="/docs/components/number-field"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Number Field
            </Link>
            , which embeds this wheel
          </li>
        </ul>
      </section>

      <BasicPreview />
      <DecimalsAffixPreview />
      <GroupingPreview />
    </div>
  )
}

/**
 * Live value bump with increment / decrement.
 */
const BasicPreview = () => {
  const [value, setValue] = useState(1280)

  const handleDecrement = () => {
    setValue((current) => Math.max(0, current - 17))
  }

  const handleIncrement = () => {
    setValue((current) => current + 17)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Basic</h2>
      <p className="text-sm text-muted-foreground">
        Change{" "}
        <code className="rounded bg-muted px-1 text-xs">value</code> and each
        place rolls on the wheel.
      </p>
      <ComponentPreview
        className="w-full"
        code={`"use client"

import { useState } from "react"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"

export function AnimatedCounterBasic() {
  const [value, setValue] = useState(1280)

  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatedCounter
        value={value}
        separator=","
        className="text-3xl font-semibold tabular-nums tracking-tight"
      />
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setValue((v) => Math.max(0, v - 17))}
        >
          −17
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setValue((v) => v + 17)}
        >
          +17
        </Button>
      </div>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-center gap-4" dir={direction}>
            <AnimatedCounter
              value={value}
              separator=","
              className="text-3xl font-semibold tabular-nums tracking-tight"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleDecrement}
                aria-label={direction === "rtl" ? "کاهش ۱۷" : "Decrease by 17"}
              >
                −17
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleIncrement}
                aria-label={direction === "rtl" ? "افزایش ۱۷" : "Increase by 17"}
              >
                +17
              </Button>
            </div>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * Currency-style decimals with prefix and suffix.
 */
const DecimalsAffixPreview = () => {
  const [value, setValue] = useState(24.5)

  const handleDecrement = () => {
    setValue((current) => Math.max(0, Number((current - 0.5).toFixed(1))))
  }

  const handleIncrement = () => {
    setValue((current) => Number((current + 0.5).toFixed(1)))
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Decimals and affix</h2>
      <p className="text-sm text-muted-foreground">
        Use{" "}
        <code className="rounded bg-muted px-1 text-xs">decimals</code>,{" "}
        <code className="rounded bg-muted px-1 text-xs">prefix</code>, and{" "}
        <code className="rounded bg-muted px-1 text-xs">suffix</code> for money
        and units.
      </p>
      <ComponentPreview
        className="w-full"
        code={`"use client"

import { useState } from "react"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"

export function AnimatedCounterCurrency() {
  const [value, setValue] = useState(24.5)

  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatedCounter
        value={value}
        decimals={2}
        prefix="$"
        suffix={<span className="ms-1 text-sm text-muted-foreground">USD</span>}
        className="text-3xl font-semibold tabular-nums tracking-tight"
      />
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            setValue((v) => Math.max(0, Number((v - 0.5).toFixed(1))))
          }
        >
          −0.5
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setValue((v) => Number((v + 0.5).toFixed(1)))}
        >
          +0.5
        </Button>
      </div>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-center gap-4" dir={direction}>
            <AnimatedCounter
              value={value}
              decimals={2}
              prefix={direction === "rtl" ? null : "$"}
              suffix={
                <span className="ms-1 text-sm text-muted-foreground">
                  {direction === "rtl" ? "دلار" : "USD"}
                </span>
              }
              className="text-3xl font-semibold tabular-nums tracking-tight"
            />
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleDecrement}
                aria-label={
                  direction === "rtl" ? "کاهش ۰٫۵" : "Decrease by 0.5"
                }
              >
                −0.5
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleIncrement}
                aria-label={
                  direction === "rtl" ? "افزایش ۰٫۵" : "Increase by 0.5"
                }
              >
                +0.5
              </Button>
            </div>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

/**
 * Western vs Indian digit grouping.
 */
const GroupingPreview = () => {
  const [value, setValue] = useState(12_34_567)

  const handleBump = () => {
    setValue((current) => current + 10_000)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Grouping</h2>
      <p className="text-sm text-muted-foreground">
        <code className="rounded bg-muted px-1 text-xs">grouping</code>{" "}
        switches between western thousands and Indian lakhs / crores separators.
      </p>
      <ComponentPreview
        className="w-full"
        code={`"use client"

import { useState } from "react"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"

export function AnimatedCounterGrouping() {
  const [value, setValue] = useState(1234567)

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">Western</p>
        <AnimatedCounter
          value={value}
          grouping="western"
          separator=","
          className="text-2xl font-semibold tabular-nums tracking-tight"
        />
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">Indian</p>
        <AnimatedCounter
          value={value}
          grouping="indian"
          separator=","
          className="text-2xl font-semibold tabular-nums tracking-tight"
        />
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="self-start"
        onClick={() => setValue((v) => v + 10000)}
      >
        +10,000
      </Button>
    </div>
  )
}`}
      >
        {(direction) => (
          <div
            className="flex w-full max-w-md flex-col gap-6"
            dir={direction}
          >
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                {direction === "rtl" ? "غربی" : "Western"}
              </p>
              <AnimatedCounter
                value={value}
                grouping="western"
                separator=","
                className="text-2xl font-semibold tabular-nums tracking-tight"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                {direction === "rtl" ? "هندی" : "Indian"}
              </p>
              <AnimatedCounter
                value={value}
                grouping="indian"
                separator=","
                className="text-2xl font-semibold tabular-nums tracking-tight"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="self-start"
              onClick={handleBump}
              aria-label={
                direction === "rtl" ? "افزایش ۱۰٬۰۰۰" : "Increase by 10,000"
              }
            >
              +10,000
            </Button>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { AnimatedCounterPreviews }
