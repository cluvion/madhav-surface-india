import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutIntro() {
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
                        <div className="mb-8 flex items-start gap-4">
                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100">
                                {/* Small inset image placeholder */}
                                <div className="h-full w-full bg-neutral-200" />
                            </div>
                            <p className="text-lg font-light leading-relaxed text-neutral-600">
                                Since 1999, Madhav Surfaces has been a pioneer in delivering exceptional stone solutions. Our journey started with a vision to bring nature's finest art to your doorstep.
                            </p>
                        </div>

                        <ul className="mb-10 space-y-4 text-neutral-700">
                            <li className="flex items-center">
                                <span className="mr-3 text-primary">›</span>
                                High Quality Stone From Natural Mines
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-primary">›</span>
                                Durability Against Water And Fire
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-primary">›</span>
                                High Resistance Against Scratch
                            </li>
                        </ul>
                        <div>
                            <Button className="rounded-none bg-black px-8 py-6 text-white hover:bg-neutral-800">
                                Who We Are <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mt-12 h-[300px] w-full overflow-hidden bg-neutral-100">
                                <div className="h-full w-full bg-neutral-200" />
                            </div>
                            <div className="h-[300px] w-full overflow-hidden bg-neutral-100">
                                <div className="h-full w-full bg-neutral-200" />
                            </div>
                            <div className="col-span-2 h-[200px] w-full overflow-hidden bg-neutral-100">
                                <div className="h-full w-full bg-neutral-200" />
                            </div>
                        </div>

                        {/* Centered Floating Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center rounded-full bg-white p-10 shadow-2xl">
                            <span className="text-5xl font-bold text-primary">25+</span>
                            <span className="text-xs uppercase tracking-widest text-black">Years Of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
