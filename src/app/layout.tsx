import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Obfuscation Tools',
  description: 'Tools and utilities for code obfuscation and transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

