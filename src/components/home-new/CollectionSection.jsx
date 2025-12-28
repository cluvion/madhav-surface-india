"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const collections = [
    { name: "Granite Slabs", image: "/assets/collection/granite-slab.png", href: "/manufacturer-of-granite-india" },
    { name: "Granite Cutter Slabs", image: "/assets/collection/granite-cutter-slabs.png", href: "/granite-cutter-slabs-supplier" },
    { name: "Marble | Sandstone | Quartzite", image: "/assets/collection/marble.png", href: "/marble-sandstone-quartzite-exporter-supplier" },
    { name: "Exotics & Exclusives", image: "/assets/collection/exotics.png", href: "/marbles-and-granite-suppliers-in-india" },
    { name: "Quartz", image: "/assets/collection/quartz.png", href: "https://www.madhavquartz.com" },
];

export default function CollectionSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="my-5 md:my-8 lg:my-10 py-5 md:py-8 lg:py-10  bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-end">
                    <div className="text-center text-balance md:text-left md:max-w-2xl">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4 text-white">
                            <span className="mr-2 text-lg text-primary">¬</span> OUR STONE COLLECTION
                        </span>
                        <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-white">
                            Explore Our Premium
                            <span className="text-primary "> Stone Collections</span>
                        </h2>
                    </div>
                    <div className="mt-8 flex gap-4 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            arrow={false}
                            onClick={scrollPrev}
                            className="rounded-full border-neutral-700 bg-transparent text-white hover:bg-white hover:text-black"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            arrow={false}
                            onClick={scrollNext}
                            className="rounded-full border-neutral-700 bg-transparent text-white hover:bg-white hover:text-black"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
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
            </div>
        </section>
    );
}
