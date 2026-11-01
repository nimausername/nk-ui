import { getThemeScriptProps } from "@teispace/next-themes/server"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google"

import { GitHubLink } from "@/components/site/github-link"
import { AppProviders } from "@/components/site/providers/app-providers"
import { SiteHeader } from "@/components/site/site-header"
import { themeConfig } from "@/lib/theme"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
})

export const metadata: Metadata = {
  title: {
    default: "nk — UI you own",
    template: "%s · nk",
  },
  description:
    "Base UI components with clean product styling, light/dark, and real LTR/RTL support. Install with the shadcn CLI.",
  metadataBase: new URL("https://ui.nimakhabbazi.com"),
  openGraph: {
    title: "nk — UI you own",
    description:
      "Base UI components with clean product styling, light/dark, and real LTR/RTL support. Install with the shadcn CLI.",
    url: "https://ui.nimakhabbazi.com",
    siteName: "nk",
    images: [
      {
        url: "/brand/og-1.png",
        width: 1200,
        height: 630,
        alt: "nk — UI you own",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nk — UI you own",
    description:
      "Base UI components with clean product styling, light/dark, and real LTR/RTL support. Install with the shadcn CLI.",
    images: ["/brand/og-1.png"],
  },
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

/**
 * Root layout for the nk docs site.
 *
 * Anti-FOUC script lives only here (Server Component). ThemeProvider uses
 * `noScript` so Fast Refresh never remounts a client `<script>` (that loop
 * caused continuous full reloads under React 19 / Next 16).
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full`}
    >
      <head>
        <script {...getThemeScriptProps(themeConfig)} />
      </head>
      <body className="flex min-h-full flex-col">
        <AppProviders>
          <SiteHeader trailing={<GitHubLink />} />
          <div className="flex flex-1 flex-col">{children}</div>
        </AppProviders>
      </body>
    </html>
  )
}
