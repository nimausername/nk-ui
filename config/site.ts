import packageJson from "../package.json"

/**
 * Public site identity for docs links, metadata, GitHub, and AI prompts.
 */

const githubUrl = "https://github.com/nimausername/nk-ui"

export const siteConfig = {
  name: "nk",
  url: "https://ui.nimakhabbazi.com",
  /**
   * Kit semver — keep in sync with `package.json` / git tags / GitHub Releases.
   */
  version: packageJson.version,
  /** Document / social title (browser tab, OG, Twitter). */
  title: "nk — UI you own",
  /**
   * Meta description — mirrors the home hero subhead + RTL story.
   * Keep in sync with `app/page.tsx` supporting copy.
   */
  description:
    "UI you own — with real RTL. Source via the shadcn CLI. Logical CSS so Persian and Arabic layouts work without fighting the kit.",
  /** Short line used on the home badge / OG card beside the catalog count. */
  badgeLabel: "components",
  /**
   * Lately shipped primitives shown as “+N new” on the home badge and OG card.
   * Bump when the catalog grows with a notable batch.
   */
  newlyAddedCount: 4,
  github: {
    owner: "nimausername",
    repo: "nk-ui",
  },
  links: {
    github: githubUrl,
    /** Current kit release notes on GitHub. */
    release: `${githubUrl}/releases/tag/v${packageJson.version}`,
  },
} as const
