/**
 * Inlines styles/scroll-fade.css into app/globals.css.
 * Needed because Turbopack + @tailwindcss processes each .css as its own entry,
 * so `@import` of @utility files does not compose into the main stylesheet.
 */
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const fadePath = join(root, "styles/scroll-fade.css")
const globalsPath = join(root, "app/globals.css")

const fadeCss = readFileSync(fadePath, "utf8")
const globalsCss = readFileSync(globalsPath, "utf8")

const startMarker = "/*\n * scroll-fade utilities (inlined)."
const endMarker = "@custom-variant dark"

const start = globalsCss.indexOf(startMarker)
const end = globalsCss.indexOf(endMarker)

if (start === -1 || end === -1 || end <= start) {
  throw new Error(
    "Could not find scroll-fade inline block in app/globals.css. Expected markers missing."
  )
}

const block =
  "/*\n" +
  " * scroll-fade utilities (inlined).\n" +
  " * Turbopack + @tailwindcss treats each .css as its own entry, so\n" +
  " * `@import \"../styles/scroll-fade.css\"` does not apply @utility.\n" +
  " * Source of truth for the registry: styles/scroll-fade.css — keep in sync.\n" +
  " */\n" +
  fadeCss +
  "\n"

const next = globalsCss.slice(0, start) + block + globalsCss.slice(end)
writeFileSync(globalsPath, next)
console.log("Synced styles/scroll-fade.css → app/globals.css")
