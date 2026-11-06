"use client"

import { addDays, format, startOfDay } from "date-fns"
import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { enUS, faIR } from "react-day-picker/locale"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  DatePicker,
  DatePickerInput,
  DatePickerNatural,
  DateRangePicker,
  DateTimePicker,
  type DatePickerPreset,
} from "@/components/ui/date-picker"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"

type PreviewDirection = "ltr" | "rtl"

const DEMO_MONTH = new Date(2026, 10, 1)
const ACCEPTED_DATE = "2026-11-05"

/**
 * Gregorian labels + Persian digits / weekday names for RTL demos.
 */
const pickerLocalization = (direction: PreviewDirection) => {
  if (direction === "ltr") {
    return { dir: direction, locale: enUS } as const
  }

  return {
    dir: direction,
    locale: faIR,
    numerals: "arabext" as const,
    formatters: {
      formatWeekdayName: (weekday: Date) =>
        format(weekday, "EEE", { locale: faIR }),
    },
    calendarClassName: "[--cell-size:--spacing(11)]",
  } as const
}

const englishPresets: readonly DatePickerPreset[] = [
  { label: "Today", date: () => startOfDay(new Date()) },
  { label: "Tomorrow", date: () => addDays(startOfDay(new Date()), 1) },
  { label: "In 3 days", date: () => addDays(startOfDay(new Date()), 3) },
  { label: "In a week", date: () => addDays(startOfDay(new Date()), 7) },
  { label: "In 2 weeks", date: () => addDays(startOfDay(new Date()), 14) },
]

const persianPresets: readonly DatePickerPreset[] = [
  { label: "امروز", date: () => startOfDay(new Date()) },
  { label: "فردا", date: () => addDays(startOfDay(new Date()), 1) },
  { label: "۳ روز دیگر", date: () => addDays(startOfDay(new Date()), 3) },
  { label: "یک هفته دیگر", date: () => addDays(startOfDay(new Date()), 7) },
  { label: "دو هفته دیگر", date: () => addDays(startOfDay(new Date()), 14) },
]

const presetsFor = (direction: PreviewDirection) =>
  direction === "rtl" ? persianPresets : englishPresets

/**
 * Date Picker docs examples — single, range, presets, input, time, natural, Field, Form.
 */
const DatePickerPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">DatePicker</strong> /{" "}
            <strong className="font-medium text-foreground">DateRangePicker</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">DatePickerInput</strong>{" "}
            /{" "}
            <strong className="font-medium text-foreground">DateTimePicker</strong>{" "}
            /{" "}
            <strong className="font-medium text-foreground">DatePickerNatural</strong>
          </li>
          <li>
            Built on{" "}
            <a
              href="/docs/components/calendar"
              className="underline-offset-4 hover:underline"
            >
              Calendar
            </a>{" "}
            +{" "}
            <a
              href="/docs/components/popover"
              className="underline-offset-4 hover:underline"
            >
              Popover
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Single date</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { DatePicker } from "@/components/ui/date-picker"

export function DatePickerSingle() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DatePicker value={date} onValueChange={setDate} />
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

import { DateRangePicker } from "@/components/ui/date-picker"

export function DatePickerRange() {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <DateRangePicker value={range} onValueChange={setRange} />
  )
}`}
        >
          {(direction) => <RangePreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Presets</h2>
        <ComponentPreview
          code={`"use client"

import { addDays, startOfDay } from "date-fns"
import { useState } from "react"

import { DatePicker } from "@/components/ui/date-picker"

const presets = [
  { label: "Today", date: () => startOfDay(new Date()) },
  { label: "Tomorrow", date: () => addDays(startOfDay(new Date()), 1) },
  { label: "In a week", date: () => addDays(startOfDay(new Date()), 7) },
]

