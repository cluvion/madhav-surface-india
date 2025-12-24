"use client";
import React, { useState } from 'react';
import { Star, Sparkles, Award } from 'lucide-react';
import Image from 'next/image';
import { CometCard } from "@/components/ui/comet-card";
import Link from 'next/link';
import { HoverButton } from '../ui/hoverbutton';
import SampleOrderForm from "@/components/ui/sample-order-form";
const ProductSection = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState(product.finish);
  const [isSampleOpen, setIsSampleOpen] = useState(false);

  const getBadgeIcon = (badge) => {
    switch (badge.toLowerCase()) {
      case 'bestseller': return <Star className="w-4 h-4" />;
      case 'new': return <Sparkles className="w-4 h-4" />;
      case 'icon': return <Award className="w-4 h-4" />;
      case 'premium': return <Award className="w-4 h-4" />;
      default: return null;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge.toLowerCase()) {
      case 'bestseller': return 'bg-amber-500';
      case 'new': return 'bg-green-500';
      case 'icon': return 'bg-purple-500';
      case 'premium': return 'bg-gray-500';
      case 'designer': return 'bg-pink-500';
      case 'eco-friendly': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriceDisplay = () => {
    if (product.priceDetail) {
      return `${product.priceDetail.currency} $${product.priceDetail.pricePerSqFt}/${product.priceDetail.unit}`;
    }
    return product.price;
  };

  return (
    <div className="py-12 md:py-20 pt-14 md:pt-32 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          {/* <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div> */}
          <div className="relative flex justify-center">
            <CometCard>
              <Image
                src={product.image}
                alt={product.name || 'Product'}
                className="h-full w-full object-cover rounded-xl overflow-hidden relative group"
                width={500}
                height={500}
                loading="lazy"
              />
            </CometCard>
          </div>
          {/* Right: Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Badges */}
              {/* <div className="flex flex-wrap gap-2 mb-8">
                {product.availability === 'in-stock' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500 text-white text-sm font-medium">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    In Stock
                  </span>
                )}
                {product.isNew && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-600 text-white text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    New
                  </span>
                )}
                {product.origin === 'Premium' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-600 text-white text-sm font-medium">
                    <Award className="w-4 h-4" />
                    Premium
                  </span>
                )}
              </div> */}

              <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-thin text-gray-900 lg:mb-6">
                {product.name}
              </h1>

              {/* Collection */}
              <div className="flex space-x-2">
                <span className="text-xl text-gray-600 font-light">From</span>
                <Link href={`/collection/${product.collection.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className="text-xl text-gray-800 font-medium underline cursor-pointer">
                    {product.collection} Collection
                  </button>
                </Link>
              </div>

              {/* Price */}
              {/* <div className="flex items-center justify-between">
                <p className="text-xl text-gray-600">
                  {product.origin} {product.type || 'Quartz Surface'}
                </p>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{getPriceDisplay()}</p>
                  <p className="text-sm text-gray-500">Starting price</p>
                </div>
              </div> */}
            </div>

            {/* Description */}
            {/* <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl font-light leading-relaxed">
              {product.description}
            </p> */}

            {/* Product Tags */}
            {/* {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )} */}

            {/* Product Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-gray-500">Color:</span>
                <span className="ml-2 font-medium">{product.color}</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500">Applications:</span>
                <span className="ml-2 font-medium">{product.useCase?.join(', ')}</span>
              </div>
            </div>

            {/* Finish Options */}
            {product.finishes && product.finishes.length > 1 && (
              <div className="space-y-3">
                <h4 className="text-lg sm:text-xl text-gray-800 font-medium">Available Finishes:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((finish, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border-2 font-medium transition-colors capitalize text-sm sm:text-base ${selectedFinish === finish
                        ? 'border-gray-800 bg-gray-50 text-gray-800'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <HoverButton onClick={() => setIsSampleOpen(true)} text="Order Sample" variant="transparentBlack" width={"w-full"} />
              <HoverButton href={"/contact-us"} text="Contact to Buy" variant="transparentBlack" width={"w-full"} />
            </div>
          </div>
        </div>
      </div>
      <SampleOrderForm isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} />
    </div>
  );
};

export default ProductSection;
