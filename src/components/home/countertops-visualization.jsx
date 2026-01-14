"use client";
import { HoverButton } from "@/components/ui/hoverbutton";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Eye, MapPin, Package } from "lucide-react";
import Image from "next/image";
import Section from "@/components/section";
import SampleOrderForm from "@/components/ui/sample-order-form";

const CountertopsVisualization = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSampleOpen, setIsSampleOpen] = useState(false);

    const dropdownOptions = {
        "Get in Touch": {
            description: "Find a showroom or a distributor near you",
            buttonText: "Contact Us",
            buttonVariant: "transparentBlack",
            href: "/contact-us"
        },
        "Order Sample": {
            description: "Get a taste of your new countertop with our sample kit",
            buttonText: "Order Sample",
            buttonVariant: "transparentBlack",
            onClick: () => setIsSampleOpen(true),
        }
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <Section className="p-0 my-6 md:my-10 md:min-h-screen bg-muted-foreground">
            <div className="md:min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:min-h-screen">
                    {/* Left Side - Full Screen Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.4  // Adds a 0.5s delay before animation starts
                        }}
                        viewport={{ once: true }}
                        className="relative h-full overflow-hidden hidden md:block"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full relative"
                        >
                            <Image
                                // src="https://images.pexels.com/photos/7693227/pexels-photo-7693227.jpeg"
                                src="https://images.pexels.com/photos/8770091/pexels-photo-8770091.jpeg"
                                alt="Woman designing countertops"
                                fill
                                className="w-full h-fit object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col py-10 sm:py-12 lg:py-20 px-6 sm:px-8 lg:px-12 xl:px-18 space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2 min-h-fit lg:min-h-full"
                    >
                        {/* Header */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl max-w-md font-thin text-gray-900 mb-4"
                            >
                                See your countertops come to life
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-base sm:text-lg lg:text-xl font-light text-foreground leading-relaxed"
                            >
                                Discover user-friendly tools that will help you browse our collections, samples and visualize colors that arouse your curiosity, and select your perfect countertops.
                            </motion.p>
                        </div>

                        {/* Interactive Accordion Items */}
                        <div className="">
                            {Object.entries(dropdownOptions).map(([title, data], index) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="overflow-hidden bg-transparent border-b border-black/10 transition-all duration-300"
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleDropdown(title)}
                                        className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between text-left cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            {title === "Get in Touch" && <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />}
                                            {title === "Order Sample" && <Package className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />}
                                            <span className="heading text-xl sm:text-2xl lg:text-3xl font-normal text-foreground">{title}</span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: activeDropdown === title ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                                        </motion.div>
                                    </button>

                                    {/* Accordion Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: activeDropdown === title ? "auto" : 0,
                                            opacity: activeDropdown === title ? 1 : 0
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden bg-transparent"
                                    >
                                        <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{
                                                    opacity: activeDropdown === title ? 1 : 0,
                                                    y: activeDropdown === title ? 0 : 10
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: activeDropdown === title ? 0.1 : 0
                                                }}
                                                className="flex flex-col items-start space-y-4"
                                            >
                                                <p className="text-base sm:text-lg font-light text-foreground leading-relaxed">{data.description}</p>
                                                <HoverButton
                                                    variant={data.buttonVariant}
                                                    text={data.buttonText}
                                                    {...(data.href ? { href: data.href } : { onClick: data.onClick })}
                                                />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <SampleOrderForm isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} />
        </Section>
    );
};

export default CountertopsVisualization;
