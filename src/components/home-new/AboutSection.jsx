"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import AnimatedNumber from "@/components/ui/animated-number";
import Link from "next/link";

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
                            <span className="mr-2 text-lg text-primary">¬</span> OUR LEGACY
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground">
                            36+ Years of Sculpting Elegance From the Earth
                        </h2>
                    </div>


                    <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
                        <div className="space-y-4 text-justify mb-8 md:mb-12">
                            <p>
                                At <strong className="font-semibold text-foreground">Madhav Marbles and Granite Ltd.</strong>, natural stone is more than a material—it is a canvas of natural art and enduring luxury. Since <strong className="font-semibold text-foreground">1989</strong>, we have pioneered the natural stone industry in India, evolving into one of the world&apos;s most trusted processors and exporters of premium marble, granite, quartz, and limestone.
                            </p>
                            <p>
                                Operating from the rich mineral belt of Salem, Tamil Nadu, our facility is equipped with state-of-the-art, eco-friendly Italian processing machinery. Whether you are designing a high-end commercial tower or a bespoke luxury residence, Madhav Surfaces delivers uncompromising craftsmanship, unparalleled texture, and lasting value across six continents.
                            </p>
                        </div>

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
<Link href="/contact-us">
                        <Button variant={"secondary"}>
                            Contact Us
                        </Button>
                        </Link>
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
                                        value={inView ? 36 : 0}
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
                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
