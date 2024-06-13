import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Footer } from '@/components/views/MainPage/Footer/Footer'
import { Navigation } from '@/components/views/MainPage/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Old Sailor Barber',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-neutral-300 overflow-x-hidden selection:bg-primary bg-neutral-900 selection:text-neutral-900`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}