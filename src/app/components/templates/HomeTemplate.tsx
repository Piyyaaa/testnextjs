import React from 'react'
import { HeroSection } from '../../components/organisms/HeroSection'
import { FeaturesSection } from '../../components/organisms/FeaturesSection'
import { Footer } from '../../components/organisms/Footer'

interface Feature {
  title: string
  description: string
}

interface FooterLink {
  label: string
  href: string
}

interface HomeTemplateProps {
  hero: {
    headline: string
    subheadline: string
    ctaLabel: string
    imageSrc: string
    imageAlt: string
  }
  features: Feature[]
  footer: {
    copyright: string
    links: FooterLink[]
  }
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  hero,
  features,
  footer,
}) => {
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <header>
        <HeroSection
          headline={hero.headline}
          subheadline={hero.subheadline}
          ctaLabel={hero.ctaLabel}
          imageSrc={hero.imageSrc}
          imageAlt={hero.imageAlt}
        />
      </header>
      <main id="main">
        <FeaturesSection features={features} />
      </main>
      <Footer copyright={footer.copyright} links={footer.links} />
    </>
  )
}