"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

            <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="mb-6 flex items-center space-x-2">
                        <div className="h-[1px] w-12 bg-[#D4AF37]" />
                        <span className="text-sm font-medium uppercase tracking-widest text-[#D4AF37]">
                            Premium Stone Collection
                        </span>
                    </div>

                    <h1 className="heading mb-6 text-5xl font-light leading-tight md:text-7xl lg:text-8xl">
                        Luxury Of <span className="text-[#D4AF37]">Marble Stone</span> <br />
                        For Modern Design
                    </h1>

                    <p className="mb-10 max-w-xl text-lg text-gray-300 md:text-xl">
                        Discover the finest collection of natural stones, crafted to elevate your living spaces with timeless elegance and superior quality.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="group rounded-none bg-[#D4AF37] px-8 py-6 text-black hover:bg-white hover:text-black"
                        >
                            Explore Collection
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-none border-white px-8 py-6 text-white hover:bg-white hover:text-black"
                        >
                            View Projects
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Floating Element */}
            <motion.div
                className="absolute bottom-0 right-0 hidden w-1/3 md:block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="aspect-square bg-gradient-to-tr from-[#D4AF37]/20 to-transparent p-12">
                    {/* Placeholder for a marble stone image or 3D element */}
                    <div className="h-full w-full rounded-tl-[100px] border border-[#D4AF37]/30 bg-white/5 backdrop-blur-sm" />
                </div>
            </motion.div>
        </section>
    );
}
