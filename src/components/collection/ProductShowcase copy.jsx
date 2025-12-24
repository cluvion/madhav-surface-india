"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Package } from 'lucide-react';
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";
import { HoverButton } from '../ui/hoverbutton';

const ProductShowcase = ({ products, collection }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Get current product
  const currentProduct = products[currentProductIndex];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
    setCurrentImageIndex(0); // Reset image index when changing products
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
    setCurrentImageIndex(0); // Reset image index when changing products
  };

  const selectProduct = (index) => {
    setCurrentProductIndex(index);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProduct?.thumbnailImages) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProduct.thumbnailImages.length);
    }
  };

  const prevImage = () => {
    if (currentProduct?.thumbnailImages) {
      setCurrentImageIndex((prev) => (prev - 1 + currentProduct.thumbnailImages.length) % currentProduct.thumbnailImages.length);
    }
  };

  if (!products || products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto text-center py-20">
        <p className="text-xl text-gray-600">No products available in this collection.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0">
        {/* Left side - Product Image */}
        <div className="relative flex justify-center">
          <CometCard>
            <Image
              src={currentProduct?.thumbnailImages?.[currentImageIndex] || currentProduct?.image}
              alt={currentProduct?.name || 'Product'}
              className="h-full w-full object-cover rounded-xl overflow-hidden relative group"
              width={500}
              height={500}
              loading="lazy"
            />
          </CometCard>

          {/* Image Navigation Arrows */}
          {currentProduct?.thumbnailImages?.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 z-10"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 z-10"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-8 py-8">
          {/* Product Carousel Navigation */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevProduct}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>

              <div className="flex space-x-3 overflow-hidden">
                {products.slice(0, 6).map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => selectProduct(index)}
                    className={`w-14 h-18 rounded-md overflow-hidden transition-all duration-200 ${currentProductIndex === index
                      ? 'border-2 border-red-600 shadow-lg'
                      : 'hover:shadow-lg hover:scale-105'
                      }`}
                  >
                    <Image
                      src={product.thumbnailImages?.[0] || product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      width={56}
                      height={72}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextProduct}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Product Counter */}
            <div className="text-center text-sm text-gray-500">
              {currentProductIndex + 1} of {products.length} products
            </div>
          </div>

          {/* Product Info */}
          <motion.div
            className="space-y-6 pt-10"
            key={currentProduct?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h2 className="heading text-2xl sm:text-3xl lg:text-4xl font-thin text-gray-900 lg:mb-6">
                {currentProduct?.name}
              </h2>
              <div className="flex gap-3 mb-4">
                {currentProduct?.isNew && (
                  <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    New
                  </span>
                )}
                <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm font-medium rounded-full">
                  {currentProduct?.finish || currentProduct?.type || 'Surface'}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium rounded-full">
                  {currentProduct?.color}
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-800 font-light">
              {currentProduct?.description}
            </p>

            {/* Price Display */}
            {currentProduct?.priceDetail && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-lg font-medium text-gray-900">
                  ${currentProduct.priceDetail.pricePerSqFt} per {currentProduct.priceDetail.unit}
                </p>
                <p className="text-sm text-gray-600">Starting price</p>
              </div>
            )}

            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <HoverButton href='/where-to-buy' text='Where To Buy' variant='transparentBlack' />
                <HoverButton href='/contact-us' text='Order Sample' variant='transparentBlack' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;