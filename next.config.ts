import { createRequire } from "node:module"

import type { NextConfig } from "next"

const require = createRequire(import.meta.url)

/**
 * Point Turbopack at the ESM loader entry.
 * Resolving the package name can land on `dist/index.js` (CJS), which Node
 * then rejects under `exports` when evaluating as ESM (`createEsmNotFoundErr`).
 */
const tailwindTurbopackLoader = require
  .resolve("@tailwindcss/turbopack")
  .replace(/index\.js$/, "index.mjs")

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  serverExternalPackages: ["@tailwindcss/node", "@tailwindcss/turbopack"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: [tailwindTurbopackLoader],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
