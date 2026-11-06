"use client"

import * as chrono from "chrono-node"
import { format, setHours, setMinutes } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  useState,
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
} from "react"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar, type CalendarProps } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type DatePickerSharedProps = {
  /** Shown when no date is selected. */
  readonly placeholder?: string
  /** Disables the trigger / inputs. */
  readonly disabled?: boolean
  /** `date-fns` format string for labels. Defaults to `PPP`. */
  readonly formatStr?: string
  /** Control id (for Field / label association). */
  readonly id?: string
  /** Native form field name (hidden input for button triggers). */
  readonly name?: string
  /** Extra classes on the trigger / outer control. */
  readonly className?: string
  /** Extra classes on the Calendar surface. */
  readonly calendarClassName?: string
  /** Popover content alignment. */
  readonly align?: ComponentProps<typeof PopoverContent>["align"]
  /** Controlled open state. */
  readonly open?: boolean
  /** Uncontrolled initial open state. */
  readonly defaultOpen?: boolean
  /** Called when the popover opens or closes. */
  readonly onOpenChange?: (open: boolean) => void
  /** Calendar caption layout (label or month/year dropdowns). */
  readonly captionLayout?: CalendarProps["captionLayout"]
  /** DayPicker disabled matchers (not the trigger). */
  readonly disabledDates?: CalendarProps["disabled"]
  /** DayPicker locale (week starts, labels). */
  readonly locale?: CalendarProps["locale"]
  /** DayPicker numeral system (`arabext` for Persian digits). */
  readonly numerals?: CalendarProps["numerals"]
  /** DayPicker formatters (e.g. Persian weekday names). */
  readonly formatters?: CalendarProps["formatters"]
  /** Text direction for the calendar surface. */
  readonly dir?: CalendarProps["dir"]
  /** Initial month shown in the calendar. */
  readonly defaultMonth?: CalendarProps["defaultMonth"]
}

type DatePickerPreset = {
  /** Button label (localize in the caller). */
  readonly label: string
  /** Fixed date, or a factory so “Today” stays current. */
  readonly date: Date | (() => Date)
}

type DatePickerProps = DatePickerSharedProps & {
  /** Controlled selected date. */
  readonly value?: Date
  /** Uncontrolled initial date. */
  readonly defaultValue?: Date
  /** Called when the selected date changes. */
  readonly onValueChange?: (date: Date | undefined) => void
  /** Quick-select shortcuts rendered beside the calendar. */
  readonly presets?: readonly DatePickerPreset[]
}

type CalendarSurfaceProps = Pick<
  DatePickerSharedProps,
  | "captionLayout"
  | "disabledDates"
  | "locale"
  | "numerals"
  | "formatters"
  | "dir"
  | "calendarClassName"
> & {
  readonly selected: Date | undefined
  readonly onSelect: (date: Date | undefined) => void
  readonly defaultMonth?: CalendarProps["defaultMonth"]
  readonly presets?: readonly DatePickerPreset[]
  readonly onPresetSelect?: (date: Date) => void
}

const CalendarSurface = ({
  selected,
  onSelect,
  defaultMonth,
  captionLayout,
  disabledDates,
  locale,
  numerals,
  formatters,
  dir,
  calendarClassName,
  presets,
  onPresetSelect,
}: CalendarSurfaceProps) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row",
        presets && presets.length > 0 && "sm:divide-x sm:divide-border"
      )}
    >
      {presets && presets.length > 0 ? (
        <div className="flex flex-row gap-1 overflow-x-auto border-b border-border p-2 sm:w-36 sm:flex-col sm:overflow-visible sm:border-b-0">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              type="button"
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => {
                const next =
                  typeof preset.date === "function" ? preset.date() : preset.date
                onPresetSelect?.(next)
              }}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      ) : null}
      <Calendar
        mode="single"
        className={calendarClassName}
        selected={selected}
        onSelect={onSelect}
        captionLayout={captionLayout}
        disabled={disabledDates}
        locale={locale}
        numerals={numerals}
        formatters={formatters}
        dir={dir}
        defaultMonth={defaultMonth ?? selected}
      />
    </div>
  )
}

