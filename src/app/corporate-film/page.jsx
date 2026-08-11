
import Section from '@/components/section'
import PageHeader from '@/components/pageheader'

// export const metadata = generateSEOMetadata({
//     title: pageMetadata.profile.title,
//     description: pageMetadata.profile.description,
//     keywords: pageMetadata.profile.keywords,
//     url: "/profile",
//     type: "website"
// });

export default function Technology() {

    return (
        <div className="overflow-hidden">

            <PageHeader title="Corporate Film" path="Corporate Film" src="/assets/Step7.png" />

            <Section>
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
            </Section>
        </div>
    )
}