export function DatePickerPresets() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DatePicker value={date} onValueChange={setDate} presets={presets} />
  )
}`}
        >
          {(direction) => <PresetsPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Date of birth</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { DatePicker } from "@/components/ui/date-picker"

export function DatePickerBirth() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DatePicker
      value={date}
      onValueChange={setDate}
      captionLayout="dropdown"
      placeholder="Select date"
    />
  )
}`}
        >
          {(direction) => <BirthPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Input</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { DatePickerInput } from "@/components/ui/date-picker"

export function DatePickerWithInput() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DatePickerInput value={date} onValueChange={setDate} />
  )
}`}
        >
          {(direction) => <InputPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Time</h2>
        <ComponentPreview
          code={`"use client"

import { useState } from "react"

import { DateTimePicker } from "@/components/ui/date-picker"

export function DatePickerWithTime() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DateTimePicker value={date} onValueChange={setDate} />
  )
}`}
        >
          {(direction) => <TimePreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Natural language</h2>
        <p className="text-sm text-muted-foreground">
          Parses phrases with{" "}
          <code className="rounded bg-muted px-1 text-xs">chrono-node</code>{" "}
          (try “tomorrow” or “next Friday”).
        </p>
        <ComponentPreview
          code={`"use client"

import { format } from "date-fns"
import { useState } from "react"

import { DatePickerNatural } from "@/components/ui/date-picker"

export function DatePickerNaturalDemo() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <DatePickerNatural
      value={date}
      onValueChange={setDate}
      renderPreview={(value) =>
        value ? (
          <p className="text-sm text-muted-foreground">
            Your post will be published on {format(value, "PPP")}.
          </p>
        ) : null
      }
    />
  )
}`}
        >
          {(direction) => <NaturalPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <ComponentPreview
          code={`import { Field, FieldLabel } from "@/components/ui/field"
import { DatePicker } from "@/components/ui/date-picker"

export function DatePickerField() {
  return (
    <Field name="startDate" className="max-w-sm">
      <FieldLabel>Start date</FieldLabel>
      <DatePicker id="startDate" name="startDate" />
    </Field>
  )
}`}
        >
          {(direction) => <FieldPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs">{ACCEPTED_DATE}</code>
          . Anything else + Check shows the destructive ring and{" "}
          <code className="rounded bg-muted px-1 text-xs">FieldError</code>.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { DatePickerInput } from "@/components/ui/date-picker"

const ACCEPTED = "2026-11-05"

export function DatePickerValidation() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="eventDate"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.length === 0) {
            return "Pick a date."
          }
          if (value !== ACCEPTED) {
            return "Only 2026-11-05 is accepted in this demo."
          }
        }}
      >
        <FieldLabel>Event date</FieldLabel>
        <DatePickerInput name="eventDate" defaultValue={new Date(2026, 10, 1)} />
        <FieldError />
        <FieldSuccess>Date accepted.</FieldSuccess>
      </Field>
      <Button type="submit" variant="outline" size="sm" className="self-start">
        Check
      </Button>
    </Form>
  )
}`}
        >
          {(direction) => <ValidationPreview direction={direction} />}
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
    <div dir={direction} className="w-full max-w-sm">
      <DatePicker
        value={date}
        onValueChange={setDate}
        defaultMonth={DEMO_MONTH}
        placeholder={direction === "rtl" ? "تاریخ را انتخاب کنید" : "Pick a date"}
        {...pickerLocalization(direction)}
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
    <div dir={direction} className="w-full max-w-md">
      <DateRangePicker
        value={range}
        onValueChange={setRange}
        defaultMonth={DEMO_MONTH}
        placeholder={
          direction === "rtl" ? "بازه تاریخ را انتخاب کنید" : "Pick a date range"
        }
        {...pickerLocalization(direction)}
      />
    </div>
  )
}

const PresetsPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div dir={direction} className="w-full max-w-sm">
      <DatePicker
        value={date}
        onValueChange={setDate}
        presets={presetsFor(direction)}
        placeholder={direction === "rtl" ? "تاریخ را انتخاب کنید" : "Pick a date"}
        {...pickerLocalization(direction)}
      />
    </div>
  )
}

const BirthPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div dir={direction} className="w-full max-w-sm">
      <DatePicker
        value={date}
        onValueChange={setDate}
        captionLayout="dropdown"
        defaultMonth={new Date(2000, 0, 1)}
        placeholder={direction === "rtl" ? "تاریخ تولد" : "Select date"}
        {...pickerLocalization(direction)}
      />
    </div>
  )
}

const InputPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 5))

  return (
    <div dir={direction} className="w-full max-w-sm">
      <DatePickerInput
        value={date}
        onValueChange={setDate}
        defaultMonth={DEMO_MONTH}
        placeholder="YYYY-MM-DD"
        calendarLabel={direction === "rtl" ? "باز کردن تقویم" : "Open calendar"}
        {...pickerLocalization(direction)}
      />
    </div>
  )
}

const TimePreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>(
    new Date(2026, 10, 5, 14, 30)
  )

  return (
    <div dir={direction} className="w-full max-w-sm">
      <DateTimePicker
        value={date}
        onValueChange={setDate}
        defaultMonth={DEMO_MONTH}
        placeholder={
          direction === "rtl" ? "تاریخ و زمان را انتخاب کنید" : "Pick date and time"
        }
        timeLabel={direction === "rtl" ? "ساعت" : "Time"}
        {...pickerLocalization(direction)}
      />
    </div>
  )
}

const NaturalPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>()
  const localization = pickerLocalization(direction)

  return (
    <div dir={direction} className="w-full max-w-sm">
      <DatePickerNatural
        value={date}
        onValueChange={setDate}
        presets={presetsFor(direction)}
        placeholder={
          direction === "rtl" ? "فردا یا جمعه آینده" : "Tomorrow or next Friday"
        }
        calendarLabel={direction === "rtl" ? "باز کردن تقویم" : "Open calendar"}
        renderPreview={(value) =>
          value ? (
            <p className="text-sm text-muted-foreground">
              {direction === "rtl"
                ? `پست شما در ${format(value, "PPP", { locale: faIR })} منتشر می‌شود.`
                : `Your post will be published on ${format(value, "PPP")}.`}
            </p>
          ) : null
        }
        {...localization}
      />
    </div>
  )
}

const FieldPreview = ({ direction }: DirectionProps) => {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div dir={direction} className="w-full max-w-sm">
      <Field name="startDate">
        <FieldLabel>
          {direction === "rtl" ? "تاریخ شروع" : "Start date"}
        </FieldLabel>
        <DatePicker
          id="startDate"
          name="startDate"
          value={date}
          onValueChange={setDate}
          defaultMonth={DEMO_MONTH}
          placeholder={direction === "rtl" ? "انتخاب کنید" : "Pick a date"}
          {...pickerLocalization(direction)}
        />
      </Field>
    </div>
  )
}

const ValidationPreview = ({ direction }: DirectionProps) => {
  return (
    <Form
      className="w-full max-w-sm gap-3"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <Field
        name="eventDate"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.length === 0) {
            return direction === "rtl" ? "تاریخ را انتخاب کنید." : "Pick a date."
          }
          if (value !== ACCEPTED_DATE) {
            return direction === "rtl"
              ? "در این دمو فقط ۲۰۲۶-۱۱-۰۵ پذیرفته است."
              : "Only 2026-11-05 is accepted in this demo."
          }
        }}
      >
        <FieldLabel>
          {direction === "rtl" ? "تاریخ رویداد" : "Event date"}
        </FieldLabel>
        <DatePickerInput
          name="eventDate"
          defaultValue={new Date(2026, 10, 1)}
          defaultMonth={DEMO_MONTH}
          calendarLabel={direction === "rtl" ? "باز کردن تقویم" : "Open calendar"}
          {...pickerLocalization(direction)}
        />
        <FieldError />
        <FieldSuccess>
          {direction === "rtl" ? "تاریخ پذیرفته شد." : "Date accepted."}
        </FieldSuccess>
      </Field>
      <Button type="submit" variant="outline" size="sm" className="self-start">
        {direction === "rtl" ? "بررسی" : "Check"}
      </Button>
    </Form>
  )
}

export { DatePickerPreviews }
