/**
 * Regenerates `components/ui/brand-icons.tsx` from `simple-icons` plus curated overrides.
 *
 * Usage: `pnpm generate:brand-icons`
 *
 * Override SVGs live in `scripts/brand-icon-overrides/<slug>.svg`
 * (Slack, OpenAI, LinkedIn, AWS, Microsoft, VS Code).
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import * as simpleIconsModule from "simple-icons"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const overridesDir = join(root, "scripts/brand-icon-overrides")

const overrideTitles = {
  slack: "Slack",
  openai: "OpenAI",
  linkedin: "LinkedIn",
  amazonwebservices: "Amazon Web Services",
  visualstudiocode: "Visual Studio Code",
  microsoft: "Microsoft",
}

const isSimpleIcon = (value) =>
  value &&
  typeof value === "object" &&
  typeof value.path === "string" &&
  typeof value.slug === "string" &&
  typeof value.title === "string"

const extractPath = (svg) => {
  const match = svg.match(/d="([^"]+)"/)
  if (!match) throw new Error("SVG missing path d")
  return match[1]
}

const loadOverrides = () => {
  if (!existsSync(overridesDir)) {
    throw new Error(`Missing overrides directory: ${overridesDir}`)
  }
  const overrides = {}
  for (const file of readdirSync(overridesDir)) {
    if (!file.endsWith(".svg")) continue
    const slug = file.replace(/\.svg$/, "")
    const title = overrideTitles[slug] ?? slug
    overrides[slug] = {
      title,
      path: extractPath(readFileSync(join(overridesDir, file), "utf8")),
    }
  }
  for (const slug of Object.keys(overrideTitles)) {
    if (!overrides[slug]) throw new Error(`Missing override SVG for ${slug}`)
  }
  return overrides
}

const toComponentBase = (title, slug) => {
  const cleaned = title.replace(/[^a-zA-Z0-9]+/g, " ").trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  let pascal = parts
    .map((part) => {
      if (/[a-z]/.test(part) && /[A-Z]/.test(part)) return part.charAt(0).toUpperCase() + part.slice(1)
      if (part === part.toUpperCase() && part.length <= 4) return part
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    })
    .join("")
  if (!pascal) {
    pascal = slug
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")
  }
  if (/^\d/.test(pascal)) pascal = `Brand${pascal}`
  return pascal
}

const used = new Map()
const allocateName = (title, slug) => {
  let base = toComponentBase(title, slug)
  let name = `${base}BrandIcon`
  if (!used.has(name)) {
    used.set(name, slug)
    return name
  }
  const slugBase = toComponentBase(slug, slug)
  name = `${slugBase}BrandIcon`
  if (!used.has(name)) {
    used.set(name, slug)
    return name
  }
  let index = 2
  while (used.has(`${base}${index}BrandIcon`)) index += 1
  name = `${base}${index}BrandIcon`
  used.set(name, slug)
  return name
}

const overrides = loadOverrides()
const simpleIcons = Object.values(simpleIconsModule).filter(isSimpleIcon)
const named = []
for (const icon of simpleIcons) {
  named.push({ slug: icon.slug, name: allocateName(icon.title, icon.slug), title: icon.title })
}
for (const [slug, meta] of Object.entries(overrides)) {
  named.push({ slug, name: allocateName(meta.title, slug), title: meta.title })
}
named.sort((a, b) => a.title.localeCompare(b.title))

const lines = []
lines.push(`import type { ComponentType, SVGProps } from "react"`)
lines.push(`import type { SimpleIcon } from "simple-icons"`)
lines.push(`import * as simpleIconsModule from "simple-icons"`)
lines.push(``)
lines.push(`/**`)
lines.push(` * Props for nk brand mark SVGs (\`currentColor\` fills).`)
lines.push(` */`)
lines.push(`type BrandIconProps = SVGProps<SVGSVGElement>`)
lines.push(``)
lines.push(`type BrandIconData = {`)
lines.push(`  readonly title: string`)
lines.push(`  readonly path: string`)
lines.push(`}`)
lines.push(``)
lines.push(`type BrandIconComponentProps = BrandIconProps & {`)
lines.push(`  /** Simple Icons slug, e.g. \`github\`, \`nextdotjs\`. */`)
lines.push(`  readonly slug: string`)
lines.push(`}`)
lines.push(``)
lines.push(`const brandSvgProps = {`)
lines.push(`  viewBox: "0 0 24 24",`)
lines.push(`  fill: "currentColor",`)
lines.push(`  "aria-hidden": true as const,`)
lines.push(`  xmlns: "http://www.w3.org/2000/svg",`)
lines.push(`}`)
lines.push(``)
lines.push(`const isSimpleIcon = (value: unknown): value is SimpleIcon => {`)
lines.push(`  if (!value || typeof value !== "object") return false`)
lines.push(`  const icon = value as Partial<SimpleIcon>`)
lines.push(`  return (`)
lines.push(`    typeof icon.path === "string" &&`)
lines.push(`    typeof icon.slug === "string" &&`)
lines.push(`    typeof icon.title === "string"`)
lines.push(`  )`)
lines.push(`}`)
lines.push(``)
lines.push(`/**`)
lines.push(` * Marks removed from Simple Icons for trademark reasons — historical paths.`)
lines.push(` */`)
lines.push(
  `const brandIconOverrides: Readonly<Record<string, BrandIconData>> = ${JSON.stringify(overrides, null, 2)}`
)
lines.push(``)
lines.push(`const simpleIconsBySlug = new Map<string, BrandIconData>()`)
lines.push(`for (const value of Object.values(simpleIconsModule)) {`)
lines.push(`  if (!isSimpleIcon(value)) continue`)
lines.push(`  simpleIconsBySlug.set(value.slug, { title: value.title, path: value.path })`)
lines.push(`}`)
lines.push(``)
lines.push(`/**`)
lines.push(` * Resolves a brand mark by Simple Icons slug (plus nk overrides).`)
lines.push(` */`)
lines.push(`const getBrandIconData = (slug: string): BrandIconData | undefined => {`)
lines.push(`  return brandIconOverrides[slug] ?? simpleIconsBySlug.get(slug)`)
lines.push(`}`)
lines.push(``)
lines.push(`/**`)
lines.push(` * Renders any brand mark by slug (\`github\`, \`stripe\`, \`nextdotjs\`, …).`)
lines.push(` */`)
lines.push(`const BrandIcon = ({ slug, className, ...props }: BrandIconComponentProps) => {`)
lines.push(`  const data = getBrandIconData(slug)`)
lines.push(`  if (!data) return null`)
lines.push(`  return (`)
lines.push(`    <svg className={className} {...brandSvgProps} {...props}>`)
lines.push(`      <path d={data.path} />`)
lines.push(`    </svg>`)
lines.push(`  )`)
lines.push(`}`)
lines.push(``)
lines.push(`type BrandIconsCatalogEntry = {`)
lines.push(`  readonly name: string`)
lines.push(`  readonly slug: string`)
lines.push(`  readonly Icon: ComponentType<BrandIconProps>`)
lines.push(`}`)
lines.push(``)

for (const { slug, name, title } of named) {
  lines.push(`/** ${title} mark — compose with Select, Button, menus, etc. */`)
  lines.push(`const ${name} = (props: BrandIconProps) => <BrandIcon slug="${slug}" {...props} />`)
  lines.push(``)
}

lines.push(`/** Ordered catalog of every published brand mark (for docs grids). */`)
lines.push(`const brandIconsCatalog: readonly BrandIconsCatalogEntry[] = [`)
for (const { slug, name, title } of named) {
  lines.push(`  { name: ${JSON.stringify(title)}, slug: ${JSON.stringify(slug)}, Icon: ${name} },`)
}
lines.push(`]`)
lines.push(``)

const exportNames = ["BrandIcon", "brandIconsCatalog", "getBrandIconData", ...named.map((entry) => entry.name)].sort(
  (a, b) => a.localeCompare(b)
)
lines.push(`export {`)
for (const name of exportNames) {
  lines.push(`  ${name},`)
}
lines.push(`}`)
lines.push(`export type { BrandIconProps, BrandIconComponentProps, BrandIconData, BrandIconsCatalogEntry }`)
lines.push(``)

const outPath = join(root, "components/ui/brand-icons.tsx")
writeFileSync(outPath, lines.join("\n"))
console.log(`Wrote ${named.length} brand icons → ${outPath}`)
