import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactSection() {
    return (
        <section className="relative py-10 md:py-16 lg:py-20 mb-5 md:mb-8 lg:mb-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/video-bg.png"
                    alt="Background"
                    fill
                    className="object-cover brightness-40"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-end">
                    {/* Left Side Content */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-background">
                            Come as You are And we Will Take Care of the Rest
                        </h2>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white p-8 md:p-12 lg:p-16 text-black shadow-lg mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="text-center md:text-left text-balance">
                            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                                <span className="mr-2 text-lg text-primary">¬</span> COMMON QUESTIONS
                            </span>
                            <h2 className="text-[1.6rem] md:text-5xl leading-[1.1] font-bold text-black">
                                Have Questions?
                                <span className="text-primary "> GET IN TOUCH</span>
                            </h2>
                        </div>

                        <form className="space-y-8 mt-8 md:mt-16">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black placeholder:text-neutral-400 font-light"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black placeholder:text-neutral-400 font-light"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black placeholder:text-neutral-400 font-light"
                                        type="tel"
                                        placeholder="Enter your number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black placeholder:text-neutral-400 font-light"
                                        placeholder="Project scope"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Textarea
                                    className="min-h-[50px] border-0 border-b border-neutral-200 px-0 rounded-none resize-none focus-visible:ring-0 focus-visible:border-black placeholder:text-neutral-400 font-light"
                                    placeholder="Your message here"
                                />
                            </div>

                            <Button>
                                SEND MESSAGE
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
