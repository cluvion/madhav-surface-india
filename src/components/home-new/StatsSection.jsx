"use client"
import React from "react";
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
            number: 36,
            suffix: "+",
            label: "Years of Industry Mastery",
            description: "Over three decades of processing innovation & client trust."
        },
        {
            number: 40,
            suffix: "+",
            label: "Countries Served",
            description: "Delivering world-class Indian craftsmanship to global markets."
        },
        {
            number: 160,
            suffix: "+",
            label: "Exquisite Stone Varieties",
            description: "A diverse palette of rare granites, marbles, and engineered quartz."
        }
    ];
    return (
        <section className="mb-8 md:mb-12 lg:mb-14 bg-foreground">
            {/* Background Image/Text Overlay */}
            {/* <div className="absolute inset-0 bg-[url('/assets/bg.webp')]  h-full w-full bg-center opacity-100" /> */}

            <div className="relative">
                {/* Stats Grid */}
                <div ref={ref} className="relative z-5 grid grid-cols-3 divide-x divide-primary-foreground/40 max-w-7xl mx-auto">
                {/* <div ref={ref} className="relative z-5 grid grid-cols-3 max-w-7xl mx-auto"> */}
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
                                <h3 className="text-sm sm:text-base md:text-xl text-primary-foreground">
                                    {stat.label}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm mt-2">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
