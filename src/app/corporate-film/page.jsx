
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
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-2/3 aspect-video overflow-hidden">
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
