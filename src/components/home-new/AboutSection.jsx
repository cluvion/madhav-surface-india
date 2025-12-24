import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="bg-white py-20 text-black md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                            About Us
                        </span>
                        <h2 className="heading mb-8 text-4xl leading-tight md:text-5xl lg:text-6xl">
                            Marble Supplier & <br />
                            <span className="text-stone-500">Natural Stone Project</span>
                        </h2>
                        <p className="mb-8 text-lg font-light leading-relaxed text-neutral-600">
                            We provide the highest quality marble and stone solutions for your residential and commercial projects. With decades of experience, we source the finest materials from around the world.
                        </p>
                        <ul className="mb-10 space-y-4 text-neutral-700">
                            <li className="flex items-center">
                                <span className="mr-3 flex h-2 w-2 rounded-full bg-[#D4AF37]" />
                                Premium Quality Materials
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 flex h-2 w-2 rounded-full bg-[#D4AF37]" />
                                Expert Craftsmanship
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 flex h-2 w-2 rounded-full bg-[#D4AF37]" />
                                Global Sourcing Network
                            </li>
                        </ul>
                        <div>
                            <Button className="rounded-none bg-black px-8 py-6 text-white hover:bg-neutral-800">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="relative">
                        <div className="relative h-[600px] w-full overflow-hidden bg-neutral-100">
                            {/* Main image placeholder */}
                            <div className="h-full w-full object-cover bg-neutral-200" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-10 -left-10 z-10 bg-white p-8 shadow-2xl md:left-10">
                            <div className="flex items-baseline">
                                <span className="text-6xl font-bold text-[#D4AF37]">25</span>
                                <span className="ml-1 text-4xl font-bold text-[#D4AF37]">+</span>
                            </div>
                            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-black">
                                Years of <br /> Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
