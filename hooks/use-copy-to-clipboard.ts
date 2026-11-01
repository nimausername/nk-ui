"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type UseCopyToClipboardResult = {
  readonly isCopied: boolean
  readonly copyToClipboard: (value: string) => Promise<boolean>
}

/**
 * Copies text to the clipboard and briefly exposes a success flag.
 */
const useCopyToClipboard = (resetMs = 1600): UseCopyToClipboardResult => {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value)
        setIsCopied(true)
        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = window.setTimeout(() => {
          setIsCopied(false)
        }, resetMs)
        return true
      } catch {
        setIsCopied(false)
        return false
      }
    },
    [resetMs]
  )

  return { isCopied, copyToClipboard }
}

export { useCopyToClipboard }
export type { UseCopyToClipboardResult }
