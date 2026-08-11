import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Section from "../section";

export default function ContactSection() {
    return (
        // <section className="relative my-8 md:my-12 lg:my-14 py-8 md:py-12 lg:py-14">
        <Section>
            {/* Background Image */}
            {/* <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/video-bg.png"
                    alt="Background"
                    fill
                    className="object-cover brightness-40"
                    priority
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div> */}

            <div className="container relative z-9 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-end">
                    {/* Left Side Content */}
                    <div className="max-w-xl">
                        <h2 className="heading font-thin text-4xl md:text-5xl lg:text-7xl text-foreground text-center lg:text-left mb-6">
                            Ready to Elevate Your Next Project?
                        </h2>
                        <p className="text-lg text-foreground/80 mb-8 text-center lg:text-left">
                            Whether you need bulk container shipments or custom-cut slabs for an architectural project, our natural stone experts are here to assist you.
                        </p>
                        <div className="space-y-4 text-foreground/90 flex flex-col items-center lg:items-start text-left">
                            <div className="flex items-center gap-3">
                                <span className="text-primary text-xl">📞</span>
                                <span><strong>Direct WhatsApp:</strong> <a href="https://wa.me/918875023456" className="hover:text-primary transition-colors">+91 88750 23456</a></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-primary text-xl">📍</span>
                                <span><strong>Location:</strong> Salem, Tamil Nadu, India | Worldwide Distribution</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-primary text-xl">✉️</span>
                                <span><strong>Get a Custom Quote:</strong> Contact Our Sales Team</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-foreground p-8 md:p-12 lg:p-16 text-foreground shadow-lg mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="text-center md:text-left text-balance">
                            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4 text-white">
                                <span className="mr-2 text-lg text-primary">¬</span> COMMON QUESTIONS
                            </span>
                            <h2 className="heading font-thin text-[1.6rem] md:text-5xl leading-[1.1] text-white">
                                Have Questions? GET IN TOUCH
                                {/* <span className="text-primary "> GET IN TOUCH</span> */}
                            </h2>
                        </div>

                        <form className="space-y-8 mt-8 md:mt-16">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder:text-neutral-400 font-light text-white"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder:text-neutral-400 font-light text-white"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder:text-neutral-400 font-light text-white"
                                        type="tel"
                                        placeholder="Enter your number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder:text-neutral-400 font-light text-white"
                                        placeholder="Project scope"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Textarea
                                    className="min-h-[50px] border-0 border-b border-neutral-200 px-0 rounded-none resize-none focus-visible:ring-0 focus-visible:border-white placeholder:text-neutral-400 font-light text-white"
                                    placeholder="Your message here"
                                />
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <Button>
                                    SEND MESSAGE
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        {/* </section> */}
        </Section>
    );
}
