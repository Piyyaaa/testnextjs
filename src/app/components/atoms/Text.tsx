import React from 'react'
import styles from './Text.module.css'

interface TextProps {
  as?: 'p' | 'span' | 'div'
  size?: 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'light' | 'primary'
  children: React.ReactNode
  className?: string
}
export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  color = 'default',
  children,
  className = '',
}) => {
  return (
    <Component 
      className={`${styles.text} ${styles[size]} ${styles[weight]} ${styles[color]} ${className}`}
    >
      {children}
    </Component>
  )
}