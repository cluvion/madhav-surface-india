import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Heading from '@/components/heading';

const ImageGallery = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Use thumbnailImages if available, otherwise fallback to main image
  const images = product.thumbnailImages && product.thumbnailImages.length > 0
    ? [product.image, ...product.thumbnailImages]
    : [product.image, product.mainImage || product.image].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSecondaryImage = () => {
    return images[(currentImageIndex + 1) % images.length];
  };

  return (
    <section className="py-12 md:py-20 bg-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Product Gallery" />

        {/* Main Gallery Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Single Main Image */}
          <div className="relative group">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images[currentImageIndex]}
                alt={`${product.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
                width={1000}
                height={600}
              />

              {/* Zoom Button Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ZoomIn className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Controls - Bottom Right */}
            {/* {images.length > 1 && (
              <div className="absolute right-1 bottom-auto top-auto flex items-center space-x-2 sm:space-x-3 mt-3">
                <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium sm:hidden">
                  {currentImageIndex + 1}/{images.length}
                </div>

                <div className="flex space-x-1 sm:space-x-2">
                  <button
                    onClick={prevImage}
                    className="group/btn bg-transparent border border-gray-800 p-1.5 sm:p-2 rounded-full cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="group/btn bg-transparent border border-gray-800 p-1.5 sm:p-2 rounded-full cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                  </button>
                </div>
              </div>
            )} */}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 2 && (
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 px-4 sm:px-0">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-3 transition-all duration-200 ${currentImageIndex === index
                    ? 'border-gray-800'
                    : 'border-gray-400 hover:border-gray-600'
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} full view`}
                className="max-w-full max-h-full object-contain rounded-lg w-full"
              />

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Lightbox Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
