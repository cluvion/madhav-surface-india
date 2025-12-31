"use client";
import Section from '@/components/section'
import Image from 'next/image';
import PageHeader from '@/components/pageheader'
import Carousel from '@/components/page/Carousel'

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

const Profile = () => {

    const images = [
        {
            id: 1,
            image: "/assets/Step4.png",
        },
        {
            id: 2,
            image: "/assets/Step5.png",
        },
        {
            id: 3,
            image: "/assets/Step6.png",
        },
        {
            id: 4,
            image: "/assets/Step4.png",
        },
        {
            id: 5,
            image: "/assets/Step7.png",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Profile" path="Profile" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> OUR LEGACY
                    </span>
                    <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-3xl">
                        Crafting Excellence in
                        <span className="text-primary "> Stone Since 1989</span>
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8">
                        <p className="text-foreground/50 text-sm md:text-base leading-relaxed">
                            Incorporated in the year 1989 as a 100% Export Oriented Unit, Madhav Marble & Granite Ltd. is a leading processor and exporter of premium quality granite and marble.
                            The company operates its Granite Division from South India (Salem, Tamil Nadu). The Region known for its rich reserves of metamorphosed granite. In conformity with its commitment to excellence, the company has installed the most sophisticated and environment-friendly granite processing machinery imported from Italy. We have another facility in North India Udaipur for Marble, Sandstone, Slates. This is the most famous place known for its ample source of Green Marble.
                        </p>
                        <p className="text-foreground/50 text-sm md:text-base leading-relaxed">
                            We have an annual installed capacity of 6,00,000 square meters consisting of 6 Gaspari Gang-saws, 2 Breton Polishing lines, Maema Flaming machine and Resin Line for Slabs. 6 Pedrini BlockCutters, 2 Pedrini Polihing Lines, Pedrini Resin Line for Tiles. The Marble Division is located in Udaipur (Rajasthan) closest to world famous green marble quarries.
                            The tactical and geographical location of both the plants ensure close proximity to the raw materials, Potential to procure good quality raw material has always been one of the prime focus of the company. The company exports its products to North America, South America, Canada, Europe, Australia, South Africa, Russia, and Far East.
                        </p>
                        <p className="text-foreground/50 text-sm md:text-base leading-relaxed">
                            Our team of professionals take client relationship as their top priority which ensures the absence of delays and issues are resolved promptly.</p>
                    </div>
                </div>

                {/* Project Carousel Section */}
                <div className="mt-8 md:mt-16">
                    <Carousel images={images} />
                </div>

            </Section>
        </div>
    )
}

export default Profile;