const useControllableDate = (
  props: { value?: Date; defaultValue?: Date },
  hasValueProp: boolean
) => {
  const [uncontrolled, setUncontrolled] = useState(props.defaultValue)
  const selected = hasValueProp ? props.value : uncontrolled

  const setSelected = (date: Date | undefined) => {
    if (!hasValueProp) {
      setUncontrolled(date)
    }
  }

  return { selected, setSelected }
}

const useControllableOpen = (
  props: { open?: boolean; defaultOpen?: boolean },
  hasOpenProp: boolean
) => {
  const [uncontrolled, setUncontrolled] = useState(props.defaultOpen ?? false)
  const open = hasOpenProp ? Boolean(props.open) : uncontrolled

  const setOpen = (next: boolean) => {
    if (!hasOpenProp) {
      setUncontrolled(next)
    }
  }

  return { open, setOpen }
}

const formDateValue = (date: Date | undefined) =>
  date ? format(date, "yyyy-MM-dd") : ""

/**
 * Single-date field — Popover trigger + Calendar. Listed under Composites.
 */
const DatePicker = (props: DatePickerProps) => {
  const {
    value,
    defaultValue,
    onValueChange,
    placeholder = "Pick a date",
    disabled = false,
    formatStr = "PPP",
    id,
    name,
    className,
    calendarClassName,
    align = "start",
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    captionLayout,
    disabledDates,
    locale,
    numerals,
    formatters,
    dir,
    defaultMonth,
    presets,
  } = props

  const { selected, setSelected } = useControllableDate(
    { value, defaultValue },
    Object.hasOwn(props, "value")
  )
  const { open, setOpen } = useControllableOpen(
    { open: openProp, defaultOpen },
    Object.hasOwn(props, "open")
  )

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  const handleSelect = (date: Date | undefined) => {
    setSelected(date)
    onValueChange?.(date)
    handleOpenChange(false)
  }

  const handlePreset = (date: Date) => {
    setSelected(date)
    onValueChange?.(date)
    handleOpenChange(false)
  }

  const label = selected
    ? format(selected, formatStr, { locale: locale as never })
    : null

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      {name ? (
        <input type="hidden" name={name} value={formDateValue(selected)} />
      ) : null}
      <PopoverTrigger
        render={
          <Button
            type="button"
            id={id}
            variant="outline"
            disabled={disabled}
            data-empty={!selected ? "" : undefined}
            className={cn(
              "w-full min-w-48 justify-start text-start font-normal",
              "data-empty:text-muted-foreground",
              className
            )}
          />
        }
      >
        <CalendarIcon aria-hidden="true" />
        {label ?? <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <CalendarSurface
          selected={selected}
          onSelect={handleSelect}
          onPresetSelect={handlePreset}
          presets={presets}
          captionLayout={captionLayout}
          disabledDates={disabledDates}
          locale={locale}
          numerals={numerals}
          formatters={formatters}
          dir={dir}
          calendarClassName={calendarClassName}
          defaultMonth={defaultMonth ?? selected}
        />
      </PopoverContent>
    </Popover>
  )
}

type DateRangePickerProps = DatePickerSharedProps & {
  /** Controlled selected range. */
  readonly value?: DateRange
  /** Uncontrolled initial range. */
  readonly defaultValue?: DateRange
  /** Called when the selected range changes. */
  readonly onValueChange?: (range: DateRange | undefined) => void
  /** Months shown side by side. Defaults to `2`. */
  readonly numberOfMonths?: number
}

/**
 * Date range field — Popover trigger + Calendar. Listed under Composites.
 */
