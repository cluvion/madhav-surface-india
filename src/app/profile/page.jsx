"use client";
import Section from '@/components/section'
import Image from 'next/image';
import PageHeader from '@/components/pageheader'
import Carousel from '@/components/page/Carousel'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

    const technologyImages = [
        {
            id: 2,
            image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/05%20ok.webp",
        },
        {
            id: 7,
            image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/11%20HHH%20(5).webp",
        },
        {
            id: 8,
            image: "https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/DJI_0025.webp",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden">

            {/* <PageHeader title="Profile" path="Profile" src="/assets/Step7.png" /> */}

{/* New Hero Section */}
            <div className="relative min-h-[90vh] w-full flex items-center justify-start bg-gray-100 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/05%20ok.webp"
                        alt="Warehouse"
                        fill
                        className="object-cover"
                        priority
                    />
                     {/* Optional overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/80"></div>
                </div>
                {/* Overlay card */}
                <div className="relative z-10 w-full max-w-2xl bg-[#f8f7f2] p-8 md:p-16 md:ml-12 lg:ml-24 shadow-2xl mt-24">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                        THE MADHAV STORY
                    </span>
                    <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                        Since 1989.<br/>Still moving forward.
                    </h1>
                    <p className="text-foreground/70 text-base md:text-lg mb-8 leading-relaxed">
                        What began with a belief in the potential of Indian natural stone has grown into a manufacturing and export business serving customers across global markets.
                    </p>
                    <p className="text-primary font-bold text-xs uppercase tracking-wider mb-8">
                        From India. Ready for the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#0b5e47] hover:bg-[#0b5e47]/90 text-white rounded-none px-8 py-6 uppercase tracking-wider font-semibold text-xs">
                            EXPLORE OUR CAPABILITIES
                        </Button>
                        <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 rounded-none px-8 py-6 uppercase tracking-wider font-semibold text-xs">
                            WATCH OUR FILM
                        </Button>
                    </div>
                </div>
                {/* Discover Our Story */}
                <div className="absolute bottom-8 right-8 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    DISCOVER OUR STORY <span className="text-lg">↓</span>
                </div>
            </div>

            <Section>
                {/* Who We Are Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 pt-20">
                    {/* Left: Image */}
                    <div className="relative w-full h-[600px] bg-gray-200">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/DJI_0025.webp"
                            alt="Quarry Operations"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute -bottom-6 right-0 bg-[#f8f7f2] p-4 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                            INSIDE OUR STONE OPERATIONS
                        </div>
                    </div>
                    {/* Right: Text */}
                    <div className="lg:pl-8">
                        <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                            WHO WE ARE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                            Experience reveals the stone.<br/>Discipline defines the result.
                        </h2>
                        <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                            <p>
                                Established in 1989 as a 100% Export-Oriented Unit, Madhav Marbles and Granites Limited is an Indian processor and exporter of granite, marble and selected natural stones.
                            </p>
                            <p>
                                Every block is naturally different. The standards applied to its selection, processing and presentation should not be. From first evaluation to final packing, our work combines material judgement, production discipline and clear communication.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Link href="#technology" className="text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary/80 hover:border-primary/80 transition-colors">
                                SEE HOW WE WORK
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Technology Section Grid */}
                <div id="technology" className="mb-32">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                        THE WORK BEHIND THE SURFACE
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
                        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground" style={{ fontFamily: "serif" }}>
                            Technology provides control.<br/>Experience provides judgement.
                        </h2>
                        <div className="flex items-end">
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-md">
                                Natural stone cannot be manufactured into uniformity. It must be understood, strengthened and finished with respect for its individual character.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border/50 bg-[#f8f7f2]">
                        {/* Grid items */}
                        {[
                            { num: "01", title: "Selection", desc: "Blocks are evaluated for colour, structure, movement and intended application." },
                            { num: "02", title: "Cutting", desc: "Selected blocks are transformed into slabs, cutter slabs and tile formats." },
                            { num: "03", title: "Strengthening", desc: "Resin and reinforcement processes improve stability while respecting the stone." },
                            { num: "04", title: "Finishing", desc: "Polishing, flaming and specialised treatments shape the final surface." },
                            { num: "05", title: "Calibration", desc: "Thickness and dimensions are controlled for consistent installation." },
                            { num: "06", title: "Inspection", desc: "Finished material is reviewed, documented and prepared for dispatch." },
                        ].map((step, index) => (
                            <div key={index} className="border-r border-b border-border/50 p-8 md:p-12 hover:bg-white transition-colors group">
                                <span className="text-primary font-bold text-xs mb-12 block">{step.num}</span>
                                <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors" style={{ fontFamily: "serif" }}>{step.title}</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Text Section */}
                {/* <div className="text-center md:text-left">
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
                </div> */}



                {/* State of the art Italian Machines Table */}
                <div className="mt-12 md:mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                        State of the art Italian Machines
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-foreground/20 text-sm md:text-base">
                            <tbody>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Wire Dressing Machines</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">M-590 Black Cutter</td>
                                </tr>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Gargsaws</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">M-530 Black Cutter</td>
                                </tr>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Edge Trimming Machine</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Calibration Machine</td>
                                </tr>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Slab Polishing Lines</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Resining Machine</td>
                                </tr>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Resin Line Epoxy Line</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Grinding &amp; Polishing Machine</td>
                                </tr>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Bridge Milling Machine</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Tile Resin Plast</td>
                                </tr>
                                <tr>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium">Flaming Machine</td>
                                    <td className="border border-foreground/20 px-4 py-3 text-foreground font-medium"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Serving the World Table */}
                <div className="mt-12 md:mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                        SERVING THE WORLD:
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-foreground/20 text-sm md:text-base">
                            <tbody>
                                {[
                                    ["Albania", "Lebanon", "South Africa"],
                                    ["Algeria", "Puerto Rico", "United States of America"],
                                    ["Hungary", "Cyprus", "Germany"],
                                    ["Argentina", "Libya", "Netherlands"],
                                    ["Indonesia", "Romania", "Spain"],
                                    ["Australia", "Czech", "Uruguay"],
                                    ["Iran", "Lithuania", "Celebrattag-31"],
                                    ["Austria", "Russia", "Hong Kong"],
                                    ["Italy", "Switzerland", "New Zealand"],
                                    ["Bahamas", "Denmark", "Sweden"],
                                    ["Jordan", "Macedonia", "Vietnam"],
                                    ["Bulgaria", "Serbia", ""],
                                    ["Belgium", "Trinidad & Tobago", ""],
                                    ["Japan", "Egypt", ""],
                                    ["Bosnia & Herzegovina", "Malaysia", ""],
                                    ["Kenya", "Singapore", ""],
                                    ["Nigeria Oman", "Turkey", ""],
                                    ["Cameroon", "Estonia", ""],
                                    ["Kosovo", "Maldives", ""],
                                    ["Palestine", "Slovakia", ""],
                                    ["Canada", "UAE", ""],
                                    ["Kuwait", "Finland", ""],
                                    ["Poland", "Montenegro", ""],
                                    ["Colombia", "Slovenia", ""],
                                    ["Latvia", "UK", ""],
                                    ["Portugal", "France", ""],
                                    ["Croatia", "Morocco", ""],
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="border border-foreground/20 px-4 py-2 text-foreground font-medium w-1/3">{row[0]}</td>
                                        <td className="border border-foreground/20 px-4 py-2 text-foreground font-medium w-1/3">{row[1]}</td>
                                        <td className="border border-foreground/20 px-4 py-2 text-foreground font-medium w-1/3">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                {/* <div className="mt-8 md:mt-16">
                    <Carousel images={images} />
                </div> */}

                {/* Technology Section */}
                <div  className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-foreground/10">
                    <div className="text-center md:text-left">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="mr-2 text-lg text-primary">¬</span> GLOBAL OPERATIONS
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground max-w-4xl">
                            Supplying the World with India&apos;s Finest Stone Surfaces
                        </h2>
                        <div className="flex flex-col space-y-6 mt-8 text-foreground/50 text-sm md:text-base leading-relaxed max-w-5xl">
                            <p>
                                From raw geological mastery to refined architectural surfaces, <strong>Madhav Marbles &amp; Granites Ltd.</strong> bridges the gap between India&apos;s rich quarry reserves and top-tier construction projects across the globe.
                            </p>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2"><span className="text-primary text-2xl">🏭</span> High-Capacity, World-Class Manufacturing</h3>
                                <p className="mb-3">Powered by an annual production capacity of <strong>600,000 m²</strong>, our processing plants feature elite Italian machinery engineered for precision cutting and flawless finishes:</p>
                                <ul className="space-y-2 ml-2 md:ml-4">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <p className="mt-1"><strong className="text-foreground">Slab Processing:</strong> 6 Gaspari Gangsaws, 2 Breton Polishing Lines, Maema Flaming Technology, and Advanced Resin Lines.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <p className="mt-1"><strong className="text-foreground">Tile Processing:</strong> 6 Pedrini Block Cutters, 2 Pedrini Polishing Lines, and Dedicated Resin Systems.</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2"><span className="text-primary text-2xl">📍</span> Strategic Proximity to Raw Materials</h3>
                                <p>
                                    Location is our greatest advantage. Situated in <strong>Udaipur (Rajasthan)</strong>—in the immediate vicinity of world-famous Green Marble reserves—and <strong>Salem (Tamil Nadu)</strong> for granite, our dual manufacturing hubs give us direct, priority access to high-grade raw blocks.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2"><span className="text-primary text-2xl">🌎</span> World-Class Distribution &amp; Frictionless Logistics</h3>
                                <p className="mb-3">We proudly supply premium stone across major international markets:</p>
                                <ul className="space-y-2 ml-2 md:ml-4">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <p className="mt-1"><strong className="text-foreground">North &amp; South America | Canada | Europe | Australia | South Africa | Russia &amp; Beyond.</strong></p>
                                    </li>
                                </ul>
                                <p className="mt-6">
                                    <strong className="text-foreground">The Madhav Promise:</strong> Our client-first team guarantees proactive communication, zero logistics delays, and seamless execution on every container shipment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Table 1: Granite Tile Plant */}
                            <div className="bg-white/5 border border-border/50 rounded-2xl p-6 shadow-sm">
                                <div className="border-b border-border/50 pb-4 mb-4">
                                    <h3 className="heading text-2xl text-foreground font-medium flex items-center">
                                        <span className="w-1.5 h-6 bg-primary mr-3 rounded-full"></span>
                                        Our Granite Tile Plant
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-foreground/70 border-b border-border/50 text-sm tracking-wider uppercase">
                                                <th className="py-4 px-2 font-medium">Equipment Type</th>
                                                <th className="py-4 px-2 font-medium">Company</th>
                                                <th className="py-4 px-2 font-medium text-center">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-foreground/90 divide-y divide-border/30">
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">M-590 Block Cutter</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">3</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">M-580 Block Cutter</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">4</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Calibration Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Resining Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Grinding & Polishing Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Tile Resin Plant</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Table 2: Granite Slab Plant */}
                            <div className="bg-white/5 border border-border/50 rounded-2xl p-6 shadow-sm">
                                <div className="border-b border-border/50 pb-4 mb-4">
                                    <h3 className="heading text-2xl text-foreground font-medium flex items-center">
                                        <span className="w-1.5 h-6 bg-primary mr-3 rounded-full"></span>
                                        Our Granite Slab Plant
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-foreground/70 border-b border-border/50 text-sm tracking-wider uppercase">
                                                <th className="py-4 px-2 font-medium">Equipment Type</th>
                                                <th className="py-4 px-2 font-medium">Company</th>
                                                <th className="py-4 px-2 font-medium text-center">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-foreground/90 divide-y divide-border/30">
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Wire Dressing Machines</td>
                                                <td className="py-4 px-2 text-foreground/70">bidese impianti</td>
                                                <td className="py-4 px-2 text-center font-bold">3</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Gangsaws</td>
                                                <td className="py-4 px-2 text-foreground/70">GASPARI MENOTTI</td>
                                                <td className="py-4 px-2 text-center font-bold">6</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Edge Trimming Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">Pedrini</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Slab Polishing Lines</td>
                                                <td className="py-4 px-2 text-foreground/70">breton</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Resin Line ( Epoxy Line)</td>
                                                <td className="py-4 px-2 text-foreground/70">S.E.I.</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Bridge Milling Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">GMM</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Flaming Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">maema</td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Carousel Section */}
                    <div className="relative mt-8 md:mt-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                            {technologyImages.map((image) => (
                                <div key={image.id} className="relative aspect-square w-full">
                                    <Image
                                        src={image.image}
                                        alt={`Image ${image.id}`}
                                        fill
                                        className="object-cover grayscale"
                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Corporate Film Section */}
                <div id="corporate-film" className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-foreground/10">
                    <div className="container mx-auto px-4 md:px-6 mb-12">
                         <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                             <span className="mr-2 text-lg text-primary">¬</span> MADHAV MARBLES & GRANITES : THE ART & SCIENCE OF NATURAL STONE
                         </span>
                         <h2 className="heading font-thin text-[1.6rem] md:text-[3rem] leading-[1.1] mb-6 max-w-4xl text-foreground">
                             Where Geological Majesty Meets Italian Engineering.
                         </h2>
                         <p className="text-foreground/80 mb-8 text-base md:text-lg max-w-4xl text-justify">
                             Take a behind-the-scenes journey into the heart of India&apos;s premier stone manufacturing powerhouse. Our Corporate Film unveils the journey of raw, unyielding earth transformed into high-grade slabs and tiles exported across 40+ countries.
                         </p>
                         
                         <h3 className="text-xl font-bold mb-4 text-foreground">What You&apos;ll Experience in the Film:</h3>
                         <ul className="space-y-4 text-foreground/80 text-sm md:text-base max-w-4xl mb-12">
                             <li className="flex items-start">
                                 <span className="mr-3 text-lg">⛏️</span>
                                 <p className="mt-1"><strong className="text-foreground">Direct Quarry Extraction:</strong> Sourcing raw metamorphosed granite from South India and world-famous Green Marble from Udaipur.</p>
                             </li>
                             <li className="flex items-start">
                                 <span className="mr-3 text-lg">⚙️</span>
                                 <p className="mt-1"><strong className="text-foreground">State-of-the-Art Processing:</strong> High-speed Gaspari Gang-Saws, Breton polishing lines, and Pedrini tile systems in action.</p>
                             </li>
                             <li className="flex items-start">
                                 <span className="mr-3 text-lg">🛡️</span>
                                 <p className="mt-1"><strong className="text-foreground">Uncompromising Quality Control:</strong> Rigorous testing for density, stain resistance, gloss level, and slab integrity.</p>
                             </li>
                             <li className="flex items-start">
                                 <span className="mr-3 text-lg">🌐</span>
                                 <p className="mt-1"><strong className="text-foreground">Global Distribution:</strong> Seamless packaging and container shipping to North America, Europe, Australia, and beyond.</p>
                             </li>
                         </ul>
                     </div>

                    <div className="flex items-center justify-center container mx-auto px-4 md:px-6">
                        <div className="w-full md:w-4/5 lg:w-2/3 aspect-video overflow-hidden rounded-xl shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/0rNFT79ossE?si=kyASiZhDNgtZIPX8"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

            </Section>
        </div>
    )
}

export default Profile;