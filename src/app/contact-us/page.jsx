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
  { day: 'Monday - Sunday', hours: 'Open · Closes 7:00 PM' }
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
        {/* Top Text Section */}
        <div className="pt-16 md:pt-24 pb-8 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
            <div>
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                CONTACT MADHAV
              </span>
              <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                Let&apos;s begin with the material.
              </h2>
              <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                <p>
                  Share the stone, format, finish, quantity and destination you have in mind. Our team will help you review suitable materials, current availability and the next steps—clearly and directly.
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground pt-2">
                  PROJECTS · DISTRIBUTION PROGRAMMES · CONTAINER REQUIREMENTS
                </p>
              </div>
            </div>

            <div className="bg-[#f8f7f2] p-8 md:p-12 shadow-sm border border-border/30 rounded-lg flex flex-col sm:flex-row gap-12 justify-between items-start">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Enquiries</h3>
                <div>
                  <a href="tel:+918875023456" className="text-primary font-medium block hover:underline text-lg">+91 88750 23456</a>
                  <a href="mailto:madhav@madhavmarbles.com" className="text-foreground/70 text-sm block hover:text-foreground transition-colors mt-1">madhav@madhavmarbles.com</a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Address</h3>
                <p className="text-foreground/70 text-sm leading-relaxed max-w-[200px]">
                  Check, post, Thoppur, Thoppur T.Kanigarahalli, Tamil Nadu 636352
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
              src="/images/contact.jpeg" // Placeholder - adjust as needed
              alt="Marble Showroom"
              fill
              className="object-cover object-right"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-4xl">
            Frequently Asked Questions
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