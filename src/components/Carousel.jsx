"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

/**
 * Carousel Component
 * 
 * Displays a carousel of project images using Embla Carousel.
 * Supports clicking on an image to expand it using Framer Motion's layoutId.
 * 
 * @param {Object[]} images - Array of image objects {id, image, title, location}
 */
const Carousel = ({ images }) => {
    // Embla Carousel State
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    // Animation State
    const [selectedId, setSelectedId] = useState(null);

    // Carousel Callbacks
    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    const scrollTo = useCallback(
        (index) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    return (
        <div className="w-full">
            {/* Carousel Container */}
            <div className="overflow-hidden mt-8 md:mt-16" ref={emblaRef}>
                <div className="flex -ml-4">
                    {images.map((item, index) => (
                        <div key={item.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                            <motion.div
                                layoutId={`card-${item.id}`}
                                className="group relative aspect-square cursor-pointer overflow-hidden bg-neutral-900"
                                onClick={() => setSelectedId(item.id)}
                            >
                                {/* Image Placeholder */}
                                <Image
                                    src={item.image}
                                    alt={item.title || "Project Image"}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-30" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                    {item.title && (
                                        <motion.h3
                                            layoutId={`title-${item.id}`}
                                            className="text-xl font-medium text-white"
                                        >
                                            {item.title}
                                        </motion.h3>
                                    )}
                                    {item.location && (
                                        <motion.p
                                            layoutId={`location-${item.id}`}
                                            className="text-sm text-neutral-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            {item.location}
                                        </motion.p>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-3">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "h-3 w-3 transition-colors duration-300",
                            index === selectedIndex ? "bg-primary" : "bg-neutral-700 hover:bg-neutral-500"
                        )}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Expanded View */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 grid place-items-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* Expanded Card */}
                        <div className="relative w-full max-w-2xl aspect-[4/3] sm:aspect-video pointer-events-none">
                            {images.map((item) => (
                                item.id === selectedId && (
                                    <motion.div
                                        key={item.id}
                                        layoutId={`card-${item.id}`}
                                        className="relative w-full h-full bg-neutral-900 rounded-lg overflow-hidden shadow-2xl pointer-events-auto"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title || "Project Image"}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        {/* Close Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedId(null);
                                            }}
                                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-20"
                                        >
                                            <X size={24} />
                                        </button>

                                        <div className="absolute bottom-0 left-0 w-full p-8">
                                            {item.title && (
                                                <motion.h3
                                                    layoutId={`title-${item.id}`}
                                                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                                                >
                                                    {item.title}
                                                </motion.h3>
                                            )}
                                            {item.location && (
                                                <motion.p
                                                    layoutId={`location-${item.id}`}
                                                    className="text-lg text-neutral-300"
                                                >
                                                    {item.location}
                                                </motion.p>
                                            )}
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Carousel;
