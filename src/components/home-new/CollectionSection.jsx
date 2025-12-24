"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const collections = [
    { name: "White Marble", image: "/images/white-marble.jpg" },
    { name: "Black Granite", image: "/images/black-granite.jpg" },
    { name: "Onyx Stone", image: "/images/onyx.jpg" },
    { name: "Travertine", image: "/images/travertine.jpg" },
    { name: "Quartzite", image: "/images/quartzite.jpg" },
    { name: "Limestone", image: "/images/limestone.jpg" },
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
        <section className="bg-black py-20 text-white md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                            Collection
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl lg:text-6xl">
                            Beauty from the Earth <br />
                            <span className="text-neutral-500">A collection of timeless elegance and beauty</span>
                        </h2>
                    </div>
                    <div className="mt-8 flex gap-4 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            className="rounded-full border-neutral-700 bg-transparent text-white hover:bg-white hover:text-black"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
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
                            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                                <div className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-neutral-900">
                                    {/* Image Placeholder */}
                                    <div className="h-full w-full bg-neutral-800 transition-transform duration-700 group-hover:scale-110" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                        <h3 className="text-xl font-medium text-white">{item.name}</h3>
                                        <p className="text-sm text-[#D4AF37]">View Collection</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
