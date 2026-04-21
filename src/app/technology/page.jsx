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
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> GLOBAL OPERATIONS
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-4xl">
                        Supplying the World with India&apos;s Finest Stone Surfaces
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed">
                        <p>
                            We have an annual installed capacity of 6,00,000 square meters consisting of 6 Gaspari Ganagsaws, 2 Breton Polishing lines, Maema Flaming machine and Resin Line for Slabs. 6 Padrini Block Cutters, 2 Pedrini Polishing Lines, Pedrini Resin Line for Tiles.
                        </p>
                        <p>
                            The Marble Division operates from Udaipur (Rajasthan) closest to world famous green marble quarries.
                        </p>
                        <p>
                            The tactical and geographical location of the plants ensure close proximity to the raw materials, Potential to procure good quality raw material has always been one of the prime focus of the company.
                        </p>
                        <p>
                            The company exports its products to North America, South America, Canada, Europe, Australia, South Africa, Russia, and other places.
                        </p>
                        <p>
                            Our team of professionals take client relationship as their top priority which ensures the absence of delays and issues are resolved promptly.
                        </p>
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
                                    className="object-cover"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                        ))}
                    </div>

                </div>

            </Section>
        </div>
    )
}
