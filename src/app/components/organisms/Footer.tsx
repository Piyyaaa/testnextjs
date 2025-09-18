import React from 'react'
import { Text } from '../../../app/components/atoms/Text'
import styles from './Footer.module.css'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  copyright: string
  links: FooterLink[]
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  copyright,
  links,
  className = '',
}) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {links.map((link, index) => (
            <a key={index} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
        <Text size="sm" color="light" className={styles.copyright}>
          {copyright}
        </Text>
      </div>
    </footer>
  )
}