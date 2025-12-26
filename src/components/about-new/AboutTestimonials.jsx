import React from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Alex Martin",
        role: "Architectural Designer",
        image: null, // Placeholder
        text: "I recently had the pleasure of working with Madhav Surfaces, and I am extremely satisfied with the design and quality of their stone."
    },
    {
        name: "Ryan Herter",
        role: "Commercial Builder",
        image: null, // Placeholder
        text: "The quality of the marble is high. It makes me feel the elegance in my projects. The support provided during installation was top tier."
    },
    {
        name: "Mike Made",
        role: "Homeowner",
        image: null, // Placeholder
        text: "Their natural stone gave a nice touch to my home. Very professional to work with, highly recommended."
    }
];

export default function AboutTestimonials() {
    return (
        <div className="relative overflow-hidden bg-neutral-50 py-20 md:py-32">
            {/* Giant Watermark Text */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none text-[20vw] font-bold leading-none text-neutral-200/50" style={{ fontFamily: 'var(--font-heading)' }}>
                client
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mb-20 grid lg:grid-cols-2 lg:gap-20">
                    <div className="lg:col-start-2">
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
                            Testimonials
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl lg:text-6xl">
                            Client Feedback And <br />Success Stories
                        </h2>
                        <p className="mt-6 text-neutral-500">
                            Exceptional Service, Unbeatable Quality. <br />
                            Your Trusted Choice!
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-8 shadow-sm">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden bg-neutral-100 rounded-full">
                                    {/* Avatar Placeholder */}
                                    <div className="h-full w-full bg-neutral-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <span className="text-xs uppercase text-neutral-400">{item.role}</span>
                                </div>
                            </div>
                            <p className="mb-6 text-sm leading-relaxed text-neutral-600">"{item.text}"</p>
                            <div className="flex gap-1 text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
