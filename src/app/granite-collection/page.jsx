"use client";
import Section from '@/components/section'
import TableSection from "@/components/page/TableSection";
import PageHeader from '@/components/pageheader'
import ProductCard from "@/components/ui/ProductCard";
import { collectionTiles } from "@/constants/collectionTiles";
import { useState } from "react";
import Image from "next/image";
import CtaSection from "@/components/page/CtaSection";
import ParagraphSection from '@/components/page/ParagraphSection';
import ScrollStack from '@/components/ui/scroll-stack';
import QuickViewModal from '@/components/ui/QuickViewModal';

export default function GraniteCollection() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const collectionProducts = collectionTiles['granite'] || [];

    return (
        <div className="min-h-screen">

            <PageHeader title="Granite Collection" path="Granite" src="/assets/Step7.png" />

            <div className="pt-16 md:pt-24 pb-8 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
                    <div>
                        <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                            PREMIUM GRANITE COLLECTION
                        </span>
                        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                            Premium Granite Stone Supplier &amp; Exporter – Madhav Marble.
                        </h2>
                        <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                            <p>
                                Madhav and Granite Ltd is one of India&apos;s premier granite manufacturers &amp; suppliers. We offer a comprehensive range of granite in a multitude of colors, textures, and patterns, meticulously crafted with precision and exceptional quality. From classic blacks and whites to exotic blues and golds, we are the leading granite suppliers in India, exporting extensively to the USA, Europe, and worldwide.
                            </p>
                            <p>
                                Our extensive assortment of granite comes in various forms and finishes, processed at our state-of-the-art manufacturing facility. We have established a strong reputation in the industry as the top choice for granite manufacturing and supply. Whether it&apos;s large-scale commercial projects or individual residential requirements, we cater to every client&apos;s unique style and preferences.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f8f7f2] p-8 md:p-12 shadow-sm border border-border/30 rounded-lg">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8">
                            WHY GLOBAL ARCHITECTS &amp; DESIGNERS CHOOSE MADHAV MARBLE
                        </h3>
                        <ul className="space-y-6 text-foreground/80 text-sm md:text-base">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                <p className="leading-relaxed"><strong className="text-foreground block mb-1">Wide Range of Granites:</strong> A diverse collection of premium granites in numerous colors, textures, and patterns to suit a wide variety of architectural and design requirements.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                <p className="leading-relaxed"><strong className="text-foreground block mb-1">Outstanding Quality &amp; Performance:</strong> Our granites are known for their strength, durability, and timeless beauty—ideal for both interior and exterior applications in any environment.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                <p className="leading-relaxed"><strong className="text-foreground block mb-1">Global Reach, Trusted Expertise:</strong> A trusted supplier to clients across the USA, Europe, and beyond, backed by advanced processing, consistent quality, and reliable global logistics.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 max-w-4xl mb-8">
                    <h3 className="text-3xl md:text-4xl font-medium leading-[1.2] text-foreground mb-6" style={{ fontFamily: "serif" }}>
                        Exclusive Granite Collection From India&apos;s Leading Granite Suppliers
                    </h3>
                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                        With decades of experience in the natural stone industry, our global clientele trusts us for the finest quality granite solutions. Following are some of our popular granite varieties processed at our state-of-the-art manufacturing unit:
                    </p>
                </div>
            </div>

            <ScrollStack products={collectionProducts.slice(0, 4)} zoom="scale-[1.5] object-bottom" />

            <Section>
                {/* Product Grid Section */}
                <div className="relative mt-8 md:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {collectionProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} imageClassName="object-cover object-bottom scale-[1.5] transition-transform duration-500 group-hover:scale-[1.6]" />
                        ))}
                    </div>
                </div>

                <div className="mt-8 md:mt-16 text-center md:text-left space-y-4">
                    <h2 className="heading font-thin text-xl md:text-4xl text-foreground">
                        Madhav Marble – India&apos;s Top-Notch Wholesale Granite Supplier
                    </h2>
                    <div className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Indian granites are among the finest natural stones, renowned worldwide for their exceptional durability and timeless beauty. Granite from Madhav Marble is available in various finishes and not only enhances the beauty of space but also provides a luxurious &amp; lasting appeal to your interiors and exteriors. They are known for their mesmerizing appearance and excellent durability. Our stones are exclusively crafted to provide you with the best piece to embellish your space.</p>
                    </div>
                </div>

                <TableSection
                    title="Madhav Granite Available in Following"
                    colors="Black, White, Blue, Brown, Gold, Grey, Green, Red"
                    forms="Slabs, Cutter Slabs"
                    finishes="Polished, Flamed, Honed, Flamed+Brushed, Giano, Leather"
                    slabThickness="2cm – 3cm"
                    tiles={[]}
                    xlTiles=""
                    applications=""
                />

                <div className="mt-8 md:mt-16 text-center md:text-left">
                    <h2 className="heading font-thin text-xl md:text-4xl text-foreground mb-4">
                        Application Areas of Granite
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-8 text-justify">
                        Granites from Madhav Marble and Granite are used for numerous applications like structural and decorative purposes and are available in various sizes in the form of slabs. The areas of application include:
                    </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                                <div className="relative w-full aspect-square">
                                                    <Image src="/images/kitchen-countertops.png" alt="Kitchen Countertops" fill className="object-cover rounded-md" />
                                                </div>
                                                <div className="div space-y-1">
                                                    <h3 className="text-2xl font-bold text-foreground">Kitchen Countertops</h3>
                                                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                                        Marble countertops come in a variety of colors, patterns &amp; veins ranging from white to brown and add a distinct character to your space. Also, the longevity and the sense of additional value make marble the best choice for countertops. Get them today from the leading marble supplier – Madhav Marble.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                                <div className="relative w-full aspect-square">
                                                    <Image src="/images/flooring.png" alt="Flooring" fill className="object-cover rounded-md" />
                                                </div>
                                                <div className="div space-y-1">
                                                    <h3 className="text-2xl font-bold text-foreground">Flooring</h3>
                                                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                                        None of us can deny the natural &amp; elegant appeal of marble flooring. From light-colored floors to dark-colored floor options, Madhav Marble has got everything of the best quality.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                                <div className="relative w-full aspect-square">
                                                    <Image src="/images/wall-cladding.png" alt="Wall Cladding" fill className="object-cover rounded-md" />
                                                </div>
                                                <div className="div space-y-1">
                                                    <h3 className="text-2xl font-bold text-foreground">Wall Cladding</h3>
                                                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                                        Apart from its distinguished appearance, it is highly durable making marble as a wall cladding an excellent choice.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                                <div className="relative w-full aspect-square">
                                                    <Image src="/assets/Step4.png" alt="Vanity Tops" fill className="object-cover rounded-md" />
                                                </div>
                                                <div className="div space-y-1">
                                                    <h3 className="text-2xl font-bold text-foreground">Vanity Tops</h3>
                                                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                                        Marble is a fairly popular material for vanity tops in residential apartments as well as in commercial projects. With a variety of shades available &amp; dynamic surface patterns in the form of waves, flecks &amp; streaks, the stone of Madhav Marble collectively exhibits elegance and naturality.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                </div>
                <ParagraphSection
                    title="Madhav Marble – Best Granite Manufacturer, Supplier, and Distributor"
                    p1={<>Madhav Marble is known for supplying a vast array of granite collections in various sizes, shapes, textures &amp; forms. When it comes to manufacturing, we never compromise on quality and strive to deliver the best. We use modern machinery &amp; equipment for exceptional finishing that is further used for various construction applications.</>}
                    p2={<>With 30+ years of experience, we are specialists in the competitive market supplying premium granite across different parts of the globe with a variety of patterns &amp; designs that suit every client&apos;s needs &amp; requirements.</>}
                    src="/images/contact.jpeg"
                    alt=""
                />
            </Section>
            {/* <CtaSection /> */}

            {/* <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} /> */}
        </div >
    )
}
