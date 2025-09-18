import React from 'react'
import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(min-width: 1024px) 600px, 100vw',
}) => {
  if (fill) {
    return (
      <NextImage
        src={imagesrc}
        alt={imagealt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <NextImage
      src={imagessrc}
      alt={imagesalt}
      width={600}
      height={400}
      priority
      unoptimized
    />
  )
}
