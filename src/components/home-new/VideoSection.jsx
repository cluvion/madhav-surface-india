"use client"
import React from "react";
import {
    Video
} from "@/components/ui/video";
import Image from "next/image";
import { motion } from "motion/react";

export default function VideoSection() {
    return (
        <section className="mt-8 md:mt-12 lg:mt-14 bg-foreground ">
            {/* Background Image/Text Overlay */}
            {/* <div className="absolute inset-0 bg-[url('/assets/bg.webp')]  h-full w-full bg-center opacity-100" /> */}

            <div className="relative">
                {/* <div className="absolute top-[-340] flex items-center justify-center w-full h-full "> */}
                {/* <h2 className="z-1 absolute inset-0 top-5 md:top-0 text-center select-none text-[14vw] font-bold bg-gradient-to-b from-white/80 via-black to-black/60 bg-clip-text text-transparent">
                    Marble & Tiles
                </h2> */}
                {/* <h2 className="z-1 absolute inset-0 text-center text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold bg-gradient-to-b from-white/70 via-white/0 to-transparent bg-clip-text text-transparent">
                    Marble & Tiles
                </h2> */}
                {/* </div> */}

                <Image
                    src="/assets/video-bg.png"
                    alt="Hero Background"
                    width={1920}
                    height={1080}
                    className="object-cover aspect-[16/8] min-h-[350px]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/60" />

                <div className="z-10 absolute top-0 bottom-0 left-0 right-0 pt-12 md:pt-32">
                    <Video />
                </div>
            </div>
        </section>
    );
}
