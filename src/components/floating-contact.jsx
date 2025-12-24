"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Package } from 'lucide-react';
import SampleOrderForm from '@/components/ui/sample-order-form';

const FloatingContact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Show button after scrolling 200px
            setIsVisible(scrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleWhatsApp = () => {
        window.open('https://wa.me/+96896456778', '_blank');
    };

    const handleSampleOrder = () => {
        setIsFormOpen(true);
    };

    return (
        <>
            <div className="fixed bottom-10 md:bottom-5 z-50 right-5 flex flex-col gap-3">
                <AnimatePresence>
                    {isVisible && (
                        <>
                            {/* Sample Order Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleSampleOrder}
                                className="bg-gradient-to-r from-primary to-primary/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                                aria-label="Order Samples"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: -10 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                            >
                                <Package className="w-7 h-7 md:w-8 md:h-8 text-white" />
                            </motion.button>

                            {/* WhatsApp Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleWhatsApp}
                                className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                                aria-label="Contact on WhatsApp"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: -10 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <Image
                                    src={"/assets/WhatsappHeader.svg"}
                                    alt="WhatsApp"
                                    width={32}
                                    height={32}
                                    className="w-7 h-7 md:w-8 md:h-8"
                                />
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Sample Order Form */}
            <SampleOrderForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </>
    );
};

export default FloatingContact;