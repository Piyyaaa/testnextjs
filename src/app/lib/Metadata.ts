import type { Metadata } from "next";
import { siteContent } from "../lib/Content";

export const defaultMetadata: Metadata = {
  title: siteContent.site.name,
  description: siteContent.home.subheadline,
  keywords: ["next.js", "website", "homepage"],
  openGraph: {
    title: siteContent.site.name,
    description: siteContent.home.subheadline,
    url: siteContent.site.baseUrl,
    siteName: siteContent.site.name,
    images: [
      {
        url: `${siteContent.site.baseUrl}/images/og-home.svg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.name,
    description: siteContent.home.subheadline,
    images: [`${siteContent.site.baseUrl}/images/og-home.svg`],
  },
};
