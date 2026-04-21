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

export default function QuartzitesCollection() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const collectionProducts = collectionTiles['quartzites'] || [];

    return (
        <div className="min-h-screen">

            <PageHeader title="Quartzites Collection" path="Quartzites" src="/assets/Step7.png" />

            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6 text-center md:text-left">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="mr-2 text-lg text-primary">¬</span> QUARTZITE DIVISION
                </span>
                <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                    Premium Quartzite Stone Supplier &amp; Exporter – Madhav Marble
                </h2>
                <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                    <p>Madhav Marbles and Granite Ltd is a leading quartzite supplier, offering an exquisite range of quartzite slabs in various colors, textures, and finishes. Quartzite is a naturally occurring metamorphic stone known for its exceptional hardness, durability, and stunning visual appeal, making it ideal for both residential and commercial applications.</p>
                    <p>Our quartzite collection features premium selections sourced from the finest quarries. Each slab is meticulously processed at our state-of-the-art manufacturing facility to ensure superior quality, precise thickness control, and flawless finishing. From elegant whites to vibrant blues and golds, our quartzites bring a unique character to every space.</p>
                    <h3 className="heading font-thin text-xl md:text-4xl text-foreground">Exclusive Quartzite Collection From Leading Stone Suppliers</h3>
                    <p>With decades of experience in the natural stone industry, our global clientele trusts us for unparalleled quality quartzite solutions. Following are some of the popular quartzites that are processed at our manufacturing unit:</p>
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
                        Madhav Marble – Your Trusted Quartzite Supplier
                    </h2>
                    <div className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Quartzite is one of the hardest natural stones available, formed from sandstone under intense heat and pressure. Its remarkable durability and resistance to heat, scratching, and UV exposure make it a top choice for high-traffic areas and outdoor applications. At Madhav Marble, we offer quartzite in a wide array of stunning colors and patterns, each uniquely veined by nature. Our quartzites are available in various finishes, adding both beauty and lasting value to your interiors and exteriors.</p>
                    </div>
                </div>

                <TableSection
                    title="Quartzite Available in Following"
                    colors="White, Grey, Blue, Pink, Gold, Green"
                    forms="Slabs"
                    finishes="Polished, Honed, Leather, Flamed, Brushed"
                    slabThickness="2cm – 3cm"
                    tiles={[]}
                    xlTiles=""
                    applications=""
                />

                <div className="mt-8 md:mt-16 text-center md:text-left">
                    <h2 className="heading font-thin text-xl md:text-4xl text-foreground mb-4">
                        Application Areas of Quartzite
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-8 text-justify">
                        Quartzites from Madhav Marble and Granite are used for numerous applications and are available in various sizes in the form of slabs. The areas of application include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Kitchen Countertops" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Kitchen Countertops</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Quartzite countertops are extremely durable and heat-resistant, making them perfect for kitchens. Their natural beauty and unique veining patterns add a luxurious touch to any kitchen space.
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
                                    Quartzite flooring offers unmatched durability and scratch resistance. Its natural beauty and varied color palette make it an ideal choice for both indoor and outdoor flooring applications.
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
                                    Quartzite wall cladding provides a stunning visual impact with its natural textures and shimmering mineral inclusions. It is highly durable and weather-resistant, making it ideal for both interior and exterior walls.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step4.png" alt="Outdoor Applications" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Outdoor Applications</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Quartzite&apos;s exceptional resistance to UV rays and weathering makes it perfect for outdoor patios, pool surrounds, and garden paths. Its slip-resistant surface ensures safety without compromising on aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ParagraphSection
                    title="Madhav Marble – Best Quartzite Manufacturer, Supplier, and Distributor"
                    p1={<>Madhav Marble is renowned for supplying a vast array of quartzite collections in various sizes, textures &amp; finishes to widely fulfill client expectations. Our modern machinery &amp; equipment ensure exceptional finishing that is further used for various construction applications.</>}
                    p2={<>With 30+ years of experience, we are specialists in supplying premium quartzite across different parts of the globe. Our commitment to quality and customer satisfaction has made us the preferred choice for architects, designers, and builders worldwide.</>}
                    src="/assets/Step5.png"
                    alt=""
                />
            </Section>
            <CtaSection />

            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div >
    )
}
