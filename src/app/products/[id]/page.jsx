"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { mockProducts } from '@/data/mockProducts';
import HeroSection from '@/components/product/HeroSection';
import ProductSection from '@/components/product/ProductSection';
import ImageGallery from '@/components/product/ImageGallery';
import KeyHighlights from '@/components/product/KeyHighlights';
import Specifications from '@/components/product/Specifications';
import Applications from '@/components/product/Applications';
import CollectionSlider from '@/components/product/CollectionSlider';
import StickyCTA from '@/components/product/StickyCTA';
import { HomeIcon } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"
import Section from '@/components/section';
import CtaSection from '@/components/page/CtaSection';

// import { generateMetadata as generateSEOMetadata, generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";

// Main Product Page Component
const ProductPage = () => {
    const params = useParams();
    const productId = parseInt(params.id);
    const product = mockProducts.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600">The requested product could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden">

            <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={product.image}
                        alt="Background"
                        className="w-full h-full object-cover"
                        fill
                    />
                    {/* Optional overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/80"></div>
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
            {/* Product Section in visible container to allow 3D effect */}
            <div className="py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6">
                <ProductSection product={product} />
            </div>
            <Specifications product={product} />
            <Section>
                {/* <ImageGallery product={product} /> */}

                <KeyHighlights />
                <CollectionSlider currentProduct={product} products={mockProducts} />
                {/* <Applications product={product} /> */}
                {/* <StickyCTA /> */}
            </Section>
            <CtaSection />
        </div>

    );
};

export default ProductPage;
