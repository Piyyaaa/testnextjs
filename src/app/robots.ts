import { MetadataRoute } from 'next'
import { siteContent } from '../app/lib/Content'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteContent.site.baseUrl}/sitemap.xml`,
  }
}