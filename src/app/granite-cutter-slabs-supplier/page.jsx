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

export default function GraniteCutterSlabsSupplier() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Granite Cutter Slabs" path="Granite Cutter Slabs" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> GRANITE COLLECTION
                    </span>
                    <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-5xl">
                        Granite Cutter Slabs
                        <span className="text-primary "> Manufacturer and Global Supplier</span>
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Madhav Marbles &amp; Granites is a distinguished manufacturer and supplier of granite cutter slabs in the highly competitive global industry. Our commitment to maintaining superior standards and exceeding the expectations of our discerning clients sets us apart from our competitors. Utilizing state-of-the-art machinery, we meticulously create a unique and refined selection of granite cutter slabs that are suitable for both commercial and residential use. Our granite cutter slabs are characterized by a range of exceptional features, which firmly establish our position as the premier provider of such products in India.</p>
                        <p>Having honed our skills and built a reputation for delivering an exceptional <strong><a className="text-primary" href="https://www.madhavmarbles.com/manufacturer-of-granite-india/">range of granite slabs</a></strong> over the years, Madhav Marbles &amp; Granites has established a formidable presence in the granite cutter slabs market. Our unwavering commitment to quality, prompt delivery, and unparalleled customer satisfaction has set us apart and elevated our offerings. Our exclusive collection of granite cutter slabs is a testament to our expertise, presenting a diverse array of color options and embodying our hallmark of excellence.</p>
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

                <ParagraphSection
                    title="What Distinguishes Our Granite Cutter Slabs From Others?"
                    p1={<>
                        <p>In today’s market, a plethora of brands offer polished and processed granite cutter slabs in both standard and custom sizes, making it understandable to question what sets our offerings apart. The following points highlight the key factors that make our granite slabs one-of-a-kind and demonstrate our unwavering focus on pricing and quality.</p>
                        <p>Our unique selling proposition comprises of:</p>
                    </>}
                    p2={
                        <ul className="space-y-4 list-disc pl-5">
                            <li>
                                <strong className="text-black font-semibold">Thickness Control</strong> – Our granite slabs are available in thicknesses of 2cm and 3cm and are tailored to meet the individual requirements of our valued clients. By leveraging advanced technology, we guarantee meticulous thickness control, ensuring uniformity and consistency from all sides.
                            </li>
                            <li>
                                <strong className="text-black font-semibold">Polishing Coverage</strong> – Our granite slabs are processed utilizing the latest Italian polishing machinery, offering a diverse range of finishes including polished, flamed, honed, flame+brushed, giano, and leather finishes. This results in a consistent and thorough coverage of polishing on each slab resulting in high gloss levels end-to-end polishing coverage for all.
                            </li>
                            <li>
                                <strong className="text-black font-semibold">Food Grade Epoxy Resins</strong> – Our specially formulated epoxy resins boast exceptional adhesion properties, resulting in a long-lasting and low-maintenance installation. Moreover, the food-grade nature of the resins employed in our processes guarantees the safety and well-being of our clients, as they are free from any harmful substances.
                            </li>
                            <li>
                                <strong className="text-black font-semibold">Edges</strong> – Our granite cutter slabs are manufactured to exacting standards, ensuring zero losses due to the high accuracy of measurement in the cutting process. Using state-of-the-art machinery with advanced cutting blades, we are able to produce slabs with precise and uniform edges. Our commitment to precision results in a perfect rectangular end product that is tailored to meet your specific application requirements.
                            </li>
                        </ul>
                    }
                    src="/assets/stones/stone6.png"
                    alt="Stacked Granite Samples"
                />

                <ApplicationsGridSection
                    title="Utilization of Tailored Granite Cutter Slabs for Diverse Applications"
                    items={[
                        { iconName: "steps", label: "Steps and Riser" },
                        { iconName: "kitchen", label: "Kitchen Countertops" },
                        { iconName: "window", label: "Window Sills" },
                        { iconName: "table", label: "Small Table" },
                        { iconName: "coffee", label: "Tea and Coffee Tables" },
                        { iconName: "shelves", label: "Kitchen Shelves" },
                    ]}
                />
                <div className="mt-8 md:mt-16 space-y-6 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Get Superior Quality and Tailored Granite Cutter Slabs from Premier Granite Provider - Madhav Marbles
                    </h2>
                    <div className="text-foreground/70 text-base md:text-lg leading-relaxed space-y-4 text-justify">
                        <p>
                            To summarize, our philosophy of “<strong>Quality over Quantity</strong>” drives us to maintain the highest standards, even in the presence of substantial orders. This fortifies our pledge to deliver superior quality, cost-competitive pricing, and unparalleled customer service. Our state-of-the-art Italian polishing facility and a team of expert technicians ensure that every piece of granite produced exceeds the high standards and elevated expectations of our valued customers. For further information regarding our extensive range of granite slab solutions, please do not hesitate to <a href="/contact-us" className="text-primary"><strong>reach out to us</strong></a>.
                        </p>
                    </div>
                </div>
            </Section>
            <CtaSection />
        </div>
    )
}
