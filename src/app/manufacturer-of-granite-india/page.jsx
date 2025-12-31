"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
import { useState } from "react";
import ParagraphSection from '@/components/page/ParagraphSection';
import TableSection from '@/components/page/TableSection';
import CtaSection from '@/components/page/CtaSection';
import { mockProducts } from '@/data/mockProducts';
import ProductCard from "@/components/ui/ProductCard";


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
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Granite Slabs" path="Granite Slabs" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> MANUFACTURING EXCELLENCE
                    </span>
                    <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-4xl">
                        Best Granite
                        <span className="text-primary "> Supplier and Manufacturer</span>
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p><strong>Granite</strong> is undoubtedly the premier choice of builders and designers across nations. It is used extensively because of its beauty, toughness, and durability. With India offering over 120 available granite colors, the versatility is unmatched. <strong><a className="text-primary" href="https://www.madhavmarbles.com/">Madhav Marbles and Granites</a></strong> Ltd. is a leading granite supplier with a range of quality granite collections that stays alive over the years. We are one of the best suppliers of granite in India, and pride ourselves for providing outstanding <a className="text-primary" href="https://www.madhavmarbles.com/granite-calibrated-tiles-in-india/"><strong>Calibrated Granite Tiles</strong></a>, <a className="text-primary" href="https://www.madhavmarbles.com/granite-xl-tiles/"><strong>Granite XL Tiles</strong></a>, and other natural stones. </p>
                    </div>
                </div>

                {/* Project Carousel Section */}
                <div className="relative mt-8 md:mt-16">
                    <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
                        {mockProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                        ))}
                    </div>
                </div>
                <ParagraphSection
                    title="Madhav Marbles and Granites - Leading Granite Supplier in India"
                    p1={<>Our natural stone processing unit for granite operates in Salem, Tamil Nadu, famous for ample reserves of metamorphosed <strong>granite stone</strong>. Being the leading granite supplier in USA, we try to be nowhere harsh on the environment, as evidenced by our environment-friendly granite machinery imported directly from Italy. We also supply calibrated granite tiles extensively used to design commercial and residential areas.</>}
                    p2={<>We offer a range of granite tiles from black to white and from gold to pink. Moreover, we are a leading <strong><a className="text-primary" href="https://www.madhavmarbles.com/madhav-marbles-top-supplier-of-south-indian-granite/">South Indian Granite supplier in USA</a></strong>, and majorly supply premium granite to countries of Germany, Poland, Slovenia, Slovakia, Austria, along with other parts of the world. These granites are unique and famous for their strength and attractive colors. Popular color choices of South Indian granite include Tan Brown Granite, Coffee Brown Granite, River White Granite, and Paradiso Bash Granite.</>}
                    p3={<>Established in 1989, Madhav Marbles and Granites Ltd. is a prominent granite manufacturer in India and exporter, boasting more than three decades of industry experience. Our spirit of innovation sets us apart, and our commitment to unmatched quality and excellence has helped us build a substantial global presence. Our <strong>granite slabs</strong> and tiles are extensively exported to North America, South America, Canada, Russia, Europe, South Africa, Australia, and the Far East.</>}
                    src="/assets/stones/stone6.png"
                    alt="Stacked Granite Samples"
                />
                <TableSection
                    footerTitle="Get the Finest Quality Granite From Top Granite Supplier"
                    footerDescription={
                        <p>
                            Madhav Marbles offers expertise for all your granite needs, whether it’s for construction, design, or renovation projects. Our granite products, regarded as the <a className="text-primary" href="https://www.madhavmarbles.com/"><strong>Best Granite in India</strong></a>, are available in various forms, including slabs and tiles, in multiple sizes, suitable for backsplashes, wall cladding, and granite flooring. With exceptional qualities such as toughness, durability, resistance to heat and cold, and stain resistance, granite is ideal for any project. Madhav Marble prioritizes clients by keeping customer relationships healthy to avoid delays and resolve issues immediately.
                        </p>
                    }
                />
            </Section>
            <CtaSection />
        </div >
    )
}
