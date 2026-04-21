"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuickViewModal({ selectedProduct, onClose }) {
    return (
        <AnimatePresence>
            {selectedProduct && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="bg-card w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl relative flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 p-2 bg-foreground/20 rounded-full hover:bg-foreground/40 text-white transition-colors"
                            onClick={onClose}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full md:w-1/2 relative aspect-square overflow-hidden bg-muted">
                            <Image
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                fill
                                className="object-cover object-bottom scale-150"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-bold font-heading">{selectedProduct.name}</h2>
                            <p className="text-foreground/50">{selectedProduct.category || selectedProduct.collection}</p>
                            <div className="text-sm text-foreground/80 leading-relaxed">
                                <p>{selectedProduct.description || `Experience the premium quality of ${selectedProduct.name}. Perfect for modern interiors and architectural masterpieces.`}</p>
                            </div>
                            <Button className="w-full mt-4" asChild>
                                <a href="/contact-us">Enquire Now</a>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
