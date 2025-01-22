import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from 'flowbite-react'
import '@/css/global.css'
import { AppNavbar, AppSidebar } from '@/components/organisms'
import { Suspense } from 'react'
import { LoadingSkeleton } from '@/components/molecules'
import { GoogleAnalytics } from '@next/third-parties/google'
// Import the functions you need from the SDKs you need

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'learn-js with fahad',
  description: 'Small blog for learning js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-hidden bg-gray-900`}
      >
        <AppNavbar />
        <div className="flex min-h-[calc(100vh-54px)]">
          <AppSidebar />
          <div className="container max-h-full overflow-hidden md:ml-80">
            <Suspense
              fallback={
                <div className="p-8 md:p-0">
                  <LoadingSkeleton />
                </div>
              }
            >
              <div className="container">{children}</div>
            </Suspense>
          </div>
        </div>
        <GoogleAnalytics gaId="G-Q07NRZ7XQC" />
      </body>
    </html>
  )
}

//GTM-MVVQRM86
