"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
import ProductCard from "@/components/ui/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { useState } from "react";
import ParagraphSection from '@/components/page/ParagraphSection';
import ApplicationsGridSection from "@/components/page/ApplicationsGridSection";
import CtaSection from '@/components/page/CtaSection';


// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function GraniteCalibratedTilesInIndia() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Tiles" path="Tiles" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> TILE
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                        Granite Calibrated Tiles
                        {/* <span className="text-primary "> </span> */}
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Granite is one of the most durable natural stones, renowned for its hardness, durability, and timeless reflective appearance. Calibrated <a className="text-primary" href="https://www.madhavmarbles.com/manufacturer-of-granite-india/"><strong>granite tiles</strong></a> have become the industry standard, with precise sizing ensured through the calibration process. These tiles deliver a sophisticated, luxurious, and elegant aesthetic for both floors and walls, offering the authentic look of natural granite stone. Perfect for both indoor and outdoor applications, including kitchens, restrooms, living areas, and commercial spaces, calibrated granite tiles are scratch-resistant, highly durable, and built to last, reducing wear and tear. At Madhav Marbles, one of the top marble manufacturers in India, we offer a wide range of calibrated granite tiles in various sizes, designs, and styles to meet your project requirements. Explore our premium collection today and <a className="text-primary" href="https://www.madhavmarbles.com/contact-us/"><strong>find the perfect granite tiles</strong></a> to enhance your space.</p>
                    </div>
                </div>

                {/* Project Carousel Section */}
                <div className="relative mt-8 md:mt-16">
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                        ))}
                    </div>
                </div>
            </Section>
            <CtaSection />
        </div>
    )
}
