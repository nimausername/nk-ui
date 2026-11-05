/**
 * Combobox component docs — markdown for Copy Page / AI.
 */

export const comboboxDocsTitle = "Combobox"

export const comboboxDocsDescription =
  "Searchable select on Base UI — filterable input, popup list, clear, groups, and multi-select chips."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const comboboxDocsUpdatedAt = "2026-11-05"

export const comboboxDocsMarkdown = `# Combobox

${comboboxDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/combobox
\`\`\`

## Usage

\`\`\`tsx
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
]

export function Example() {
  return (
    <Combobox items={fruits}>
      <ComboboxInputGroup className="max-w-sm">
        <ComboboxInput placeholder="Search fruit…" aria-label="Fruit" />
        <ComboboxClear aria-label="Clear" />
        <ComboboxTrigger aria-label="Open" />
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
\`\`\`

## Notes

- Parts: \`Combobox\` / \`ComboboxInputGroup\` / \`ComboboxInput\` / \`ComboboxTrigger\` / \`ComboboxClear\` / \`ComboboxContent\` / \`ComboboxList\` / \`ComboboxItem\` / \`ComboboxEmpty\` / \`ComboboxGroup\` / \`ComboboxChips\`.
- Built on \`@base-ui/react/combobox\` — pass \`items\` (and optional \`filteredItems\` for async search).
- Prefer \`{ label, value }\` item objects so labels fill the input automatically.
- Use \`multiple\` with \`ComboboxChips\` / \`ComboboxChip\` / \`ComboboxChipsInput\` for multi-select.
- Pair with Field for labeled forms and validation chrome.
- For a non-filterable menu of fixed options, use [Select](/docs/components/select).
- Live previews (basic, clear, groups, empty, Field, multiple) are on the docs page.
`
