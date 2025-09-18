import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

interface CustomImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  className?: string
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
  ...rest
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
    />
  )
}
