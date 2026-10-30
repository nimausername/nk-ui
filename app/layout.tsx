import type { Metadata } from "next"
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google"

import { AppProviders } from "@/components/site/providers/app-providers"
import { SiteHeader } from "@/components/site/site-header"

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
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

/**
 * Root layout for the nk docs site.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <AppProviders>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
        </AppProviders>
      </body>
    </html>
  )
}
