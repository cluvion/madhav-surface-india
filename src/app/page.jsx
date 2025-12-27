import HeroSection from "@/components/home-new/HeroSection";
import AboutSection from "@/components/home-new/AboutSection";
import ServicesSection from "@/components/home-new/ServicesSection";
import StatsSection from "@/components/home-new/StatsSection";
import ProcessSection from "@/components/home-new/ProcessSection";
import CollectionSection from "@/components/home-new/CollectionSection";
import ProjectsSection from "@/components/home-new/ProjectsSection";
// import CtaSection from "@/components/home-new/CtaSection";
import TestimonialsSection from "@/components/home-new/TestimonialsSection";
import AwardsSection from "@/components/home-new/AwardsSection";
import ContactSection from "@/components/home-new/ContactSection";
import BlogSection from "@/components/home-new/BlogSection";
import ProductSection from "@/components/home-new/ProductSection";

import { generateMetadata as generateSEOMetadata, pageMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  url: "/",
  type: "website"
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <StatsSection />
      <ProcessSection />
      <CollectionSection />
      {/* <ProjectsSection /> */}
      <ProductSection />
      <TestimonialsSection />
      <AwardsSection />
      <ContactSection />
      <BlogSection />
      {/* <NewFooter /> */}
    </>
  );
}
