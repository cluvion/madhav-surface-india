"use client";
import Section from '@/components/section'
import TableSection from "@/components/page/TableSection";
import PageHeader from '@/components/pageheader'
import ProductCard from "@/components/ui/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { useState } from "react";
import Image from "next/image";
import CtaSection from "@/components/page/CtaSection";
import ParagraphSection from '@/components/page/ParagraphSection';

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function MarbleSandstoneQuartziteExporterSupplier() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Marble | Sandstone | Quartzite" path="Marble | Sandstone | Quartzite" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> MARBLE DIVISION
                    </span>
                    <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-5xl">
                        Welcome To India&apos;s Leading Marble Supplier
                        <span className="text-primary "> Madhav Marble</span>
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Madhav Marbles and Granite Ltd is a renowned Indian marble manufacturer &amp; supplier. We offer a wide range of marbles in various colors, textures, and patterns, crafted with precision and exceptional quality. From <strong><a className="text-primary" href="https://www.madhavmarbles.com/brown-fantasy-marble/">Brown Fantasy</a></strong> to <strong><a className="text-primary" href="https://www.madhavmarbles.com/white-dunes-marble/">White Dunes</a></strong>, we are the leading marble suppliers in India, exporting extensively to the USA and Europe.</p>
                        <p>Our extensive assortment of marble comes in different forms and finishes. We have established a strong reputation in the industry as the top choice for marble manufacturing and supply. Whether it’s large-scale projects or individual requirements, we cater to clients’ unique styles and preferences. Choose Madhav Marbles for superior quality and customer satisfaction in the marble industry.</p>
                        <h3 className="text-xl md:text-3xl font-bold text-black">Exclusive Marble, Sandstone, and Quartzite Collection From Leading Marble Suppliers</h3>
                        <p>With the prime marble supplier in India, our global clientele always expects the unparalleled &amp; finest quality of stone solutions. Following are some of the popular marbles, sandstone, and quartzites that are processed at our state-of-the-art manufacturing unit on a large scale:</p>
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

                <div className="mt-8 md:mt-16 text-center md:text-left space-y-4">
                    <h2 className="text-xl md:text-3xl font-bold text-black">
                        Madhav Marble - A Top-Notch Wholesale Marble Supplier in India
                    </h2>
                    <div className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Indian marbles are one of the best natural stones that are popular from the time of reminiscence and used in various applications such as monuments, buildings, and residential or commercial projects. Stones from Madhav Marble as available in various finishes, not only enhance the beauty of space but also provides the luxurious &amp; timeless appeal to the aesthetics of your interiors. They are not only known for their mesmerizing appearance, but also for the excellent durability that accompanies these gorgeous marbles. Our stones are exclusively carved to provide you with the best piece to embellish your space.</p>
                    </div>
                </div>

                <TableSection
                    title="Madhav Marble Available in Following"
                    colors="Brown, Green, White, Grey"
                    forms="Slabs"
                    finishes="Polished, Flamed, Honed, Flamed+brushed, Giano, Leather"
                    slabThickness="2cm – 3cm"
                    tiles={[]}
                    xlTiles=""
                    applications=""
                // footerDescription="Stones of Madhav marble are available with the dimensions:"
                />

                <div className="mt-8 md:mt-16 text-center md:text-left">
                    <h2 className="text-[1.6rem] md:text-3xl font-bold text-black mb-4">
                        Application Areas of Marble
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-8 text-justify">
                        Marbles from Madhav Marble and Granite are used for numerous applications like structural and decorative purposes and it is available in various sizes in form of slabs to consume. The areas of application include-
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Kitchen Countertops" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-black">Kitchen Countertops</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Marble countertops come in a variety of colors, patterns & veins ranging from white to brown and add a distinct character to your space. Also, the longevity and the sense of additional value make marble the best choice for countertops. Get them today from the leading marble supplier – Madhav Marble
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Flooring" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-black">Flooring</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    None of us can deny the natural & elegant appeal of marble flooring. From light-colored floors to dark-colored floor options, Madhav Marble has got everything of the best quality.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative ">
                                <Image src="/assets/Step5.png" alt="Wall Cladding" width={1000} height={1000} className="object-cover" />
                            </div>
                            <div className="div space-y-1">
                                <h3 className="text-2xl font-bold text-black">Wall Cladding</h3>
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
                                <h3 className="text-2xl font-bold text-black">Vanity Tops</h3>
                                <p className="text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                                    Marble is a fairly popular material for vanity tops in residential apartments as well as in commercial projects. With a variety of shades available &amp; dynamic surface patterns in the form of waves, flecks &amp; streaks, the stone of Madhav Marble collectively exhibits elegance and naturality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ParagraphSection
                    title="Madhav Marble - Best Marble Manufacturer, Supplier, and Distributor"
                    p1={<>Madhav marble is known for supplying a vast array of collections in various sizes, shapes, textures &amp; forms to widely fulfill the client’s expectations. When it comes to manufacturing, we never compromise on quality and strive to deliver the best to our clients. We use modern machinery &amp; equipment to process the marbles &amp; for exceptional finishing that is further used for various construction applications.</>}
                    p2={<>We are the most reputed and trusted marble manufacturers &amp; suppliers in India with unmatchable products. Having 30+ yrs of experience, we are specialists in the competitive market supplying not only marble but a wide collection of sandstone and quartzite across different parts of the globe with a variety of patterns &amp; designs that suit the client’s needs &amp; requirements.</>}
                    src="/assets/Step5.png"
                    alt=""
                />
            </Section>
            <CtaSection />
        </div>
    )
}
