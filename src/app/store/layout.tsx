import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

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
        className={`${inter.className} text-neutral-300 overflow-x-hidden selection:bg-primary bg-neutral-200 selection:text-neutral-900`}
      >
        {children}
      </body>
    </html>
  )
}
