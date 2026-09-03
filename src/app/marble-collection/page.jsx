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
    const graniteProducts = collectionTiles['granite'] || [];

    // Specific products to display in the ScrollStack section
    // Some marble ScrollStack products are stored in the 'granite' collection
    const scrollStackNames = [
        'Monalisa',
        'Marine Black',
        'Jasper Gold',
        'Blue Dunes',
        'Amazon White',
        'Calacatta D Oro'
    ];
    const allSearchable = [...collectionProducts, ...graniteProducts];
    const scrollStackProducts = scrollStackNames
        .map(name => allSearchable.find(p => p.name.toLowerCase() === name.toLowerCase()))
        .filter(Boolean);

    return (
        <div className="min-h-screen">

            <PageHeader title="Marble Collection" path="Marble" src="/assets/Step7.png" />

            <div className="pt-16 md:pt-24 pb-8 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
                    <div>
                        <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                            PREMIUM MARBLE COLLECTION
                        </span>
                        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                            Master Craftsmanship, Advanced Technology.
                        </h2>
                        <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                            <p>
                                At Madhav Marble &amp; Granite Ltd, advanced technology and skilled craftsmanship come together to deliver superior natural stone solutions. Every marble slab is processed at our state-of-the-art facility and subjected to stringent calibration, finishing, and polishing standards to ensure exceptional quality, consistency, and durability.
                            </p>
                            <p>
                                Whether for landmark commercial developments or bespoke residential projects, our marble is engineered to meet demanding architectural requirements while delivering enduring aesthetic appeal and long-term performance.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f8f7f2] p-8 md:p-12 shadow-sm border border-border/30 rounded-lg">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8">
                            Why Global Architects &amp; Designers Choose Madhav Marble
                        </h3>
                        <ul className="space-y-6 text-foreground/80 text-sm md:text-base">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                <p className="leading-relaxed"><strong className="text-foreground block mb-1">Extensive Range of Colors &amp; Finishes:</strong> A diverse selection of marble varieties, available in customized slab dimensions and premium finishes including Polished, Honed, Brushed, and Leather.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                <p className="leading-relaxed"><strong className="text-foreground block mb-1">Precision &amp; Dimensional Consistency:</strong> Advanced processing technology ensures exceptional dimensional accuracy, enabling seamless installation, precise alignment, and optimized material utilization.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                <p className="leading-relaxed"><strong className="text-foreground block mb-1">Scalable Supply Capabilities:</strong> From large-volume container shipments for major commercial projects to specialized custom orders, our robust processing and logistics capabilities ensure reliable supply at every scale.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-16 max-w-4xl mb-8">
                    <h3 className="text-3xl md:text-4xl font-medium leading-[1.2] text-foreground mb-6" style={{ fontFamily: "serif" }}>
                        Explore Our Signature Global Marble Collection
                    </h3>
                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                        Discover a curated selection of our most sought-after marble varieties, processed using advanced technology and stringent quality standards to meet the evolving requirements of architects, designers, developers, and international buyers.
                    </p>
                </div>
            </div>

            <ScrollStack products={scrollStackProducts} zoom="scale-[1.5] object-bottom" />

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
                    title="Madhav Marble – Best Marble Manufacturer, Supplier, and Distributor"
                    p1={<>Madhav Marble is known for supplying a vast array of marble collections in various sizes, shapes, textures &amp; forms to widely fulfill the client&apos;s expectations. When it comes to manufacturing, we never compromise on quality and strive to deliver the best to our clients. We use modern machinery &amp; equipment to process the marbles &amp; for exceptional finishing that is further used for various construction applications.</>}
                    p2={<>We are the most reputed and trusted marble manufacturers &amp; suppliers in India with unmatchable products. Having 30+ yrs of experience, we are specialists in the competitive market supplying premium marble across different parts of the globe with a variety of patterns &amp; designs that suit the client&apos;s needs &amp; requirements.</>}
                    src="/images/contact.jpeg"
                    alt=""
                />
            </Section>
            {/* <CtaSection /> */}

            {/* <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} /> */}
        </div >
    )
}
