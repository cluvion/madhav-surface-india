"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const SpecialProductSectionData = [
    { id: 1, name: "Dione White", image: "/assets/step5.png", href: "/products/dione-white" },
    { id: 2, name: "Limestone", image: "/assets/step6.png", href: "/products/limestone" },
    { id: 3, name: "Marble Aretusa", image: "/assets/step7.png", href: "/products/marble-aretusa" },
    { id: 4, name: "Quartz", image: "/assets/step5.png", href: "/products/quartz" },
    { id: 5, name: "Dione Spider", image: "/assets/step6.png", href: "/products/dione-spider" },
    { id: 6, name: "Travertine", image: "/assets/step7.png", href: "/products/travertine" },
    { id: 7, name: "Dione Nuvolato", image: "/assets/step5.png", href: "/products/dione-nuvolato" },
    { id: 8, name: "Granite", image: "/assets/step6.png", href: "/products/granite" },
];

export default function SpecialProductSection() {
    const [emblaRef] = useEmblaCarousel({ align: "start", loop: true, dragFree: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

    return (
        <section className="relative my-8 md:my-12 lg:my-14 py-8 md:py-12 lg:py-14 bg-foreground">
            {/* Background Texture Overlay (Optional) */}
            <div className="absolute inset-0 bg-[url('/assets/special-bg.png')] opacity-100 bg-cover bg-center z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

            <div className="space-y-14 md:space-y-24 lg:space-y-36">
                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full">
                    {/* Left Side: Rotating Badge */}
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center bg-white rounded-full">
                            {/* Circle Text SVG */}
                            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text fill="#262525" fontSize="10" fontWeight="bold" letterSpacing="1.8">
                                        <textPath href="#circlePath" startOffset="0%" >
                                            MARBLE & TILES - MARBLE & TILES -
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="w-15 h-15 bg-foreground text-white rounded-full flex items-center justify-center z-10">
                                <ArrowDown className="w-6 h-6" strokeWidth={3} />
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-balance md:text-left md:max-w-5xl flex flex-col justify-center items-start">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4 text-white">
                            <span className="mr-2 text-lg text-primary">¬</span> Choose Your Stone
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-white">
                            Beauty from the Earth a collection of timeless elegance and beauty
                        </h2>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative z-10 w-full mt-8 md:mt-16">
                    <div className="w-full px-0">
                        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                            <div className="flex -ml-4">
                                {SpecialProductSectionData.map((item) => (
                                    <div key={item.id} className="flex-[0_0_50%] md:flex-[0_0_28%] lg:flex-[0_0_18%] min-w-0 pl-4 relative group select-none">
                                        <Link href={item.href} className="block w-full h-full">
                                            <div className="aspect-[1/1] relative overflow-hidden bg-white/5 border border-white/10">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    
                                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                            </div>
                                            <div className="mt-4 text-left border-l-2 border-transparent group-hover:border-[#cda52f] pl-0 group-hover:pl-3 transition-all duration-300">
                                                <h3 className="text-white text-lg font-medium font-sans group-hover:text-[#cda52f] transition-colors">{item.name}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
