"use client";
import { useState } from "react";
import Section from "@/components/section";
import { products } from "@/constants/index";
import Image from "next/image";
import { Search, LayoutGrid, List, Eye, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import QuickViewModal from "@/components/ui/QuickViewModal";

export default function ProductSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter((product) =>
        product.collection !== "Regular Tiles" &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Desktop: Limit to 8 items
    const showProducts = filteredProducts.slice(0, 8);
    // Mobile: Limit to 3 items
    const mobileProducts = filteredProducts.slice(0, 3);

    return (
        <Section>
            {/* Header: Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-94">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                        <Input
                            placeholder="Search products..."
                            className="pl-9 bg-transparent border-border/50 focus-visible:ring-primary"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 text-foreground/50">
                    <span className="text-sm">
                        Showing 1-{Math.min(8, filteredProducts.length)} of {filteredProducts.length} results
                    </span>
                </div>
            </div>

            {/* Mobile View: Grid limited to 3 items (< 1024px) */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mobileProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                ))}
            </div>

            {/* Desktop View: Grid (>= 1024px) */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
                {showProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                ))}
            </div>

            {/* View All Button */}
            <div className="mt-12 text-center">
                <Button asChild >
                    <Link href="/products">View All Products</Link>
                </Button>
            </div>

            {/* Quick View Modal */}
            <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </Section>
    );
}


