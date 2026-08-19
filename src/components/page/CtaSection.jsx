import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="w-full">
            {/* Top Section with Background */}
            <div 
                className="relative bg-cover bg-center py-20 md:py-32 flex items-center min-h-[500px]"
                style={{ backgroundImage: "url('/images/Wind Mill Photo.png')" }}
            >
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl">
                        <h2 className="heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                            Powered in part by the wind.
                        </h2>
                        <div className="w-16 h-[2px] bg-foreground mb-8"></div>
                        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed max-w-md">
                            Clean energy for a cleaner tomorrow. Our captive wind power helps reduce emissions and drive responsible manufacturing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section with Dark Background */}
            <div className="bg-[#182820] py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div className="max-w-xl text-white">
                        <h2 className="heading text-4xl md:text-5xl lg:text-6xl mb-6">
                            Tell us what you<br />
                            are sourcing.
                        </h2>
                        <div className="w-16 h-[2px] bg-white mb-8"></div>
                        <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-md">
                            Share the material, format, quantity and destination. Our team will help identify the right options.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Link href="/contact-us" className="w-full">
                            <Button 
                                arrow={false} 
                                className="w-full bg-white text-black hover:bg-gray-200 rounded-none px-8 py-4 text-base font-semibold normal-case tracking-normal"
                            >
                                Start an Enquiry
                            </Button>
                        </Link>
                        <Link href="/products" className="w-full">
                            <Button 
                                variant="outline" 
                                arrow={false} 
                                className="w-full bg-transparent text-white border-white hover:bg-white/10 hover:text-white rounded-none px-8 py-4 text-base font-semibold normal-case tracking-normal"
                            >
                                View Ready Stock
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
