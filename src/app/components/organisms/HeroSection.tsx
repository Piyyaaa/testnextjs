import React from 'react'
import { HeroContent } from '../../components/molecules/HeroContent'
import { Image } from '../../../app/components/atoms/Image'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  headline: string
  subheadline: string
  ctaLabel: string
  imageSrc: string
  imageAlt: string
  ctaHref?: string
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  ctaLabel,
  imageSrc,
  imageAlt,
  ctaHref,
  className = '',
}) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <HeroContent
            headline={headline}
            subheadline={subheadline}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}