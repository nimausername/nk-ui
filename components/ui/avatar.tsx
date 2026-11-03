"use client"

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

/**
 * Props for the avatar root.
 */
type AvatarProps = AvatarPrimitive.Root.Props

/**
 * Profile image with fallback. Compose Image / Fallback inside.
 */
const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the avatar image.
 */
type AvatarImageProps = AvatarPrimitive.Image.Props

/**
 * Loads the profile image. Falls back when loading fails.
 */
const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

/**
 * Props for the avatar fallback.
 */
type AvatarFallbackProps = AvatarPrimitive.Fallback.Props

/**
 * Shown while the image loads or when it fails (initials / icon).
 */
const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps }
