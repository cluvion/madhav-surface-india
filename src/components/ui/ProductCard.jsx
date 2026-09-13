import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product, onQuickView, imageClassName, aspectClassName }) {
    return (
        <motion.div
            className="flex flex-col relative overflow-hidden"
        >
            <Link href={`/products/${product.id}`} className={`group relative ${aspectClassName || 'aspect-square'} overflow-hidden mb-2 block`}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={imageClassName || "object-cover object-bottom scale-[1.4] transition-transform duration-500 group-hover:scale-[1.45]"}
                />
                {/* Quick View Overlay (Desktop) */}
                {/* <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                /> */}
                {/* Quick View Overlay (Desktop) */}
                {/* <div className="hidden lg:flex absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 justify-center">
                    <Button
                        arrow={false}
                        variant="secondary"
                        className="h-14 w-14 cursor-pointer rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground flex items-center justify-center p-0"
                        onClick={(e) => {
                            e.preventDefault();
                            onQuickView(product);
                        }}
                    >
                        <Eye className="w-6 h-6 cursor-pointer" />
                    </Button>
                </div> */}
            </Link>

            {/* Info */}
            <div className="p-4 flex flex-col gap-3">
                <Link href={`/products/${product.id}`} className="text-center space-y-1 block">
                    <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-foreground/50">{product.category || product.collection}</p>
                    {product.description && (
                        <p className="text-sm text-foreground/70 line-clamp-1 mt-2">
                            {product.description}
                        </p>
                    )}
                </Link>

                {/* Buttons Row */}
                <div className="flex gap-2 justify-center pt-4">
                    <Button asChild className="w-full" variant="secondary">
                        <Link href={`/products/${product.id}`}>
                            View Details
                        </Link>
                    </Button>
                    {/* Quick View Button (Mobile/Tablet Only) */}
                    {/* <Button
                        // variant="outline"
                        // size="icon"
                        arrow={false}
                        className="lg:hidden shrink-0 h-full w-9"
                        onClick={() => onQuickView(product)}
                    >
                        <Eye className="w-4 h-4" />
                    </Button> */}
                </div>
            </div>

        </motion.div>
    );
}
