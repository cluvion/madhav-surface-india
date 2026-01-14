"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mountain, Search, Cog, Sparkles, Truck } from "lucide-react";
import Image from "next/image";
import Heading from "@/components/heading";
import { useState, useRef, useEffect } from "react";

const QuarryJourney = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null); const journeySteps = [
    {
      "icon": Mountain,
      "title": "Quarry Selection",
      "description": "Elite global quarries, handpicked for premium quality.",
      "image": "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604548/DSC_5128_copy_wmw0zo.jpg",
      "details": ["Global sourcing", "Quality checks", "Sustainable stone"]
    },
    {
      "icon": Search,
      "title": "Expert Selection",
      "description": "Every slab meticulously inspected for absolute perfection.",
      "image": "https://res.cloudinary.com/dljiyumfx/image/upload/v1757610521/DSC_5179_jqoq4j.avif",
      "details": ["Hand-selected", "Vein matching", "Color graded"]
    },
    {
      "icon": Cog,
      "title": "Precision Processing",
      "description": "Advanced tech and artisan craft for flawless slabs.",
      "image": "https://res.cloudinary.com/dljiyumfx/image/upload/v1757610688/DSC_5209_xkirzv.avif",
      "details": ["CNC cutting", "Edge work", "Surface prep"]
    },
    {
      "icon": Sparkles,
      "title": "Finishing Excellence",
      "description": "Luxury custom finishes, polished to sheer perfection.",
      "image": "https://images.pexels.com/photos/6568677/pexels-photo-6568677.jpeg",
      "details": ["Polishing", "Textures", "QC passed"]
    },
    {
      "icon": Truck,
      "title": "Secure Delivery",
      "description": "Climate-safe transport, flawless professional install.",
      "image": "https://images.pexels.com/photos/18446790/pexels-photo-18446790.jpeg",
      "details": ["Protected", "Global shipping", "Expert install"]
    }
  ];

  // Handle scroll progress for mobile
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <Heading title="From Quarry to Luxury" />
        </motion.div>

        {/* Journey Timeline */}
        <div ref={ref} className="relative">
          {/* Mobile Horizontal Scroll Container */}
          <div className="md:hidden mb-4">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            >
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-none w-72 snap-center"
                >
                  {/* Mobile Card */}
                  <div className="bg-card rounded-2xl p-4 shadow-lg border border-border h-full">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-foreground text-sm mb-3 leading-relaxed font-light">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-1 mb-4">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Image */}
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={300}
                        height={190}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Progress Line */}
            <div className="relative mt-6 mx-8">
              <div className="h-1 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              {/* Progress Steps */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
                {journeySteps.map((_, index) => {
                  const stepProgress = (scrollProgress / 100) * (journeySteps.length - 1);
                  const isActive = stepProgress >= index;
                  return (
                    <div
                      key={index}
                      className={`w-3 h-3 border-2 border-white rounded-full shadow-sm transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-gray-300'
                        }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="flex absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-background border-4 border-primary rounded-full items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-medium text-primary">{index + 1}</span>
                </div>

                {/* Desktop Card */}
                <div className="bg-card h-auto min-h-full rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-medium text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-foreground text-sm mb-4 leading-relaxed font-light">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1 mb-4">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Image */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default QuarryJourney;