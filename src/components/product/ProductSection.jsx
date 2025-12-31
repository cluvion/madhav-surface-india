"use client";
import React, { useState } from 'react';
import { Star, Sparkles, Award } from 'lucide-react';
import Image from 'next/image';
import { CometCard } from "@/components/ui/comet-card";
import Link from 'next/link';
import { Button } from '../ui/button';
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
    <div className="flex items-center justify-center overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="relative flex justify-center">
          <CometCard>
            <Image
              src={product.image}
              alt={product.name || 'Product'}
              className="h-full w-full object-cover relative group"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </CometCard>
        </div>
        {/* Right: Product Info */}
        <div className="space-y-4 md:space-y-6">
          <div className="div">
            <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 lg:mb-6">
              {product.name}
            </h1>
            <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
              {product.description}
            </p>
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
            <Button variant={"secondary"}>
              Order Sample
            </Button>
            <Link href={"/contact-us"}>
              <Button>
                Contact to Buy
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <SampleOrderForm isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} />
    </div>
  );
};

export default ProductSection;
