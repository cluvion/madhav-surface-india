import React from "react";

export default function MassiveStats() {
    return (
        <div className="relative">
            {/* Parallax Background Section */}
            <section className="relative overflow-hidden bg-neutral-900 py-32 text-white">
                <div className="absolute inset-0 bg-[url('/images/about-stats-bg.jpg')] bg-fixed bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Massive Text */}
                    <h2 className="select-none text-[15vw] font-bold leading-none text-white/20" style={{ fontFamily: 'var(--font-heading)' }}>
                        Marble & <br /> Tiles
                    </h2>
                </div>
            </section>

            {/* Stats Bar */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <div className="mb-2 text-5xl font-bold md:text-6xl">100<span className="text-sm align-top">+</span></div>
                            <p className="max-w-[150px] text-xs font-semibold uppercase tracking-widest text-foreground/50">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center border-l border-r border-neutral-200">
                            <div className="mb-2 text-5xl font-bold md:text-6xl">230<span className="text-sm align-top">+</span></div>
                            <p className="max-w-[150px] text-xs font-semibold uppercase tracking-widest text-foreground/50">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-2 text-5xl font-bold md:text-6xl">25<span className="text-sm align-top">+</span></div>
                            <p className="max-w-[150px] text-xs font-semibold uppercase tracking-widest text-foreground/50">Years Of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
