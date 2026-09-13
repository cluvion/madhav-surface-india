"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
import { collectionTiles } from "@/constants/collectionTiles";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pageProducts = collectionTiles['regular-tiles'];

export default function GraniteCalibratedTilesInIndia() {

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Tiles" path="Tiles" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="pt-16 md:pt-24 pb-8 container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
                        <div>
                            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                                PREMIUM GRANITE TILE COLLECTION
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                                Granite<br/>Calibrated Tiles.
                            </h2>
                            <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                                <p>
                                    Granite is renowned for its exceptional hardness, durability, and timeless natural appearance. Calibrated granite tiles are precisely sized through advanced calibration, delivering consistency, refined aesthetics, and seamless installation for contemporary architectural spaces.
                                </p>
                                <p>
                                    Ideal for floors and walls across residential and commercial environments, these tiles offer excellent resistance to scratches, wear, and everyday use. Madhav offers a diverse collection of calibrated granite tiles in multiple sizes, designs, and styles to meet varied project requirements.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#f8f7f2] p-8 md:p-12 shadow-sm border border-border/30 rounded-lg">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8">
                                WHY CHOOSE MADHAV CALIBRATED GRANITE TILES
                            </h3>
                            <ul className="space-y-6 text-foreground/80 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">Precision &amp; Consistent Sizing:</strong> Advanced calibration ensures accurate dimensions and uniform thickness for efficient installation and clean, seamless results.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">Exceptional Durability &amp; Performance:</strong> Naturally hard, scratch-resistant, and highly durable, granite tiles are built to withstand heavy use with minimal wear and maintenance.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">Versatile Indoor &amp; Outdoor Applications:</strong> Suitable for kitchens, restrooms, living areas, commercial spaces, floors, walls, and other demanding architectural applications.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="relative mt-8 md:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pageProducts.map((product) => (
                            <TileCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </Section>

        </div>
    )
}

function TileCard({ product }) {
    return (
        <Link href={`/products/${product.id}`} className="group flex flex-col overflow-hidden cursor-pointer">
            {/* Image container */}
            <div className="relative w-full bg-muted flex items-center justify-center overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
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
                    <Button className="w-full" variant="secondary">
                        View Details
                    </Button>
                </div>
            </div>
        </Link>
    );
}
