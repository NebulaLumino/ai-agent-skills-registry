import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Agent Skills Registry',
  description: 'A centralized registry for AI agent skills',
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
