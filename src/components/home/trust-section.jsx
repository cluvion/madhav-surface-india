"use client";
import AnimatedNumber from "../ui/animated-number";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { HoverButton } from "../ui/hoverbutton";
import Image from "next/image";
import Section from "@/components/section";

const TrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      number: 35,
      suffix: "+",
      label: "Years of Experience",
      description: "Crafting premium surfaces with unmatched expertise"
    },
    {
      number: 50,
      suffix: "+",
      label: "Countries Served",
      description: "Global reach with local craftsmanship"
    },
    {
      number: 500,
      suffix: "+",
      label: "Stone Varieties",
      description: "Curated collection from world's finest quarries"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "LEED Compliant Materials",
    "CE Marking Standards",
    "Green Building Council"
  ];

  return (
    <Section className="py-6 md:py-10 pt-12 md:pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            <div className="flex-none relative z-10 md:space-y-4 space-y-2 text-left">
              <h2 className="heading font-thin relative z-10 lg:max-w-2xl text-3xl sm:text-4xl lg:text-5xl leading-tight">About Madhav Surfaces</h2>

              <p className="font-light text-base sm:text-lg max-w-2xl md:py-2 py-1 mb-4">
                Since its establishment, Madhav Surfaces has been perhaps the most trusted and eminent manufacturers of Quartz surfaces on the lookout. We are a subsidiary of Madhav Marbles And Granites Ltd., a pioneer natural stone exporter from India, and Khimji Ramdas, one of the leading business conglomerates in Oman.
              </p>

              <div className="flex justify-start">
                <HoverButton
                  text="About Us"
                  variant="transparentBlack"
                  href="/about-us"
                />
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% lg:block"></div>
              <div className=" relative p-2 hidden lg:block">
                <Image src="/assets/logo1.png" alt="payments illustration dark" width={500} height={600}
                  className="w-full h-auto max-w-sm mx-auto lg:max-w-none" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center items-center pb-6 md:py-16">
          <p className="font-light text-base sm:text-lg text-center md:py-2 py-1 mb-4">
            Our state-of-the-art infrastructural set-up is located in Oman, with the most technologically advanced machinery and hardware installed.
          </p>
          <div className="flex justify-center items-center gap-2 md:gap-12">
            <Image
              src="/assets/madhav_surface_icon2.png"
              alt="payments illustration dark"
              width={250} height={250}
              className="w-32 h-auto md:w-48 md:h-auto lg:w-60 lg:h-auto"
            />
            <Image
              src="/assets/madhav_surface_icon.png"
              alt="payments illustration dark"
              width={250} height={250}
              className="w-32 h-auto md:w-48 md:h-auto lg:w-60 lg:h-auto"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8">
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16"> */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group-hover:border-primary/30">
                <div className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-primary mb-2 sm:mb-3 md:mb-4'>
                  <AnimatedNumber
                    springOptions={{
                      bounce: 0,
                      duration: 3000,
                    }}
                    value={inView ? stat.number : 0}
                  />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-xl text-foreground mb-3">
                  {stat.label}
                </h3>
                {/* <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Crafted by Nature, Perfected by Us
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every slab tells a story millions of years in the making. We honor that legacy
                by selecting only the finest materials from quarries across the globe, then
                applying cutting-edge processing techniques to reveal their natural beauty.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From the volcanic depths of Italy to the pristine quarries of Brazil,
                our sourcing network ensures you have access to the world's most
                extraordinary stone varieties.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-[url('https://res.cloudinary.com/dljiyumfx/image/upload/v1753857254/Black_Caspian_Gold_gig49g.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural Stone</div>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certified Excellence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-xl shadow-md border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="text-sm font-medium text-card-foreground">{cert}</div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </Section>
  );
};

export default TrustSection;