import React from "react";

const testimonials = [
    {
        name: "John Doe",
        role: "Architect",
        text: "Extremely helpful team. I ordered the Countertops and wall panels and they were perfect. The delivery was fast and the stone was beautiful."
    },
    {
        name: "Jane Smith",
        role: "Interior Designer",
        text: "The quality of the marble is unmatched. My clients were absolutely thrilled with the transformation of their home."
    },
    {
        name: "Michael Brown",
        role: "Homeowner",
        text: "Professional service from start to finish. They helped me choose the perfect stone for my kitchen island."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-white pb-32">
            {/* Background Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <span className="block text-[20vw] font-bold text-neutral-50" style={{ fontFamily: 'var(--font-heading)' }}>
                    clients
                </span>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                            Testimonials
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl">
                            Here's What Warm Words <br />
                            Our Clients Say
                        </h2>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 shadow-sm">
                            <p className="mb-6 text-neutral-600 italic">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-200">
                                    {/* Avatar Placeholder */}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
