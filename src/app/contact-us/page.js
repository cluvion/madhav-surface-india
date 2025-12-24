// contact/page.jsx (Server Component)
import ContactForm from '@/components/ContactForm'
import Heading from '@/components/heading'
import Faq from '@/components/faq'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Image from 'next/image';
import Section from '@/components/section'
import { generateMetadata as generateSEOMetadata, pageMetadata } from "@/lib/seo";

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
    <section className="">
      {/* <HeroHeader forceScrolled={true} /> */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dljiyumfx/image/upload/v1757604548/DSC_5128_copy_wmw0zo.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            fill
          />
          {/* Optional overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>
        </div>

        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            className="heading font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white"
          >
            Let&apos;s Connect
          </h1>
        </div>
      </section>
      <div data-light-bg>
        <div className="container max-w-7xl mx-auto px-6 relative z-2 pt-12 md:pt-20">
          <Heading
            title="Get in Touch"
            text="Whether you have a question about our services or need support, our teams are ready to help you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-6 md:pb-10">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6">
              <ContactForm />
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Location */}
              <div className=" border border-black rounded-2xl p-5 hover:border-n-5 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-n-6 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-color-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-n-1">Location</h3>
                </div>
                <a
                  href="https://www.google.com/maps?q=Madhav+Surface"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-n-4 hover:text-color-1 transition-colors block text-sm"
                >
                  Plot No: 3695, CR. No. 1354403, Po Box 374, PC 322, Sohar free zone, Sohar, Sultanate of Oman
                </a>
              </div>

              {/* Contact */}
              <div className="bg-n-8 border border-n-6 rounded-2xl p-6 hover:border-n-5 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-n-6 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-color-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-n-1">Contact</h3>
                </div>
                <div className="space-y-2">
                  <a href="tel:+968 9486 6789" className="text-n-4 hover:text-color-1 transition-colors block text-sm">
                    +968 9486 6789
                  </a>
                  <a href="mailto:info@madhavquartz.com" className="text-n-4 hover:text-color-1 transition-colors block text-sm">
                    info@madhavquartz.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-n-8 border border-n-6 rounded-2xl p-6 hover:border-n-5 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-n-6 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-color-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-n-1">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-n-4 text-sm">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-3 space-y-6">
              <div className="h-[300px] rounded-2xl overflow-hidden border border-n-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6023889463595!2d56.54603774969641!3d24.464576622125804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b458849b268b7%3A0x7811764c9d45cd3c!2sMadhav%20Surfaces!5e0!3m2!1sen!2sin!4v1754583698051!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <Section className=" py-6 pb-12 md:py-10 md:pb-20">
            <Heading
              title="FAQ"
              text="Everything You Need to Know About Skyville"
            />
            <Faq />
          </Section>
        </div>
      </div>

    </section>
  )
}

export default Contact