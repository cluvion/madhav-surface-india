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

            <PageHeader title="Granite XL Tiles" path="Granite XL Tiles" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> GRANITE XL TILES
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                        Large Format Granite Tiles for Luxurious Interiors
                        {/* <span className="text-primary "> </span> */}
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Granite XL tiles are an excellent way to bring the look of natural granite to your space. These Large Granite tiles imitate the pattern of natural stone, leading to adding an air of authenticity to your space. Being the top Granite tiles supplier and exporter we aim to provide versatile and stylish options that best fit flooring and wall cladding panels. We carry a wide selection of granite XL tiles available in four different finishes: Polished, Honed, Flamed, and Leather. These tiles create a luxurious and high-end look that is perfect for any home or commercial space. Madhav Marbles and Granites Ltd is one of the leading Granite tiles suppliers, manufacturers, and exporters of natural stone tiles in India that supply Large granite tiles in the dimensions of 1200*600 mm. With a wide variety of colors, textures, and patterns to choose from, our calibrated granite XL tiles are a perfect fit for any space. If you are looking for high-quality and durable granite tiles, then we have the best to serve you.</p>
                        <h3 className="heading font-thin text-xl md:text-4xl text-foreground">Exquisite Large Granite Tiles Collection</h3>
                        <p>Find a diverse collection of exclusive granite XL tiles readily available to export by the leading Granite tiles Suppliers and Exporters. Browse through our range of granite tiles and find the perfect one for your requirements.</p>
                    </div>
                </div>

                {/* Specifications Table */}
                <div className="mt-8 md:mt-16">
                    <h2 className="heading font-thin text-xl md:text-4xl mb-6 text-left text-foreground">
                        Specifications of Natural Granite XL Tiles
                    </h2>
                    <div className="border border-neutral-200 overflow-hidden rounded-lg">
                        <table className="w-full text-left border-collapse">
                            <tbody className="divide-y divide-neutral-200">
                                <tr className="bg-white">
                                    <th className="p-4 font-bold text-neutral-800 bg-neutral-50 w-1/3 border-r border-neutral-200">Material Type</th>
                                    <td className="p-4 text-neutral-600">Granite</td>
                                </tr>
                                <tr className="bg-white">
                                    <th className="p-4 font-bold text-neutral-800 bg-neutral-50 border-r border-neutral-200">Finishes Available</th>
                                    <td className="p-4 text-neutral-600">Polished, Flamed, Leather, Honed</td>
                                </tr>
                                <tr className="bg-white">
                                    <th className="p-4 font-bold text-neutral-800 bg-neutral-50 border-r border-neutral-200">Dimensions</th>
                                    <td className="p-4 text-neutral-600">1200 x 600MM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Application Areas */}
                <div className="mt-8 md:mt-16">
                    <h2 className="heading font-thin text-xl md:text-4xl mb-6 text-foreground">
                        Application Areas of Granite Tiles
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70 text-sm md:text-base">
                        <li>Granite tiles for Kitchen</li>
                        <li>Granite tiles for Bedroom</li>
                        <li>Granite tiles for Countertops</li>
                        <li>Granite tiles for Restaurant</li>
                        <li>Granite tiles for Living Room/ Halls</li>
                        <li>Granite tiles for Commercial space</li>
                        <li>Granite tiles for Restroom</li>
                        <li>Granite tiles for Flooring</li>
                        <li>Granite tiles for Backsplashes</li>
                        <li>Granite tiles for Fireplaces</li>
                        <li>Granite tiles for Paving</li>
                        <li>Granite tiles for Exterior Walls</li>
                        <li>Granite tiles for Staircase</li>
                        <li>Granite tiles near Swimming Pool area</li>
                    </ul>
                </div>

                {/* Descriptive Sections */}
                <div className="space-y-8 text-justify text-foreground/50 text-sm md:text-base leading-relaxed mt-8 md:mt-16">
                    <div>
                        <h3 className="heading font-thin text-xl md:text-3xl text-foreground mb-3">Granite Tiles For Countertop</h3>
                        <p>If you&apos;re looking for a luxurious and durable kitchen countertop material that won&apos;t break the bank, then granite xl tiles are a great option! Here at Madhav Marbles and Granites Ltd, the leading Granite tiles supplier in India, have a wide collection of granite stones to choose from.</p>
                    </div>

                    <div>
                        <h3 className="heading font-thin text-xl md:text-3xl text-foreground mb-3">Granite Tiles For Flooring</h3>
                        <p>Granite XL tiles are an excellent choice for flooring because they resist stains better than marble or any other flooring material. Get this quality stone from the top manufacturer and Granite tiles supplier in India. Explore our diverse range of product options, one is sure to find the perfect fit for your needs.</p>
                    </div>

                    <div>
                        <h3 className="heading font-thin text-xl md:text-3xl text-foreground mb-3">Granite Tiles for Walls</h3>
                        <p>If you&apos;re looking for a way to add a touch of elegance and shine to your exterior or interior walls, granite tiles are an excellent choice. They&apos;re durable and able to withstand a lot of wear and tear, making them ideal for wall cladding and other options.</p>
                    </div>

                    <div>
                        <h3 className="heading font-thin text-xl md:text-3xl text-foreground mb-3">Granite Tiles Pricing</h3>
                        <p>Granite tiles are a top pick for flooring, walls, countertops, and many more because of the durability, strength, and longevity they provide. Thanks to its innate resistance to acid, stains, and scratches, these are the most picked stone options amongst contractors, builders, architects, interior designers, and countertop makers. The price of tiles is based on the quality of the stone and the size. We offer a wide range of granite tiles in XL sizes that are specially used to cover large surface areas at competitive prices. Being a top manufacturer, Granite tiles supplier, and exporter, we aim to serve a vast collection of tiles that are infused with multiple colors, textures, and patterns.</p>
                    </div>
                </div>

                <div className="mt-8 md:mt-16">
                    <h2 className="heading font-thin text-xl md:text-4xl mb-6 text-foreground">
                        Madhav Marble & Granite Ltd – A Leading Granite Tiles Supplier From India
                    </h2>
                    <p>Madhav Marbles and Granite Ltd is an experienced supplier, manufacturer, and exporter of XL Granite Tiles, <a className="text-primary" href="https://www.madhavmarbles.com/manufacturer-of-granite-india/"><strong>Granite slabs</strong></a>, and <a className="text-primary" href="https://www.madhavmarbles.com/granite-calibrated-tiles-in-india/"><strong>Regular Calibrated</strong></a> granite tiles in India. We offer a variety of Tiles in different finishes, shades, and dimensions, to suit your needs. Our exclusive collection of tiles comes in a variety of colors, textures, and patterns. We export this collection in various areas and majorly supply to countries of&nbsp; Germany, Poland, Slovenia, Slovakia, Austria, and a few regions of the United States, along with other parts of the world. <a className="text-primary" href="https://www.madhavmarbles.com/reach-us/"><strong>Contact us</strong></a>! <br /><br />Know more about our stone range at<a className="text-primary" href="https://in.linkedin.com/company/madhav-marble-and-granite-ltd-india"> <strong>LinkedIn</strong></a></p>
                </div>
            </Section>
            <CtaSection />
        </div>
    )
}
