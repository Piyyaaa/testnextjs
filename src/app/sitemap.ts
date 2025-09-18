export const dynamic = 'force-static'

export default async function sitemap() {
  return [
    {
      url: 'https://piyyaaa.github.io/testnextjs',
      lastModified: new Date().toISOString(),
    },
  ]
}
