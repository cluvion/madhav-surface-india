"use client";

import { use, useState, useEffect } from "react";
import { mockProducts } from "@/data/mockProducts";
import Section from "@/components/section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";

export default function ProductDetailPage({ params }) {
    // Unwrap params using React.use()
    const unwrappedParams = use(params);
    const { id } = unwrappedParams;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-background">
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

            <Section className="py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/20"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-sm font-medium text-primary tracking-wider uppercase">{product.category}</span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">{product.name}</h1>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                Elevate your space with the timeless elegance of {product.name}. This premium surface solution offers unmatched durability and aesthetic appeal, making it the perfect choice for luxury interiors and architectural statements.
                            </p>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-border">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-foreground">Finish</h4>
                                    <p className="text-muted-foreground">Polished / Honed</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Thickness</h4>
                                    <p className="text-muted-foreground">18mm, 20mm</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Application</h4>
                                    <p className="text-muted-foreground">Flooring, Walls, Countertops</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-foreground">Origin</h4>
                                    <p className="text-muted-foreground">Imported</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <Button size="lg" className="w-full md:w-auto px-8">Enquire Now</Button>
                            <Button size="lg" variant="outline" className="w-full md:w-auto px-8">Download Catalogue</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
