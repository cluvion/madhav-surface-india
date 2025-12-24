import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: "01",
        title: "Custom Cut Projects",
        description: "Precision cutting for bespoke designs tailored to your specific architectural needs."
    },
    {
        icon: "02",
        title: "Marble Flooring",
        description: "Elegant and durable flooring solutions that transform spaces into masterpieces."
    },
    {
        icon: "03",
        title: "Wall Cladding",
        description: "Premium stone cladding to add texture and sophistication to any interior or exterior."
    },
    {
        icon: "04",
        title: "Kitchen Countertops",
        description: "Functional art pieces for your kitchen, combining durability with stunning aesthetics."
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-neutral-50 py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
                    <div>
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                            Our Services
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl">
                            Providing The Best <br />
                            Marble Services
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <button className="flex items-center gap-2 border-b border-black pb-1 text-sm font-medium uppercase tracking-wider hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
                            View All Services <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative border border-neutral-200 bg-white p-8 transition-all hover:border-[#D4AF37] hover:shadow-lg"
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <span className="text-4xl font-light text-neutral-300 group-hover:text-[#D4AF37]">
                                    {service.icon}
                                </span>
                                <ArrowUpRight className="h-6 w-6 text-neutral-300 transition-colors group-hover:text-[#D4AF37]" />
                            </div>
                            <div className="mb-4 h-[200px] w-full overflow-hidden bg-neutral-100">
                                {/* Image placeholder */}
                                <div className="h-full w-full bg-neutral-200 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-neutral-500">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
