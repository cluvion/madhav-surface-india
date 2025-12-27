"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/assets/bg.webp')] bg-cover bg-center opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/70" />
            {/* <Image
                src="/assets/bg.webp"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            /> */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl"
                >
                    <div className="mb-6 flex items-center space-x-2">
                        <div className="h-[1px] w-12 bg-primary" />
                        <span className="text-sm font-medium uppercase tracking-widest text-primary">
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

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="group rounded-none bg-primary px-8 py-6 text-black hover:bg-white hover:text-black"
                        >
                            Explore Collection
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        {/* <Button
                            variant="outline"
                            size="lg"
                            className="rounded-none border-white px-8 py-6 text-white hover:bg-white hover:text-black"
                        >
                            View Projects
                        </Button> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
