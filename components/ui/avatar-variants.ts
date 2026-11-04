import { cva, type VariantProps } from "class-variance-authority"

/**
 * Size variants for the nk Avatar root.
 */
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
  {
    variants: {
      size: {
        sm: "size-6",
        default: "size-8",
        lg: "size-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type AvatarVariantProps = VariantProps<typeof avatarVariants>

export { avatarVariants }
export type { AvatarVariantProps }
