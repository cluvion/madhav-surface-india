"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Maximize, Layers, Palette, Sparkles, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from '@/components/section';
import ProductCard from '@/components/ui/ProductCard';
import SampleOrderForm from "@/components/ui/sample-order-form";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const XLTileProductLayout = ({ product, relatedProducts, setSelectedProduct }) => {
    const [isSampleOpen, setIsSampleOpen] = useState(false);

    // Helper to format long description with bullet points if lines start with '-'
    const renderDescription = (text) => {
        if (!text) return null;
        const paragraphs = text.split('\n').filter(p => p.trim() !== '');

        return paragraphs.map((p, idx) => {
            if (p.trim().startsWith('-')) {
                return (
                    <li key={idx} className="ml-4 list-disc mb-2 text-foreground/70 text-sm md:text-base leading-relaxed text-justify">
                        {p.replace('-', '').trim()}
                    </li>
                );
            }
            return (
                <p key={idx} className="mb-4 text-foreground/70 text-sm md:text-base leading-relaxed text-justify">
                    {p}
                </p>
            );
        });
    };

    return (
        <div className="overflow-hidden">
            <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={product.image}
                        alt="Background"
                        className="w-full h-full object-cover object-bottom scale-[1.5]"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    {/* Optional overlay for better text contrast */}
                    <div className="absolute inset-0 bg-foreground/80"></div>
                </div>

                <div className="hero-content relative z-10 text-center max-w-7xl mx-auto px-6 space-y-4">
                    <h1
                        className="heading font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white"
                    >
                        {product.name}
                    </h1>
                    <div className="flex justify-center">
                        <Breadcrumb>
                            <BreadcrumbList className="text-background/60">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="hover:text-background transition-colors">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-background/40" />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/products" className="hover:text-background transition-colors">Products</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-background/40" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-background font-medium">{product.name}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6">
                {/* Main Product Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-16">
                    {/* Left: Image (3:4 ratio) */}
                    <div className="lg:col-span-4 relative w-full max-w-lg mx-auto lg:max-w-none aspect-[3/4] overflow-hidden rounded-md bg-neutral-100">
                        <Image
                            src={product.image}
                            alt={product.name || 'Product'}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Right: Info */}
                    <div className="lg:col-span-7 flex flex-col">
                        <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
                            {product.name}
                        </h1>

                        <div className="prose max-w-none mb-8">
                            {renderDescription(product.longDescription || product.description)}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto lg:mt-8">
                            <Button variant="secondary" onClick={() => setIsSampleOpen(true)}>
                                Order Sample
                            </Button>
                            <Link href="/contact-us">
                                <Button variant="primary">
                                    Contact to Buy
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Social Links & Specifications */}
                <div className="mt-16 border-t border-gray-200 pt-16">
                    <div className="mb-12">
                        <p className="italic text-gray-600 mb-4 flex items-center">
                            Check Out {product.name} Granite Tiles At:
                            <Link href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors ml-4 mr-2">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" className="text-pink-600 hover:text-pink-800 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </p>
                    </div>

                    <h2 className="heading text-2xl md:text-3xl font-medium text-gray-900 mb-8">
                        {product.name} Granite Tiles Specification
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-16">
                        <div className="flex flex-col gap-2">
                            <Maximize className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                            <span className="font-semibold text-gray-900">Dimension</span>
                            <span className="text-gray-600 text-sm">{product.dimensions || '1200*600 mm'}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Layers className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                            <span className="font-semibold text-gray-900">Material</span>
                            <span className="text-gray-600 text-sm">Granite</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Palette className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                            <span className="font-semibold text-gray-900">Color</span>
                            <span className="text-gray-600 text-sm">{product.color || 'Various'}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Sparkles className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                            <span className="font-semibold text-gray-900">Finish</span>
                            <span className="text-gray-600 text-sm">{product.finish || 'Polished'}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <LayoutGrid className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                            <span className="font-semibold text-gray-900">Application</span>
                            <span className="text-gray-600 text-sm">{product.useCase?.[0] || 'Flooring'}</span>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="mt-16 text-center max-w-4xl mx-auto">
                    <h2 className="heading text-2xl md:text-3xl font-medium text-gray-900 mb-6">
                        About {product.name}
                    </h2>
                    <p className="text-gray-600 text-justify">
                        {product.description}
                    </p>
                </div>

                {/* Related Products */}
                {relatedProducts && relatedProducts.length > 0 && (
                    <div className="mt-24">
                        <div className="text-center md:text-left mb-8">
                            <h2 className="heading font-thin text-[1.6rem] md:text-[3rem] leading-[1.1] text-foreground">
                                Related Products
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProducts.map((relProduct) => (
                                <ProductCard
                                    key={relProduct.id}
                                    product={relProduct}
                                    onQuickView={setSelectedProduct}
                                    aspectClassName="aspect-[3/4]"
                                    imageClassName="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <SampleOrderForm isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} />
        </div>
    );
};

export default XLTileProductLayout;
