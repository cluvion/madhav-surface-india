// contact/page.jsx (Server Component)
import ContactForm from '@/components/ContactForm'
import Heading from '@/components/heading'
import Faq from '@/components/faq'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Image from 'next/image';
import Section from '@/components/section'
import { generateMetadata as generateSEOMetadata, pageMetadata } from "@/lib/seo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MapSection from '@/components/MapSection'


export const metadata = generateSEOMetadata({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  url: "/contact-us",
  type: "website"
});
const businessHours = [
  { day: 'Monday - Thursday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Friday', hours: 'Holiday' },
  { day: 'Saturday - Sunday', hours: '9:00 AM - 6:00 PM' }
]

const Contact = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header Section */}
      <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Step7.png"
            alt="Background"
            className="w-full h-full object-cover"
            fill
          />
          {/* Optional overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6 space-y-4">
          <h1
            className="heading font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white"
          >
            Contact Us
          </h1>
          <div className="flex justify-center">
            <Breadcrumb>
              <BreadcrumbList className="text-background/60">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-background transition-colors">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-background/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-background font-medium">Contact Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <Section>
        {/* Top Text Section */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
            <span className="mr-2 text-lg text-primary">¬</span> GET IN TOUCH
          </span>
          <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-4xl">
            Need Any
            <span className="text-primary "> Marble & Tiles Services Help?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-16 mt-8">
            <p className="text-foreground/50 text-sm md:text-base max-w-xl leading-relaxed">
              From the moment marble emerges from the earth&apos;s embrace, it begins a journey of transformation guided by our innovative techniques and the skilled hands of our artisans who carefully transform the raw stone into exquisite pieces.
            </p>
            <div className="flex flex-col w-full justify-end sm:flex-row gap-6 sm:gap-12">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Support</h3>
                <a href="tel:+91" className="text-[#BFA065] font-medium block hover:underline text-lg">+91 8875023456</a>
                <a href="mailto:madhav@madhavmarbles.com" className="text-foreground/50 text-sm block hover:text-foreground transition-colors">madhav@madhavmarbles.com</a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
                <p className="text-foreground/50 text-sm md:max-w-[200px]">
                  1st Floor, Mumal Towers, 16 Saheli Marg, Udaipur 313001, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mt-9 md:mt-18">
          {/* Left Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto h-full min-h-[400px] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/assets/Step5.png" // Placeholder - adjust as needed
              alt="Marble Showroom"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Right Form */}
          <div className="flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <Section>
        <div className="text-center md:text-left">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
            <span className="mr-2 text-lg text-primary">¬</span> HAVE ANY QUESTIONS?
          </span>
          <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-4xl">
            Frequently
            <span className="text-primary"> Asked Questions</span>
          </h2>
        </div>
        <div className="mt-4 md:mt-8">
          <Faq />
        </div>
      </Section>
    </div>
  )
}

export default Contact