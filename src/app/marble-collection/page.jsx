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

export default function MarbleCollection() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const collectionProducts = collectionTiles['marbles'] || [];

    return (
        <div className="min-h-screen">

            <PageHeader title="Marble Collection" path="Marble" src="/assets/Step7.png" />

            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6 text-center md:text-left">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="mr-2 text-lg text-primary">¬</span> MARBLE DIVISION
                </span>
                <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                    Premium Marble Supplier &amp; Exporter – Madhav Marble
                </h2>
                <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                    <p>Madhav Marbles and Granite Ltd is a renowned Indian marble manufacturer &amp; supplier. We offer a wide range of marbles in various colors, textures, and patterns, crafted with precision and exceptional quality. From <strong><a className="text-primary" href="https://www.madhavmarbles.com/brown-fantasy-marble/">Brown Fantasy</a></strong> to <strong><a className="text-primary" href="https://www.madhavmarbles.com/white-dunes-marble/">White Dunes</a></strong>, we are the leading marble suppliers in India, exporting extensively to the USA and Europe.</p>
                    <p>Our extensive assortment of marble comes in different forms and finishes. We have established a strong reputation in the industry as the top choice for marble manufacturing and supply. Whether it&apos;s large-scale projects or individual requirements, we cater to clients&apos; unique styles and preferences. Choose Madhav Marbles for superior quality and customer satisfaction in the marble industry.</p>
                    <h3 className="heading font-thin text-xl md:text-4xl text-foreground">Exclusive Marble Collection From Leading Marble Suppliers</h3>
                    <p>With the prime marble supplier in India, our global clientele always expects the unparalleled &amp; finest quality of stone solutions. Following are some of the popular marbles that are processed at our state-of-the-art manufacturing unit on a large scale:</p>
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
                        Madhav Marble – A Top-Notch Wholesale Marble Supplier in India
                    </h2>
                    <div className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Indian marbles are one of the best natural stones that are popular from the time of reminiscence and used in various applications such as monuments, buildings, and residential or commercial projects. Stones from Madhav Marble are available in various finishes, not only enhance the beauty of space but also provide the luxurious &amp; timeless appeal to the aesthetics of your interiors. They are not only known for their mesmerizing appearance, but also for the excellent durability that accompanies these gorgeous marbles. Our stones are exclusively carved to provide you with the best piece to embellish your space.</p>
                    </div>
                </div>

                <TableSection
                    title="Madhav Marble Available in Following"
                    colors="White, Grey, Brown, Green, Blue, Beige, Pink"
                    forms="Slabs"
                    finishes="Polished, Honed, Leather, Brushed"
                    slabThickness="2cm – 3cm"
                    tiles={[]}
                    xlTiles=""
                    applications=""
                />

                <div className="mt-8 md:mt-16 text-center md:text-left">
                    <h2 className="heading font-thin text-xl md:text-4xl text-foreground mb-4">
                        Application Areas of Marble
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-8 text-justify">
                        Marbles from Madhav Marble and Granite are used for numerous applications like structural and decorative purposes and are available in various sizes in the form of slabs. The areas of application include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Kitchen Countertops" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Kitchen Countertops</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Marble countertops come in a variety of colors, patterns &amp; veins ranging from white to brown and add a distinct character to your space. Also, the longevity and the sense of additional value make marble the best choice for countertops. Get them today from the leading marble supplier – Madhav Marble.
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
                                    None of us can deny the natural &amp; elegant appeal of marble flooring. From light-colored floors to dark-colored floor options, Madhav Marble has got everything of the best quality.
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
                                    Apart from its distinguished appearance, it is highly durable making marble as a wall cladding an excellent choice.
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
                                    Marble is a fairly popular material for vanity tops in residential apartments as well as in commercial projects. With a variety of shades available &amp; dynamic surface patterns in the form of waves, flecks &amp; streaks, the stone of Madhav Marble collectively exhibits elegance and naturality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ParagraphSection
                    title="Madhav Marble – Best Marble Manufacturer, Supplier, and Distributor"
                    p1={<>Madhav Marble is known for supplying a vast array of marble collections in various sizes, shapes, textures &amp; forms to widely fulfill the client&apos;s expectations. When it comes to manufacturing, we never compromise on quality and strive to deliver the best to our clients. We use modern machinery &amp; equipment to process the marbles &amp; for exceptional finishing that is further used for various construction applications.</>}
                    p2={<>We are the most reputed and trusted marble manufacturers &amp; suppliers in India with unmatchable products. Having 30+ yrs of experience, we are specialists in the competitive market supplying premium marble across different parts of the globe with a variety of patterns &amp; designs that suit the client&apos;s needs &amp; requirements.</>}
                    src="/assets/Step5.png"
                    alt=""
                />
            </Section>
            <CtaSection />

            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div >
    )
}
