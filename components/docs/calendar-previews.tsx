"use client"

import { format } from "date-fns"
import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { enUS, faIR } from "react-day-picker/locale"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Calendar } from "@/components/ui/calendar"

type PreviewDirection = "ltr" | "rtl"

const DEMO_MONTH = new Date(2026, 10, 1)

/**
 * Gregorian calendar with English or Persian labels + matching `dir`.
 * DayPicker’s default `cccccc` weekday token yields cryptic fa short forms
 * (`1ش`); use abbreviated names (`یکشنبه`) for RTL. Digits use `arabext`.
 * (Jalali / Hijri needs `react-day-picker/persian` — separate track.)
 */
const calendarLocale = (direction: PreviewDirection) =>
  direction === "rtl" ? faIR : enUS

const calendarLocalization = (direction: PreviewDirection) => {
  const locale = calendarLocale(direction)

  if (direction === "ltr") {
    return {
      dir: direction,
      locale,
    } as const
  }

  return {
    dir: direction,
    locale,
    numerals: "arabext" as const,
    // Wider cells so شنبه / یکشنبه / … fit without colliding.
    className: "[--cell-size:--spacing(11)]",
    formatters: {
      formatWeekdayName: (weekday: Date) =>
        format(weekday, "EEE", { locale: faIR }),
    },
  } as const
}

/**
 * Calendar docs examples — single, range, multiple, dropdown, week numbers, disabled.
 */
const CalendarPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Calendar</strong>:
            month grid on{" "}
            <code className="rounded bg-muted px-1 text-xs">react-day-picker</code>
          </li>
          <li>
            Modes:{" "}
            <code className="rounded bg-muted px-1 text-xs">single</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">multiple</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">range</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1 text-xs">captionLayout</code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1 text-xs">showWeekNumber</code>{" "}
            / disabled matchers
          </li>
          <li>
            RTL:{" "}
            <code className="rounded bg-muted px-1 text-xs">dir</code> +{" "}
            <code className="rounded bg-muted px-1 text-xs">{`locale={faIR}`}</code>{" "}
            +{" "}
            <code className="rounded bg-muted px-1 text-xs">
              {`numerals="arabext"`}
            </code>{" "}
            + weekday formatter for{" "}
            <code className="rounded bg-muted px-1 text-xs">یکشنبه</code> (not{" "}
            <code className="rounded bg-muted px-1 text-xs">1ش</code>)
          </li>
          <li>
            Date field chrome →{" "}
            <a
              href="/docs/composites/date-picker"
              className="underline-offset-4 hover:underline"
            >
              Date Picker
            </a>{" "}
            (Popover + Calendar)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Single date</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"
import { faIR } from "react-day-picker/locale"

import { Calendar } from "@/components/ui/calendar"

export function CalendarSingle() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      // RTL: dir="rtl" locale={faIR} numerals="arabext"
    />
  )
}`}
        >
          {(direction) => <SinglePreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Date range</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export function CalendarRange() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 10, 10),
    to: new Date(2026, 10, 18),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={new Date(2026, 10)}
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
    />
  )
}`}
        >
          {(direction) => <RangePreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Multiple dates</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarMultiple() {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(2026, 10, 4),
    new Date(2026, 10, 12),
    new Date(2026, 10, 18),
  ])

  return (
    <Calendar
      mode="multiple"
      defaultMonth={new Date(2026, 10)}
      selected={dates}
      onSelect={setDates}
    />
  )
}`}
        >
          {(direction) => <MultiplePreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Month and year dropdown</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDropdown() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      selected={date}
      onSelect={setDate}
    />
  )
}`}
        >
          {(direction) => <DropdownPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Week numbers</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarWeekNumbers() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      showWeekNumber
      selected={date}
      onSelect={setDate}
    />
  )
}`}
        >
          {(direction) => <WeekNumbersPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled dates</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDisabled() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      defaultMonth={new Date(2026, 10)}
      selected={date}
      onSelect={setDate}
      disabled={[
        { dayOfWeek: [0, 6] },
        { from: new Date(2026, 10, 3), to: new Date(2026, 10, 7) },
        new Date(2026, 10, 22),
      ]}
    />
  )
}`}
        >
          {(direction) => <DisabledPreview direction={direction} />}
        </ComponentPreview>
      </section>
    </div>
  )
}

type DirectionProps = {
  readonly direction: PreviewDirection
}

const SinglePreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 5))

  return (
    <div dir={direction}>
      <Calendar
        mode="single"
        {...calendarLocalization(direction)}
        defaultMonth={DEMO_MONTH}
        selected={date}
        onSelect={setDate}
      />
    </div>
  )
}

const RangePreview = ({ direction }: DirectionProps) => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 10, 10),
    to: new Date(2026, 10, 18),
  })

  return (
    <div dir={direction} className="overflow-x-auto">
      <Calendar
        mode="range"
        {...calendarLocalization(direction)}
        defaultMonth={DEMO_MONTH}
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
      />
    </div>
  )
}

const MultiplePreview = ({ direction }: DirectionProps) => {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(2026, 10, 4),
    new Date(2026, 10, 12),
    new Date(2026, 10, 18),
  ])

  return (
    <div dir={direction}>
      <Calendar
        mode="multiple"
        {...calendarLocalization(direction)}
        defaultMonth={DEMO_MONTH}
        selected={dates}
        onSelect={setDates}
      />
    </div>
  )
}

const DropdownPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 5))

  return (
    <div dir={direction}>
      <Calendar
        mode="single"
        {...calendarLocalization(direction)}
        captionLayout="dropdown"
        defaultMonth={DEMO_MONTH}
        selected={date}
        onSelect={setDate}
      />
    </div>
  )
}

const WeekNumbersPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 5))

  return (
    <div dir={direction}>
      <Calendar
        mode="single"
        {...calendarLocalization(direction)}
        showWeekNumber
        defaultMonth={DEMO_MONTH}
        selected={date}
        onSelect={setDate}
      />
    </div>
  )
}

const DisabledPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div dir={direction}>
      <Calendar
        mode="single"
        {...calendarLocalization(direction)}
        defaultMonth={DEMO_MONTH}
        selected={date}
        onSelect={setDate}
        disabled={[
          { dayOfWeek: [0, 6] },
          { from: new Date(2026, 10, 3), to: new Date(2026, 10, 7) },
          new Date(2026, 10, 22),
        ]}
      />
    </div>
  )
}

export { CalendarPreviews }
