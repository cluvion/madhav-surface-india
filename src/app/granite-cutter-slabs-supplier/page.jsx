"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
// import ProductCard from "@/components/ui/ProductCard";
// import { products } from "@/constants/index";
import { collectionTiles } from "@/constants/collectionTiles";
// import { useState } from "react";
import Image from "next/image";
import ParagraphSection from '@/components/page/ParagraphSection';
import ApplicationsGridSection from "@/components/page/ApplicationsGridSection";
// import ScrollStack from '@/components/ui/scroll-stack';
import CtaSection from '@/components/page/CtaSection';

// const pageProducts = collectionTiles['granite-cutter-slabs-supplier'];

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function GraniteCutterSlabsSupplier() {
    // const [selectedProduct, setSelectedProduct] = useState(null);
    const collectionProducts = collectionTiles['granite-cutter-slabs-supplier'] || [];

    return (
        <div className="min-h-screen ">

            <PageHeader title="Granite Cutter Slabs" path="Granite Cutter Slabs" src="/assets/Step7.png" />

            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6 text-center md:text-left">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="mr-2 text-lg text-primary">¬</span> GRANITE COLLECTION
                </span>
                <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                    Granite Cutter Slabs Manufacturer and Global Supplier
                </h2>
                <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                    <p>Madhav Marbles &amp; Granites is a distinguished manufacturer and supplier of granite cutter slabs in the highly competitive global industry. Our commitment to maintaining superior standards and exceeding the expectations of our discerning clients sets us apart from our competitors. Utilizing state-of-the-art machinery, we meticulously create a unique and refined selection of granite cutter slabs that are suitable for both commercial and residential use. Our granite cutter slabs are characterized by a range of exceptional features, which firmly establish our position as the premier provider of such products in India.</p>
                    <p>Having honed our skills and built a reputation for delivering an exceptional <strong><a className="text-primary" href="https://www.madhavmarbles.com/manufacturer-of-granite-india/">range of granite slabs</a></strong> over the years, Madhav Marbles &amp; Granites has established a formidable presence in the granite cutter slabs market. Our unwavering commitment to quality, prompt delivery, and unparalleled customer satisfaction has set us apart and elevated our offerings. Our exclusive collection of granite cutter slabs is a testament to our expertise, presenting a diverse array of color options and embodying our hallmark of excellence.</p>
                </div>
            </div>

            {/* <ScrollStack products={pageProducts} /> */}

            <Section>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {collectionProducts.map((product) => (
                        <div key={product.id} className="flex flex-col items-center group pb-4 border-b border-transparent hover:border-primary transition-colors">
                            <div className="relative w-full aspect-[16/9] mb-4 bg-white overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-102"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-foreground text-center transition-colors">
                                {product.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <ParagraphSection
                    title="What Makes Our Granite Cutter Slabs Superior?"
                    p1={<>
                        <p className="text-foreground font-bold uppercase tracking-widest text-xs mb-2">THE MADHAV MARBLES EDGE</p>
                        <p>With countless suppliers offering granite slabs in today’s market, why do leading global architects, fabricators, and builders choose <strong className="text-foreground">Madhav Marbles & Granites</strong>?</p>
                        <p>The answer lies in our relentless commitment to precision engineering, safety, and zero-waste quality standards. Here is what sets our granite cutter slabs apart:</p>
                    </>}
                    p2={
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-foreground font-semibold text-lg flex items-center gap-2">📏 Millimeter-Precision Thickness Control</strong>
                                <p className="mt-1 pl-7 text-foreground/80"><strong className="text-foreground">Uniformity Guaranteed:</strong> Available in 2cm and 3cm thicknesses (or custom specifications), our slabs undergo advanced automated thickness calibration. You get perfectly uniform thickness from edge to edge with zero warping or taper.</p>
                            </li>
                            <li>
                                <strong className="text-foreground font-semibold text-lg flex items-center gap-2">✨ Italian Surface Finishes & High-Gloss Polish</strong>
                                <p className="mt-1 pl-7 text-foreground/80"><strong className="text-foreground">Flawless End-to-End Shine:</strong> Processed on state-of-the-art Italian polishing lines, our slabs achieve industry-leading gloss levels and consistent coverage.</p>
                                <p className="mt-1 pl-7 text-foreground/80"><strong className="text-foreground">Versatile Textures:</strong> Choose from Polished, Flamed, Honed, Flame + Brushed, Giano, and Leather finishes to match any architectural aesthetic.</p>
                            </li>
                            <li>
                                <strong className="text-foreground font-semibold text-lg flex items-center gap-2">🛡️ 100% Non-Toxic, Food-Grade Epoxy Resins</strong>
                                <p className="mt-1 pl-7 text-foreground/80"><strong className="text-foreground">Safe for Kitchens & Living Spaces:</strong> We treat our slabs with specially formulated, non-toxic, food-grade epoxy resins. This deep-penetrating resin enhances structural integrity, prevents staining, and ensures a safe, hygienic surface for food preparation areas.</p>
                            </li>
                            <li>
                                <strong className="text-foreground font-semibold text-lg flex items-center gap-2">📐 True 90° Precision Edges (Zero Material Loss)</strong>
                                <p className="mt-1 pl-7 text-foreground/80"><strong className="text-foreground">Maximized Usable Area:</strong> Powered by high-accuracy Italian cutting blades, our cutter slabs feature crisp, exact rectangular geometry and uniform edges—eliminating costly edge trim-offs and maximizing yield for fabricators.</p>
                            </li>
                        </ul>
                    }
                    src="/images/Stone7.png"
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
                    <h2 className="heading font-thin text-2xl md:text-4xl mb-6">
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
