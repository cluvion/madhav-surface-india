import React from "react";

const awards = [
    { year: "2023", title: "Best Natural Stone Supplier", organization: "Global Design Awards" },
    { year: "2022", title: "Excellence in Craftsmanship", organization: "Stone Industry Guild" },
    { year: "2021", title: "Sustainable Quarry Practice", organization: "Eco Build Summit" },
    { year: "2020", title: "Top Luxury Material Brand", organization: "Architecture Digest" }
];

export default function AwardsSection() {
    return (
        <section className="bg-white py-20 text-black md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left Image */}
                    <div className="relative">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                            <div className="h-full w-full bg-neutral-200" />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-black p-6 text-white">
                            <p className="text-xl font-medium">Award Winning <br /> Quality</p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-12">
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-foreground/50">
                            Achievement
                        </span>
                        <h2 className="heading mb-12 text-4xl leading-tight md:text-5xl">
                            Design That Speaks <br />
                            Our Industry Awards
                        </h2>

                        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                            {awards.map((award, index) => (
                                <div key={index} className="group flex items-center justify-between py-6 transition-colors hover:bg-neutral-50">
                                    <div>
                                        <h3 className="mb-1 text-lg font-medium group-hover:text-primary">{award.title}</h3>
                                        <p className="text-sm text-foreground/50">{award.organization}</p>
                                    </div>
                                    <span className="text-sm font-bold text-neutral-400 group-hover:text-black">{award.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
