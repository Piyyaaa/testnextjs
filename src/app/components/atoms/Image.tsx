import * as React from 'react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';

interface CustomImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: number | string;
}

export const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(min-width: 1024px) 800px, 100vw',
  containerClassName = '',
  aspectRatio,
  style,
  ...rest
}) => {
  const normalizedSrc =
    typeof src === 'string' && !src.startsWith('/') && !/^https?:\/\//i.test(src)
      ? `/${src}`
      : src;

  const loading: NextImageProps['loading'] = priority ? 'eager' : 'lazy';

  if (fill) {
    const containerStyle: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      ...(aspectRatio ? { aspectRatio: String(aspectRatio) } : { minHeight: 1, height: 'auto' }),
    };

    return (
      <div className={containerClassName} style={containerStyle}>
        <NextImage
          src={normalizedSrc}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          priority={priority}
          loading={loading}
          decoding="async"
          {...rest}
        />
      </div>
    );
  }

  return (
    <NextImage
      src={normalizedSrc}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      sizes={sizes}
      className={className}
      priority={priority}
      loading={loading}
      decoding="async"
      style={{ width: '100%', height: 'auto', ...style }}
      {...rest}
    />
  );
};

export default Image;
