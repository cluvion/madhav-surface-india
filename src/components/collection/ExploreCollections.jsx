"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Heading from "@/components/heading";
import { HoverButton } from "@/components/ui/hoverbutton";

const ChevronLeft = dynamic(() => import("lucide-react").then((mod) => mod.ChevronLeft), { ssr: false });
const ChevronRight = dynamic(() => import("lucide-react").then((mod) => mod.ChevronRight), { ssr: false });

const ExploreCollections = ({ currentCollection, allCollections }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Filter out current collection and limit to 6
  const otherCollections = Object.entries(allCollections)
    .filter(([key]) => key !== currentCollection)
    .slice(0, 6);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherCollections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + otherCollections.length) % otherCollections.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!otherCollections.length) return null;

  return (
    <section ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heading title="Explore Other Collections" />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {otherCollections.slice(0, 3).map(([key, collection], index) => (
            <motion.div
              key={key}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-80">
                {collection.heroImage ? (
                  <Image
                    src={collection.heroImage}
                    alt={collection.name || 'Collection'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-6 py-3 text-white">
                  <h3 className="text-2xl font-thin">
                    {collection.name?.slice(16) || collection.name}
                  </h3>
                  {/* <p className="text-sm text-gray-300">
                    {collection.skuCount || '12+'} SKUs
                  </p> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {collection.shortDescription || collection.description}
                </p>
                <HoverButton
                  href={"/collection/" + key}
                  text='More Details'
                  variant='black'
                  width='w-full'
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl pb-2 md:pb-0"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {otherCollections.map(([key, collection]) => (
                  <div key={key} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <div className="relative h-48">
                        {collection.heroImage ? (
                          <Image
                            src={collection.heroImage}
                            alt={collection.name || 'Collection'}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">No image</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-lg font-bold">{collection.name}</h3>
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {collection.shortDescription || collection.description}
                        </p>
                        <HoverButton
                          href={"/collection/" + key}
                          text='More Details'
                          variant='black'
                          width='w-full'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Indicators */}
          {otherCollections.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {otherCollections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-black w-6' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreCollections;