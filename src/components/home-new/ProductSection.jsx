"use client";
import { useState } from "react";
import Section from "@/components/section";
import { mockProducts } from "@/data/mockProducts";
import Image from "next/image";
import { Search, LayoutGrid, List, Eye, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = mockProducts.filter((product) =>
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
                <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/products">View All Products</Link>
                </Button>
            </div>

            {/* Quick View Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            layoutId={`product-card-${selectedProduct.id}`}
                            className="bg-card w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl relative flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 p-2 bg-black/20 rounded-full hover:bg-black/40 text-white transition-colors"
                                onClick={() => setSelectedProduct(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
                                <Image
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                                <h2 className="text-3xl font-bold font-heading">{selectedProduct.name}</h2>
                                <p className="text-foreground/50">{selectedProduct.category}</p>
                                <div className="text-sm text-foreground/80 leading-relaxed">
                                    <p>Experience the premium quality of {selectedProduct.name}. Perfect for modern interiors and architectural masterpieces.</p>
                                </div>
                                <Button className="w-full mt-4">Enquire Now</Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}


