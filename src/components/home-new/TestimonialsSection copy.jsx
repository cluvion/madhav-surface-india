"use client"
import React from "react";
import Section from "@/components/section";
import Image from "next/image";
// import { ScrollAnimatedGroup } from "./ui/scroll-animated-group";
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const DURATION = 5000 // ms
const BAR_WIDTH = 50
const CIRCLE_SIZE = 12

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Arjun Mehta",
            location: "Ahmedabad, India",
            text: "Madhav Surfaces delivered exceptional quality marble for our luxury villa project. The finish, texture, and color consistency were absolutely world-class.",
        },
        {
            id: 2,
            name: "Kavya R.",
            location: "Hyderabad, India",
            text: "We sourced quartz slabs from Madhav Surfaces for our modular kitchen line. The polish and durability have exceeded expectations — our clients love it.",
        },
        {
            id: 3,
            name: "Rohan Patel",
            location: "Surat, India",
            text: "Working with Madhav Surfaces has been seamless. From sample selection to final delivery, their team handled everything professionally and on time.",
        },
        {
            id: 4,
            name: "Ananya Iyer",
            location: "Chennai, India",
            text: "Their Opulence Collection transformed our hotel interiors. The patterns are stunning and truly reflect luxury. Excellent craftsmanship and service.",
        },
        {
            id: 5,
            name: "Sanjay Kapoor",
            location: "Dubai, UAE",
            text: "We’ve been importing granite slabs from Madhav Surfaces for years. The quality control and packaging are top-notch they’re a partner we can trust.",
        },
    ];


    // Auto-rotation effect
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, DURATION);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, testimonials.length]);

    return (
        <section className="my-8 md:my-12 lg:my-14 py-8 md:py-12 lg:py-14 bg-primary/80 ">
            {/* Background Text */}
            {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <span className="block text-[20vw] font-bold text-neutral-50" style={{ fontFamily: 'var(--font-heading)' }}>
                    clients
                </span>
            </div> */}

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex items-center justify-around">
                    <div className="w-1/3 hidden lg:block">
                        <Image
                            src="/assets/stones/stone2.png"
                            alt="Stone Slab 2"
                            width={1200}
                            height={600}
                            className="w-full h-50 object-contain drop-shadow-2xl"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <div className="text-center md:text-left">
                            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4 text-foreground">
                                <span className="mr-2 text-lg text-primary-foreground">¬</span> OUR TESTIMONIALS
                            </span>
                            <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-primary-foreground">
                                Here&apos;s What warm words our clients say
                                {/* <span className="text-primary "> Testimonials</span> */}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-5xl mx-auto mt-8 md:mt-16">
                    {/* Main Testimonial Display */}
                    <div className="bg-primary/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-primary-foreground/20">
                        <div className="text-center space-y-6">
                            {/* Animated Testimonial Content */}
                            <div className="min-h-[150px] md:min-h-[200px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ type: "spring", duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        {/* Testimonial Text */}
                                        <blockquote className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-primary-foreground max-w-4xl mx-auto">
                                            {testimonials[currentIndex].text}
                                        </blockquote>

                                        {/* Patient Info */}
                                        <div className="space-y-2">
                                            <div className="text-base md:text-lg font-semibold text-primary-foreground">
                                                {/* {testimonials[currentIndex].name}, {testimonials[currentIndex].age} */}
                                                {testimonials[currentIndex].name}
                                            </div>
                                            <div className="text-sm md:text-base text-primary-foreground/70">
                                                {testimonials[currentIndex].location}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>


                    {/* Animated Progress Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {testimonials.map((testimonial, i) => {
                            const isActive = i === currentIndex;
                            return (
                                <motion.button
                                    key={`testimonial-${testimonial.name}-${i}`}
                                    layout
                                    initial={false}
                                    animate={{
                                        width: isActive ? BAR_WIDTH : CIRCLE_SIZE,
                                        height: CIRCLE_SIZE,
                                        borderRadius: isActive ? 8 : 999,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        duration: 0.4,
                                    }}
                                    onClick={() => {
                                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                        setCurrentIndex(i);
                                    }}
                                    className="bg-foreground/20 cursor-pointer relative block overflow-hidden hover:bg-foreground/30"
                                    style={{
                                        minWidth: CIRCLE_SIZE,
                                        maxWidth: BAR_WIDTH,
                                        border: "none",
                                    }}
                                >
                                    {isActive && (
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: DURATION / 1000, ease: "linear" }}
                                            className="bg-primary-foreground absolute top-0 left-0 h-full rounded-lg"
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
