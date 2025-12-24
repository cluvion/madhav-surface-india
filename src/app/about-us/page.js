'use client';

import AboutHero from "@/components/about-new/AboutHero";
import AboutIntro from "@/components/about-new/AboutIntro";
import MassiveStats from "@/components/about-new/MassiveStats";
import AboutProcess from "@/components/about-new/AboutProcess";
import AboutAwards from "@/components/about-new/AboutAwards";
import AboutTestimonials from "@/components/about-new/AboutTestimonials";
import AboutFooter from "@/components/about-new/AboutFooter";

const AboutPage = () => {
  return (
    <div className="">
      <AboutHero />
      <AboutIntro />
      <MassiveStats />
      <AboutProcess />
      <AboutAwards />
      <AboutTestimonials />
      <AboutFooter />
    </div>
  );
};

export default AboutPage;