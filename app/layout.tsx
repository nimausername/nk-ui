import { getThemeScriptProps } from "@teispace/next-themes/server"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google"

import { GitHubLink } from "@/components/site/github-link"
import { AppProviders } from "@/components/site/providers/app-providers"
import { SiteHeader } from "@/components/site/site-header"
import { siteConfig } from "@/config/site"
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
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/og-1.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
 *
 * Social preview image: `public/brand/og-1.png`.
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
