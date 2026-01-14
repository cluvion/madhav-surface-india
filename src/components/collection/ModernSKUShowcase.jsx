"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useState, useRef } from "react";
import dynamic from 'next/dynamic';

// Dynamic imports for icons
const Heart = dynamic(() => import("lucide-react").then((mod) => mod.Heart), { ssr: false });
const ShoppingCart = dynamic(() => import("lucide-react").then((mod) => mod.ShoppingCart), { ssr: false });
const Star = dynamic(() => import("lucide-react").then((mod) => mod.Star), { ssr: false });
const ChevronLeft = dynamic(() => import("lucide-react").then((mod) => mod.ChevronLeft), { ssr: false });
const ChevronRight = dynamic(() => import("lucide-react").then((mod) => mod.ChevronRight), { ssr: false });

const ModernSKUShowcase = ({ products, collection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProducts = () => {
    const start = currentSlide * itemsPerSlide;
    return products.slice(start, start + itemsPerSlide);
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Modern SKU Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clean, composable product selection from the {collection.name} collection
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                whileHover={{ y: -5 }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name || 'Product image'}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image available</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Product Labels */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <motion.span
                        className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        NEW
                      </motion.span>
                    )}
                    {product.isBestseller && (
                      <motion.span
                        className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                      >
                        BESTSELLER
                      </motion.span>
                    )}
                    {product.isIcon && (
                      <motion.span
                        className="px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + (index * 0.1) }}
                      >
                        ICON
                      </motion.span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      scale: hoveredProduct === product.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-4 h-4 text-gray-700" />
                  </motion.button>

                  {/* Texture Detail on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.materialType || product.category}</p>
                  </div>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                            }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">({product.reviews || 0})</span>
                    </div>
                  )}

                  {/* Order Sample Button */}
                  <motion.button
                    className="w-full bg-foreground text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Order Sample
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {products
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((product, index) => (
                          <motion.div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            {/* Product Image */}
                            <div className="relative h-32 overflow-hidden">
                              {product.image ? (
                                <Image
                                  src={product.image}
                                  alt={product.name || 'Product image'}
                                  fill
                                  className="object-cover"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-500 text-sm">No image available</span>
                                </div>
                              )}

                              {/* Labels */}
                              <div className="absolute top-2 left-2">
                                {product.isNew && (
                                  <span className="px-1.5 py-0.5 bg-green-500 text-white text-xs font-bold rounded">
                                    NEW
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-3">
                              <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1">
                                {product.name}
                              </h3>
                              <p className="text-xs text-gray-600 mb-2">{product.materialType || product.category}</p>

                              <button className="w-full bg-foreground text-white py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">
                                Order Sample
                              </button>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-foreground w-6' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-scroll Feature for Desktop */}
        <motion.div
          className="hidden lg:block mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 mb-4">Scroll horizontally to explore more products</p>
          <div className="flex justify-center">
            <motion.div
              className="w-12 h-1 bg-gray-300 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="h-full bg-foreground rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernSKUShowcase;
