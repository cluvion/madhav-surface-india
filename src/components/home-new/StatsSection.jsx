import React from "react";

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden bg-black py-32 text-white">
            {/* Background Image/Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {/* Huge Text Background */}
                <h2 className="select-none text-[15vw] font-bold leading-none text-white/10" style={{ fontFamily: 'var(--font-heading)' }}>
                    Marble &
                </h2>
            </div>
            <div className="absolute inset-0 bg-[url('/images/stats-bg.jpg')] bg-fixed bg-cover bg-center opacity-40 mix-blend-overlay" />


            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
                    <div className="border-r border-white/20 last:border-0 md:px-12">
                        <div className="mb-2 text-6xl font-light md:text-7xl">100<span className="text-primary">+</span></div>
                        <p className="text-sm uppercase tracking-widest text-neutral-400">Projects Completed</p>
                    </div>
                    <div className="border-r border-white/20 last:border-0 md:px-12">
                        <div className="mb-2 text-6xl font-light md:text-7xl">230<span className="text-primary">+</span></div>
                        <p className="text-sm uppercase tracking-widest text-neutral-400">Happy Clients</p>
                    </div>
                    <div className="border-r border-white/20 last:border-0 md:px-12">
                        <div className="mb-2 text-6xl font-light md:text-7xl">25<span className="text-primary">+</span></div>
                        <p className="text-sm uppercase tracking-widest text-neutral-400">Industry Awards</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
