import React from 'react'
import NextImage from 'next/image'

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
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        unoptimized
      />
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes={sizes}
      unoptimized
    />
  )
}
