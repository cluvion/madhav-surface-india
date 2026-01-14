"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const CollectionStory = ({ collection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl container mx-auto px-4">
        {/* <div className="grid lg:grid-cols-2 gap-16 items-center">
          Text Content
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Collection Story
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              "Designed for those who don't compromise on aesthetics."
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {collection.description}
            </motion.p>
          </motion.div>

          Mood Board Grid
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {collection.moodBoardImages?.map((image, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 h-64' : 'h-48'
                  }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`${collection.name || 'Collection'} mood ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}

                Texture Reveal Overlay
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-0 items-center ">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="heading font-thin relative z-10 lg:max-w-2xl text-3xl sm:text-4xl lg:text-5xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {collection.name?.slice(16) || []} Story
            </motion.h2>

            <motion.p
              className="space-y-1 font-medium text-base sm:text-lg max-w-2xl md:pt-2 pt-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {collection.tagline}
            </motion.p>

            <motion.p
              className="font-light text-base sm:text-lg max-w-xl md:py-4 py-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {collection.description}
            </motion.p>
          </motion.div>

          {/* Mood Board Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            {collection.moodBoardImages?.map((image, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 h-64' : 'h-48'
                  }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`${collection.name || 'Collection'} mood ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}

                {/* Texture Reveal Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Optional Video Section */}
        {/* {collection.conceptVideo && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 md:h-96 object-cover"
              >
                <source src={collection.conceptVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-foreground/20" />
            </div>
          </motion.div>
        )} */}
      </div>
    </section>
  );
};

export default CollectionStory;
