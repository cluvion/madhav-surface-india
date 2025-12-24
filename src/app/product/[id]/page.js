"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/constants/index';
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
import { HeroHeader } from '@/components/header';
import { generateMetadata as generateSEOMetadata, generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";

// Metadata will be handled by layout.js since this is a client component

// Main Product Page Component
const ProductPage = () => {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

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

  // Generate structured data for the product
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: product.collection, url: `/collection/${product.collection.toLowerCase().replace(/\s+/g, '-')}` },
    { name: product.name, url: `/product/${product.id}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HeroHeader forceScrolled={true} />
      <div className="min-h-screen mt-20 md:mt-16">
        <div className="absolute md:top-25 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-2 md:py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <HomeIcon size={16} aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/collection/${product.collection.toLowerCase().replace(/\s+/g, '-')}`}>{product.collection}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* <HeroSection product={product} /> */}
        <div data-light-bg>
          <ProductSection product={product} />
        </div>
        <ImageGallery product={product} />
        <div data-light-bg>
          <Specifications product={product} />
          <KeyHighlights />
          <CollectionSlider currentProduct={product} products={products} />
        </div>



        {/* <Applications product={product} /> */}
        {/* <StickyCTA /> */}
      </div>
    </>

  );
};

export default ProductPage;