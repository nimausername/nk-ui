"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

/**
 * Compact identity row that opens activity / contact meta.
 */
const CollapsibleProfilePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Profile</h2>
      <p className="text-sm text-muted-foreground">
        Avatar and name as the trigger; email and last activity stay in the
        panel.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleProfile() {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger className="gap-3">
        <Avatar size="sm">
          <AvatarFallback>NK</AvatarFallback>
        </Avatar>
        <span>Nima Khabbazi</span>
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <dl className="grid gap-1 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Email</dt>
            <dd className="text-foreground">nima@nk.dev</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Last active</dt>
            <dd className="text-foreground">2 hours ago</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Role</dt>
            <dd className="text-foreground">Admin</dd>
          </div>
        </dl>
      </CollapsiblePanel>
    </Collapsible>
  )
}`}
      >
        {(direction) => (
          <Collapsible className="w-full max-w-md">
            <CollapsibleTrigger className="gap-3">
              <Avatar size="sm">
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
              <span>{direction === "rtl" ? "نیما خبازی" : "Nima Khabbazi"}</span>
            </CollapsibleTrigger>
            <CollapsiblePanel>
              <dl className="grid gap-1 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">
                    {direction === "rtl" ? "ایمیل" : "Email"}
                  </dt>
                  <dd className="text-foreground">nima@nk.dev</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">
                    {direction === "rtl" ? "آخرین فعالیت" : "Last active"}
                  </dt>
                  <dd className="text-foreground">
                    {direction === "rtl" ? "۲ ساعت پیش" : "2 hours ago"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">
                    {direction === "rtl" ? "نقش" : "Role"}
                  </dt>
                  <dd className="text-foreground">
                    {direction === "rtl" ? "ادمین" : "Admin"}
                  </dd>
                </div>
              </dl>
            </CollapsiblePanel>
          </Collapsible>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleProfilePreview }
