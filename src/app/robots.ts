export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://piyyaaa.github.io/testnextjs/sitemap.xml',
  }
}
