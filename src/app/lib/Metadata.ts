import { Metadata } from 'next'
import { siteContent } from '../lib/Content'

export const defaultMetadata: Metadata = {
  title: siteContent.site.name,
  description: siteContent.home.subheadline,
  keywords: ['homepage', 'website', 'next.js', 'amp', 'seo'],
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#000000',
  openGraph: {
    title: siteContent.home.headline,
    description: siteContent.home.subheadline,
    url: siteContent.site.baseUrl,
    siteName: siteContent.site.name,
    images: [
      {
        url: `${siteContent.site.baseUrl}/images/og-home.svg`,
        width: 1200,
        height: 630,
        alt: siteContent.home.heroAlt,
      },
    ],
    locale: siteContent.site.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.home.headline,
    description: siteContent.home.subheadline,
    images: [`${siteContent.site.baseUrl}/images/og-home.svg`],
  },
  alternates: {
    canonical: siteContent.site.baseUrl,
    languages: {
      'id-ID': siteContent.site.baseUrl,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
}

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
  }
}