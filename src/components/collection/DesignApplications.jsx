"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const DesignApplications = ({ collection, products }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Application scenarios with images
  const applications = [
    {
      id: 1,
      title: "Kitchen Island",
      description: "Transform your culinary space with premium surfaces that combine beauty and functionality",
      image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857096/Black_Opal_Close_up_nmor9u.jpg",
      productName: products[0]?.name || "Premium Surface",
      environment: "Kitchen"
    },
    {
      id: 2,
      title: "Bathroom Counter",
      description: "Create a spa-like atmosphere with elegant, water-resistant surfaces",
      image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857164/Bianco_Tiffone_Close_up_sfp68d.jpg",
      productName: products[1]?.name || "Luxury Surface",
      environment: "Bathroom"
    },
    {
      id: 3,
      title: "Outdoor Wall",
      description: "Bring sophistication to exterior spaces with weather-resistant materials",
      image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857160/Arabescato_Close_up_tyrzgn.jpg",
      productName: products[2]?.name || "Outdoor Surface",
      environment: "Exterior"
    },
    {
      id: 4,
      title: "Retail Interior",
      description: "Make a statement in commercial spaces with durable, stunning surfaces",
      image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857231/Masseto_Close_up_1_usqg2t.jpg",
      productName: products[3]?.name || "Commercial Surface",
      environment: "Commercial"
    }
  ];

  // Transform values for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Section Header */}
      <motion.div
        ref={ref}
        className="relative z-20 pt-20 pb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Design Applications
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
          See how {collection.name} transforms spaces across different environments
        </p>
      </motion.div>

      {/* Sticky Scroll Container */}
      <div className="relative">
        {applications.map((app, index) => {
          const targetRef = useRef(null);
          const { scrollYProgress: itemProgress } = useScroll({
            target: targetRef,
            offset: ["start end", "end start"]
          });

          const itemY = useTransform(itemProgress, [0, 0.5, 1], ['100%', '0%', '-100%']);
          const itemOpacity = useTransform(itemProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
          const scale = useTransform(itemProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

          return (
            <motion.div
              key={app.id}
              ref={targetRef}
              className="sticky top-0 h-screen flex items-center justify-center"
              style={{ y: itemY, opacity: itemOpacity }}
            >
              <div className="relative w-full h-full">
                {/* Background Image with Parallax */}
                <motion.div
                  className="absolute inset-0"
                  style={{ y, scale }}
                >
                  {app.image ? (
                    <Image
                      src={app.image}
                      alt={app.title || 'Application image'}
                      width={auto}
                      height={auto}
                      className="object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/50" />
                </motion.div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                  <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Environment Tag */}
                    <motion.div
                      className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {app.environment}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-4xl md:text-6xl font-bold mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {app.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      {app.description}
                    </motion.p>

                    {/* Product Name */}
                    <motion.div
                      className="text-lg text-gray-300 mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Featuring: <span className="font-semibold text-white">{app.productName}</span>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      className="px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore This Application
                    </motion.button>
                  </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex gap-2">
                    {applications.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-white' : 'bg-white/30'
                          }`}
                        animate={{ scale: i === index ? 1.2 : 1 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Tab Switcher (Alternative to scroll animation) */}
      <div className="md:hidden relative z-30 bg-gray-900 py-8">
        <div className="px-4">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {applications.map((app, index) => (
              <button
                key={app.id}
                className="flex-shrink-0 px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                {app.environment}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignApplications;
