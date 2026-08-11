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
        title: "36+ YEARS OF UNMATCHED HERITAGE",
        subtitle: "Legacy of Excellence",
        description:
            "Over three decades of expertise in selecting raw blocks, precision cutting, and hand-finishing high-grade natural stone.",
        image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/home-webp/IMG_6682.webp",
    },
    {
        number: 2,
        icon: Factory,
        title: "ADVANCED ITALIAN MACHINERY",
        subtitle: "Precision Technology",
        description:
            "Equipped with eco-friendly gang saws and polishing lines imported directly from Italy for razor-sharp dimensional accuracy and pristine surface gloss.",
        image: "/assets/Step6.png",
    },
    {
        number: 3,
        icon: Globe2,
        title: "WORLDWIDE EXPORT FOOTPRINT",
        subtitle: "Global Reliability",
        description:
            "Seamless supply chain management delivering container loads across North & South America, Europe, Africa, and the Asia-Pacific.",
        image: "/assets/Step4.png",
    },
    {
        number: 4,
        icon: ShieldCheck,
        title: "STRINGENT QUALITY ASSURANCE",
        subtitle: "Unmatched Quality",
        description:
            "Every slab undergoes strict multi-point inspections for density, stain resistance, structural integrity, and color uniformity.",
        image: "/assets/Step7.png",
    },
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
                            <span className="mr-2 text-lg text-primary">¬</span> THE MADHAV ADVANTAGE
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground">
                            Unmatched Quality. Precision Technology. Global Reliability.
                        </h2>
                        <p className="mt-4 text-lg text-foreground/50">
                            Why leading architects, interior designers, and commercial builders choose Madhav Surfaces:
                        </p>
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
