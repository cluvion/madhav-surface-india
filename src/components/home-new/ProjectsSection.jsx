import React from "react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
    return (
        <section className="bg-white py-20 text-foreground md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
                    <div>
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-foreground/50">
                            Unique
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl">
                            Explore Our Selection <br />
                            <span className="text-neutral-400">Our Latest Projects</span>
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-0">
                        <Button variant="outline" className="rounded-none border-black text-foreground hover:bg-foreground hover:text-white">
                            View All Projects
                        </Button>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer">
                            <div className="mb-4 aspect-[4/3] overflow-hidden bg-neutral-100">
                                {/* Placeholder Image */}
                                <div className="h-full w-full bg-neutral-200 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 transition-colors group-hover:border-[#D4AF37]">
                                <div>
                                    <h3 className="text-lg font-medium">Luxury Villa {item}</h3>
                                    <p className="text-sm text-foreground/50">Residential</p>
                                </div>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 opacity-0 transition-all group-hover:opacity-100">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
