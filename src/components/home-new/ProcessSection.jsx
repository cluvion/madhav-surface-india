import React from "react";
import { Check } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Stone Block Processing",
        description: "Raw blocks are carefully selected and processed to ensure the highest quality extraction."
    },
    {
        id: "02",
        title: "Slab Treatment",
        description: "Advanced treatments are applied to enhance durability and reveal the stone's natural beauty."
    },
    {
        id: "03",
        title: "Stone Slab Polishing",
        description: "State-of-the-art polishing techniques to achieve the perfect finish, from honed to high-gloss."
    },
    {
        id: "04",
        title: "Cut Sized Slabs",
        description: "Precision cutting to your exact specifications, ready for installation in your masterpiece."
    }
];

export default function ProcessSection() {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Left Content */}
                    <div>
                        <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                            Process
                        </span>
                        <h2 className="heading mb-12 text-4xl leading-tight md:text-5xl">
                            The Value Is In The <span className="text-[#D4AF37]">Process</span> <br />
                            For Exceptional.
                        </h2>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-12 w-12 items-center justify-center bg-black text-white font-serif text-xl border border-[#D4AF37]">
                                            {step.id}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-medium text-black">{step.title}</h3>
                                        <p className="text-neutral-500">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100 shadow-2xl">
                            {/* Placeholder for process image */}
                            <div className="h-full w-full bg-neutral-200" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 h-32 w-32 border-2 border-[#D4AF37] opacity-20" />
                        <div className="absolute -top-6 -left-6 h-32 w-32 border-2 border-black opacity-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
