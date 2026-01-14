"use client"
import React from "react";
import Section from "@/components/section";
import {
    Award,
    Globe2,
    Users2,
    Factory,
    ShieldCheck,
    Gem,
} from "lucide-react";
import { Process } from "@/components/Process";
import Image from "next/image";
import { motion } from "motion/react";

const points = [
    {
        number: 1,
        icon: Award,
        title: "35 YEARS OF EXPERIENCE",
        subtitle: "Legacy of Excellence",
        description:
            "With over three decades of mastery in the stone industry, Madhav Surfaces has built an enduring reputation for quality, reliability, and craftsmanship.",
        image: "/assets/Step5.png",
    },
    {
        number: 2,
        icon: Users2,
        title: "MOST SATISFIED CLIENTELE",
        subtitle: "Trusted by Architects & Builders",
        description:
            "We’ve earned the confidence of leading architects, designers, and construction firms through our commitment to precision, innovation, and customer satisfaction.",
        image: "/assets/Step6.png",
    },
    {
        number: 3,
        icon: Globe2,
        title: "GLOBAL EXPORTS IN 40+ COUNTRIES",
        subtitle: "Proudly Representing Indian Craftsmanship",
        description:
            "From India to the world, our premium marble and granite are exported across 40+ countries, bringing natural beauty to luxury spaces globally.",
        image: "/assets/Step4.png",
    },
    {
        number: 5,
        icon: ShieldCheck,
        title: "QUALITY YOU CAN TRUST",
        subtitle: "Certified, Tested, and Reliable",
        description:
            "Every slab passes rigorous quality checks for durability, color consistency, and finish to ensure only the finest products reach our clients.",
        image: "/assets/Step7.png",
    },
    // {
    //     number: 4,
    //     icon: Factory,
    //     title: "STATE-OF-THE-ART FACILITIES",
    //     subtitle: "Technology Meets Craftsmanship",
    //     description:
    //         "Our advanced manufacturing units are equipped with modern Italian machinery ensuring precision cutting, flawless polishing, and sustainable processing.",
    //     image: "/assets/Step_4.png",
    // },
    // {
    //     number: 6,
    //     icon: Gem,
    //     title: "DIVERSE COLLECTIONS",
    //     subtitle: "Nature’s Best, Curated for You",
    //     description:
    //         "From elegant marbles to robust granites and quartz surfaces, we offer a curated portfolio tailored for every design and architectural vision.",
    //     image: "/assets/Step_6.png",
    // },
];

export default function ProcessSection() {
    return (
        <Section>
            <div className="flex items-center justify-around">
                {/* Header Section */}
                {/* <div className="absolute -bottom-20 -right-10 w-2/3 md:w-1/2 lg:w-[60%] z-20">
                        <img
                            src="/assets/stones/stone1.png"
                            alt="Stone Slab 1"
                            className="w-full h-auto object-contain drop-shadow-xl transform rotate-[-10deg] translate-y-10"
                        />
                    </div> */}
                <motion.div
                    className="w-1/3 hidden lg:block"
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/assets/stones/stone1.png"
                        alt="Stone Slab 2"
                        width={1000}
                        height={600}
                        className="w-full h-64 object-contain drop-shadow-2xl"
                    />
                </motion.div>
                <div className="w-full lg:w-2/3">
                    <div className="text-center lg:text-balance md:text-left">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="mr-2 text-lg text-primary">¬</span> OUR ABOUT US
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground">
                            What Makes Us The Best Marble and Granite Suppliers?
                            {/* <span className="text-primary "> Marble and Granite Suppliers?</span> */}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="relative mt-8 md:mt-16">
                <Process
                    steps={points}
                    autoPlayInterval={4000}
                // imageHeight="h-[500px]"
                />
            </div>
        </Section>
    );
}
