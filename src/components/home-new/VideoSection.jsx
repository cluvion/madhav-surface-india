"use client"
import React from "react";
import {
    Video
} from "@/components/ui/video";
import Image from "next/image";
import { motion } from "motion/react";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <section className="mt-8 md:mt-12 lg:mt-14 bg-foreground ">
            <div className="relative">
                <div className="relative aspect-[7/3]">
                    <Image
                        src="/assets/video-bg.png"
                        alt="Hero Background"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/60" />

                <div className="z-10 absolute inset-0 flex items-center justify-center px-4 md:px-0">
                    {/* <Video /> */}
                    {!isPlaying ? (
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="group flex flex-col items-center justify-center w-24 h-24 md:w-34 md:h-34 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-primary cursor-pointer"
                        >
                            <span className="text-white text-xl md:text-3xl font-bold">Play</span>
                        </button>
                    ) : (
                        <div className="relative w-full max-w-[60%]">
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute -top-7 right-0 text-white hover:text-primary transition-colors text-lg font-medium flex items-center gap-2"
                            >
                                <span className=" w-4 h-7 flex items-center justify-center border-current">×</span>
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                className="aspect-video w-full rounded-lg shadow-2xl"
                                src="https://www.youtube.com/embed/XUfgEQyDSZ8?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
