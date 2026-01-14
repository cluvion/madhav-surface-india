"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StoneOverlays() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax transforms
    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 480]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const x3 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const x4 = useTransform(scrollYProgress, [0, 1], [1000, -200]);

    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-10 hidden lg:block overflow-hidden"
        >
            {/* Stone 3 - Between About & Stats (approx 15-20%) */}
            <motion.div
                style={{ y: y1, x: x1, rotate: rotate1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-[19%] left-[20%] w-[250px]"
            >
                <Image
                    src="/assets/stones/stone3.png"
                    alt="Decorative Stone"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* Stone 4 - Between Process & Collection (approx 45%) */}
            <motion.div
                style={{ y: y2, x: x2, rotate: rotate2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-[42%] right-[-5%] w-[250px] "
            >
                <Image
                    src="/assets/stones/stone4.png"
                    alt="Decorative Stone"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* Stone 5 - Between Product & Testimonials (approx 70%) */}
            <motion.div
                style={{ y: y3, x: x3, rotate: rotate1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-[55%] left-[-8%] w-[250px] "
            >
                <Image
                    src="/assets/stones/stone5.png"
                    alt="Decorative Stone"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </motion.div>

            {/* Stone 6 - Near Footer/Blog (approx 90%) */}
            <motion.div
                style={{ y: y4, x: x4, rotate: rotate2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-[82%] right-[-2%] w-[300px] "
            >
                <Image
                    src="/assets/stones/stone6.png"
                    alt="Decorative Stone"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </motion.div>
        </div>
    );
}
