"use client";
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export default function HoverExpand({
  images,
  initialSelectedIndex = 0,
  thumbnailHeight = 300,
  modalImageSize = 600,
  maxThumbnails = 11
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    };
  }, [isModalOpen])

  return (
    <div className="relative w-full max-w-7xl mx-auto p-2 sm:p-4">
      <div className="flex w-full gap-1 sm:gap-2 md:gap-3 rounded-lg overflow-hidden">
        {images.slice(0, maxThumbnails).map((image, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ease-in-out cursor-pointer ${selectedIndex === i
              ? "flex-[2] sm:flex-[3] md:flex-[4]"
              : "flex-[0.3] sm:flex-[0.5] md:flex-[1]"
              }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}>
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <Image
                src={image.url}
                alt={image.title}
                width={600}
                height={400}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Text overlay - only show when expanded */}
            <AnimatePresence>
              {selectedIndex === i && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white z-10 flex flex-col gap-1"

                >
                  <motion.h3
                    className="heading text-sm sm:text-base md:text-lg lg:text-xl font-bold drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {images[selectedIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-xs sm:text-sm md:text-base opacity-90 drop-shadow-md hidden sm:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.1, delay: 0.2 }}
                  >
                    {images[selectedIndex].description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/40 backdrop-blur-md "
            onClick={() => setIsModalOpen(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl max-w-4xl w-full mx-2 sm:mx-4">
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative w-full"
              >
                <Image
                  src={images[selectedIndex].url}
                  alt={images[selectedIndex].title}
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover"
                />
                {/* Text overlay in modal */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 md:p-8">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
                    {images[selectedIndex].title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-white/90 drop-shadow-md">
                    {images[selectedIndex].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

