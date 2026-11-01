import Link from "next/link"

import { CodeCommand } from "@/components/shared/code-command"
import { shadcnCommands } from "@/lib/shadcn-commands"

type ComponentInstallProps = {
  /** Registry item name without the `@nk/` prefix, e.g. `button`. */
  readonly name: string
}

/**
 * Shared Install section for component docs — same CodeCommand as Installation.
 */
const ComponentInstall = ({ name }: ComponentInstallProps) => {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Install</h2>
      <p className="text-sm text-muted-foreground">
        Requires the general{" "}
        <Link href="/docs/installation" className="underline underline-offset-4">
          @nk registry setup
        </Link>{" "}
        once. Then:
      </p>
      <CodeCommand
        label={`Install @nk/${name}`}
        commands={shadcnCommands(`shadcn@latest add @nk/${name}`)}
      />
    </section>
  )
}

export { ComponentInstall }
export type { ComponentInstallProps }
