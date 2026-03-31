"use client";
import Section from '@/components/section'
import TableSection from "@/components/page/TableSection";
import PageHeader from '@/components/pageheader'
import ProductCard from "@/components/ui/ProductCard";
import ScrollStack from '@/components/ui/scroll-stack';
import QuickViewModal from '@/components/ui/QuickViewModal';
import { collectionTiles } from "@/constants/collectionTiles";
import { useState } from "react";
import CtaSection from "@/components/page/CtaSection";

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function MarblesAndGraniteSuppliersInIndia() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const collectionProducts = collectionTiles['exotics-exclusive'] || [];

    return (
        <div className="">

            <PageHeader title="Exotics & Exclusives" path="Exotics & Exclusives" src="/assets/Step7.png" />

            <ScrollStack products={collectionProducts} zoom="scale-[1.3]" />

            <Section>
                {/* Project Carousel Section */}
                <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
                    {collectionProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                    ))}
                </div>
            </Section>
            <CtaSection />

            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    )
}
