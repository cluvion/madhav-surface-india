"use client"
import React from "react";
import Image from "next/image";

export default function ParagraphSection({ title, p1, p2, p3, src, alt }) {
    return (
        <section className="mt-8 md:mt-16">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
                {/* Left Content */}
                <div className="w-full lg:w-3/5 space-y-6 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            {title}
                        </h2>
                        <div className="space-y-4 text-justify text-foreground/50 text-sm md:text-base leading-relaxed ">
                            {p1 && <div>{p1}</div>}
                            {p2 && <div>{p2}</div>}
                            {p3 && <div>{p3}</div>}
                        </div>
                    </div>
                </div>

                {/* Right Visuals */}
                <div className="w-full lg:w-2/5">
                    <div className="relative w-full">
                        {/* Placeholder for stacked stones image */}
                        <Image
                            src={src}
                            alt={alt}
                            width={1000}
                            height={1000}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
