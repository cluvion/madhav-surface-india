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
            image: "/assets/profile/1-12-600x400.jpg",
        },
        {
            id: 3,
            image: "/assets/profile/2-10-600x400.jpg",
        },
        {
            id: 4,
            image: "/assets/profile/3-8-600x400.jpg",
        },
        {
            id: 5,
            image: "/assets/profile/4-4-600x400.jpg",
        },
        {
            id: 6,
            image: "/assets/profile/5-6-600x400.jpg",
        },
        {
            id: 7,
            image: "/assets/profile/6-2-600x400.jpg",
        },
        {
            id: 8,
            image: "/assets/profile/7-1-600x400.jpg",
        },
        {
            id: 9,
            image: "/assets/profile/8-1-600x400.jpg",
        }
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
                    <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground max-w-4xl">
                        Crafting Earth&apos;s Finest Stones Since 1989
                    </h2>
                    <div className="flex flex-col space-y-6 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed max-w-5xl">
                        <p>
                            Established as a <strong>100% Export-Oriented Unit, Madhav Marbles &amp; Granite Ltd.</strong> has spent over three decades mastering the art of natural stone processing. From the mineral-rich heartlands of India to luxury spaces around the globe, we bring raw natural beauty to life through precision, passion, and sustainable technology.
                        </p>
                        
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">Dual-Hub Strategic Advantage</h3>
                            <p className="mb-3">We operate two state-of-the-art facilities positioned right at the source of India&apos;s most prized natural quarries:</p>
                            <ul className="space-y-2 ml-2 md:ml-4">
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">🏛️</span>
                                    <p className="mt-1"><strong className="text-foreground">Granite Division (Salem, Tamil Nadu):</strong> Located in South India&apos;s renowned metamorphosed granite belt, equipped with eco-friendly, cutting-edge Italian technology.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">🍃</span>
                                    <p className="mt-1"><strong className="text-foreground">Marble &amp; Slate Division (Udaipur, Rajasthan):</strong> Positioned near the world&apos;s most celebrated Green Marble reserves in North India.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">World-Class Production &amp; Engineering Capacity</h3>
                            <p className="mb-3">With an annual production capacity exceeding <strong>600,000 square meters</strong>, our facilities feature industry-leading machinery:</p>
                            <ul className="space-y-2 ml-2 md:ml-4">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 text-lg">■</span>
                                    <p className="mt-1"><strong className="text-foreground">Slab Processing:</strong> 6 Gaspari Gang-Saws, 2 Breton Polishing Lines, Maema Flaming Machines, and Advanced Resin Lines.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 text-lg">■</span>
                                    <p className="mt-1"><strong className="text-foreground">Tile Processing:</strong> 6 Pedrini Block Cutters, 2 Pedrini Polishing Lines, and Dedicated Resin Systems.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">Global Reach, Personal Touch</h3>
                            <p>
                                Exporting to over 40 countries across <strong>North &amp; South America, Europe, Australia, South Africa, Russia, and the Far East</strong>, we combine massive global scale with dedicated personal service. Our client-first team ensures seamless communication, zero delivery friction, and rapid issue resolution every step of the way.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-24 text-center md:text-left">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="mr-2 text-lg text-primary">¬</span> OUR COMMITMENT TO EXCELLENCE
                    </span>
                    <h2 className="heading font-thin text-[1.6rem] md:text-[3rem] leading-[1.1] text-foreground max-w-4xl">
                        Setting the Global Gold Standard in Natural Stone Since 1989
                    </h2>
                    <div className="flex flex-col space-y-6 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed max-w-5xl">
                        <p>
                            From day one, <strong>Madhav Marbles &amp; Granites Ltd.</strong> was built with a singular vision: to bring India&apos;s finest natural stone to the world. Operating as a <strong>100% Export-Oriented Unit since 1989</strong>, we don&apos;t just supply stone—we elevate architectural possibilities.
                        </p>
                        
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">Why Leading Global Partners Trust Us:</h3>
                            <ul className="space-y-4 ml-2 md:ml-4">
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">💎</span>
                                    <p className="mt-1"><strong className="text-foreground">Uncompromised Quality:</strong> Sourced from rich mineral reserves and processed using advanced technology, every slab meets international perfection.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">🤝</span>
                                    <p className="mt-1"><strong className="text-foreground">Client-First Philosophy:</strong> We build long-term relationships through total transparency, reliable timelines, and dedicated support.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">⚙️</span>
                                    <p className="mt-1"><strong className="text-foreground">Seamless Operations:</strong> From quarry extraction to international delivery, our streamlined processes guarantee an effortless buyer experience.</p>
                                </li>
                            </ul>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-foreground text-lg text-left">
                            &quot;Driven by relentless professionalism, we are proud to stand among India&apos;s premier processors and exporters of luxury Granite and Marble.&quot;
                        </blockquote>
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