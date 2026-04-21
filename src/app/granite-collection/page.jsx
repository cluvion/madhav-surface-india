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

            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6 text-center md:text-left">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="mr-2 text-lg text-primary">¬</span> GRANITE DIVISION
                </span>
                <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                    Premium Granite Stone Supplier &amp; Exporter – Madhav Marble
                </h2>
                <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                    <p>Madhav Marbles and Granite Ltd is one of India&apos;s premier granite manufacturers &amp; suppliers. We offer a comprehensive range of granite in a multitude of colors, textures, and patterns, meticulously crafted with precision and exceptional quality. From classic blacks and whites to exotic blues and golds, we are the leading granite suppliers in India, exporting extensively to the USA, Europe, and worldwide.</p>
                    <p>Our extensive assortment of granite comes in various forms and finishes, processed at our state-of-the-art manufacturing facility. We have established a strong reputation in the industry as the top choice for granite manufacturing and supply. Whether it&apos;s large-scale commercial projects or individual residential requirements, we cater to every client&apos;s unique style and preferences.</p>
                    <h3 className="heading font-thin text-xl md:text-4xl text-foreground">Exclusive Granite Collection From India&apos;s Leading Granite Suppliers</h3>
                    <p>With decades of experience in the natural stone industry, our global clientele trusts us for the finest quality granite solutions. Following are some of our popular granite varieties processed at our state-of-the-art manufacturing unit:</p>
                </div>
            </div>

            <ScrollStack products={collectionProducts} zoom="scale-[1.5] object-bottom" />

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
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Kitchen Countertops" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Kitchen Countertops</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Granite countertops are the gold standard for kitchen surfaces. Their exceptional heat resistance, scratch resistance, and wide range of colors make them the perfect choice for both modern and traditional kitchens. Get them today from Madhav Marble.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Flooring" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Flooring</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Granite flooring is synonymous with elegance and durability. From light-colored floors to dark-colored floor options, Madhav Marble has the finest quality granite for every application.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Wall Cladding" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Wall Cladding</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Granite wall cladding offers both distinguished appearance and exceptional durability, making it an excellent choice for interior and exterior wall applications.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step4.png" alt="Vanity Tops" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Vanity Tops</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Granite is an outstanding material for vanity tops in residential and commercial projects. With a variety of shades available &amp; dynamic surface patterns, the stone of Madhav Marble collectively exhibits elegance and durability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ParagraphSection
                    title="Madhav Marble – Best Granite Manufacturer, Supplier, and Distributor"
                    p1={<>Madhav Marble is known for supplying a vast array of granite collections in various sizes, shapes, textures &amp; forms. When it comes to manufacturing, we never compromise on quality and strive to deliver the best. We use modern machinery &amp; equipment for exceptional finishing that is further used for various construction applications.</>}
                    p2={<>With 30+ years of experience, we are specialists in the competitive market supplying premium granite across different parts of the globe with a variety of patterns &amp; designs that suit every client&apos;s needs &amp; requirements.</>}
                    src="/assets/Step5.png"
                    alt=""
                />
            </Section>
            <CtaSection />

            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div >
    )
}
