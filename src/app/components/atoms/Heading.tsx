import React from 'react'
import styles from './Heading.module.css'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'primary'
  children: React.ReactNode
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  size,
  weight = 'bold',
  color = 'default',
  children,
  className = '',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const sizeClass = size ? styles[size] : ''
  
  return (
    <Tag 
      className={`${styles.heading} ${sizeClass} ${styles[weight]} ${styles[color]} ${className}`}
    >
      {children}
    </Tag>
  )
}