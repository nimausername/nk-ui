type PreviewDirection = "ltr" | "rtl"

/**
 * English / Persian copy for spinner docs previews.
 */
const spinnerCopy = (direction: PreviewDirection, en: string, fa: string) => {
  return direction === "rtl" ? fa : en
}

export { spinnerCopy }
export type { PreviewDirection }
