/**
 * Public site identity for docs links, metadata, GitHub, and AI prompts.
 */

export const siteConfig = {
  name: "nk",
  url: "https://ui.nimakhabbazi.com",
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
    github: "https://github.com/nimausername/nk-ui",
  },
} as const
