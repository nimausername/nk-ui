/**
 * Shared shadcn CLI command helpers for docs (server-safe).
 */

const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const

type PackageManager = (typeof PACKAGE_MANAGERS)[number]

/**
 * Builds the usual shadcn CLI runners for a trailing command fragment.
 * Example fragment: `shadcn@latest add @nk/button`
 */
const shadcnCommands = (fragment: string): Record<PackageManager, string> => ({
  pnpm: `pnpm dlx ${fragment}`,
  npm: `npx ${fragment}`,
  yarn: `yarn dlx ${fragment}`,
  bun: `bunx --bun ${fragment}`,
})

export { PACKAGE_MANAGERS, shadcnCommands }
export type { PackageManager }
