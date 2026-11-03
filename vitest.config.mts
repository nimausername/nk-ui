import path from "node:path"
import { fileURLToPath } from "node:url"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
    include: ["components/ui/**/*.test.{ts,tsx}"],
    css: false,
  },
})
