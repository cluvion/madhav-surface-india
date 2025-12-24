import React from "react";

const awards = [
    { year: "2023", title: "Best New Building in Germany", category: "Design of The Year" },
    { year: "2022", title: "Best Architectural Firm", category: "Architecture Award" },
    { year: "2021", title: "Excellence in Sustainability", category: "Best Performance Award" },
    { year: "2020", title: "Community Impact Award", category: "Environment and Social" },
    { year: "2019", title: "Unita Best Award", category: "International Award" }
];

export default function AboutAwards() {
    return (
        <section className="bg-white py-20 text-black md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
                    {/* Left Content */}
                    <div className="relative">
                        <div className="aspect-square w-full overflow-hidden bg-neutral-100 lg:max-w-[400px]">
                            <div className="h-full w-full bg-neutral-200" />
                        </div>

                        <div className="mt-8 max-w-sm">
                            <h3 className="mb-4 text-2xl font-bold leading-tight"> Enhance Your Space With Timeless Elegance!</h3>
                            <p className="text-sm leading-relaxed text-neutral-500">
                                We offer quality stone product for the heart of the home and select the best for your life work to enhance your living projects.
                            </p>
                        </div>
                    </div>

                    {/* Right List */}
                    <div className="lg:pt-20">
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-neutral-500">
                            Awards & Recognition
                        </span>
                        <h2 className="heading mb-16 text-4xl leading-tight md:text-5xl">
                            Design That Speaks Our <br />
                            Industry Awards
                        </h2>

                        <div className="border-t border-neutral-200">
                            {awards.map((award, index) => (
                                <div key={index} className="group flex flex-col justify-between border-b border-neutral-200 py-6 transition-all hover:bg-neutral-50 md:flex-row md:items-center">
                                    <span className="mb-2 w-48 text-xs font-bold uppercase tracking-widest text-[#D4AF37] md:mb-0">{award.category}</span>
                                    <span className="flex-1 text-lg font-medium group-hover:text-[#D4AF37]">{award.title}</span>
                                    <span className="mt-2 text-sm font-bold text-neutral-400 group-hover:text-black md:mt-0">{award.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
