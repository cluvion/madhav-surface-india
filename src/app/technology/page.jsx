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

export default function Technology() {

    const images = [
        {
            id: 1,
            image: "/assets/Step4.png",
        },
        {
            id: 2,
            image: "/assets/Step5.png",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden">

            <PageHeader title="Technology" path="Technology" src="/assets/Step7.png" />

            <Section>
                {/* Top Text Section */}
                <div className="text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> GLOBAL OPERATIONS
                    </span>
                    <h2 className="text-[1.6rem] md:text-[4rem] leading-[1.1] font-bold text-black max-w-4xl">
                        Supplying the World with
                        <span className="text-primary "> India&apos;s Finest Stone Surfaces</span>
                    </h2>
                    <div className="flex flex-col space-y-4 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed">
                        <p>
                            We have an annual installed capacity of 6,00,000 square meters consisting of 6 Gaspari Ganagsaws, 2 Breton Polishing lines, Maema Flaming machine and Resin Line for Slabs. 6 Padrini Block Cutters, 2 Pedrini Polishing Lines, Pedrini Resin Line for Tiles.
                        </p>
                        <p>
                            The Marble Division operates from Udaipur (Rajasthan) closest to world famous green marble quarries.
                        </p>
                        <p>
                            The tactical and geographical location of the plants ensure close proximity to the raw materials, Potential to procure good quality raw material has always been one of the prime focus of the company.
                        </p>
                        <p>
                            The company exports its products to North America, South America, Canada, Europe, Australia, South Africa, Russia, and other places.
                        </p>
                        <p>
                            Our team of professionals take client relationship as their top priority which ensures the absence of delays and issues are resolved promptly.
                        </p>
                    </div>
                </div>

                {/* Project Carousel Section */}
                <div className="relative mt-8 md:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {images.map((image) => (
                            <div key={image.id} className="relative aspect-square w-full">
                                <Image
                                    src={image.image}
                                    alt={`Image ${image.id}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                </div>

            </Section>
        </div>
    )
}
