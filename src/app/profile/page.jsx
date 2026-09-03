"use client";
import React, { useState } from 'react';
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
    const [activeRegion, setActiveRegion] = useState('Europe');

    const regionsData = [
        {
            name: "Americas",
            countries: ["Argentina", "Bahamas", "Canada", "Colombia", "Puerto Rico", "Trinidad & Tobago", "United States of America", "Uruguay"]
        },
        {
            name: "Europe",
            countries: ["Albania", "Austria", "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Hungary", "Italy", "Kosovo", "Latvia", "Lithuania", "Montenegro", "Netherlands", "North Macedonia", "Poland", "Portugal", "Romania", "Russia", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "United Kingdom"]
        },
        {
            name: "Middle East",
            countries: ["Iran", "Jordan", "Kuwait", "Lebanon", "Oman", "Palestine", "UAE"]
        },
        {
            name: "Africa",
            countries: ["Algeria", "Cameroon", "Egypt", "Kenya", "Libya", "Morocco", "Nigeria", "South Africa"]
        },
        {
            name: "Asia",
            countries: ["Hong Kong", "Indonesia", "Japan", "Malaysia", "Maldives", "Singapore", "Vietnam"]
        },
        {
            name: "Oceania",
            countries: ["Australia", "New Zealand"]
        }
    ];

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
                <div id="technology" className="mb-32 scroll-mt-24 md:scroll-mt-32">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                        TECHNOLOGY & MANUFACTURING
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
                        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground" style={{ fontFamily: "serif" }}>
                            Precision is built<br/>into the process.
                        </h2>
                        <div className="flex items-end">
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-md">
                                The character comes from nature. Control comes from what happens next. Specialised Italian systems support each stage of cutting, reinforcement, calibration, finishing and inspection.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border/50 bg-[#f8f7f2]">
                        {/* Grid items */}
                        {[
                            { num: "01", title: "Block Preparation", desc: "Blocks are evaluated for colour, structure, movement and intended application." },
                            { num: "02", title: "Precision Cutting", desc: "Selected blocks are transformed into slabs, cutter slabs and tile formats." },
                            { num: "03", title: "Resin & Reinforcement", desc: "Resin and reinforcement processes improve stability while respecting the stone." },
                            { num: "04", title: "Calibration", desc: "Thickness and dimensions are controlled for consistent installation." },
                            { num: "05", title: "Surface Finishing", desc: "Polishing, flaming and specialised treatments shape the final surface." },
                            { num: "06", title: "Final Inspection", desc: "Finished material is reviewed, documented and prepared for dispatch." },
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



                {/* Removed old machinery table */}

                {/* Global Reach Section */}
                <div className="mt-24 md:mt-32 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Left Side: Title and Stats */}
                        <div>
                            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                                GLOBAL REACH
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                                Across markets.<br/>Close to customers.
                            </h2>
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-12">
                                Since 1989, Madhav has supplied Indian natural stone to customers, programmes and projects across international markets.
                            </p>
                            
                            <div className="flex flex-col mb-12">
                                <span className="text-7xl md:text-8xl font-light text-primary leading-none mb-2">65</span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">International Markets</span>
                            </div>

                            <Button className="bg-[#0b5e47] hover:bg-[#0b5e47]/90 text-white rounded-none px-8 py-6 uppercase tracking-wider font-semibold text-xs hidden md:inline-flex">
                                EXPLORE OUR GLOBAL EXPERIENCE
                            </Button>
                        </div>
                        
                        {/* Right Side: Interactive Region Selector */}
                        <div className="flex flex-col bg-[#f8f7f2] p-8 md:p-12 shadow-sm border border-border/30 rounded-lg">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8 text-center md:text-left">
                                AMERICAS · EUROPE · MIDDLE EAST · AFRICA · ASIA · OCEANIA
                            </h3>

                            {/* Desktop/Tablet Tabs */}
                            <div className="hidden md:flex flex-wrap gap-x-6 gap-y-4 mb-8 border-b border-border/50 pb-2">
                                {regionsData.map((region) => (
                                    <button 
                                        key={region.name}
                                        onClick={() => setActiveRegion(region.name)}
                                        className={`text-xs font-bold uppercase tracking-widest pb-2 relative transition-colors ${activeRegion === region.name ? 'text-primary' : 'text-foreground/50 hover:text-foreground'}`}
                                    >
                                        {region.name}
                                        {activeRegion === region.name && (
                                            <span className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-primary"></span>
                                        )}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Desktop/Tablet Content */}
                            <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
                                {regionsData.find(r => r.name === activeRegion)?.countries.map(country => (
                                    <div key={country} className="text-sm text-foreground/80 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-70"></span>
                                        {country}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Accordion */}
                            <div className="md:hidden flex flex-col space-y-2">
                                {regionsData.map((region) => (
                                    <div key={region.name} className="border border-border/50 bg-white rounded-md overflow-hidden">
                                        <button 
                                            onClick={() => setActiveRegion(activeRegion === region.name ? '' : region.name)}
                                            className="w-full flex justify-between items-center text-left font-bold text-xs uppercase tracking-widest p-4 bg-[#f8f7f2] hover:bg-white transition-colors"
                                        >
                                            <span className={activeRegion === region.name ? 'text-primary' : 'text-foreground'}>{region.name}</span>
                                            <span className={`text-primary text-lg font-light transition-transform duration-300 ${activeRegion === region.name ? 'rotate-45' : ''}`}>
                                                +
                                            </span>
                                        </button>
                                        
                                        <div className={`transition-all duration-300 ease-in-out ${activeRegion === region.name ? 'max-h-[1000px] opacity-100 p-4 border-t border-border/20' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                            <div className="grid grid-cols-2 gap-3">
                                                {region.countries.map(country => (
                                                    <div key={country} className="text-xs text-foreground/80 flex items-start mt-1">
                                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1 flex-shrink-0 opacity-70"></span>
                                                        <span className="leading-snug">{country}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button className="bg-[#0b5e47] hover:bg-[#0b5e47]/90 text-white rounded-none px-6 py-5 uppercase tracking-wider font-semibold text-xs mt-8 w-full md:hidden">
                                EXPLORE OUR GLOBAL EXPERIENCE
                            </Button>
                        </div>
                    </div>
                </div>



                {/* <div className="mt-8 md:mt-16">
                    <Carousel images={images} />
                </div> */}

                {/* Equipment Section */}
                <div className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-foreground/10">
                    <div className="text-center md:text-left mb-16">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="mr-2 text-lg text-primary">¬</span> OUR EQUIPMENT
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[3.5rem] leading-[1.1] text-foreground max-w-4xl">
                            Technology selected for the task.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Slab Processing Panel */}
                        <div className="group border border-border/50 bg-[#f8f7f2] rounded-lg overflow-hidden flex flex-col">
                            <div className="relative h-[300px] w-full overflow-hidden">
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/05%20ok.webp" 
                                    alt="Slab Processing" 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                            <div className="p-8 md:p-12 flex-grow">
                                <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "serif" }}>Slab Processing</h3>
                                <ul className="space-y-4 text-sm md:text-base text-foreground/80">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Gaspari Menotti Gangsaws</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Breton Polishing Lines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Bidese Impianti Wire Dressing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Advanced Resin Lines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Maema Flaming Technology</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Tile Processing Panel */}
                        <div className="group border border-border/50 bg-[#f8f7f2] rounded-lg overflow-hidden flex flex-col">
                            <div className="relative h-[300px] w-full overflow-hidden">
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/technology/11%20HHH%20(5).webp" 
                                    alt="Tile Processing" 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                            <div className="p-8 md:p-12 flex-grow">
                                <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "serif" }}>Tile Processing</h3>
                                <ul className="space-y-4 text-sm md:text-base text-foreground/80">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Pedrini Block Cutters</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Pedrini Polishing Lines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Precision Calibration Machines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-3 text-lg">■</span>
                                        <span>Dedicated Resining Systems</span>
                                    </li>
                                </ul>
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
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">3</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">M-580 Block Cutter</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">4</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Calibration Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Resining Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Grinding & Polishing Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Tile Resin Plant</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
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
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/bidese-impianti.png" alt="bidese impianti" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">3</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Gangsaws</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/gaspari-menotti.png" alt="GASPARI MENOTTI" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">6</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Edge Trimming Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/PEDRINI.png" alt="Pedrini" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Slab Polishing Lines</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/breton.png" alt="breton" width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Resin Line ( Epoxy Line)</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/SEI.png" alt="S.E.I." width={100} height={30} className="object-contain h-12 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Bridge Milling Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">GMM</td>
                                                <td className="py-4 px-2 text-center font-bold">2</td>
                                            </tr>
                                            <tr className="hover:bg-muted/30 transition-colors">
                                                <td className="py-4 px-2 font-medium">Flaming Machine</td>
                                                <td className="py-4 px-2 text-foreground/70">
                                                    <Image src="/assets/profile-logo/maema.png" alt="maema" width={100} height={30} className="object-contain h-8 w-auto" />
                                                </td>
                                                <td className="py-4 px-2 text-center font-bold">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-20 md:mt-32 text-center max-w-3xl mx-auto flex flex-col items-center">
                        <h3 className="text-3xl md:text-5xl font-medium leading-[1.2] text-foreground mb-10" style={{ fontFamily: "serif" }}>
                            Machines provide precision.<br/>
                            <span className="text-foreground/70">People provide judgement.</span>
                        </h3>
                        <Link href="#corporate-film">
                            <Button className="bg-[#0b5e47] hover:bg-[#0b5e47]/90 text-white rounded-none px-8 py-6 uppercase tracking-wider font-semibold text-xs transition-transform hover:-translate-y-1">
                                SEE HOW WE WORK
                            </Button>
                        </Link>
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

                {/* Corporate Film Section */}
                <div id="corporate-film" className="mb-32 scroll-mt-24 md:scroll-mt-32 pt-16 md:pt-24 mt-16 md:mt-24 border-t border-border/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
                        <div>
                            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                                MADHAV MARBLES & GRANITES : THE ART & SCIENCE OF NATURAL STONE
                            </span>
                            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-foreground mb-8" style={{ fontFamily: "serif" }}>
                                Where Geological Majesty Meets Italian Engineering.
                            </h2>
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                                Take a behind-the-scenes journey into the heart of India&apos;s premier stone manufacturing powerhouse. Our Corporate Film unveils the journey of raw, unyielding earth transformed into high-grade slabs and tiles exported across 40+ countries.
                            </p>
                        </div>
                        
                        <div className="bg-[#f8f7f2] p-8 md:p-12 shadow-sm border border-border/30 rounded-lg">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8">
                                What You&apos;ll Experience in the Film
                            </h3>
                            <ul className="space-y-6 text-foreground/80 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">Direct Quarry Extraction</strong> Sourcing raw metamorphosed granite from South India and world-famous Green Marble from Udaipur.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">State-of-the-Art Processing</strong> High-speed Gaspari Gang-Saws, Breton polishing lines, and Pedrini tile systems in action.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">Uncompromising Quality Control</strong> Rigorous testing for density, stain resistance, gloss level, and slab integrity.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 opacity-70"></span>
                                    <p className="leading-relaxed"><strong className="text-foreground block mb-1">Global Distribution</strong> Seamless packaging and container shipping to North America, Europe, Australia, and beyond.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full aspect-video overflow-hidden shadow-sm border border-border/30 rounded-lg">
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

            </Section>
        </div>
    )
}

export default Profile;