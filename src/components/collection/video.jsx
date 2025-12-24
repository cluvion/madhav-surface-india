"use client"
import { motion } from "framer-motion";

function Video({ collection }) {
    return (
        collection.heroVideo && (
            <motion.div
                className="mx-8 md:mx-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-64 md:h-[70vh] object-cover"
                    >
                        <source src={collection.heroVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </motion.div>
        )
    )
}

export default Video