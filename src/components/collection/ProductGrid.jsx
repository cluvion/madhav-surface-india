"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/heading";
import { HoverButton } from "../ui/hoverbutton";

const ProductGrid = ({
  products = [],
  title = "Featured Products",
  showNewBadge = false,
  className = ""
}) => {
  // Calculate items per row based on responsive grid (xl:grid-cols-4)
  const itemsPerRow = 4;
  const initialRows = 2;
  const itemsToShow = initialRows * itemsPerRow; // 12 items initially

  const [visibleCount, setVisibleCount] = useState(itemsToShow);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + itemsToShow, products.length));
      setIsLoading(false);
    }, 300);
  };

  if (!products || products.length === 0) {
    return null;
  }

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <section className={`py-6 md:py-10 pt-12 md:pt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading title={title} />
        </motion.div>

        {/* Grid Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Product Image Container */}
              <div className="relative aspect-[3/4] bg-gray-100">
                {showNewBadge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white text-red-600 text-xs px-2 py-1 rounded">
                      New
                    </span>
                  </div>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {product.collection}
                  </p>
                  {product.finish && (
                    <p className="text-xs text-gray-500 mt-1">
                      {product.finish} Surface
                    </p>
                  )}
                </div>

                <HoverButton
                  href={`/product/${product.id}`}
                  text="More Details"
                  variant="transparentBlack"
                  width={"w-full"}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </div>
              ) : (
                `Load More (${products.length - visibleCount} remaining)`
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
