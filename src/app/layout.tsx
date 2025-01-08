import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from 'flowbite-react'
import '@/css/global.css'
import { AppNavbar, AppSidebar } from '@/components/organisms'
import { Suspense } from 'react'
import { LoadingSkeleton } from '@/components/molecules'
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <AppNavbar />
        <div className="flex min-h-[calc(100vh-54px)]">
          <AppSidebar />
          <div className="overflow-y-auto w-full max-h-full">
            <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
          </div>
        </div>
      </body>
    </html>
  )
}
