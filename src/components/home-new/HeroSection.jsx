"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-foreground text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/assets/bg.webp')] bg-cover bg-center opacity-100" />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/70" /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/0" />
            {/* <Image
                src="/assets/bg.webp"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            /> */}
            {/* <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl"
                >
                    <div className="mb-6 flex items-center space-x-2">
                        <span className="mr-2 pl-2 text-lg text-white">¬</span>
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary">
                             Premium Stone Collection
                        </span>
                    </div>

                    <h1 className="text-balance heading mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                        Luxury Of <span className="text-primary">Marble Stone</span> <br />
                        For Modern Design
                    </h1>

                    <p className="mb-10 max-w-xl text-lg md:text-xl font-medium">
                        Discover the finest collection of natural stones, crafted to elevate your living spaces with timeless elegance and superior quality.
                    </p>

                        <Button>
                            Explore Collection
                        </Button>
                </motion.div>
            </div> */}
        </section>
    );
}
