import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product, onQuickView }) {
    return (
        <motion.div
            layoutId={`product-card-${product.id}`}
            className="flex flex-col relative overflow-hidden"
        >
            <div className="group relative aspect-square overflow-hidden mb-2">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick View Overlay (Desktop) */}
                <div className="hidden lg:flex absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 justify-center">
                    <Button
                        arrow={false}
                        size="icon"
                        variant="secondary"
                        className="p-6 cursor-pointer rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground"
                        onClick={() => onQuickView(product)}
                    >
                        <Eye className="w-5 h-5 cursor-pointer" />
                    </Button>
                </div>
            </div>
            <div className="text-center space-y-1">
                <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-foreground/50">{product.category}</p>
            </div>

            {/* Buttons Row */}
            <div className="flex gap-2 justify-center pt-4">
                <Button asChild className="w-full" variant="secondary">
                    <Link href={`/products/${product.id}`}>
                        View Details
                    </Link>
                </Button>
                {/* Quick View Button (Mobile/Tablet Only) */}
                <Button
                    // variant="outline"
                    // size="icon"
                    arrow={false}
                    className="lg:hidden shrink-0 h-full w-9"
                    onClick={() => onQuickView(product)}
                >
                    <Eye className="w-4 h-4" />
                </Button>
            </div>
        </motion.div>
    );
}