const DateRangePicker = (props: DateRangePickerProps) => {
  const {
    value,
    defaultValue,
    onValueChange,
    placeholder = "Pick a date range",
    disabled = false,
    formatStr = "LLL dd, y",
    id,
    name,
    className,
    calendarClassName,
    align = "start",
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    captionLayout,
    disabledDates,
    locale,
    numerals,
    formatters,
    dir,
    defaultMonth,
    numberOfMonths = 2,
  } = props

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const isValueControlled = Object.hasOwn(props, "value")
  const selected = isValueControlled ? value : uncontrolledValue

  const { open, setOpen } = useControllableOpen(
    { open: openProp, defaultOpen },
    Object.hasOwn(props, "open")
  )

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  const handleSelect = (range: DateRange | undefined) => {
    if (!isValueControlled) {
      setUncontrolledValue(range)
    }
    onValueChange?.(range)
    if (range?.from && range.to) {
      handleOpenChange(false)
    }
  }

  const label =
    selected?.from != null
      ? selected.to != null
        ? `${format(selected.from, formatStr, { locale: locale as never })} – ${format(selected.to, formatStr, { locale: locale as never })}`
        : format(selected.from, formatStr, { locale: locale as never })
      : null

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      {name ? (
        <input
          type="hidden"
          name={name}
          value={
            selected?.from && selected.to
              ? `${formDateValue(selected.from)}_${formDateValue(selected.to)}`
              : ""
          }
        />
      ) : null}
      <PopoverTrigger
        render={
          <Button
            type="button"
            id={id}
            variant="outline"
            disabled={disabled}
            data-empty={!selected?.from ? "" : undefined}
            className={cn(
              "w-full min-w-64 justify-start text-start font-normal",
              "data-empty:text-muted-foreground",
              className
            )}
          />
        }
      >
        <CalendarIcon aria-hidden="true" />
        {label ?? <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <Calendar
          mode="range"
          className={calendarClassName}
          selected={selected}
          onSelect={handleSelect}
          numberOfMonths={numberOfMonths}
          captionLayout={captionLayout}
          disabled={disabledDates}
          locale={locale}
          numerals={numerals}
          formatters={formatters}
          dir={dir}
          defaultMonth={defaultMonth ?? selected?.from}
        />
      </PopoverContent>
    </Popover>
  )
}

type DatePickerInputProps = DatePickerProps & {
  /** Accessible name for the calendar affordance. */
  readonly calendarLabel?: string
}

/**
 * Typed date field — Input + Calendar popover (keeps value in sync).
 */
const DatePickerInput = (props: DatePickerInputProps) => {
  const {
    value,
    defaultValue,
    onValueChange,
    placeholder = "YYYY-MM-DD",
    disabled = false,
    formatStr = "yyyy-MM-dd",
    id,
    name,
    className,
    calendarClassName,
    align = "start",
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    captionLayout,
    disabledDates,
    locale,
    numerals,
    formatters,
    dir,
    defaultMonth,
    presets,
    calendarLabel = "Open calendar",
  } = props

  const { selected, setSelected } = useControllableDate(
    { value, defaultValue },
    Object.hasOwn(props, "value")
  )
  const { open, setOpen } = useControllableOpen(
    { open: openProp, defaultOpen },
    Object.hasOwn(props, "open")
  )
  const [text, setText] = useState(() =>
    selected ? format(selected, formatStr, { locale: locale as never }) : ""
  )

  const syncText = (date: Date | undefined) => {
    setText(date ? format(date, formatStr, { locale: locale as never }) : "")
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  const commitDate = (date: Date | undefined, close = true) => {
    setSelected(date)
    syncText(date)
    onValueChange?.(date)
    if (close) {
      handleOpenChange(false)
    }
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value
    setText(next)
    if (!next.trim()) {
      setSelected(undefined)
      onValueChange?.(undefined)
      return
    }
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(next.trim())
    if (!match) {
      return
    }
    const parsed = new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3])
    )
    if (Number.isNaN(parsed.getTime())) {
      return
    }
    setSelected(parsed)
    onValueChange?.(parsed)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <div className={cn("relative w-full", className)}>
        <Input
          id={id}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={text}
          onChange={handleTextChange}
          className="pe-9"
          autoComplete="off"
        />
        <PopoverTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              disabled={disabled}
              aria-label={calendarLabel}
              className="absolute top-1/2 end-1 size-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            />
          }
        >
          <CalendarIcon aria-hidden="true" />
        </PopoverTrigger>
      </div>
      <PopoverContent align={align} className="w-auto p-0">
        <CalendarSurface
          selected={selected}
          onSelect={(date) => commitDate(date)}
          onPresetSelect={(date) => commitDate(date)}
          presets={presets}
          captionLayout={captionLayout}
          disabledDates={disabledDates}
          locale={locale}
          numerals={numerals}
          formatters={formatters}
          dir={dir}
          calendarClassName={calendarClassName}
          defaultMonth={defaultMonth ?? selected}
        />
      </PopoverContent>
    </Popover>
  )
}

