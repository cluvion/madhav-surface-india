// "use client";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Heading from "@/components/heading";
// import { HoverButton } from "../ui/hoverbutton";

// const ProductCarousel = ({
//   products = [],
//   title = "Featured Products",
//   showNewBadge = false,
//   className = ""
// }) => {
//   const scrollContainerRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScrollButtons = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//     }
//   };

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 320; // Width of one card plus gap
//       const newScrollLeft = scrollContainerRef.current.scrollLeft +
//         (direction === 'left' ? -scrollAmount : scrollAmount);

//       scrollContainerRef.current.scrollTo({
//         left: newScrollLeft,
//         behavior: 'smooth'
//       });

//       setTimeout(checkScrollButtons, 300);
//     }
//   };

//   if (!products || products.length === 0) {
//     return null;
//   }

//   return (
//     <section className={`py-6 md:py-10 pt-12 md:pt-20 ${className}`}>
//       <div className="max-w-7xl mx-auto pl-8 lg:pl-0 ">
//         {/* Section Header */}
//         <motion.div
//           className="flex items-center justify-between"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Heading title={title} />
//         </motion.div>

//         {/* Carousel Container */}
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             onScroll={checkScrollButtons}
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 className="flex-shrink-0 w-72 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 {/* Product Image Container */}
//                 <div className="relative aspect-[3/4] bg-gray-100">
//                   {showNewBadge && (
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className="bg-white text-red-600 text-xs px-2 rounded">
//                         New
//                       </span>
//                     </div>
//                   )}

//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-300"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4">
//                   <div className="mb-3">
//                     <h3 className="text-lg font-medium text-gray-900 mb-1">
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       {product.collection}
//                     </p>
//                     {product.finish && (
//                       <p className="text-xs text-gray-500 mt-1">
//                         {product.finish} Surface
//                       </p>
//                     )}
//                   </div>

//                   {/* Order Sample Button */}
//                   {/* <button
//                     onClick={() => handleOrderSample(product)}
//                     className="w-full py-2.5 px-4 border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-900 hover:text-white transition-all duration-200"
//                   >
//                     Order Sample
//                   </button> */}
//                   <HoverButton
//                     href={`/product/${product.id}`}
//                     text="More Details"
//                     variant="transparentBlack"
//                     width={"w-full"}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Navigation Indicators */}
//           {/* <div className="flex md:hidden justify-center mt-4 gap-2">
//             {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
//               <div
//                 key={index}
//                 className="w-2 h-2 rounded-full bg-gray-300"
//               />
//             ))}
//           </div> */}
//         </motion.div>

//         {/* Navigation Buttons */}
//         <div className="space-x-2 lg:flex items-center justify-end">
//           <button
//             onClick={() => scroll('left')}
//             disabled={!canScrollLeft}
//             className={`p-2 rounded-full border transition-all duration-200 ${canScrollLeft
//               ? 'border-gray-900 cursor-pointer'
//               : 'border-gray-400 opacity-50 cursor-not-allowed'
//               }`}
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-600" />
//           </button>
//           <button
//             onClick={() => scroll('right')}
//             disabled={!canScrollRight}
//             className={`p-2 rounded-full border transition-all duration-200 ${canScrollRight
//               ? 'border-gray-900 cursor-pointer'
//               : 'border-gray-400 opacity-50 cursor-not-allowed'
//               }`}
//           >
//             <ChevronRight className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>
//       </div>


//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProductCarousel;
