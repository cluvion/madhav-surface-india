"use client"
import React from "react";
import {
    Video
} from "@/components/ui/video";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import AnimatedNumber from "@/components/ui/animated-number";

export default function StatsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        {
            number: 35,
            suffix: "+",
            label: "Years of Experience",
            description: "Crafting premium surfaces with unmatched expertise"
        },
        {
            number: 50,
            suffix: "+",
            label: "Countries Served",
            description: "Global reach with local craftsmanship"
        },
        {
            number: 500,
            suffix: "+",
            label: "Stone Varieties",
            description: "Curated collection from world's finest quarries"
        }
    ];
    return (
        <section className="my-8 md:my-12 lg:my-14 bg-foreground ">
            {/* Background Image/Text Overlay */}
            {/* <div className="absolute inset-0 bg-[url('/assets/bg.webp')]  h-full w-full bg-center opacity-100" /> */}

            <div className="relative">
                {/* <div className="absolute top-[-340] flex items-center justify-center w-full h-full "> */}
                <h2 className="z-1 absolute inset-0 text-center select-none text-[13vw] font-bold bg-gradient-to-b from-white/60 via-black to-black/60 bg-clip-text text-transparent">
                    Marble & Tiles
                </h2>
                {/* <h2 className="z-1 absolute inset-0 text-center text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold bg-gradient-to-b from-white/70 via-white/0 to-transparent bg-clip-text text-transparent">
                    Marble & Tiles
                </h2> */}
                {/* </div> */}

                <Image
                    src="/assets/video-bg.png"
                    alt="Hero Background"
                    width={1920}
                    height={1080}
                    className="object-cover aspect-[16/8] min-h-[400px]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/60" />

                <div className="z-10 absolute top-0 bottom-0 left-0 right-0">
                    <Video />
                </div>

                {/* Stats Grid */}
                <div ref={ref} className="relative z-5 grid grid-cols-3 divide-x divide-white/30 max-w-7xl mx-auto">
                    {/* <div className="grid md:grid-cols-3 gap-8 mb-16"> */}
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="text-center group"
                        >
                            <div className=" p-4 sm:p-6 md:p-8 ">
                                <div className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-primary mb-2 sm:mb-3 md:mb-4'>
                                    <AnimatedNumber
                                        springOptions={{
                                            bounce: 0,
                                            duration: 3000,
                                        }}
                                        value={inView ? stat.number : 0}
                                    />
                                    <span>{stat.suffix}</span>
                                </div>
                                <h3 className="text-sm sm:text-base md:text-xl text-white mb-3">
                                    {stat.label}
                                </h3>
                                {/* <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
