"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const collections = [
    { name: "Granite Slabs", image: "/assets/collection/granite-slab.png", href: "/manufacturer-of-granite-india" },
    { name: "Granite Cutter Slabs", image: "/assets/collection/granite-cutter-slabs.png", href: "/granite-cutter-slabs-supplier" },
    { name: "Marble | Sandstone | Quartzite", image: "/assets/collection/marble.png", href: "/marble-sandstone-quartzite-exporter-supplier" },
    { name: "Exotics & Exclusives", image: "/assets/collection/exotics.png", href: "/marbles-and-granite-suppliers-in-india" },
    { name: "Quartz", image: "/assets/collection/quartz.png", href: "https://www.madhavquartz.com" },
];

export default function CollectionSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

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

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    return (
        <section className="my-8 md:my-12 lg:my-14 py-8 md:py-12 lg:py-14 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start justify-between md:flex-row md:items-end">
                    <div className="text-center text-balance md:text-left md:max-w-2xl">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4 text-white">
                            <span className="mr-2 text-lg text-primary">¬</span> OUR STONE COLLECTION
                        </span>
                        <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-white">
                            Explore Our Premium
                            <span className="text-primary "> Stone Collections</span>
                        </h2>
                    </div>
                    <div className="space-x-4 hidden lg:block">
                        <Button
                            variant="outline"
                            size="icon"
                            arrow={false}
                            onClick={scrollPrev}
                            className="cursor-pointer rounded-full border-neutral-700 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-700"
                        >
                            <ArrowLeft className="h-5 w-5 cursor-pointer " />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            arrow={false}
                            onClick={scrollNext}
                            className="cursor-pointer rounded-full border-neutral-700 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-700"
                        >
                            <ArrowRight className="h-5 w-5 cursor-pointer " />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden mt-8 md:mt-16" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {collections.map((item, index) => (
                            <Link key={index} href={item.href} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                                <div className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-neutral-900">
                                    {/* Image Placeholder */}
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-30" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                        <h3 className="text-xl font-medium text-white">{item.name}</h3>
                                    </div>
                                </div>
                            </Link>
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
            </div>
        </section>
    );
}
