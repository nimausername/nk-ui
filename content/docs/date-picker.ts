/**
 * Date Picker composite docs — markdown for Copy Page / AI.
 */

export const datePickerDocsTitle = "Date Picker"

export const datePickerDocsDescription =
  "Date fields on Popover + Calendar — single, range, input, time, presets, and natural language."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const datePickerDocsUpdatedAt = "2026-11-06"

export const datePickerDocsMarkdown = `# Date Picker

${datePickerDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/date-picker
\`\`\`

Pulls \`@nk/calendar\`, \`@nk/popover\`, \`@nk/button\`, and \`@nk/input\` (plus \`chrono-node\` / \`date-fns\`).

## Usage

\`\`\`tsx
"use client"

import { useState } from "react"

import { DatePicker } from "@/components/ui/date-picker"

export function Example() {
  const [date, setDate] = useState<Date | undefined>()

  return <DatePicker value={date} onValueChange={setDate} />
}
\`\`\`

## Parts

- \`DatePicker\` — button trigger + calendar (optional \`presets\`)
- \`DateRangePicker\` — range selection
- \`DatePickerInput\` — typed \`YYYY-MM-DD\` + calendar
- \`DateTimePicker\` — date + time in the popover
- \`DatePickerNatural\` — \`chrono-node\` phrase parsing + calendar

## Notes

- Built on [Calendar](/docs/components/calendar) + [Popover](/docs/components/popover).
- Pass \`locale\`, \`numerals\`, \`formatters\`, and \`dir\` through for RTL.
- \`captionLayout="dropdown"\` for date-of-birth month / year selects.
- \`disabledDates\` maps to Calendar’s \`disabled\` matchers; \`disabled\` disables the control.
- \`name\` writes a hidden (or real) input for Form / Field validation.
- Lives in the [Composites](/docs/composites) catalog.
`
