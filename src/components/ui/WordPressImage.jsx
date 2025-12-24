'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getOptimizedImageUrl } from '@/lib/wordpress';

export default function WordPressImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  fill = false,
  sizes,
  priority = false,
  quality = 75,
  fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlmYTJhNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFVuYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K' // SVG placeholder
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.warn(`Failed to load image: ${imgSrc}`);
    setHasError(true);
    setIsLoading(false);
    
    // Try the original WordPress URL as fallback
    if (imgSrc !== src) {
      setImgSrc(src);
      setHasError(false);
    } else if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  // Get optimized URL for WordPress images
  const optimizedSrc = src && src.includes('madhavquartz.com') 
    ? getOptimizedImageUrl(src, width || 800, quality)
    : src;

  const imageProps = {
    src: imgSrc || optimizedSrc,
    alt: alt || '',
    onError: handleError,
    onLoad: handleLoad,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    quality,
    priority,
  };

  if (fill) {
    imageProps.fill = true;
    if (sizes) imageProps.sizes = sizes;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image {...imageProps} />
      
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-sm text-center p-4">
            <div className="mb-2">📷</div>
            <div>Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
}
