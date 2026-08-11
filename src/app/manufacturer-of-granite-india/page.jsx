"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
import { useState } from "react";
import ParagraphSection from '@/components/page/ParagraphSection';
import TableSection from '@/components/page/TableSection';
import CtaSection from '@/components/page/CtaSection';
import { collectionTiles } from "@/constants/collectionTiles";
import ProductCard from "@/components/ui/ProductCard";
import ScrollStack from '@/components/ui/scroll-stack';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuickViewModal from "@/components/ui/QuickViewModal";

const pageProducts = collectionTiles['granite-slabs'];

// Specific products to display in the ScrollStack section
const scrollStackNames = [
    'Vizag Blue',
    'River White New',
    'Astoria',
    'Colonial White',
    'Viscount Waves',
    'Steel Grey',
    'Sapphire Blue',
    'New Multi Colour',
    'Multi Color',
    'Black Galaxy'
];
const scrollStackProducts = scrollStackNames
    .map(name => pageProducts.find(p => p.name.toLowerCase() === name.toLowerCase()))
    .filter(Boolean);


// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });


export default function ManufacturerOfGraniteIndia() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="min-h-screen">

            <PageHeader title="Granite Slabs" path="Granite Slabs" src="/assets/Step7.png" />
            {/* Top Text Section */}
            {/* <div className="flex justify-between gap-24 items-center py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> MANUFACTURING EXCELLENCE
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-4xl">
                        Best Granite Supplier and Manufacturer
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p><strong>Granite</strong> is undoubtedly the premier choice of builders and designers across nations. It is used extensively because of its beauty, toughness, and durability. With India offering over 120 available granite colors, the versatility is unmatched. <strong><a className="text-primary" href="https://www.madhavmarbles.com/">Madhav Marbles and Granites</a></strong> Ltd. is a leading granite supplier with a range of quality granite collections that stays alive over the years. We are one of the best suppliers of granite in India, and pride ourselves for providing outstanding <a className="text-primary" href="https://www.madhavmarbles.com/granite-calibrated-tiles-in-india/"><strong>Calibrated Granite Tiles</strong></a>, <a className="text-primary" href="https://www.madhavmarbles.com/granite-xl-tiles/"><strong>Granite XL Tiles</strong></a>, and other natural stones. </p>
                    </div>
                </div>
                <div className="hidden md:block aspect-video">
                    <img
                        src="/assets/Step7.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div> */}
            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6 text-center md:text-left">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="mr-2 text-lg text-primary">¬</span> MADHAV MARBLES &amp; GRANITES
                </span>
                <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground max-w-5xl">
                    India&apos;s Premier Manufacturer &amp; Global Exporter of South Indian Granite
                </h2>
                <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify max-w-5xl">
                    <p>Operating from the rich geological heartland of <strong>Salem, Tamil Nadu, Madhav Marbles &amp; Granites Ltd.</strong> has been setting the international gold standard for premium natural stone since <strong>1989</strong>. As a leading granite supplier to the <strong>USA, Europe, and over 40 countries worldwide</strong>, we transform earth&apos;s finest raw stone into breathtaking architectural surfaces.</p>
                </div>
            </div>

            {/* ScrollStack Section */}
            <ScrollStack products={scrollStackProducts} zoom="scale-[1.1]" />

            <Section>
                {/* Project Carousel Section */}
                {/* <div className="relative mt-8 md:mt-16"> */}
                <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
                    {pageProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                    ))}
                </div>
                <ParagraphSection
                    title="🍃 Sustainable Innovation & Italian Engineering"
                    p1={<>
                        <p className="mb-4">Luxury doesn&apos;t have to come at the environment&apos;s expense. Our Salem facility features state-of-the-art, eco-friendly processing machinery imported directly from Italy—enabling us to produce precision-cut slabs and calibrated granite tiles with minimal environmental impact.</p>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8 flex flex-col md:flex-row md:items-center gap-2 text-foreground">
                            <span className="text-primary text-2xl hidden md:inline">🎨</span> A Spectrum of Colors &amp; Timeless Durability
                        </h3>
                        <p className="mb-4">From high-traffic commercial flooring to bespoke residential interiors, our South Indian granite collection is globally celebrated for its extreme structural strength and vibrant, natural pigmentation:</p>
                        <ul className="space-y-4 text-left ml-2 md:ml-4">
                            <li className="flex items-start">
                                <span className="text-primary mr-3 text-lg">■</span>
                                <p className="mt-1"><strong className="text-foreground">Signature South Indian Shades:</strong> Tan Brown, Coffee Brown, River White, and Paradiso Bash.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3 text-lg">■</span>
                                <p className="mt-1"><strong className="text-foreground">Full Color Palette:</strong> Classic Blacks, Pristine Whites, Radiant Golds, Soft Pinks, and Exotic Veined Patterns.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3 text-lg">■</span>
                                <p className="mt-1"><strong className="text-foreground">Product Formats:</strong> Engineered Jumbo Slabs, Cutter Slabs, and High-Precision Calibrated Tiles.</p>
                            </li>
                        </ul>
                    </>}
                    p2={<>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8 flex flex-col md:flex-row md:items-center gap-2 text-foreground">
                            <span className="text-primary text-2xl hidden md:inline">🌐</span> Worldwide Reach, Trusted Reliability
                        </h3>
                        <p>Driven by three decades of continuous innovation, Madhav Surfaces proudly powers landmark projects across North &amp; South America, Canada, Germany, Poland, Slovenia, Slovakia, Austria, Russia, South Africa, Australia, and the Far East.</p>
                    </>}
                    src="/assets/stones/stone6.png"
                    alt="Stacked Granite Samples"
                />
                <TableSection
                    footerTitle="Get the Finest Quality Granite From Top Granite Supplier"
                    footerDescription={
                        <p>
                            Madhav Marbles offers expertise for all your granite needs, whether it&apos;s for construction, design, or renovation projects. Our granite products, regarded as the <a className="text-primary" href="https://www.madhavmarbles.com/"><strong>Best Granite in India</strong></a>, are available in various forms, including slabs and tiles, in multiple sizes, suitable for backsplashes, wall cladding, and granite flooring. With exceptional qualities such as toughness, durability, resistance to heat and cold, and stain resistance, granite is ideal for any project. Madhav Marble prioritizes clients by keeping customer relationships healthy to avoid delays and resolve issues immediately.
                        </p>
                    }
                />
            </Section>
            <CtaSection />
            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div >
    )
}
