"use client"

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import type { ComponentProps } from "react"

import {
  avatarVariants,
  type AvatarVariantProps,
} from "@/components/ui/avatar-variants"
import { cn } from "@/lib/utils"

/**
 * Props for the avatar root.
 */
type AvatarProps = AvatarPrimitive.Root.Props & AvatarVariantProps

/**
 * Profile image with fallback. Compose Image / Fallback inside.
 */
const Avatar = ({ className, size, ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size ?? "default"}
      className={cn("group/avatar", avatarVariants({ size }), className)}
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
        "flex size-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
        "text-xs group-data-[size=sm]/avatar:text-[10px] group-data-[size=lg]/avatar:text-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for an overlapping avatar row.
 */
type AvatarGroupProps = ComponentProps<"div">

/**
 * Overlapping row of avatars. Add ring classes on children for stacking.
 */
const AvatarGroup = ({ className, ...props }: AvatarGroupProps) => {
  return (
    <div
      data-slot="avatar-group"
      className={cn("flex items-center -space-x-2 rtl:space-x-reverse", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, avatarVariants }
export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarGroupProps,
}
