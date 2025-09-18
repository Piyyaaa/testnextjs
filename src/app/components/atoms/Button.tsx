import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}