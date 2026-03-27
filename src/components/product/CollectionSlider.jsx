// import { useState } from 'react';
// import Section from '../section';
// import { products } from '@/constants/index';
// import ProductCard from '@/components/ui/ProductCard';
// import QuickViewModal from '@/components/ui/QuickViewModal';

// const CollectionSlider = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <Section>
//       {/* Section Header */}
//       <div className="text-center md:text-left">
//         <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-foreground">
//           Related
//           <span className="text-primary "> Products</span>
//         </h2>
//       </div>

//       {/* Project Carousel Section */}
//       <div className="relative mt-8 md:mt-16">
//         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.slice(0, 6).map((product) => (
//             <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
//           ))}
//         </div>
//       </div>

//       <QuickViewModal selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
//     </Section>
//   );
// };

// export default CollectionSlider;
