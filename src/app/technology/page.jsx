"use client";
import Section from '@/components/section'
import Image from 'next/image';
import PageHeader from '@/components/pageheader'

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function Technology() {

    const images = [
        // {
        //     id: 1,
        //     image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/03.webp",
        // },
        {
            id: 2,
            image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/05%20ok.webp",
        },
        // {
        //     id: 3,
        //     image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/05.webp",
        // },
        // {
        //     id: 4,
        //     image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/05FF.webp",
        // },
        // {
        //     id: 5,
        //     image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/09JJ.webp",
        // },
        // {
        //     id: 6,
        //     image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/11%20HHH%20(3).webp",
        // },
        {
            id: 7,
            image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/11%20HHH%20(5).webp",
        },
        {
            id: 8,
            image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/DJI_0025.webp",
        },
        // {
        //     id: 9,
        //     image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/DJI_0124.webp",
        // },
    ];

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Technology" path="Technology" src="/assets/Step7.png" />

            <Section>
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> GLOBAL OPERATIONS
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground max-w-4xl">
                        Supplying the World with India&apos;s Finest Stone Surfaces
                    </h2>
                    <div className="flex flex-col space-y-6 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed max-w-5xl">
                        <p>
                            From raw geological mastery to refined architectural surfaces, <strong>Madhav Marbles &amp; Granites Ltd.</strong> bridges the gap between India&apos;s rich quarry reserves and top-tier construction projects across the globe.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2"><span className="text-primary text-2xl">🏭</span> High-Capacity, World-Class Manufacturing</h3>
                            <p className="mb-3">Powered by an annual production capacity of <strong>600,000 m²</strong>, our processing plants feature elite Italian machinery engineered for precision cutting and flawless finishes:</p>
                            <ul className="space-y-2 ml-2 md:ml-4">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 text-lg">■</span>
                                    <p className="mt-1"><strong className="text-foreground">Slab Processing:</strong> 6 Gaspari Gangsaws, 2 Breton Polishing Lines, Maema Flaming Technology, and Advanced Resin Lines.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 text-lg">■</span>
                                    <p className="mt-1"><strong className="text-foreground">Tile Processing:</strong> 6 Pedrini Block Cutters, 2 Pedrini Polishing Lines, and Dedicated Resin Systems.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2"><span className="text-primary text-2xl">📍</span> Strategic Proximity to Raw Materials</h3>
                            <p>
                                Location is our greatest advantage. Situated in <strong>Udaipur (Rajasthan)</strong>—in the immediate vicinity of world-famous Green Marble reserves—and <strong>Salem (Tamil Nadu)</strong> for granite, our dual manufacturing hubs give us direct, priority access to high-grade raw blocks.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2"><span className="text-primary text-2xl">🌎</span> World-Class Distribution &amp; Frictionless Logistics</h3>
                            <p className="mb-3">We proudly supply premium stone across major international markets:</p>
                            <ul className="space-y-2 ml-2 md:ml-4">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 text-lg">■</span>
                                    <p className="mt-1"><strong className="text-foreground">North &amp; South America | Canada | Europe | Australia | South Africa | Russia &amp; Beyond.</strong></p>
                                </li>
                            </ul>
                            <p className="mt-6">
                                <strong className="text-foreground">The Madhav Promise:</strong> Our client-first team guarantees proactive communication, zero logistics delays, and seamless execution on every container shipment.
                            </p>
                        </div>
                    </div>
                </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Table 1: Granite Tile Plant */}
                            <div className="bg-white/5 border border-border/50 rounded-2xl p-6 shadow-sm">
                                <div className="border-b border-border/50 pb-4 mb-4">
                                    <h3 className="heading text-2xl text-foreground font-medium flex items-center">
                                        <span className="w-1.5 h-6 bg-primary mr-3 rounded-full"></span>
                                        Our Granite Tile Plant
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-foreground/70 border-b border-border/50 text-sm tracking-wider uppercase">
                                                <th className="py-4 px-2 font-medium">Equipment Type</th>
                                                <th className="py-4 px-2 font-medium">Company</th>
                                                <th className="py-4 px-2 font-medium text-center">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-foreground/90 divide-y divide-border/30">
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">M-590 Block Cutter</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">3</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">M-580 Block Cutter</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">4</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Calibration Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Resining Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Grinding & Polishing Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Tile Resin Plant</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Table 2: Granite Slab Plant */}
                            <div className="bg-white/5 border border-border/50 rounded-2xl p-6 shadow-sm">
                                <div className="border-b border-border/50 pb-4 mb-4">
                                    <h3 className="heading text-2xl text-foreground font-medium flex items-center">
                                        <span className="w-1.5 h-6 bg-primary mr-3 rounded-full"></span>
                                        Our Granite Slab Plant
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-foreground/70 border-b border-border/50 text-sm tracking-wider uppercase">
                                                <th className="py-4 px-2 font-medium">Equipment Type</th>
                                                <th className="py-4 px-2 font-medium">Company</th>
                                                <th className="py-4 px-2 font-medium text-center">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-foreground/90 divide-y divide-border/30">
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Wire Dressing Machines</td>
                                                <td className="py-4 px-2 text-foreground/70">bidese impianti</td>
                                                <td className="py-4 px-2 text-center font-bold">3</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Gangsaws</td>
                                                <td className="py-4 px-2 text-foreground/70">GASPARI MENOTTI</td>
                                                <td className="py-4 px-2 text-center font-bold">6</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Edge Trimming Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Slab Polishing Lines</td>
                                                <td className="py-4 px-2 text-foreground/70">breton</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Resin Line ( Epoxy Line)</td>
                                                <td className="py-4 px-2 text-foreground/70">S.E.I.</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Bridge Milling Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">GMM</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Flaming Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">maema</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Project Carousel Section */}
                <div className="relative mt-8 md:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                        {images.map((image) => (
                            <div key={image.id} className="relative aspect-square w-full">
                                <Image
                                    src={image.image}
                                    alt={`Image ${image.id}`}
                                    fill
                                    className="object-cover grayscale"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                        ))}
                    </div>

                </div>

            </Section>
        </div>
    )
}
