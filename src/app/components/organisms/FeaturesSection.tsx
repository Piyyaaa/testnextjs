import React from 'react'
import { FeatureCard } from '../../../app/components/molecules/FeatureCard'
import styles from './FeaturesSection.module.css'

interface Feature {
  title: string
  description: string
}

interface FeaturesSectionProps {
  features: Feature[]
  className?: string
}
export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features,
  className = '',
}) => {
  return (
    <section className={`${styles.features} ${className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}