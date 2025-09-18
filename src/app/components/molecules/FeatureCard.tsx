import React from 'react'
import { Heading } from '../../../app/components/atoms/Heading'
import { Text } from '../../../app/components/atoms/Text'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  title: string
  description: string
  className?: string
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Heading level={3} size="lg" className={styles.title}>
        {title}
      </Heading>
      <Text color="light" className={styles.description}>
        {description}
      </Text>
    </div>
  )
}