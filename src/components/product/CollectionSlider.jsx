import Section from '../section';

const CollectionSlider = () => {

  return (
    <Section>
      {/* Section Header */}
      <div className="text-center md:text-left">
        <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black">
          Related
          <span className="text-primary "> Products</span>
        </h2>
      </div>

      {/* Project Carousel Section */}
      <div className="relative mt-8 md:mt-16">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setSelectedProduct} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CollectionSlider;
