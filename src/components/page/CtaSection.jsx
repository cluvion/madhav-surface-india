import React from "react";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import Link from "next/link";

export default function CtaSection() {
    return (
        <Section>
            <div className="flex flex-col items-center text-center">
                <h2 className="heading mb-4 md:mb-8 text-4xl md:text-7xl lg:text-8xl">
                    Ready To Start?
                </h2>
                <p className="mx-auto mb-5 md:mb-10 max-w-2xl text-base md:text-lg text-foreground/50">
                    Transform your space with the timeless elegance of natural stone. Let's discuss your vision and bring it to life.
                </p>
                <Link href="/contact-us">
                    <Button>
                        Contact Us
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
