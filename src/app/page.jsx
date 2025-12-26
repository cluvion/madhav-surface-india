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
import NewFooter from "@/components/home-new/NewFooter";

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
      <ServicesSection />
      <StatsSection />
      {/* <ProcessSection /> */}
      <CollectionSection />
      {/* <ProjectsSection /> */}

      {/* Visual Break / CTA Section */}
      <section className="bg-white py-20 text-center md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="heading mb-8 text-5xl md:text-7xl lg:text-8xl">
            Ready To Start?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-500">
            Transform your space with the timeless elegance of natural stone. Let's discuss your vision and bring it to life.
          </p>
          <button className="rounded-none bg-black px-10 py-8 text-lg text-white hover:bg-primary hover:text-black transition-colors">
            Get A Quote
          </button>
        </div>
      </section>

      <TestimonialsSection />
      <AwardsSection />
      <ContactSection />
      <BlogSection />
      {/* <NewFooter /> */}
    </>
  );
}
