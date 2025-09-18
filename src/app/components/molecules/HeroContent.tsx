import React from 'react'
import { Heading } from '../../../app/components/atoms/Heading'
import { Text } from '../../../app/components/atoms/Text'
import { Button } from '../../../app/components/atoms/Button'
import styles from './HeroContent.module.css'

interface HeroContentProps {
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref?: string
  className?: string
}
export const HeroContent: React.FC<HeroContentProps> = ({
  headline,
  subheadline,
  ctaLabel,
  ctaHref = '#',
  className = '',
}) => {
  return (
    <div className={`${styles.content} ${className}`}>
      <Heading level={1} size="4xl" className={styles.headline}>
        {headline}
      </Heading>
      <Text size="lg" color="light" className={styles.subheadline}>
        {subheadline}
      </Text>
      <Button href={ctaHref} size="lg" className={styles.cta}>
        {ctaLabel}
      </Button>
    </div>
  )
}