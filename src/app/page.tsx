import { HomeTemplate } from './components/templates/HomeTemplate'
import { siteContent } from '../app/lib/Content'

export default function HomePage() {
  return (
    <HomeTemplate
      hero={{
        headline: siteContent.home.headline,
        subheadline: siteContent.home.subheadline,
        ctaLabel: siteContent.home.ctaLabel,
        imageSrc: siteContent.home.heroImage,
        imageAlt: siteContent.home.heroAlt,
      }}
      features={siteContent.home.features}
      footer={siteContent.home.footer}
    />
  )
}