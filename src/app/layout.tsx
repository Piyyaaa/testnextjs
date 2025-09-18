import type { Metadata } from 'next'
import { defaultMetadata } from '../app/lib/Metadata'
import './globals.css'

export const metadata: Metadata = {
  ...defaultMetadata,
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
