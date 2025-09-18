import { MetadataRoute } from 'next'
import { siteContent } from '../app/lib/Content'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.site.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteContent.site.baseUrl}/amp`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}