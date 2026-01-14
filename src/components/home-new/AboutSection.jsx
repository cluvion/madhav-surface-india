"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import AnimatedNumber from "@/components/ui/animated-number";

export default function AboutSection() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-14 container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-16  items-center">
                {/* Left Content */}
                <div className="w-full lg:w-2/3 space-y-4 md:space-y-8">
                    <div className="text-center md:text-left">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="mr-2 text-lg text-primary">¬</span> OUR ABOUT US
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground">
                            Tap Into India&apos;s Prime Manufacturers And Exporters Of Natural Stones
                            {/* <span className="text-primary "> Manufacturers And Exporters Of Natural Stones</span> */}
                        </h2>
                    </div>


                    <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
                        <p className="text-justify">
                            With 35 years of excellence in the field of Natural Stone Industry. We are known as the prominent marble and granite suppliers in India and all over the world. Madhav Marbles and Granite Ltd has emerged as the leading processor and exporter of natural stones. The company has extensively expanded itself among top architects, interior designers, and distinctive homeowners seeking outstanding natural stone products. We are an innovative company, established in 1989 to yield unmatched quality and unique design marbles and granites to mark an extensive global presence in the countries like North America, South America, Canada, Europe, Australia, South Africa, Russia, and the Far East. The company operates its Granite Division from South India (Salem, Tamil Nadu), known for its rich reserves for metamorphosed granite. In conformity with its commitment to excellence, the company has installed the most sophisticated and environment-friendly granite processing machinery imported from Italy. If you are looking for the finest collection of natural stone, Madhav Marble & Granite Ltd serves as the clear leader for exporting naturally beautiful stone surfaces.
                        </p>

                        {/* <ul className="space-y-3">
                                    {[
                                        "High Gloss Finish for Added Shine",
                                        "Durability Against Wear and Tear",
                                        "Slip-Resistant When Honed"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center text-sm font-semibold text-gray-800">
                                            <span className="w-1.5 h-1.5 bg-foreground mr-3 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul> */}

                        <Button variant={"secondary"}>
                            More About Us
                        </Button>
                    </div>

                </div>

                {/* Right Visuals */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="grid md:grid-cols-2 gap-8 items-end">
                        {/* Left part of right side - Stats & Grid */}
                        <div className="space-y-8">
                            <div className="md:absolute md:inset-0 md:top-41 text-center md:text-left">
                                <div ref={ref} className="flex items-baseline justify-center md:justify-start text-primary leading-none gap-2 text-[140px] font-bold tracking-tight">
                                    <AnimatedNumber
                                        springOptions={{
                                            bounce: 0,
                                            duration: 3000,
                                        }}
                                        value={inView ? 35 : 0}
                                    />
                                    {/* <span className="text-[150px] font-bold tracking-tight">35</span> */}
                                    <span className="text-[140px] font-bold">+</span>
                                </div>
                                <p className="font-semibold text-lg text-foreground mt-[-10px] ml-2">Years Of Experience</p>
                            </div>

                            {/* Stone Texture Grid */}
                            <div className="md:absolute inset-0 md:top-87 flex justify-center md:grid md:grid-cols-4 h-39 md:h-52 md:w-108 z-1">
                                <div className="aspect-video w-80 h-full md:w-108 bg-gray-100 relative overflow-hidden mx-auto md:mx-0">
                                    <Image
                                        src="/assets/stones/about2.png"
                                        alt="Luxury Marble Interior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right part of right side - Hero Image */}
                        <div className="relative h-[500px] w-full">
                            <Image
                                src="/assets/collection/granite-cutter-slabs.png"
                                alt="Luxury Marble Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
