import React from "react";

const processes = [
    {
        id: "01",
        title: "Stone Block Processing",
        description: "Stone mining & transport from the mining point to the processing center. Raw blocks are carefully selected.",
        image: "/images/process-1.jpg"
    },
    {
        id: "02",
        title: "Resin Treatment",
        description: "Resin treatment and fill micro-holes & cracks on surface of the marble, making the slab durable and solid for long term use.",
        image: "/images/process-2.jpg"
    },
    {
        id: "03",
        title: "Stone Slab Finishing",
        description: "The slab passes through powerful automated polishing lines to achieve the desired finish.",
        image: "/images/process-3.jpg"
    },
    {
        id: "04",
        title: "Cut Slab To Size",
        description: "The finished slabs are cut into specific dimensions based on customer requirements.",
        image: "/images/process-4.jpg"
    }
];

export default function AboutProcess() {
    return (
        <section className="bg-neutral-50 py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-20 grid lg:grid-cols-2">
                    <div>
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
                            Process
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl lg:text-6xl">
                            The Value Is In The Process <br />
                            For Exceptional.
                        </h2>
                        <p className="mt-6 max-w-lg text-foreground/50">
                            From the moment marble emerges from the earth to when it enters your space,
                            Madhav Surfaces maintains the highest standard of meticulous safety measures.
                            We care about the entire process.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {processes.map((step, index) => (
                        <div key={index} className="group flex flex-col h-full bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                            <div className="mb-4 text-4xl font-light text-neutral-200 group-hover:text-primary">{step.id}</div>
                            <div className="mb-6 h-[200px] w-full overflow-hidden bg-neutral-100">
                                {/* Image Placeholder */}
                                <div className="h-full w-full bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <h3 className="mb-3 text-xl font-medium">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-foreground/50">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
