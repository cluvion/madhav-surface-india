"use client"
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] md:h-screen w-full overflow-hidden bg-foreground text-white flex flex-col justify-center sm:justify-end">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/assets/bg.webp')] bg-cover bg-center opacity-100" />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/70" /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/0" />
            <div className="absolute inset-0 bg-black/60" />
            {/* <Image
                src="/assets/bg.webp"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /> */}
            <div className="relative z-10 flex flex-col sm:justify-end sm:pb-24  px-6 md:px-12 h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl"
                >
                    <div className="mb-6 flex items-center space-x-2">
                        <span className="mr-2 pl-2 text-lg text-primary font-bold">¬</span>
                        {/* <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white">
                            India's Premier Manufacturer & Exporter of Fine Marble, Granite, and Quartz Slabs.
                        </span> */}
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white">
                            MADHAV - NATURAL STONE SINCE 1989
                        </span>
                    </div>

                    <h1 className="text-balance heading mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-5xl">
                        {/* Crafting Architectural Masterpieces with <br className="hidden md:block" />
                        <span className="text-primary">Timeless Natural Stone</span> */}
                    <span className="text-5xl font-medium leading-tight md:text-6xl lg:text-[5rem]">
                            Stone, Mastered.
                        </span>
                        <br/>
                        <span className="text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-primary">
                            From India. Ready for the world.
                        </span>
                    </h1>

                    <p className="mb-8 max-w-md text-base md:text-lg font-medium text-white/80 leading-relaxed">
                        Selected for character. Processed<br className="hidden sm:block" />
                        with precision. Supplied to the world.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
                        <Button className="w-full sm:w-auto" asChild>
                            <Link href="#products">Explore Collection</Link>
                        </Button>
                        {/* <Button variant="secondary" className="w-full sm:w-auto" asChild>
                            <Link href="/contact">
                                Request a Quote
                            </Link>
                        </Button> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
