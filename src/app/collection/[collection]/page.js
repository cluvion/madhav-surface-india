"use client";
import { useState, useEffect, useRef, use } from "react";
import { products } from "@/constants/index";
import HeroSection from "@/components/collection/HeroSection";
import CollectionStory from "@/components/collection/CollectionStory";
import ProductShowcase from "@/components/collection/ProductShowcase";
import DesignApplications from "@/components/collection/DesignApplications";
import TechnicalSpecs from "@/components/collection/TechnicalSpecs";
import ModernSKUShowcase from "@/components/collection/ModernSKUShowcase";
import ExploreCollections from "@/components/collection/ExploreCollections";
import ProductGrid from "@/components/collection/ProductGrid";
import { motion } from "framer-motion";
import ScrollStack from '@/components/ui/scroll-stack';
import Video from '@/components/collection/video';
import { generateMetadata as generateSEOMetadata, collectionMetadata, generateBreadcrumbSchema } from "@/lib/seo";

// Metadata will be handled by layout.js since this is a client component

const CollectionPage = ({ params }) => {
  const { collection } = use(params);
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [collectionData, setCollectionData] = useState({});
  const [isValidCollection, setIsValidCollection] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);

  // Collection metadata
  const collectionMetadata = {
    "bedrock": {
      name: "Introducing the Bedrock Collection",
      tagline: "Luxury Without Limits",
      description:
        "The Bedrock Collection is the foundation of strength and style. Inspired by the resilience of natural stone, it delivers enduring durability with a bold, grounded elegance fit for modern living.",
      heroVideo:
        "https://videos.pexels.com/video-files/6328481/6328481-uhd_2732_1440_25fps.mp4",
      heroImage:
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857096/Black_Opal_Close_up_nmor9u.jpg",
      moodBoardImages: [
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857096/Black_Opal_Close_up_nmor9u.jpg",
      ],
      conceptVideo: null,
      skuCount: 15,
      finishTypes: ["polished", "honed", "brushed"],
    },

    "pinnacle": {
      name: "Introducing the Pinnacle Collection",
      tagline: "Nature's Grandeur",
      description:
        "The Pinnacle Collection captures the raw beauty of towering peaks and timeless landscapes. Each surface mirrors nature’s grandeur, bringing texture, depth, and an elevated presence into any space.",
      heroVideo:
        "https://videos.pexels.com/video-files/3015535/3015535-hd_1920_1080_24fps.mp4",
      heroImage:
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857147/Sahara_Eclipse_Close_up_1_qfmugw.jpg",
      moodBoardImages: [
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857147/Sahara_Eclipse_Close_up_1_qfmugw.jpg",
      ],
      conceptVideo: null,
      skuCount: 12,
      finishTypes: ["polished", "honed"],
    },

    "opulence": {
      name: "Introducing the Opulence Collection",
      tagline: "The Pinnacle of Luxury",
      description:
        "The Opulence Collection redefines indulgence with striking patterns and rich finishes. Crafted for statement interiors, it radiates sophistication and exclusivity in every detail.",
      heroVideo:
        "https://res.cloudinary.com/dljiyumfx/video/upload/v1755086599/0_Man_Suit_1920x1080_yphpao.mp4",
      heroImage:
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857231/Masseto_Close_up_1_usqg2t.jpg",
      moodBoardImages: [
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857231/Masseto_Close_up_1_usqg2t.jpg",
      ],
      conceptVideo: null,
      skuCount: 18,
      finishTypes: ["polished", "honed", "natural"],
    },

    "silicalite": {
      name: "Introducing the Silicalite Collection",
      tagline: "Contemporary Elegance",
      description:
        "The Silicalite Collection brings sleek minimalism into focus. With refined textures and subtle tones, it’s the go-to choice for contemporary designs that value clarity and simplicity.",
      heroVideo:
        "https://videos.pexels.com/video-files/6586286/6586286-uhd_2560_1440_30fps.mp4",
      heroImage:
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857272/Silver_Cascade_Close_up_1_w9ozrw.jpg",
      moodBoardImages: [
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857272/Silver_Cascade_Close_up_1_w9ozrw.jpg",
      ],
      conceptVideo: null,
      skuCount: 10,
      finishTypes: ["polished", "honed"],
    },

    "serenity": {
      name: "Introducing the Serenity Collection",
      tagline: "Luxury Without Limits",
      description:
        "The Serenity Collection is designed to calm and inspire. With soft hues and graceful patterns, it transforms any environment into a sanctuary of balance and understated luxury.",
      heroVideo:
        "https://videos.pexels.com/video-files/5087355/5087355-hd_1920_1080_25fps.mp4",
      heroImage:
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857266/Tiara_Brown_Close_up_izue54.jpg",
      moodBoardImages: [
        "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857266/Tiara_Brown_Close_up_izue54.jpg",
      ],
      conceptVideo:
        "https://videos.pexels.com/video-files/3015535/3015535-hd_1920_1080_24fps.mp4",
      skuCount: 12,
      finishTypes: ["polished", "honed"],
    },
  };

  // Main useEffect for collection validation and product filtering
  useEffect(() => {
    // Check if collection is valid
    if (!collectionMetadata[collection]) {
      setIsValidCollection(false);
      return;
    }

    // Set collection data
    setCollectionData(collectionMetadata[collection]);

    // Filter products by collection - handle both direct collection match and slug match
    const filteredProducts = products.filter((product) => {
      const productCollectionSlug = product.collection.toLowerCase().replace(/\s+/g, '-');
      return productCollectionSlug === collection || product.collection === collection;
    });

    setCollectionProducts(filteredProducts);
    setIsValidCollection(true);
  }, [collection]);

  // Mobile detection useEffect
  // useEffect(() => {
  //   const checkIsMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkIsMobile();
  //   window.addEventListener('resize', checkIsMobile);

  //   return () => {
  //     window.removeEventListener('resize', checkIsMobile);
  //   };
  // }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("product-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle invalid collection
  if (!isValidCollection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested collection does not exist.</p>
          <button
            className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            onClick={() => window.location.href = '/'}
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection
        collection={collectionData}
        onBrowseProducts={scrollToProducts}
        onGetQuote={() => console.log("Get Quote clicked")}
      />

      {/* Collection Story Section */}
      <div data-light-bg>
        <CollectionStory collection={collectionData} />
      </div>

      {/* Product Showcase Section */}
      {/* <section className="py-12 md:py-20 bg-[#e0c9b1]" id="product-grid">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-thin lg:mb-6">
            {collectionData.name?.slice(16) || "Collection Products"}
          </h2>
        </motion.div>

        <ProductShowcase products={collectionProducts} />

        {collectionProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No products found in this collection.</p>
          </div>
        )}
      </section> */}


      {/* ScrollProduct */}
      <ScrollStack collection={collectionData} products={collectionProducts} />

      {/* Product Carousel Section */}
      <div data-light-bg>
        <ProductGrid
          products={collectionProducts}
          title={`Explore ${collectionData.name?.slice(16) || "Collection"} Products`}
          showNewBadge={false}
        />
        {/* Video Section */}
        {/* <section className="py-6 md:py-10 " id="video">
          <Video collection={collectionData} />
        </section> */}
        {/* Explore Other Collections Section */}
        <section className="py-6 md:py-10 pb-12 md:pb-20" id="explore">
          <ExploreCollections
            currentCollection={collection}
            allCollections={collectionMetadata}
          />
        </section>
      </div>




      {/* Design Applications Section */}
      {/* <DesignApplications
        collection={collectionData}
        products={collectionProducts}
      /> */}

      {/* Technical Specifications Section */}
      {/* <TechnicalSpecs
        collection={collectionData}
        products={collectionProducts}
      /> */}

      {/* Modern SKU Showcase Section */}
      {/* <ModernSKUShowcase
        products={collectionProducts}
        collection={collectionData}
      /> */}


    </div>
  );
};

export default CollectionPage;