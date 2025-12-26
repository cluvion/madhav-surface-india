import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
    return (
        <section className="relative bg-neutral-900 py-20 text-white md:py-32">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-30" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">
                            Contact Us
                        </span>
                        <h2 className="heading mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
                            Have Questions <br />
                            Get In Touch
                        </h2>
                        <p className="mb-8 max-w-md text-neutral-400">
                            Reach out to our experts for consultation on your next project. We are here to help you choose the perfect stone.
                        </p>

                        <div className="space-y-4 text-sm tracking-widest text-white">
                            <p>INFO@MADHAVSURFACES.COM</p>
                            <p>+91 123 456 7890</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 text-black md:p-12">
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">First Name</label>
                                    <Input className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Last Name</label>
                                    <Input className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email Address</label>
                                <Input className="border-0 border-b border-neutral-200 px-0 rounded-none focus-visible:ring-0 focus-visible:border-black" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Message</label>
                                <Textarea className="min-h-[100px] border-0 border-b border-neutral-200 px-0 rounded-none resize-none focus-visible:ring-0 focus-visible:border-black" placeholder="How can we help you?" />
                            </div>
                            <Button className="w-full rounded-none bg-black py-6 text-white hover:bg-primary hover:text-black">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
