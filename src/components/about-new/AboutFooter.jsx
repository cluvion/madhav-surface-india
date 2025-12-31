import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutFooter() {
    return (
        <section className="bg-white py-20 text-center">
            <div className="container mx-auto px-4 md:px-6">
                <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-foreground/50">
                    Contact In Touch Us
                </span>
                <h2 className="heading mb-8 text-4xl leading-tight md:text-5xl lg:text-7xl">
                    Do You Need Help Anything?
                </h2>
                <div className="mx-auto mb-10 max-w-xl">
                    <p className="mb-8 text-neutral-400">
                        Receive email updates on new product announcements, gift ideas, special promotions, sales and more.
                    </p>
                    <div className="flex w-full items-center border-b border-neutral-300 pb-2">
                        <input
                            type="email"
                            placeholder="Your Email..."
                            className="w-full bg-transparent p-2 outline-none focus:ring-0"
                        />
                        <button className="rounded-full bg-primary p-2 text-white hover:bg-[#b5952f]">
                            <ArrowLeft className="h-4 w-4 rotate-180" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
