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
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white">
                            India's Premier Manufacturer & Exporter of Fine Marble, Granite, and Quartz Slabs.
                        </span>
                    </div>

                    <h1 className="text-balance heading mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-5xl">
                        Crafting Architectural Masterpieces with <br className="hidden md:block" />
                        <span className="text-primary">Timeless Natural Stone</span>
                    </h1>

                    <p className="mb-6 max-w-2xl text-sm md:text-base font-medium text-white/90">
                        Elevate your architectural and interior spaces with earth’s finest natural stones. Mined with care, processed with advanced Italian technology, and exported across 40+ countries worldwide.
                    </p>

                    <ul className="mb-8 space-y-2 text-sm md:text-base font-medium text-white/90">
                        <li className="flex items-center space-x-2">
                            <span className="text-primary">✔</span>
                            <span>Precision-Engineered Italian Cut Slabs</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-primary">✔</span>
                            <span>Sustainably & Ethically Sourced</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-primary">✔</span>
                            <span>Trusted by Global Architects & Luxury Builders</span>
                        </li>
                    </ul>

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
