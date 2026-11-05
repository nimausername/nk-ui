/**
 * Calendar component docs — markdown for Copy Page / AI.
 */

export const calendarDocsTitle = "Calendar"

export const calendarDocsDescription =
  "Month calendar on react-day-picker — single, multiple, and range selection with nk Button chrome."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const calendarDocsUpdatedAt = "2026-11-05"

export const calendarDocsMarkdown = `# Calendar

${calendarDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/calendar
\`\`\`

Installs \`react-day-picker\` and \`date-fns\`, plus [@nk/button](/docs/components/button).

## Usage

\`\`\`tsx
"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar mode="single" selected={date} onSelect={setDate} />
  )
}
\`\`\`

## Notes

- Built on \`react-day-picker\` v10 — use \`mode="single" | "multiple" | "range"\`.
- Parts: \`Calendar\` / \`CalendarDayButton\` (swap day chrome via \`components\`).
- \`captionLayout="dropdown"\` adds month / year selects; \`showWeekNumber\` adds a week column.
- \`buttonVariant\` styles previous / next controls (defaults to \`ghost\`).
- RTL: pass \`dir="rtl"\`, \`locale={faIR}\`, \`numerals="arabext"\`, and a \`formatWeekdayName\` using abbreviated Persian names (\`یکشنبه\` — DayPicker’s default short form is \`1ش\`). \`dir\` alone only flips chrome.
- Compose with [Popover](/docs/components/popover) for a date field — Date Picker is next.
- Live previews (single, range, multiple, dropdown, week numbers, disabled) are on the docs page.
`
