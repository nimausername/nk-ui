"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Tabs docs examples — basic account / password panels.
 */
const TabsPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsBasic() {
  return (
    <Tabs defaultValue="account" className="max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-md border border-border p-4 text-sm">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="rounded-md border border-border p-4 text-sm">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}`}
        >
          {(direction) => (
            <Tabs defaultValue="account" className="max-w-md">
              <TabsList>
                <TabsTrigger value="account">
                  {direction === "rtl" ? "حساب" : "Account"}
                </TabsTrigger>
                <TabsTrigger value="password">
                  {direction === "rtl" ? "رمز" : "Password"}
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="account"
                className="rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl"
                  ? "تغییرات حساب را اینجا اعمال کنید."
                  : "Make changes to your account here."}
              </TabsContent>
              <TabsContent
                value="password"
                className="rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl"
                  ? "رمز عبور را اینجا تغییر دهید."
                  : "Change your password here."}
              </TabsContent>
            </Tabs>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { TabsPreviews }
