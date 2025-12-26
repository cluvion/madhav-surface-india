import React from "react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
    return (
        <section className="bg-white py-20 text-center md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="heading mb-8 text-5xl md:text-7xl lg:text-8xl">
                    Ready To Start?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-500">
                    Transform your space with the timeless elegance of natural stone. Let's discuss your vision and bring it to life.
                </p>
                <Button className="rounded-none bg-black px-10 py-8 text-lg text-white hover:bg-primary hover:text-black">
                    Get A Quote
                </Button>
            </div>
        </section>
    );
}
