"use client"

import { useState } from "react"
import { Copy, KeyRound, MoreHorizontal, Plus } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type KeyEnv = "live" | "test" | "ci"

type ApiKey = {
  readonly id: string
  readonly label: string
  readonly hint: string
  readonly env: KeyEnv
  readonly lastUsed: string
}

const INITIAL_KEYS: readonly ApiKey[] = [
  {
    id: "live",
    label: "Live",
    hint: "nk_live_••••a91f",
    env: "live",
    lastUsed: "2 hours ago",
  },
  {
    id: "test",
    label: "Test",
    hint: "nk_test_••••3c2b",
    env: "test",
    lastUsed: "Yesterday",
  },
  {
    id: "ci",
    label: "CI",
    hint: "nk_ci_••••8e40",
    env: "ci",
    lastUsed: "5 days ago",
  },
]

const ENV_BADGE_VARIANT: Record<
  KeyEnv,
  "success" | "secondary" | "outline"
> = {
  live: "success",
  test: "secondary",
  ci: "outline",
}

type PreviewDirection = "ltr" | "rtl"

const lastUsedRtl: Record<string, string> = {
  "2 hours ago": "۲ ساعت پیش",
  Yesterday: "دیروز",
  "5 days ago": "۵ روز پیش",
}

/**
 * Production API-keys panel — Add / copy / menus stay outside the trigger.
 */
const CollapsibleNestedListDemo = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [keys, setKeys] = useState<ApiKey[]>([...INITIAL_KEYS])
  const isRtl = direction === "rtl"

  const handleDelete = (id: string) => {
    setKeys((current) => current.filter((key) => key.id !== id))
  }

  const handleAdd = () => {
    const next = keys.length + 1
    setKeys((current) => [
      ...current,
      {
        id: `key-${next}`,
        label: isRtl ? `کلید ${next}` : `Key ${next}`,
        hint: `nk_••••${String(next).padStart(4, "0")}`,
        env: "test",
        lastUsed: isRtl ? "همین الان" : "Just now",
      },
    ])
  }

  const handleCopy = async (hint: string) => {
    try {
      await navigator.clipboard.writeText(hint)
    } catch {
      // Demo only — clipboard may be denied in some preview contexts.
    }
  }

  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <Collapsible defaultOpen>
        <CardHeader className="gap-3 py-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger className="min-w-0 flex-1 justify-between gap-3 text-start">
              <span className="flex min-w-0 items-center gap-2">
                <KeyRound
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground"
                />
                <CardTitle className="truncate">
                  {isRtl ? "کلیدهای API" : "API keys"}
                </CardTitle>
                <Badge variant="outline">
                  {isRtl
                    ? `${keys.length} کلید`
                    : `${keys.length} ${keys.length === 1 ? "key" : "keys"}`}
                </Badge>
              </span>
            </CollapsibleTrigger>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0"
              aria-label={isRtl ? "افزودن کلید" : "Add key"}
              onClick={handleAdd}
            >
              <Plus aria-hidden="true" className="size-4" />
            </Button>
          </div>
          <CardDescription className="ps-6">
            {isRtl
              ? "توکن‌های سمت سرور برای APIهای nk."
              : "Server-side tokens for the nk APIs."}
          </CardDescription>
        </CardHeader>

        <CollapsiblePanel>
          <CardContent className="flex flex-col gap-1 border-t py-3">
            {keys.length === 0 ? (
              <div className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-border px-3 py-6">
                <p className="text-sm text-muted-foreground">
                  {isRtl
                    ? "هنوز کلیدی نیست. یکی بسازید تا SDK وصل شود."
                    : "No keys yet. Create one to connect your SDK."}
                </p>
                <Button type="button" size="sm" onClick={handleAdd}>
                  <Plus aria-hidden="true" className="size-4" />
                  {isRtl ? "ساخت کلید" : "Create key"}
                </Button>
              </div>
            ) : (
              keys.map((key) => (
                <div
                  key={key.id}
                  className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-muted/60"
                >
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-medium text-foreground">
                        {key.label}
                      </p>
                      <Badge variant={ENV_BADGE_VARIANT[key.env]}>
                        {key.env === "live"
                          ? isRtl
                            ? "زنده"
                            : "Live"
                          : key.env === "test"
                            ? isRtl
                              ? "تست"
                              : "Test"
                            : isRtl
                              ? "CI"
                              : "CI"}
                      </Badge>
                    </div>
                    <p className="truncate font-mono text-xs text-muted-foreground">
                      {key.hint}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isRtl ? "آخرین استفاده" : "Last used"}{" "}
                      {isRtl
                        ? (lastUsedRtl[key.lastUsed] ?? key.lastUsed)
                        : key.lastUsed}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8 shrink-0"
                    aria-label={
                      isRtl ? `کپی ${key.label}` : `Copy ${key.label}`
                    }
                    onClick={() => void handleCopy(key.hint)}
                  >
                    <Copy aria-hidden="true" className="size-3.5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 shrink-0"
                          aria-label={
                            isRtl
                              ? `اقدامات ${key.label}`
                              : `${key.label} actions`
                          }
                        />
                      }
                    >
                      <MoreHorizontal aria-hidden="true" className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-44"
                      dir={direction}
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => void handleCopy(key.hint)}
                        >
                          {isRtl ? "کپی توکن" : "Copy token"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {isRtl ? "چرخش کلید" : "Rotate key"}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => handleDelete(key.id)}
                        >
                          {isRtl ? "باطل کردن" : "Revoke"}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))
            )}
          </CardContent>
          <CardFooter className="border-t py-3 text-xs text-muted-foreground [.border-t]:pt-3">
            {isRtl
              ? "کلیدها را هر ۹۰ روز یک‌بار بچرخانید."
              : "Rotate keys at least every 90 days."}
          </CardFooter>
        </CollapsiblePanel>
      </Collapsible>
    </Card>
  )
}

