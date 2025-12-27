"use client";
import { useState } from "react";
import { mockProducts } from "@/data/mockProducts";
import ProductCard from "@/components/ui/ProductCard";
import { Search, LayoutGrid, List, Eye, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Section from "@/components/section";

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("popularity");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "name-asc") return a.name.localeCompare(b.name);
        if (sortOption === "name-desc") return b.name.localeCompare(a.name);
        return 0; // Default popularity (id order)
    });

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://res.cloudinary.com/dljiyumfx/image/upload/v1753857232/Masseto_Close_up_2_tudvmm.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                        fill
                    />
                    {/* Optional overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>
                </div>

                <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6 space-y-4">
                    <h1
                        className="heading font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white"
                    >
                        Products
                    </h1>
                    <div className="flex justify-center">
                        <Breadcrumb>
                            <BreadcrumbList className="text-background/60">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="hover:text-background transition-colors">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-background/40" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-background font-medium">Products</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <Section >
                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <Select value={sortOption} onValueChange={setSortOption}>
                            <SelectTrigger className="w-[180px] bg-transparent border-border/50">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="popularity">Sort by popularity</SelectItem>
                                <SelectItem value="name-asc">Sort by Name (A-Z)</SelectItem>
                                <SelectItem value="name-desc">Sort by Name (Z-A)</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="relative w-full md:w-108">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                            <Input
                                placeholder="Search products..."
                                className="pl-9 bg-transparent border-border/50 focus-visible:ring-primary"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-4 text-foreground/50">
                            <span className="text-sm">
                                Showing 1-{Math.min(sortedProducts.length, sortedProducts.length)} of {sortedProducts.length} results
                            </span>
                    </div>

                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
                    ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="text-center py-20 text-foreground/50">
                        No products found matching "{searchQuery}"
                    </div>
                )}
            </Section>

            {/* Quick View Modal (Reused) */}
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
        </div>
    );
}