type DateTimePickerProps = DatePickerProps & {
  /** Accessible label for the time input. */
  readonly timeLabel?: string
}

const timeInputValue = (date: Date | undefined) => {
  if (!date) {
    return "00:00"
  }
  return format(date, "HH:mm")
}

/**
 * Date + time field — Calendar with a time input in the popover.
 */
const DateTimePicker = (props: DateTimePickerProps) => {
  const {
    value,
    defaultValue,
    onValueChange,
    placeholder = "Pick date and time",
    disabled = false,
    formatStr = "PPP p",
    id,
    name,
    className,
    calendarClassName,
    align = "start",
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    captionLayout,
    disabledDates,
    locale,
    numerals,
    formatters,
    dir,
    defaultMonth,
    presets,
    timeLabel = "Time",
  } = props

  const { selected, setSelected } = useControllableDate(
    { value, defaultValue },
    Object.hasOwn(props, "value")
  )
  const { open, setOpen } = useControllableOpen(
    { open: openProp, defaultOpen },
    Object.hasOwn(props, "open")
  )

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  const commit = (date: Date | undefined) => {
    setSelected(date)
    onValueChange?.(date)
  }

  const handleDaySelect = (date: Date | undefined) => {
    if (!date) {
      commit(undefined)
      return
    }
    const withTime = selected
      ? setMinutes(setHours(date, selected.getHours()), selected.getMinutes())
      : date
    commit(withTime)
  }

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [hoursText, minutesText] = event.target.value.split(":")
    const hours = Number(hoursText)
    const minutes = Number(minutesText)
    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      return
    }
    const base = selected ?? new Date()
    commit(setMinutes(setHours(base, hours), minutes))
  }

  const handlePreset = (date: Date) => {
    const withTime = selected
      ? setMinutes(setHours(date, selected.getHours()), selected.getMinutes())
      : date
    commit(withTime)
  }

  const label = selected
    ? format(selected, formatStr, { locale: locale as never })
    : null

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      {name ? (
        <input
          type="hidden"
          name={name}
          value={selected ? selected.toISOString() : ""}
        />
      ) : null}
      <PopoverTrigger
        render={
          <Button
            type="button"
            id={id}
            variant="outline"
            disabled={disabled}
            data-empty={!selected ? "" : undefined}
            className={cn(
              "w-full min-w-56 justify-start text-start font-normal",
              "data-empty:text-muted-foreground",
              className
            )}
          />
        }
      >
        <CalendarIcon aria-hidden="true" />
        {label ?? <span>{placeholder}</span>}
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <CalendarSurface
          selected={selected}
          onSelect={handleDaySelect}
          onPresetSelect={handlePreset}
          presets={presets}
          captionLayout={captionLayout}
          disabledDates={disabledDates}
          locale={locale}
          numerals={numerals}
          formatters={formatters}
          dir={dir}
          calendarClassName={calendarClassName}
          defaultMonth={defaultMonth ?? selected}
        />
        <div className="border-t border-border p-3">
          <label className="flex items-center justify-between gap-3 text-sm">
            <span className="text-muted-foreground">{timeLabel}</span>
            <Input
              type="time"
              disabled={disabled}
              value={timeInputValue(selected)}
              onChange={handleTimeChange}
              className="w-auto"
            />
          </label>
        </div>
      </PopoverContent>
    </Popover>
  )
}

type DatePickerNaturalProps = DatePickerSharedProps & {
  /** Controlled selected date. */
  readonly value?: Date
  /** Uncontrolled initial date. */
  readonly defaultValue?: Date
  /** Called when the selected date changes. */
  readonly onValueChange?: (date: Date | undefined) => void
  /** Quick-select shortcuts rendered beside the calendar. */
  readonly presets?: readonly DatePickerPreset[]
  /** Accessible name for the calendar affordance. */
  readonly calendarLabel?: string
  /** Preview line under the input. Receives the parsed date. */
  readonly renderPreview?: (date: Date | undefined) => ReactNode
}

/**
 * Natural-language date field — chrono-node parse + Calendar sync.
 */
const DatePickerNatural = (props: DatePickerNaturalProps) => {
  const {
    value,
    defaultValue,
    onValueChange,
    placeholder = "Tomorrow or next Friday",
    disabled = false,
    formatStr = "PPP",
    id,
    name,
    className,
    calendarClassName,
    align = "start",
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    captionLayout,
    disabledDates,
    locale,
    numerals,
    formatters,
    dir,
    defaultMonth,
    presets,
    calendarLabel = "Open calendar",
    renderPreview,
  } = props

  const { selected, setSelected } = useControllableDate(
    { value, defaultValue },
    Object.hasOwn(props, "value")
  )
  const { open, setOpen } = useControllableOpen(
    { open: openProp, defaultOpen },
    Object.hasOwn(props, "open")
  )
  const [text, setText] = useState(() =>
    selected ? format(selected, formatStr, { locale: locale as never }) : ""
  )

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    onOpenChange?.(next)
  }

  const commit = (date: Date | undefined, nextText?: string) => {
    setSelected(date)
    if (nextText !== undefined) {
      setText(nextText)
    } else if (date) {
      setText(format(date, formatStr, { locale: locale as never }))
    }
    onValueChange?.(date)
  }

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value
    setText(next)
    const parsed = chrono.parseDate(next)
    if (parsed) {
      setSelected(parsed)
      onValueChange?.(parsed)
      return
    }
    if (!next.trim()) {
      setSelected(undefined)
      onValueChange?.(undefined)
    }
  }

  const handleCalendarSelect = (date: Date | undefined) => {
    commit(date)
    handleOpenChange(false)
  }

  const preview =
    renderPreview?.(selected) ??
    (selected ? (
      <p className="text-sm text-muted-foreground">
        {format(selected, formatStr, { locale: locale as never })}
      </p>
    ) : null)

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <div className="relative w-full">
          <Input
            id={id}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            value={text}
            onChange={handleTextChange}
            className="pe-9"
            autoComplete="off"
          />
          <PopoverTrigger
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                disabled={disabled}
                aria-label={calendarLabel}
                className="absolute top-1/2 end-1 size-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              />
            }
          >
            <CalendarIcon aria-hidden="true" />
          </PopoverTrigger>
        </div>
        <PopoverContent align={align} className="w-auto p-0">
          <CalendarSurface
            selected={selected}
            onSelect={handleCalendarSelect}
            onPresetSelect={(date) => {
              commit(date)
              handleOpenChange(false)
            }}
            presets={presets}
            captionLayout={captionLayout}
            disabledDates={disabledDates}
            locale={locale}
            numerals={numerals}
            formatters={formatters}
            dir={dir}
            calendarClassName={calendarClassName}
            defaultMonth={defaultMonth ?? selected}
          />
        </PopoverContent>
      </Popover>
      {preview}
    </div>
  )
}

export {
  DatePicker,
  DatePickerInput,
  DatePickerNatural,
  DateRangePicker,
  DateTimePicker,
}
export type {
  DatePickerInputProps,
  DatePickerNaturalProps,
  DatePickerPreset,
  DatePickerProps,
  DatePickerSharedProps,
  DateRangePickerProps,
  DateTimePickerProps,
}