/**
 * Collapsible credentials list — Add and row actions stay outside the trigger.
 */
const CollapsibleNestedListPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nested list</h2>
      <p className="text-sm text-muted-foreground">
        Credentials panel with env badges, copy, and revoke. Keep Add and row
        menus outside{" "}
        <code className="rounded bg-muted px-1 text-xs">CollapsibleTrigger</code>{" "}
        so they do not steal the toggle.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { useState } from "react"
import { Copy, KeyRound, MoreHorizontal, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const initialKeys = [
  {
    id: "live",
    label: "Live",
    hint: "nk_live_••••a91f",
    env: "live",
    lastUsed: "2 hours ago",
  },
  {
    id: "test",
    label: "Test",
    hint: "nk_test_••••3c2b",
    env: "test",
    lastUsed: "Yesterday",
  },
  {
    id: "ci",
    label: "CI",
    hint: "nk_ci_••••8e40",
    env: "ci",
    lastUsed: "5 days ago",
  },
]

export function CollapsibleNestedList() {
  const [keys, setKeys] = useState(initialKeys)

  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <Collapsible defaultOpen>
        <CardHeader className="gap-3 py-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger className="min-w-0 flex-1 justify-between gap-3 text-start">
              <span className="flex min-w-0 items-center gap-2">
                <KeyRound className="size-4 shrink-0 text-muted-foreground" />
                <CardTitle className="truncate">API keys</CardTitle>
                <Badge variant="outline">{keys.length} keys</Badge>
              </span>
            </CollapsibleTrigger>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0"
              aria-label="Add key"
            >
              <Plus className="size-4" />
            </Button>
          </div>
          <CardDescription className="ps-6">
            Server-side tokens for the nk APIs.
          </CardDescription>
        </CardHeader>
        <CollapsiblePanel>
          <CardContent className="flex flex-col gap-1 border-t py-3">
            {keys.map((key) => (
              <div
                key={key.id}
                className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted/60"
              >
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-medium">{key.label}</p>
                    <Badge variant={key.env === "live" ? "success" : "secondary"}>
                      {key.label}
                    </Badge>
                  </div>
                  <p className="truncate font-mono text-xs text-muted-foreground">
                    {key.hint}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Last used {key.lastUsed}
                  </p>
                </div>
                <Button type="button" variant="ghost" size="icon" className="size-8">
                  <Copy className="size-3.5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button type="button" variant="ghost" size="icon" className="size-8" />}
                  >
                    <MoreHorizontal className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Copy token</DropdownMenuItem>
                      <DropdownMenuItem>Rotate key</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() =>
                          setKeys((current) =>
                            current.filter((item) => item.id !== key.id)
                          )
                        }
                      >
                        Revoke
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t py-3 text-xs text-muted-foreground [.border-t]:pt-3">
            Rotate keys at least every 90 days.
          </CardFooter>
        </CollapsiblePanel>
      </Collapsible>
    </Card>
  )
}`}
      >
        {(direction) => <CollapsibleNestedListDemo direction={direction} />}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleNestedListPreview }
