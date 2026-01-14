"use client";
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'
import CtaSection from '@/components/page/CtaSection';
import Image from "next/image";

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function Coverings2023Event() {

    return (
        <div className="overflow-hidden">
            <PageHeader title="News & Events" path="News & Events" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <div className="relative mb-8 overflow-hidden shadow-lg border border-neutral-200">
                        <Image
                            src="/assets/news.png"
                            alt="Coverings 2023 Banner"
                            width={1000}
                            height={1000}
                            className="object-contain w-full h-full"
                            priority
                        />
                    </div>
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> COVERINGS 2023
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground max-w-5xl">
                        Madhav Surfaces Gears Up for Coverings 2023, Orlando
                        {/* <span className="text-primary "> Orlando</span> */}
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed text-justify">
                        <p>Coverings 2023 is set to become the largest international trade show for professionals in the stone and tile industry, attracting an expected audience of over 20,000 experts. This four-day event will offer attendees a unique opportunity to connect, learn, and showcase the latest products and services. Participants will include manufacturers, distributors, retailers, architects, designers, builders, contractors, journalists, reporters, and bloggers, all looking to explore the latest trends and technologies in the ceramic tile, natural stone, and quartz surface industry.</p>
                        <p>The event is scheduled to take place from April 18th to April 21st, 2023, at the Orange County Convention Center in Orlando, Florida. With over 1,000 exhibitors from more than 40 countries, Coverings 2023 promises to be an exciting event for professionals in the building and construction industry. Attendees will have access to various onsite amenities, including food and beverage options.</p>

                        <h3 className="heading font-thin text-xl md:text-3xl text-foreground pt-4">Are You Attending Coverings?</h3>
                        <p>If you plan on attending Coverings 2023, you&apos;ll want to book your accommodation as soon as possible. Several hotels are available near the convention center, including the <a className="text-primary" href="https://www.hyatt.com/en-US/hotel/florida/hyatt-regency-orlando/mcoro" target="_blank" rel="noopener"><strong>Hyatt Regency Orlando</strong></a>, <a className="text-primary" href="https://www.rosencentre.com/" target="_blank" rel="noopener"><strong>Rosen Centre Hotel</strong></a>, and <a className="text-primary" href="https://thehiltonorlando.com/" target="_blank" rel="noopener"><strong>Hilton Orlando</strong></a>, all offering modern amenities such as Wi-Fi, fitness centers, and shuttle services to the convention center.</p>

                        <p>Coverings 2023 offers attendees a wealth of opportunities to explore new trends, technologies, and techniques in the stone and tile industry. The event will feature educational seminars, product showcases, and networking events, designed to provide attendees with valuable insights into the industry&apos;s latest trends and best practices. Special programs will equip attendees with information, knowledge, techniques, and skills that will enable them to promote tile and stone as the preferred building material over other alternatives.</p>

                        <h3 className="heading font-thin text-xl md:text-3xl text-foreground pt-4">Madhav Marbles to Unveil Major Announcements During Coverings 2023</h3>
                        <p>Madhav Marble and Granite Ltd. is a well-established natural stone surface industry with over 35 years of experience and a stellar reputation as a leading exporter of premium products. The company prides itself on its acquisition of highly advanced and environment-friendly granite processing equipment. Moreover, our company operates its Granite Division located in Salem, Tamil Nadu, in South India. This region is renowned for its abundant reserves of metamorphosed granite. Within this division, we meticulously process a diverse selection of natural stones, such as <a className="text-primary" href="https://www.madhavmarbles.com/manufacturer-of-granite-india/"><strong>granite</strong></a>, <a className="text-primary" href="https://www.madhavmarbles.com/marble-sandstone-quartzite-exporter-supplier/"><strong>marble</strong></a>, sandstone, and slates.
                        </p>
                        <p>
                            In addition to natural stones, our industry is committed to delivering superior-quality <a className="text-primary" href="https://madhavquartz.com/products/"><strong>Quartz surfaces</strong></a> by leveraging state-of-the-art manufacturing facilities. As a distinguished manufacturer and exporter of natural stone and quartz surfaces, we are excited to establish connections with major players in the industry and anticipate forging new business associations with industry experts.
                        </p>

                        <p>If you’re associated with the stone and tile industry, Coverings 2023 is an event you won’t want to miss. With ample networking opportunities, the event offers an unparalleled opportunity to learn, connect, and showcase your latest products and services. Register for free at Coverings.com to learn more about the latest innovations and new product announcements at <a className="text-primary" href="https://www.coverings.com/attend-coverings/" target="_blank" rel="noopener"><strong>Coverings 2023</strong></a>.</p>
                    </div>
                </div>
            </Section>
            <CtaSection />
        </div>
    )
}
