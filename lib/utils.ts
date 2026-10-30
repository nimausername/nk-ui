import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind class names, resolving conflicts with the last class winning.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
