"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Package } from 'lucide-react';
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";
import { HoverButton } from '../ui/hoverbutton';

const ProductShowcase = ({ products }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Get current product
  const currentProduct = products[currentProductIndex];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const selectProduct = (index) => {
    setCurrentProductIndex(index);
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
      {/* Mobile Product Carousel Navigation - Above Image */}
      <div className="lg:hidden mb-10">
        <div className="flex items-center justify-around mb-4 px-2">
          <button
            onClick={prevProduct}
            className="p-2 rounded-full bg-transparent  transition-all flex-shrink-0"
          >
            <ChevronLeft size={16} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </button>

          <div className="flex space-x-2 overflow-x-auto scrollbar-hide px-2 max-w-[200px]">
            {products.slice(0, 6).map((product, index) => (
              <button
                key={product.id}
                onClick={() => selectProduct(index)}
                className={`w-12 h-16 rounded-md overflow-hidden transition-all duration-200 flex-shrink-0 ${currentProductIndex === index
                  ? 'border-2 border-red-600 shadow-lg'
                  : 'hover:shadow-lg hover:scale-105'
                  }`}
              >
                <Image
                  src={product.image}
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
            className="p-2 rounded-full bg-transparent  transition-all flex-shrink-0"
          >
            <ChevronRight size={16} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 md:gap-0">
        {/* Left side - Product Image */}
        <div className="relative flex justify-center">
          <CometCard>
            <Image
              src={currentProduct?.image}
              alt={currentProduct?.name || 'Product'}
              className="h-full w-full object-cover rounded-xl overflow-hidden relative group"
              width={500}
              height={500}
              loading="lazy"
            />
          </CometCard>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6 sm:space-y-8 py-4 sm:py-8 px-4 sm:px-0">
          {/* Desktop Product Carousel Navigation - In Sidebar */}
          <div className="relative hidden lg:block">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevProduct}
                className="p-3 rounded-full bg-transparent  transition-all flex-shrink-0"
              >
                <ChevronLeft size={20} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
              </button>

              <div className="flex space-x-3 overflow-hidden">
                {products.slice(0, 6).map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => selectProduct(index)}
                    className={`w-14 h-18 rounded-md overflow-hidden transition-all duration-200 flex-shrink-0 ${currentProductIndex === index
                      ? 'border-2 border-red-600 shadow-lg'
                      : 'hover:shadow-lg hover:scale-105'
                      }`}
                  >
                    <Image
                      src={product.image}
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
                className="p-3 rounded-full bg-transparent  transition-all flex-shrink-0"
              >
                <ChevronRight size={20} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
              </button>
            </div>

            {/* Product Counter */}
            {/* <div className="text-center text-sm text-gray-500">
              {currentProductIndex + 1} of {products.length} products
            </div> */}
          </div>
          {/* Product Info */}
          <motion.div
            className="space-y-6 pt-6 lg:pt-10"
            key={currentProduct?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h2 className="heading text-3xl lg:text-4xl font-thin text-gray-900 mb-4 lg:mb-6">
                {currentProduct?.name}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
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

            <p className="text-md lg:text-xl text-gray-900 font-light leading-relaxed">
              {currentProduct?.description}
            </p>

            {/* Price Display */}
            {/* {currentProduct?.priceDetail && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-lg font-medium text-gray-900">
                  ${currentProduct.priceDetail.pricePerSqFt} per {currentProduct.priceDetail.unit}
                </p>
                <p className="text-sm text-gray-600">Starting price</p>
              </div>
            )} */}

            <div className="pt-4 sm:pt-6 lg:pt-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <HoverButton href='/where-to-buy' text='Where To Buy' variant='transparentBlack' width="w-full" />
                <HoverButton href='/contact-us' text='Order Sample' variant='transparentBlack' width="w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;