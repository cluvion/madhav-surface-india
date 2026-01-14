import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[400px] w-full bg-foreground text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('/images/about-hero-bg.jpg')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
                <h1 className="heading mb-6 text-5xl font-light text-center md:text-7xl">
                    About Us
                </h1>

                <div className="flex items-center justify-center space-x-2 text-sm uppercase tracking-widest text-neutral-400">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-white">About Us</span>
                </div>
            </div>
        </section>
    );
}
