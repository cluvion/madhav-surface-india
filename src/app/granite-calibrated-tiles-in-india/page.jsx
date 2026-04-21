"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
import { collectionTiles } from "@/constants/collectionTiles";
import { useState } from "react";
import CtaSection from '@/components/page/CtaSection';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import QuickViewModal from "@/components/ui/QuickViewModal";

const pageProducts = collectionTiles['regular-tiles'];

export default function GraniteCalibratedTilesInIndia() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Tiles" path="Tiles" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> TILE
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                        Granite Calibrated Tiles
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Granite is one of the most durable natural stones, renowned for its hardness, durability, and timeless reflective appearance. Calibrated <a className="text-primary" href="https://www.madhavmarbles.com/manufacturer-of-granite-india/"><strong>granite tiles</strong></a> have become the industry standard, with precise sizing ensured through the calibration process. These tiles deliver a sophisticated, luxurious, and elegant aesthetic for both floors and walls, offering the authentic look of natural granite stone. Perfect for both indoor and outdoor applications, including kitchens, restrooms, living areas, and commercial spaces, calibrated granite tiles are scratch-resistant, highly durable, and built to last, reducing wear and tear. At Madhav Marbles, one of the top marble manufacturers in India, we offer a wide range of calibrated granite tiles in various sizes, designs, and styles to meet your project requirements. Explore our premium collection today and <a className="text-primary" href="https://www.madhavmarbles.com/contact-us/"><strong>find the perfect granite tiles</strong></a> to enhance your space.</p>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="relative mt-8 md:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pageProducts.map((product) => (
                            <TileCard
                                key={product.id}
                                product={product}
                                onQuickView={setSelectedProduct}
                            />
                        ))}
                    </div>
                </div>
            </Section>
            <CtaSection />
            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    )
}

function TileCard({ product, onQuickView }) {
    return (
        <motion.div
            layoutId={`tile-card-${product.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group flex flex-col overflow-hidden"
        >
            {/* Image container — natural size, no zoom, no fill */}
            <div className="relative w-full bg-muted flex items-center justify-center overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Quick View overlay button (desktop) */}
                <div className="hidden lg:flex absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 justify-center">
                    <Button
                        arrow={false}
                        size="icon"
                        variant="secondary"
                        className="p-6 cursor-pointer rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground"
                        onClick={() => onQuickView(product)}
                    >
                        <Eye className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-3">
                <div className="text-center space-y-1">
                    <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-foreground/50">{product.category || product.collection}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-center pt-4">
                    <Button asChild className="w-full" variant="secondary">
                        <Link href={`/products/${product.id}`}>
                            View Details
                        </Link>
                    </Button>
                    {/* Quick View — mobile/tablet only */}
                    <Button
                        arrow={false}
                        size="sm"
                        className="lg:hidden shrink-0 h-full w-9"
                        onClick={() => onQuickView(product)}
                    >
                        <Eye className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
